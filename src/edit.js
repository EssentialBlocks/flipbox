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
import { getBackgroundImage, getFlipTransform } from "../util/helper";
import { DEFAULT_ICON_SIZE } from "./constants";
import Inspector from "./inspector";
import {
	dimensionsMargin,
	dimensionsPadding,
	buttonPadding,
} from "./dimensionsNames";
import {
	typoPrefix_title,
	typoPrefix_content,
} from "./typographyPrefixConstants";
import {
	boxHeightAttr
} from "./rangeNames";
import {
	softMinifyCssStrings,
	isCssExists,
	generateTypographyStyles,
	generateDimensionsControlStyles,
	generateResponsiveRangeStyles
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
		boxHeight,
		boxWidth,
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
		frontBackground,
		backBackground,
		borderStyle,
		borderColor,
		borderWidth,
		borderRadius,
		linkType,
		buttonText,
		buttonIcon,
		buttonIconPos,
		link,
		frontTitleColor,
		frontOpacityColor,
		backTitleColor,
		backOpacityColor,
		frontContentColor,
		backContentColor,
		frontImageRadius,
		backImageRadius,
		frontIconSize,
		backIconSize,
		frontIconColor,
		backIconColor,
		boxShadowColor,
		shadowVOffset,
		shadowHOffset,
		shadowSpread,
		shadowBlur,
		buttonStyle,
		buttonClasses,
		buttonBackground,
		buttonColor,
		buttonSize,
		buttonBorderSize,
		buttonBorderColor,
		buttonBorderType,
		buttonBorderRadius,
		btnShadowColor,
		btnShadowVOffset,
		btnShadowHOffset,
		btnShadowBlur,
		btnShadowSpread,
		frontIconBackground,
		frontIconPadding,
		frontIconBorderRadius,
		frontIconTopMargin,
		frontIconBorderSize,
		frontIconBorderType,
		frontIconBorderColor,
		backIconBackground,
		backIconPadding,
		backIconBorderRadius,
		backIconTopMargin,
		backIconBorderSize,
		backIconBorderType,
		backIconBorderColor,
		frontBackgroundType,
		frontBackgroundGradient,
		backBackgroundType,
		backBackgroundGradient,
		transitionSpeed,
		frontBackgroundImageURL,
		frontBackgroundPosition,
		frontBackgroundPosX,
		frontBackgroundPosXUnit,
		frontBackgroundPosY,
		frontBackgroundPosYUnit,
		frontBackgroundSize,
		frontBackgroundWidth,
		frontBackgroundWidthUnit,
		frontBackgroundRepeat,
		backBackgroundImageURL,
		backBackgroundPosition,
		backBackgroundPosX,
		backBackgroundPosXUnit,
		backBackgroundPosY,
		backBackgroundPosYUnit,
		backBackgroundSize,
		backBackgroundWidth,
		backBackgroundWidthUnit,
		backBackgroundRepeat,
		displayButtonIcon,
		align,
		radiusUnit,
		buttonSizeUnit,
		heightUnit,
		widthUnit,
	} = attributes;

	// Default colors
	const deafultFrontTitleColor = "#ffffff";
	const defaultFrontContentColor = "#ffffff";
	const defautlBackContentColor = "#ffffff";
	const defaultBackTitleColor = "#ffffff";
	const defaultBorderColor = "#000000";
	const defaultBoxShadowColor = "#abb8c3";
	const defaultButtonBorderColor = "#eeeeee";
	const deafultBtnShadowColor = "#abb8c3";
	const defaultFrontIconBackground = "transparent";
	const defaultFrontIconBorderColor = "#000000";
	const defaultBackIconBackground = "transparent";
	const defaultBackIconBorderColor = "#000000";

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

	const {
		rangeStylesDesktop: wrapperHeightStylesDesktop,
		rangeStylesTab: wrapperHeightStylesTab,
		rangeStylesMobile: wrapperHeightStylesMobile,
	} = generateResponsiveRangeStyles({
		controlName: boxHeightAttr,
		property: "height",
		attributes,
	});

	console.log('responsive: ', wrapperHeightStylesDesktop)

	const flipContainerStyleDesktop = `
	 .${blockId}{
		 ${wrapperMarginStylesDesktop}
		 ${wrapperPaddingStylesDesktop}
		 ${wrapperHeightStylesDesktop}
		 max-width: ${boxWidth || 600}${widthUnit};
		 width: 100%;
	 }
	 `;

	const flipContainerStyleTab = `
	 .${blockId}{
		 ${wrapperMarginStylesTab}
		 ${wrapperPaddingStylesTab}
		 ${wrapperHeightStylesTab}
	 }
	 `;

	const flipContainerStyleMobile = `
	 .${blockId}{
		 ${wrapperMarginStylesMobile}
		 ${wrapperPaddingStylesMobile}
		 ${wrapperHeightStylesMobile}
	 }
	 `;

	const {
		typoStylesDesktop: titleTypoStylesDesktop,
		typoStylesTab: titleTypoStylesTab,
		typoStylesMobile: titleTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_title,
	});

	// prefix title styles css in strings ⬇
	const titleStylesDesktop = `
	 .${blockId} .eb-flipbox-front-title, .${blockId} .eb-flipbox-back-title {
		 ${titleTypoStylesDesktop}
		 width: 100%;
		 text-align: ${align};
	 }
 
	 .${blockId} .eb-flipbox-front-title {
		 color: ${frontTitleColor || deafultFrontTitleColor};
	 }
 
	 .${blockId} .eb-flipbox-back-title {
		 color: ${backTitleColor || defaultBackTitleColor};
	 }
	 `;

	const titleStylesTab = `
	 .${blockId} .eb-flipbox-front-title, .${blockId} .eb-flipbox-back-title {
		 ${titleTypoStylesTab}
	 }
	 `;

	const titleStylesMobile = `
	 .${blockId} .eb-flipbox-front-title, .${blockId} .eb-flipbox-back-title {
		 ${titleTypoStylesMobile}
	 }
	 `;

	const {
		typoStylesDesktop: contentTypoStylesDesktop,
		typoStylesTab: contentTypoStylesTab,
		typoStylesMobile: contentTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_content,
	});

	// prefix content styles css in strings ⬇
	const contentStylesDesktop = `
	 .${blockId} .eb-flipbox-front-content, .${blockId} .eb-flipbox-back-content {
		 ${contentTypoStylesDesktop}
		 width: 100%;
		 text-align: ${align};
		 margin: 10px 0;
	 }
 
	 .${blockId} .eb-flipbox-front-content {
		 color: ${frontContentColor || defaultFrontContentColor};
	 }
 
	 .${blockId} .eb-flipbox-back-content {
		 color: ${backContentColor || defautlBackContentColor};
	 }
	 `;

	const contentStylesTab = `
	 .${blockId} .eb-flipbox-front-content, .${blockId} .eb-flipbox-back-content {
		 ${contentTypoStylesTab}
	 }
	 `;

	const contentStylesMobile = `
	 .${blockId} .eb-flipbox-front-content, .${blockId} .eb-flipbox-back-content {
		 ${contentTypoStylesMobile}
	 }
	 `;

	// flipper style
	const flipperStyle = `
	 .${blockId} .eb-flipper {
		 transition: ${transitionSpeed ? transitionSpeed / 10 : 0.6}s
	 }
	 .${blockId} .eb-flipper.back-is-selected {
		 transform:
			  ${isHover || selectedSide === "back" ? getFlipTransform(flipType) : "none"};
	 }
	 `;

	const {
		rangeStylesDesktop: wrapperMinHeightStylesDesktop,
		rangeStylesTab: wrapperMinHeightStylesTab,
		rangeStylesMobile: wrapperMinHeightStylesMobile,
	} = generateResponsiveRangeStyles({
		controlName: boxHeightAttr,
		property: "min-height",
		attributes,
	});

	const frontStyleDesktop = `
	 .${blockId} .eb-flipper .eb-flipbox-front {
		 display: flex;
		 justify-content: center;
		 align-items: center;
		 ${wrapperMinHeightStylesDesktop}
		 max-width: ${boxWidth || 600}${widthUnit};
		 height: auto;
		 width: 100%;
		 background-image: ${getBackgroundImage(
		frontBackgroundType,
		frontBackgroundGradient,
		frontBackgroundImageURL
	)};
		 background-size: ${frontBackgroundSize === "custom"
			? frontBackgroundWidth + frontBackgroundWidthUnit
			: frontBackgroundSize
		};
		 background-position: ${frontBackgroundPosition === "custom"
			? frontBackgroundPosX +
			frontBackgroundPosXUnit +
			" " +
			frontBackgroundPosY +
			frontBackgroundPosYUnit
			: frontBackgroundPosition
		};
		 background-repeat: ${frontBackgroundRepeat};
		 ${frontBackgroundType === 'fill' ? 'background-color:' + frontBackground + ';' : ''}
		 border-style: ${borderStyle};
		 border-color: ${borderColor || defaultBorderColor};
		 border-width: ${borderWidth || 0}px;
		 border-radius: ${borderRadius || 0}${radiusUnit};
		 box-shadow: ${shadowVOffset || 0}px ${shadowHOffset || 0}px ${shadowBlur || 0
		}px ${shadowSpread || 0}px ${boxShadowColor || defaultBoxShadowColor};
	 }
	 .${blockId} .eb-flipper .eb-flipbox-front::before {
		 content: "";
		 position: absolute;
		 top: 0px;
		 right: 0px;
		 bottom: 0px;
		 left: 0px;
		 ${frontBackgroundType === 'image' ? 'background-color:' + frontOpacityColor + ';' : ''}
		 z-index: -99999;
	 }
	 `;

	const frontStyleTab = `
		 .${blockId} .eb-flipper .eb-flipbox-front {
			 ${wrapperMinHeightStylesTab}
		 }
	 `;

	const frontStyleMobile = `
		 .${blockId} .eb-flipper .eb-flipbox-front {
			 ${wrapperMinHeightStylesMobile}
		 }
	 `;

	const frontImageStyleDesktop = `
	 .${blockId} .eb-flipbox-front .eb-flipbox-front-image-container, .${blockId} .eb-flipbox-back .eb-flipbox-front-image-container {
		 align-self: ${getImageAlign(align)};
		 display: ${frontIconOrImage === "image" && frontImageUrl ? "block" : "none"};
	 }
 
	 .${blockId} .eb-flipbox-front .eb-flipbox-front-image-container img {
		 height: ${frontImageSize || 100}px;
		 width: ${frontImageSize || 100}px;
		 border-radius: ${frontImageRadius || 0}%;
	 }
	 `;

	const backStyleDesktop = `
	 .${blockId} .eb-flipper .eb-flipbox-back {
		 display: flex;
		 flex-direction: column;
		 justify-content: center;
		 align-items: center;
		 ${wrapperMinHeightStylesDesktop}
		 max-width: ${boxWidth || 600}${widthUnit};
		 height: auto;
		 width: 100%;
		 background-image: ${getBackgroundImage(
		backBackgroundType,
		backBackgroundGradient,
		backBackgroundImageURL
	)};
		 background-size: ${backBackgroundSize === "custom"
			? backBackgroundWidth + backBackgroundWidthUnit
			: backBackgroundSize
		};
		 background-position: ${backBackgroundPosition === "custom"
			? backBackgroundPosX +
			backBackgroundPosXUnit +
			" " +
			backBackgroundPosY +
			backBackgroundPosYUnit
			: backBackgroundPosition
		};
		 background-repeat: ${backBackgroundRepeat};
		 ${backBackgroundType === 'fill' ? 'background-color:' + backBackground + ';' : ''}
		 border-style: ${borderStyle};
		 border-color: ${borderColor || defaultBorderColor};
		 border-width: ${borderWidth || 0}px;
		 border-radius: ${borderRadius || 0}${radiusUnit};
		 box-shadow: ${shadowVOffset || 0}px ${shadowHOffset || 0}px ${shadowBlur || 0
		}px ${shadowSpread || 0}px ${boxShadowColor || defaultBoxShadowColor};
		 transform:  ${(flipType === "flip-up" && "rotateX(-180deg)") ||
		(flipType === "flip-bottom" && "rotateX(180deg)") ||
		((flipType === "zoom-in" || flipType === "zoom-out") && "none")
		};
		 cursor: ${linkType === "box" && link ? "pointer" : "default"};
		 position: relative;
		 ${isHover && (flipType === "zoom-in" || flipType === "zoom-out") ? 'z-index: 5;' : ''}
	 }
	 
	 .${blockId} .eb-flipper .eb-flipbox-back::before {
		 content: "";
		 position: absolute;
		 top: 0px;
		 right: 0px;
		 bottom: 0px;
		 left: 0px;
		 ${backBackgroundType === 'image' ? 'background-color:' + backOpacityColor + ';' : ''}
		 z-index: -99999;
	 }
	 `;

	const backStyleTab = `
		 .${blockId} .eb-flipper .eb-flipbox-back {
			 ${wrapperMinHeightStylesTab}
		 }
	 `;

	const backStyleMobile = `
		 .${blockId} .eb-flipper .eb-flipbox-back {
			 ${wrapperMinHeightStylesMobile}
		 }
	 `;

	const frontIconStyleDesktop = `
		 .${blockId} .eb-flipbox-icon-front {
			 font-size: ${frontIconSize || DEFAULT_ICON_SIZE}px;
			 color: ${frontIconColor || "#ffffff"};
			 border-radius: ${frontIconBorderRadius || 0}px;
			 background: ${frontIconBackground || defaultFrontIconBackground};
			 padding: ${frontIconPadding || 0}px;
			 margin-top: ${frontIconTopMargin || 0}px;
			 border-style: ${frontIconBorderType};
			 border-color: ${frontIconBorderColor || defaultFrontIconBorderColor};
			 border-width: ${frontIconBorderSize || 0}px;
			 width: 100%;
			 text-align:${align};
			 display: ${frontIconOrImage === "icon" && frontIcon ? "block" : "none"};
		 }
	 `;

	const backImageStyleDesktop = `
	 .${blockId} .eb-flipbox-back .eb-flipbox-back-image-container {
		 align-self: ${getImageAlign(align)};
		 display: ${backIconOrImage === "image" && backImageUrl ? "block" : "none"};
	 }
 
	 .${blockId} .eb-flipbox-back .eb-flipbox-back-image-container img {
		 height: ${backImageSize || 100}px;
		 width: ${backImageSize || 100}px;
		 border-radius: ${backImageRadius || 0}%;
	 }
	 `;

	const backIconStyleDesktop = `
	 .${blockId} .eb-flipbox-icon-back {
		 font-size: ${backIconSize || DEFAULT_ICON_SIZE}px;
		 color: ${backIconColor || "#ffffff"};
		 border-radius:${backIconBorderRadius || 0}%;
		 background: ${backIconBackground || defaultBackIconBackground};
		 padding: ${backIconPadding || 0}px;
		 margin-top: ${backIconTopMargin || 0}px;
		 border-style: ${backIconBorderType};
		 border-color: ${backIconBorderColor || defaultBackIconBorderColor};
		 border-width: ${backIconBorderSize || 0}px;
		 width: 100%;
		 text-align: ${align};
		 display: ${backIconOrImage === "icon" && backIcon ? "block" : "none"};
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

		backButtonStyleDesktop = `
		 .${blockId} .eb-flipbox-button-container .eb-flipbox-button-link {
			 ${buttonPaddingStylesDesktop}
			 background: ${buttonBackground};
			 color: ${buttonColor};
			 width: ${buttonSize || 18}${buttonSizeUnit};
			 border: ${buttonBorderSize || 0}px ${buttonBorderType} ${buttonBorderColor || defaultButtonBorderColor
			};
			 border-radius: ${buttonBorderRadius || 0}px;
			 box-shadow: ${btnShadowVOffset || 0}px ${btnShadowHOffset || 0}px ${btnShadowBlur || 0
			}px ${btnShadowSpread || 0}px ${btnShadowColor || deafultBtnShadowColor};
			 text-decoration: none;
		 }
 
		 .${blockId} .eb-flipbox-button-container .eb-flipbox-button-content {
			 display: flex;
			 flex-direction: ${buttonIconPos === "after" ? "row" : "row-reverse"};
			 justify-content: space-around;
		 }
 
		 .${blockId} .eb-flipbox-button-container .eb-flipbox-button-content .eb-flipbox-button-icon {
			 display: ${displayButtonIcon ? "block" : "none"};
		 }
		 `;

		backButtonStyleTab = `
		 .${blockId} .eb-flipbox-button-container .eb-flipbox-button-link {
			 ${buttonPaddingStylesTab}
		 }
		 `;

		backButtonStyleMobile = `
		 .${blockId} .eb-flipbox-button-container .eb-flipbox-button-link {
			 ${buttonPaddingStylesMobile}
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
		 ${isCssExists(backStyleDesktop) ? backStyleDesktop : " "}
		 ${isCssExists(backImageStyleDesktop) ? backImageStyleDesktop : " "}
		 ${isCssExists(backIconStyleDesktop) ? backIconStyleDesktop : " "}
		 ${isCssExists(backButtonStyleDesktop) ? backButtonStyleDesktop : " "}
	 `);

	//  ${isCssExists(backButtonStyleDisplay) ? backButtonStyleDisplay : " "}

	// all css styles for Tab in strings ⬇
	const tabAllStyles = softMinifyCssStrings(`
		 ${isCssExists(flipContainerStyleTab) ? flipContainerStyleTab : " "}
		 ${isCssExists(titleStylesTab) ? titleStylesTab : " "}
		 ${isCssExists(contentStylesTab) ? contentStylesTab : " "}
		 ${isCssExists(backButtonStyleTab) ? backButtonStyleTab : " "}
		 ${isCssExists(frontStyleTab) ? frontStyleTab : " "}
		 ${isCssExists(backStyleTab) ? backStyleTab : " "}
	 `);

	// all css styles for Mobile in strings ⬇
	const mobileAllStyles = softMinifyCssStrings(`
		 ${isCssExists(flipContainerStyleMobile) ? flipContainerStyleMobile : " "}
		 ${isCssExists(titleStylesMobile) ? titleStylesMobile : " "}
		 ${isCssExists(contentStylesMobile) ? contentStylesMobile : " "}
		 ${isCssExists(backButtonStyleMobile) ? backButtonStyleMobile : " "}
		 ${isCssExists(frontStyleMobile) ? frontStyleMobile : " "}
		 ${isCssExists(backStyleMobile) ? backStyleMobile : " "}
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
				<div className={`eb-flipper${isHover || selectedSide === "back" ? " back-is-selected" : ""
					}`}
				>
					<div className="eb-flipbox-front">
						<div className="eb-flipbox-items-container">
							{frontIconOrImage !== 'none' && (
								<div className="eb-flipbox-icon-wrapper">
									{(frontIconOrImage === 'image' && frontImageUrl) && (
										<div className="eb-flipbox-front-image-container">
											<img src={frontImageUrl} />
										</div>
									)}
									{(frontIconOrImage === 'icon' && frontIcon) && (
										<div className="eb-flipbox-icon-front" data-icon={frontIcon}>
											<span className={frontIcon} />
										</div>
									)}
								</div>
							)}
							{showFrontTitle && (
								<div className="eb-flipbox-front-title-wrapper">
									{
										linkType === "title" && link ?
											<a
												href={link ? link : "#"}
												className="title-link"
											>
												<h3 className="eb-flipbox-front-title">
													{frontTitle}
												</h3>
											</a> :
											<h3 className="eb-flipbox-front-title">
												{frontTitle}
											</h3>
									}
								</div>
							)}
							{showFrontContent && (
								<div className="eb-flipbox-front-content-wrapper">
									<p className="eb-flipbox-front-content">
										{frontContent}
									</p>
								</div>
							)}
						</div>
					</div>
					<div className="eb-flipbox-back">
						<div className="eb-flipbox-items-container">
							{backIconOrImage !== 'none' && (
								<div className="eb-flipbox-icon-wrapper">
									{(backIconOrImage === 'image' && backImageUrl) && (
										<div className="eb-flipbox-back-image-container">
											<img src={backImageUrl} />
										</div>
									)}
									{(backIconOrImage === 'icon' && backIcon) && (
										<div className="eb-flipbox-icon-back" data-icon={backIcon}>
											<span className={backIcon} />
										</div>
									)}
								</div>
							)}
							{showBackTitle && (
								<div className="eb-flipbox-back-title-wrapper">
									{
										linkType === "title" && link ?
											<a
												href={link ? link : "#"}
												className="title-link"
											>
												<h3 className="eb-flipbox-back-title">
													{backTitle}
												</h3>
											</a> :
											<h3 className="eb-flipbox-back-title">
												{backTitle}
											</h3>
									}
								</div>
							)}
							{showBackContent && (
								<div className="eb-flipbox-back-content-wrapper">
									<p className="eb-flipbox-back-content">
										{backContent}
									</p>
								</div>
							)}
							{linkType === 'button' && (
								<div className="eb-flipbox-button-container">
									<a className={`eb-flipbox-button-link ${buttonClasses}`} href={link ? link : "#"}>
										<div
											className="eb-flipbox-button-content"
										>
											<span>{buttonText}</span>
											<span
												className={`${buttonIcon ? "fa fa-" + buttonIcon + " " : ''}eb-flipbox-button-icon`}
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
