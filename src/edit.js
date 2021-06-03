/**
 * WordPress dependencits
 */
import { __ } from "@wordpress/i18n";
import { Toolbar, ToolbarButton } from "@wordpress/components";
import {
	BlockControls,
	AlignmentToolbar,
	useBlockProps,
} from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";

/**
 * Editor CSS
 */
import "./editor.scss";

/*
 * Internal dependencies
 */
import { getFlipTransform } from "../util/helpers";
import Inspector from "./inspector";
import {
	dimensionsMargin,
	dimensionsPadding,
	buttonPadding,
	frontIconMargin,
	frontIconPadding,
	backIconMargin,
	backIconPadding,
} from "./constants/dimensionsNames";
import {
	typoPrefix_title,
	typoPrefix_content,
} from "./constants/typographyPrefixConstants";

import {
	flipboxBackWrapper,
	flipboxFrontWrapper,
} from "./constants/backgroundsConstants";

import {
	boxHeightAttr,
	boxFrontIconSizeAttr,
	boxBackIconSizeAttr,
	boxWidthAttr,
	buttonIconSizeAttr,
	frontImgSizeAttr,
	backImgSizeAttr,
	frontImgRadiusAttr,
	backImgRadiusAttr,
} from "./constants/rangeNames";
import {
	borderShadow,
	borderShadowBtn,
	borderShadowFrontIcon,
	borderShadowBackIcon,
} from "./constants/borderShadowConstants";
import {
	softMinifyCssStrings,
	isCssExists,
	generateTypographyStyles,
	generateDimensionsControlStyles,
	generateResponsiveRangeStyles,
	generateBackgroundControlStyles,
	generateBorderShadowStyles,
} from "../util/helpers";

function Edit(props) {
	const getImageAlign = (align) => {
		switch (align) {
			case "left":
				return "flex-start";
			case "right":
				return "flex-end";
			default:
				return "center";
		}
	};

	const { isSelected, attributes, setAttributes, clientId } = props;
	const {
		blockId,
		blockMeta,
		// responsive control attribute ⬇
		resOption,
		isHover,
		flipType,
		selectedSide,
		frontIconOrImage,
		frontIcon,
		frontImageUrl,
		backIconOrImage,
		backIcon,
		backImageUrl,
		showFrontTitle,
		frontTitle,
		showFrontContent,
		frontContent,
		showBackTitle,
		backTitle,
		showBackContent,
		backContent,
		frontImageSize,
		backImageSize,
		linkType,
		buttonText,
		buttonIcon,
		buttonIconPos,
		link,
		frontTitleColor,
		backTitleColor,
		frontContentColor,
		backContentColor,
		frontImageRadius,
		backImageRadius,
		frontIconColor,
		backIconColor,
		buttonStyle,
		buttonClasses,
		buttonBackground,
		buttonColor,
		frontIconBackground,
		backIconBackground,
		transitionSpeed,
		displayButtonIcon,
		align,
	} = attributes;

	// Default colors
	const deafultFrontTitleColor = "#ffffff";
	const defaultFrontContentColor = "#ffffff";
	const defautlBackContentColor = "#ffffff";
	const defaultBackTitleColor = "#ffffff";
	const defaultFrontIconBackground = "transparent";
	const defaultBackIconBackground = "transparent";

	// wrapper styles css in strings ⬇
	const {
		dimensionStylesDesktop: wrapperMarginStylesDesktop,
		dimensionStylesTab: wrapperMarginStylesTab,
		dimensionStylesMobile: wrapperMarginStylesMobile,
	} = generateDimensionsControlStyles({
		controlName: dimensionsMargin,
		styleFor: "margin",
		attributes,
	});

	const {
		dimensionStylesDesktop: wrapperPaddingStylesDesktop,
		dimensionStylesTab: wrapperPaddingStylesTab,
		dimensionStylesMobile: wrapperPaddingStylesMobile,
	} = generateDimensionsControlStyles({
		controlName: dimensionsPadding,
		styleFor: "padding",
		attributes,
	});
	// wrapper border & shadow settings
	const {
		styesDesktop: bdShadowStyesDesktop,
		styesTab: bdShadowStyesTab,
		styesMobile: bdShadowStyesMobile,
		stylesHoverDesktop: bdShadowStylesHoverDesktop,
		stylesHoverTab: bdShadowStylesHoverTab,
		stylesHoverMobile: bdShadowStylesHoverMobile,
	} = generateBorderShadowStyles({
		controlName: borderShadow,
		attributes,
	});

	// responsive range controller
	const {
		rangeStylesDesktop: wrapperHeightStylesDesktop,
		rangeStylesTab: wrapperHeightStylesTab,
		rangeStylesMobile: wrapperHeightStylesMobile,
	} = generateResponsiveRangeStyles({
		controlName: boxHeightAttr,
		property: "height",
		attributes,
	});

	const {
		rangeStylesDesktop: wrapperMinHeightStylesDesktop,
		rangeStylesTab: wrapperMinHeightStylesTab,
		rangeStylesMobile: wrapperMinHeightStylesMobile,
	} = generateResponsiveRangeStyles({
		controlName: boxHeightAttr,
		property: "min-height",
		attributes,
	});

	const {
		rangeStylesDesktop: wrapperWidthStylesDesktop,
		rangeStylesTab: wrapperWidthStylesTab,
		rangeStylesMobile: wrapperWidthStylesMobile,
	} = generateResponsiveRangeStyles({
		controlName: boxWidthAttr,
		property: "max-width",
		attributes,
	});

	const {
		rangeStylesDesktop: frontFontSizeDesktop,
		rangeStylesTab: frontFontSizeTab,
		rangeStylesMobile: frontFontSizeMobile,
	} = generateResponsiveRangeStyles({
		controlName: boxFrontIconSizeAttr,
		property: "font-size",
		attributes,
	});

	const {
		rangeStylesDesktop: backFontSizeDesktop,
		rangeStylesTab: backFontSizeTab,
		rangeStylesMobile: backFontSizeMobile,
	} = generateResponsiveRangeStyles({
		controlName: boxBackIconSizeAttr,
		property: "font-size",
		attributes,
	});

	// front background controller
	const {
		backgroundStylesDesktop: frontBackgroundStylesDesktop,
		backgroundStylesTab: frontBackgroundStylesTab,
		backgroundStylesMobile: frontBackgroundStylesMobile,
		overlyStyles: frontOverlayStyles,
	} = generateBackgroundControlStyles({
		attributes,
		controlName: flipboxFrontWrapper,
	});

	// front Icon Margin & Padding
	const {
		dimensionStylesDesktop: frontIconMarginStylesDesktop,
		dimensionStylesTab: frontIconMarginStylesTab,
		dimensionStylesMobile: frontIconMarginStylesMobile,
	} = generateDimensionsControlStyles({
		controlName: frontIconMargin,
		styleFor: "margin",
		attributes,
	});

	const {
		dimensionStylesDesktop: frontIconPaddingStylesDesktop,
		dimensionStylesTab: frontIconPaddingStylesTab,
		dimensionStylesMobile: frontIconPaddingStylesMobile,
	} = generateDimensionsControlStyles({
		controlName: frontIconPadding,
		styleFor: "padding",
		attributes,
	});

	// front icon border
	const {
		styesDesktop: frontIconBorderDesktop,
		styesTab: frontIconBorderTab,
		styesMobile: frontIconBorderMobile,
		stylesHoverDesktop: frontIconBorderHoverDesktop,
		stylesHoverTab: frontIconBorderHoverTab,
		stylesHoverMobile: frontIconBorderHoverMobile,
	} = generateBorderShadowStyles({
		controlName: borderShadowFrontIcon,
		attributes,
		noShadow: true,
	});

	// front image
	const {
		rangeStylesDesktop: frontImgHeightDesktop,
		rangeStylesTab: frontImgHeightTab,
		rangeStylesMobile: frontImgHeightMobile,
	} = generateResponsiveRangeStyles({
		controlName: frontImgSizeAttr,
		property: "height",
		attributes,
	});

	const {
		rangeStylesDesktop: frontImgWidthDesktop,
		rangeStylesTab: frontImgWidthTab,
		rangeStylesMobile: frontImgWidthMobile,
	} = generateResponsiveRangeStyles({
		controlName: frontImgSizeAttr,
		property: "width",
		attributes,
	});

	const {
		rangeStylesDesktop: frontImgRadiusDesktop,
		rangeStylesTab: frontImgRadiusTab,
		rangeStylesMobile: frontImgRadiusMobile,
	} = generateResponsiveRangeStyles({
		controlName: frontImgRadiusAttr,
		property: "border-radius",
		attributes,
	});

	// back background controller
	const {
		backgroundStylesDesktop: backBackgroundStylesDesktop,
		backgroundStylesTab: backBackgroundStylesTab,
		backgroundStylesMobile: backBackgroundStylesMobile,
		overlyStyles: backOverlayStyles,
	} = generateBackgroundControlStyles({
		attributes,
		controlName: flipboxBackWrapper,
	});

	const {
		typoStylesDesktop: titleTypoStylesDesktop,
		typoStylesTab: titleTypoStylesTab,
		typoStylesMobile: titleTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_title,
	});

	const {
		typoStylesDesktop: contentTypoStylesDesktop,
		typoStylesTab: contentTypoStylesTab,
		typoStylesMobile: contentTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_content,
	});

	// back Icon Margin & Padding
	const {
		dimensionStylesDesktop: backIconMarginStylesDesktop,
		dimensionStylesTab: backIconMarginStylesTab,
		dimensionStylesMobile: backIconMarginStylesMobile,
	} = generateDimensionsControlStyles({
		controlName: backIconMargin,
		styleFor: "margin",
		attributes,
	});

	const {
		dimensionStylesDesktop: backIconPaddingStylesDesktop,
		dimensionStylesTab: backIconPaddingStylesTab,
		dimensionStylesMobile: backIconPaddingStylesMobile,
	} = generateDimensionsControlStyles({
		controlName: backIconPadding,
		styleFor: "padding",
		attributes,
	});

	// back icon border
	const {
		styesDesktop: backIconBorderDesktop,
		styesTab: backIconBorderTab,
		styesMobile: backIconBorderMobile,
		stylesHoverDesktop: backIconBorderHoverDesktop,
		stylesHoverTab: backIconBorderHoverTab,
		stylesHoverMobile: backIconBorderHoverMobile,
	} = generateBorderShadowStyles({
		controlName: borderShadowBackIcon,
		attributes,
		noShadow: true,
	});

	// back image
	const {
		rangeStylesDesktop: backImgHeightDesktop,
		rangeStylesTab: backImgHeightTab,
		rangeStylesMobile: backImgHeightMobile,
	} = generateResponsiveRangeStyles({
		controlName: backImgSizeAttr,
		property: "height",
		attributes,
	});

	const {
		rangeStylesDesktop: backImgWidthDesktop,
		rangeStylesTab: backImgWidthTab,
		rangeStylesMobile: backImgWidthMobile,
	} = generateResponsiveRangeStyles({
		controlName: backImgSizeAttr,
		property: "width",
		attributes,
	});

	const {
		rangeStylesDesktop: backImgRadiusDesktop,
		rangeStylesTab: backImgRadiusTab,
		rangeStylesMobile: backImgRadiusMobile,
	} = generateResponsiveRangeStyles({
		controlName: backImgRadiusAttr,
		property: "border-radius",
		attributes,
	});

	const flipContainerStyleDesktop = `
	 .eb-flipbox-container.${blockId}{
		 ${wrapperMarginStylesDesktop}
		 ${wrapperPaddingStylesDesktop}
		 ${wrapperHeightStylesDesktop}
		 ${wrapperWidthStylesDesktop}
		 width: 100%;
	 }
	 `;

	const flipContainerStyleTab = `
	 .eb-flipbox-container.${blockId}{
		 ${wrapperMarginStylesTab}
		 ${wrapperPaddingStylesTab}
		 ${wrapperHeightStylesTab}
		 ${wrapperWidthStylesTab}
	 }
	 `;

	const flipContainerStyleMobile = `
	 .eb-flipbox-container.${blockId}{
		 ${wrapperMarginStylesMobile}
		 ${wrapperPaddingStylesMobile}
		 ${wrapperHeightStylesMobile}
		 ${wrapperWidthStylesMobile}
	 }
	 `;

	// prefix title styles css in strings ⬇
	const titleStylesDesktop = `
	 .eb-flipbox-container.${blockId} .eb-flipbox-front-title, .eb-flipbox-container.${blockId} .eb-flipbox-back-title {
		 ${titleTypoStylesDesktop}
		 width: 100%;
		 text-align: ${align};
	 }
 
	 .eb-flipbox-container.${blockId} .eb-flipbox-front-title {
		 color: ${frontTitleColor || deafultFrontTitleColor};
	 }
 
	 .eb-flipbox-container.${blockId} .eb-flipbox-back-title {
		 color: ${backTitleColor || defaultBackTitleColor};
	 }
	 `;

	const titleStylesTab = `
	 .eb-flipbox-container.${blockId} .eb-flipbox-front-title, .eb-flipbox-container.${blockId} .eb-flipbox-back-title {
		 ${titleTypoStylesTab}
	 }
	 `;

	const titleStylesMobile = `
	 .eb-flipbox-container.${blockId} .eb-flipbox-front-title, .eb-flipbox-container.${blockId} .eb-flipbox-back-title {
		 ${titleTypoStylesMobile}
	 }
	 `;

	// prefix content styles css in strings ⬇
	const contentStylesDesktop = `
	 .eb-flipbox-container.${blockId} .eb-flipbox-front-content, .eb-flipbox-container.${blockId} .eb-flipbox-back-content {
		 ${contentTypoStylesDesktop}
		 width: 100%;
		 text-align: ${align};
		 margin: 10px 0;
	 }
 
	 .eb-flipbox-container.${blockId} .eb-flipbox-front-content {
		 color: ${frontContentColor || defaultFrontContentColor};
	 }
 
	 .eb-flipbox-container.${blockId} .eb-flipbox-back-content {
		 color: ${backContentColor || defautlBackContentColor};
	 }
	 `;

	const contentStylesTab = `
	 .eb-flipbox-container.${blockId} .eb-flipbox-front-content, .eb-flipbox-container.${blockId} .eb-flipbox-back-content {
		 ${contentTypoStylesTab}
	 }
	 `;

	const contentStylesMobile = `
	 .eb-flipbox-container.${blockId} .eb-flipbox-front-content, .eb-flipbox-container.${blockId} .eb-flipbox-back-content {
		 ${contentTypoStylesMobile}
	 }
	 `;

	// flipper style
	const flipperStyle = `
	 .eb-flipbox-container.${blockId} .eb-flipper {
		 transition: ${transitionSpeed ? transitionSpeed / 10 : 0.6}s
	 }
	 .eb-flipbox-container.${blockId} .eb-flipper.back-is-selected {
		 transform:
			  ${isHover || selectedSide === "back" ? getFlipTransform(flipType) : "none"};
	 }
	 `;

	const frontStyleDesktop = `
		.eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-front:before{
			${frontOverlayStyles}
		}
		
		.eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-front {
			${frontBackgroundStylesDesktop}
			${wrapperMinHeightStylesDesktop}
			${wrapperWidthStylesDesktop}
			${bdShadowStyesDesktop}
			display: flex;
			justify-content: center;
			align-items: center;
			height: auto;
			width: 100%;
			z-index: 1;
			transition: ${flipType === "fade" && "opacity 0.6s"};
		}
		
		.eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-front:hover {
			${bdShadowStylesHoverDesktop}
		}

		.eb-flipbox-container.${blockId} .eb-flipper.back-is-selected .eb-flipbox-front {
			opacity: ${(isHover || selectedSide === "front") && flipType === "fade" && 0};
		}
	 `;

	const frontStyleTab = `
		 .eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-front {
			${wrapperMinHeightStylesTab}
			${wrapperWidthStylesTab}
			${frontBackgroundStylesTab}
			${bdShadowStyesTab}
		 }

		 .eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-front:hover {
			${bdShadowStylesHoverTab}
		 }
	 `;

	const frontStyleMobile = `
		 .eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-front {
			 ${wrapperMinHeightStylesMobile}
			 ${wrapperWidthStylesMobile}
			${frontBackgroundStylesMobile}
			${bdShadowStyesMobile}
		 }

		 .eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-front {
			${bdShadowStylesHoverMobile}
		 }
	 `;

	const frontImageStyleDesktop = `
	 .eb-flipbox-container.${blockId} .eb-flipbox-front .eb-flipbox-front-image-container, .eb-flipbox-container.${blockId} .eb-flipbox-back .eb-flipbox-front-image-container {
		 align-self: ${getImageAlign(align)};
		 display: ${frontIconOrImage === "image" && frontImageUrl ? "block" : "none"};
	 }
 
	 .eb-flipbox-container.${blockId} .eb-flipbox-front .eb-flipbox-front-image-container img {
		 ${frontImgHeightDesktop}
		 ${frontImgWidthDesktop}
		 ${frontImgRadiusDesktop}
	 }
	 `;

	const frontImageStyleTab = `
	.eb-flipbox-container.${blockId} .eb-flipbox-front .eb-flipbox-front-image-container img {
		${frontImgHeightTab}
		 ${frontImgWidthTab}
		 ${frontImgRadiusTab}
	}
	`;

	const frontImageStyleMobile = `
	.eb-flipbox-container.${blockId} .eb-flipbox-front .eb-flipbox-front-image-container img {
		${frontImgHeightMobile}
		 ${frontImgWidthMobile}
		 ${frontImgRadiusMobile}
	}
	`;

	const frontIconStyleDesktop = `
		 .eb-flipbox-container.${blockId} .eb-flipbox-icon-front {
			 ${frontFontSizeDesktop}
			 ${frontIconMarginStylesDesktop}
			 ${frontIconPaddingStylesDesktop}
			 ${frontIconBorderDesktop}
			 color: ${frontIconColor || "#ffffff"};
			 background: ${frontIconBackground || defaultFrontIconBackground};
			 width: 100%;
			 text-align:${align};
			 display: ${frontIconOrImage === "icon" && frontIcon ? "block" : "none"};
		 }

		 .eb-flipbox-container.${blockId} .eb-flipbox-icon-front:hover {
			 ${frontIconBorderHoverDesktop}
		 }
	 `;

	const frontIconStyleTab = `
	 .eb-flipbox-container.${blockId} .eb-flipbox-icon-front {
		${frontFontSizeTab}
		${frontIconMarginStylesTab}
		${frontIconPaddingStylesTab}
		${frontIconBorderTab}
	 }

	 .eb-flipbox-container.${blockId} .eb-flipbox-icon-front:hover {
		${frontIconBorderHoverTab}
	}
	 `;

	const frontIconStyleMobile = `
	 .eb-flipbox-container.${blockId} .eb-flipbox-icon-front {
		${frontFontSizeMobile}
		${frontIconMarginStylesMobile}
		${frontIconPaddingStylesMobile}
		${frontIconBorderMobile}
	 }

	 .eb-flipbox-container.${blockId} .eb-flipbox-icon-front:hover {
		${frontIconBorderHoverMobile}
	}
	 `;

	const backStyleDesktop = `

	.eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-back:before{
		${backOverlayStyles}
	}

	 .eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-back {	
		${backBackgroundStylesDesktop}
		${wrapperMinHeightStylesDesktop}
		${wrapperWidthStylesDesktop}
		${bdShadowStyesDesktop}
		 display: flex;
		 flex-direction: column;
		 justify-content: center;
		 align-items: center;
		 height: auto;
		 width: 100%;
		 transform:  ${
				(flipType === "flip-up" && "rotateX(-180deg)") ||
				(flipType === "flip-bottom" && "rotateX(180deg)") ||
				((flipType === "zoom-in" ||
					flipType === "zoom-out" ||
					flipType === "fade") &&
					"none")
			};
		transition: ${flipType === "fade" && "opacity 0.6s"};
		 cursor: ${linkType === "box" && link ? "pointer" : "default"};
		 ${
				isHover && (flipType === "zoom-in" || flipType === "zoom-out")
					? "z-index: 5;"
					: ""
			}
	 }

	 .eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-back:hover {
		${bdShadowStylesHoverDesktop}
	 }

	 .eb-flipbox-container.${blockId} .eb-flipper.back-is-selected .eb-flipbox-back {
		opacity: ${(isHover || selectedSide === "back") && flipType === "fade" && 1};
	 }
	 
	 .eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-front,
	 .eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-back{
		position: absolute;
	 }


	 `;

	const backStyleTab = `
		 .eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-back {
			 ${wrapperMinHeightStylesTab}
			 ${wrapperWidthStylesTab}
			 ${backBackgroundStylesTab}
			 ${bdShadowStyesTab}
		 }

		 .eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-back:hover {
			${bdShadowStylesHoverTab}
		 }
	 `;

	const backStyleMobile = `
		 .eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-back {
			 ${wrapperMinHeightStylesMobile}
			 ${wrapperWidthStylesMobile}
			 ${backBackgroundStylesMobile}
			 ${bdShadowStyesMobile}
			 ${bdShadowStylesHoverMobile}
		 }

		 .eb-flipbox-container.${blockId} .eb-flipper .eb-flipbox-back:hover {
			${bdShadowStylesHoverMobile}
		 }
	 `;

	const backImageStyleDesktop = `
	 .eb-flipbox-container.${blockId} .eb-flipbox-back .eb-flipbox-back-image-container {
		 align-self: ${getImageAlign(align)};
		 display: ${backIconOrImage === "image" && backImageUrl ? "block" : "none"};
	 }
 
	 .eb-flipbox-container.${blockId} .eb-flipbox-back .eb-flipbox-back-image-container img {
		 ${backImgHeightDesktop}
		 ${backImgWidthDesktop}
		 ${backImgRadiusDesktop}
	 }
	 `;

	const backImageStyleTab = `
 
	 .eb-flipbox-container.${blockId} .eb-flipbox-back .eb-flipbox-back-image-container img {
		 ${backImgHeightTab}
		 ${backImgWidthTab}
		 ${backImgRadiusTab}
	 }
	 `;

	const backImageStyleMobile = `
 
	 .eb-flipbox-container.${blockId} .eb-flipbox-back .eb-flipbox-back-image-container img {
		 ${backImgHeightMobile}
		 ${backImgWidthMobile}
		 ${backImgRadiusMobile}
	 }
	 `;

	const backIconStyleDesktop = `
	 .eb-flipbox-container.${blockId} .eb-flipbox-icon-back {
		 ${backFontSizeDesktop}
		 ${backIconMarginStylesDesktop}
		 ${backIconPaddingStylesDesktop}
		 ${backIconBorderDesktop}
		 color: ${backIconColor || "#ffffff"};
		 background: ${backIconBackground || defaultBackIconBackground};
		 width: 100%;
		 text-align: ${align};
		 display: ${backIconOrImage === "icon" && backIcon ? "block" : "none"};
	 }

	 .eb-flipbox-container.${blockId} .eb-flipbox-icon-back:hover {
		 ${backIconBorderHoverDesktop}
	 }
	 `;

	const backIconStyleTab = `
	.eb-flipbox-container.${blockId} .eb-flipbox-icon-back {
		${backFontSizeTab}
		${backIconMarginStylesTab}
		${backIconPaddingStylesTab}
		${backIconBorderTab}
	}

	.eb-flipbox-container.${blockId} .eb-flipbox-icon-back:hover {
		${backIconBorderHoverTab}
	}
	`;

	const backIconStyleMobile = `
	.eb-flipbox-container.${blockId} .eb-flipbox-icon-back {
		${backFontSizeMobile}
		${backIconMarginStylesMobile}
		${backIconPaddingStylesMobile}
		${backIconBorderMobile}
	}

	.eb-flipbox-container.${blockId} .eb-flipbox-icon-back:hover {
		${backIconBorderHoverMobile}
	}
	`;

	let backButtonStyleDesktop,
		backButtonStyleTab,
		backButtonStyleMobile = "";
	if (buttonStyle === "custom") {
		const {
			dimensionStylesDesktop: buttonPaddingStylesDesktop,
			dimensionStylesTab: buttonPaddingStylesTab,
			dimensionStylesMobile: buttonPaddingStylesMobile,
		} = generateDimensionsControlStyles({
			controlName: buttonPadding,
			styleFor: "padding",
			attributes,
		});
		// border & shadow controller
		const {
			styesDesktop: btnBdShadowStyesDesktop,
			styesTab: btnBdShadowStyesTab,
			styesMobile: btnBdShadowStyesMobile,
			stylesHoverDesktop: btnBdShadowStylesHoverDesktop,
			stylesHoverTab: btnBdShadowStylesHoverTab,
			stylesHoverMobile: btnBdShadowStylesHoverMobile,
		} = generateBorderShadowStyles({
			controlName: borderShadowBtn,
			attributes,
		});
		// button size
		const {
			rangeStylesDesktop: buttonSizeDesktop,
			rangeStylesTab: buttonSizeTab,
			rangeStylesMobile: buttonSizeMobile,
		} = generateResponsiveRangeStyles({
			controlName: buttonIconSizeAttr,
			property: "width",
			attributes,
		});
		backButtonStyleDesktop = `
		 .eb-flipbox-container.${blockId} .eb-flipbox-button-container .eb-flipbox-button-link {
			 ${buttonPaddingStylesDesktop}
			 ${btnBdShadowStyesDesktop}
			 ${buttonSizeDesktop}
			 background: ${buttonBackground};
			 color: ${buttonColor};
		 }

		 .eb-flipbox-container.${blockId} .eb-flipbox-button-container .eb-flipbox-button-link:hover {
			 ${btnBdShadowStylesHoverDesktop}
		 }
 
		 .eb-flipbox-container.${blockId} .eb-flipbox-button-container .eb-flipbox-button-content {
			 display: flex;
			 flex-direction: ${buttonIconPos === "after" ? "row" : "row-reverse"};
			 justify-content: space-around;
		 }
 
		 .eb-flipbox-container.${blockId} .eb-flipbox-button-container .eb-flipbox-button-content .eb-flipbox-button-icon {
			 display: ${displayButtonIcon ? "block" : "none"};
		 }
		 `;

		backButtonStyleTab = `
		 .eb-flipbox-container.${blockId} .eb-flipbox-button-container .eb-flipbox-button-link {
			 ${buttonPaddingStylesTab}
			 ${btnBdShadowStyesTab}
			 ${buttonSizeTab}
		 }

		 .eb-flipbox-container.${blockId} .eb-flipbox-button-container .eb-flipbox-button-link:hover {
			${buttonPaddingStylesTab}
			${btnBdShadowStylesHoverTab}
		}
		 `;

		backButtonStyleMobile = `
		 .eb-flipbox-container.${blockId} .eb-flipbox-button-container .eb-flipbox-button-link {
			 ${buttonPaddingStylesMobile}
			 ${btnBdShadowStyesMobile}
			 ${buttonSizeMobile}
		 }

		 .eb-flipbox-container.${blockId} .eb-flipbox-button-container .eb-flipbox-button-link:hover {
			 ${btnBdShadowStylesHoverMobile}
		 }
		 `;
	}

	// all css styles for large screen width (desktop/laptop) in strings ⬇
	const desktopAllStyles = softMinifyCssStrings(`
		 ${isCssExists(flipContainerStyleDesktop) ? flipContainerStyleDesktop : " "}
		 ${isCssExists(titleStylesDesktop) ? titleStylesDesktop : " "}
		 ${isCssExists(contentStylesDesktop) ? contentStylesDesktop : " "}
		 ${isCssExists(flipperStyle) ? flipperStyle : " "}
		 ${isCssExists(frontStyleDesktop) ? frontStyleDesktop : " "}
		 ${isCssExists(frontImageStyleDesktop) ? frontImageStyleDesktop : " "}
		 ${isCssExists(frontIconStyleDesktop) ? frontIconStyleDesktop : " "}
		 ${isCssExists(backIconStyleDesktop) ? backIconStyleDesktop : " "}
		 ${isCssExists(backStyleDesktop) ? backStyleDesktop : " "}
		 ${isCssExists(backImageStyleDesktop) ? backImageStyleDesktop : " "}
		 ${isCssExists(backButtonStyleDesktop) ? backButtonStyleDesktop : " "}
	 `);

	// all css styles for Tab in strings ⬇
	const tabAllStyles = softMinifyCssStrings(`
		 ${isCssExists(flipContainerStyleTab) ? flipContainerStyleTab : " "}
		 ${isCssExists(titleStylesTab) ? titleStylesTab : " "}
		 ${isCssExists(contentStylesTab) ? contentStylesTab : " "}
		 ${isCssExists(backButtonStyleTab) ? backButtonStyleTab : " "}
		 ${isCssExists(frontStyleTab) ? frontStyleTab : " "}
		 ${isCssExists(backStyleTab) ? backStyleTab : " "}
		 ${isCssExists(frontIconStyleTab) ? frontIconStyleTab : " "}
		 ${isCssExists(backIconStyleTab) ? backIconStyleTab : " "}
		 ${isCssExists(frontImageStyleTab) ? frontImageStyleTab : " "}
		 ${isCssExists(backImageStyleTab) ? backImageStyleTab : " "}
	 `);

	// all css styles for Mobile in strings ⬇
	const mobileAllStyles = softMinifyCssStrings(`
		 ${isCssExists(flipContainerStyleMobile) ? flipContainerStyleMobile : " "}
		 ${isCssExists(titleStylesMobile) ? titleStylesMobile : " "}
		 ${isCssExists(contentStylesMobile) ? contentStylesMobile : " "}
		 ${isCssExists(backButtonStyleMobile) ? backButtonStyleMobile : " "}
		 ${isCssExists(frontStyleMobile) ? frontStyleMobile : " "}
		 ${isCssExists(backStyleMobile) ? backStyleMobile : " "}
		 ${isCssExists(frontIconStyleMobile) ? frontIconStyleMobile : " "}
		 ${isCssExists(backIconStyleMobile) ? backIconStyleMobile : " "}
		 ${isCssExists(frontImageStyleMobile) ? frontImageStyleMobile : " "}
		 ${isCssExists(backImageStyleMobile) ? backImageStyleMobile : " "}
	 `);
	// Set All Style in "blockMeta" Attribute
	useEffect(() => {
		const styleObject = {
			desktop: desktopAllStyles,
			tab: tabAllStyles,
			mobile: mobileAllStyles,
		};
		if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
			setAttributes({ blockMeta: styleObject });
		}
	}, [attributes]);

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class
	useEffect(() => {
		const bodyClasses = document.body.className;

		if (!/eb\-res\-option\-/i.test(bodyClasses)) {
			document.body.classList.add("eb-res-option-desktop");
			setAttributes({
				resOption: "desktop",
			});
		} else {
			const resOption = bodyClasses
				.match(/eb-res-option-[^\s]+/g)[0]
				.split("-")[3];
			setAttributes({ resOption });
		}
	}, []);

	// this useEffect is for creating an unique id for each block's unique className by a random unique number
	useEffect(() => {
		const BLOCK_PREFIX = "eb-flipbox";
		const unique_id =
			BLOCK_PREFIX + "-" + Math.random().toString(36).substr(2, 7);

		/**
		 * Define and Generate Unique Block ID
		 */
		if (!blockId) {
			setAttributes({ blockId: unique_id });
		}

		/**
		 * Assign New Unique ID when duplicate BlockId found
		 * Mostly happens when User Duplicate a Block
		 */
		const all_blocks = wp.data.select("core/block-editor").getBlocks();

		let duplicateFound = false;
		const fixDuplicateBlockId = (blocks) => {
			if (duplicateFound) return;
			for (const item of blocks) {
				const { innerBlocks } = item;
				if (item.attributes.blockId === blockId) {
					if (item.clientId !== clientId) {
						setAttributes({ blockId: unique_id });
						duplicateFound = true;
						return;
					} else if (innerBlocks.length > 0) {
						fixDuplicateBlockId(innerBlocks);
					}
				} else if (innerBlocks.length > 0) {
					fixDuplicateBlockId(innerBlocks);
				}
			}
		};

		fixDuplicateBlockId(all_blocks);
	}, []);

	const blockProps = useBlockProps({
		className: `eb-guten-block-main-parent-wrapper`,
	});

	return [
		isSelected && (
			<Inspector attributes={attributes} setAttributes={setAttributes} />
		),
		<BlockControls>
			<Toolbar>
				<ToolbarButton
					title="Front"
					icon="arrow-right-alt2"
					isActive={selectedSide === "front"}
					onClick={() => setAttributes({ selectedSide: "front" })}
				/>
				<ToolbarButton
					title="Back"
					icon="arrow-left-alt2"
					isActive={selectedSide === "back"}
					onClick={() => setAttributes({ selectedSide: "back" })}
				/>
			</Toolbar>
			<AlignmentToolbar
				value={align}
				onChange={(align) => setAttributes({ align })}
			/>
		</BlockControls>,
		// Edit view here
		<div {...blockProps}>
			<style>
				{`
				 ${desktopAllStyles}
 
				 /* mimmikcssStart */
 
				 ${resOption === "tab" ? tabAllStyles : " "}
				 ${resOption === "mobile" ? tabAllStyles + mobileAllStyles : " "}
 
				 /* mimmikcssEnd */
 
				 @media all and (max-width: 1024px) {	
 
					 /* tabcssStart */			
					 ${softMinifyCssStrings(tabAllStyles)}
					 /* tabcssEnd */			
				 
				 }
				 
				 @media all and (max-width: 767px) {
					 
					 /* mobcssStart */			
					 ${softMinifyCssStrings(mobileAllStyles)}
					 /* mobcssEnd */			
				 
				 }
				 `}
			</style>
			<div
				className={`eb-flipbox-container ${blockId}`}
				data-id={blockId}
				onMouseEnter={() => setAttributes({ isHover: true })}
				onMouseLeave={() => setAttributes({ isHover: false })}
			>
				<div
					className={`eb-flipper${
						isHover || selectedSide === "back" ? " back-is-selected" : ""
					}`}
				>
					<div className="eb-flipbox-front">
						<div className="eb-flipbox-items-container">
							{frontIconOrImage !== "none" && (
								<div className="eb-flipbox-icon-wrapper">
									{frontIconOrImage === "image" && frontImageUrl && (
										<div className="eb-flipbox-front-image-container">
											<img src={frontImageUrl} />
										</div>
									)}
									{frontIconOrImage === "icon" && frontIcon && (
										<div
											className="eb-flipbox-icon-front"
											data-icon={frontIcon}
										>
											<span className={frontIcon} />
										</div>
									)}
								</div>
							)}
							{showFrontTitle && (
								<div className="eb-flipbox-front-title-wrapper">
									{linkType === "title" && link ? (
										<a href={link ? link : "#"} className="title-link">
											<h3 className="eb-flipbox-front-title">{frontTitle}</h3>
										</a>
									) : (
										<h3 className="eb-flipbox-front-title">{frontTitle}</h3>
									)}
								</div>
							)}
							{showFrontContent && (
								<div className="eb-flipbox-front-content-wrapper">
									<p className="eb-flipbox-front-content">{frontContent}</p>
								</div>
							)}
						</div>
					</div>
					<div className="eb-flipbox-back">
						<div className="eb-flipbox-items-container">
							{backIconOrImage !== "none" && (
								<div className="eb-flipbox-icon-wrapper">
									{backIconOrImage === "image" && backImageUrl && (
										<div className="eb-flipbox-back-image-container">
											<img src={backImageUrl} />
										</div>
									)}
									{backIconOrImage === "icon" && backIcon && (
										<div className="eb-flipbox-icon-back" data-icon={backIcon}>
											<span className={backIcon} />
										</div>
									)}
								</div>
							)}
							{showBackTitle && (
								<div className="eb-flipbox-back-title-wrapper">
									{linkType === "title" && link ? (
										<a href={link ? link : "#"} className="title-link">
											<h3 className="eb-flipbox-back-title">{backTitle}</h3>
										</a>
									) : (
										<h3 className="eb-flipbox-back-title">{backTitle}</h3>
									)}
								</div>
							)}
							{showBackContent && (
								<div className="eb-flipbox-back-content-wrapper">
									<p className="eb-flipbox-back-content">{backContent}</p>
								</div>
							)}
							{linkType === "button" && (
								<div className="eb-flipbox-button-container">
									<a
										className={`eb-flipbox-button-link ${buttonClasses}`}
										href={link ? link : "#"}
									>
										<div className="eb-flipbox-button-content">
											<span>{buttonText}</span>
											<span
												className={`${
													buttonIcon ? "fa fa-" + buttonIcon + " " : ""
												}eb-flipbox-button-icon`}
											/>
										</div>
									</a>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>,
	];
}

export default Edit;
