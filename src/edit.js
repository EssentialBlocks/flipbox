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
import { FlipboxButton } from "./flipbox-button";
import FlipboxContent from "./flipbox-content";
import FlipboxWrapper from "./flipbox-wrapper";
import { getBackgroundImage, getFlipTransform } from "../util/helper";
import { DEFAULT_ICON_SIZE } from "./constants";
import Inspector from "./inspector";
import { dimensionsMargin, dimensionsPadding } from "./dimensionsNames";
import { typoPrefix_title, typoPrefix_content } from "./typographyPrefixConstants";
import { softMinifyCssStrings, isCssExists, generateTypographyStyles, generateDimensionsControlStyles } from "./helpers";

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
		flipboxStyle,
		boxHeight,
		boxWidth,
		isHover,
		flipType,
		selectedSide,
		frontIconOrImage,
		frontIcon,
		frontImageUrl,
		frontImageId,
		backIconOrImage,
		backIcon,
		backImageUrl,
		backImageId,
		frontTitle,
		frontContent,
		backTitle,
		backContent,
		frontImageSize,
		backImageSize,
		frontBackground,
		backBackground,
		borderStyle,
		borderColor,
		borderWidth,
		borderRadius,
		addLink,
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
		buttonPaddingTop,
		buttonPaddingRight,
		buttonPaddingBottom,
		buttonPaddingLeft,
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
		frontBackgroundImageID,
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
		backBackgroundImageID,
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
		titleFontSize,
		titleFontSizeUnit,
		contentFontSize,
		contentFontSizeUnit,
		containerMarginTop,
		containerMarginRight,
		containerMarginBottom,
		containerMarginLeft,
		containerPaddingTop,
		containerPaddingRight,
		containerPaddingBottom,
		containerPaddingLeft,
		TABcontainerMarginTop,
		TABcontainerMarginRight,
		TABcontainerMarginBottom,
		TABcontainerMarginLeft,
		TABcontainerPaddingTop,
		TABcontainerPaddingRight,
		TABcontainerPaddingBottom,
		TABcontainerPaddingLeft,
		MOBcontainerMarginTop,
		MOBcontainerMarginRight,
		MOBcontainerMarginBottom,
		MOBcontainerMarginLeft,
		MOBcontainerPaddingTop,
		MOBcontainerPaddingRight,
		MOBcontainerPaddingBottom,
		MOBcontainerPaddingLeft,
		align,
		marginUnit,
		paddingUnit,
		radiusUnit,
		buttonSizeUnit,
		buttonPaddingUnit,
		heightUnit,
		widthUnit,
		titleFontFamily,
		titleFontWeight,
		titleTextTransform,
		titleTextDecoration,
		titleLetterSpacing,
		titleLetterSpacingUnit,
		titleLineHeight,
		titleLineHeightUnit,
		contentFontFamily,
		contentFontWeight,
		contentTextTransform,
		contentTextDecoration,
		contentLetterSpacing,
		contentLetterSpacingUnit,
		contentLineHeight,
		contentLineHeightUnit,
	} = attributes;

	// Default colors
	const defaultFrontBackground = "#7967ff";
	const deafultFrontTitleColor = "#ffffff";
	const defaultFrontContentColor = "#ffffff";
	const defautlBackContentColor = "#ffffff";
	const defaultBackBackground = "#3074ff";
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
		isStyleForMargin: true,
		attributes,
	});

	const {
		dimensionStylesDesktop: wrapperPaddingStylesDesktop,
		dimensionStylesTab: wrapperPaddingStylesTab,
		dimensionStylesMobile: wrapperPaddingStylesMobile,
	} = generateDimensionsControlStyles({
		controlName: dimensionsPadding,
		isStyleForMargin: false,
		attributes,
	});

	const flipContainerStyleDesktop = `
	.${blockId}{
		${wrapperMarginStylesDesktop}
		${wrapperPaddingStylesDesktop}
		height: ${boxHeight || 310}${heightUnit};
		max-width: ${boxWidth || 600}${widthUnit};
		width: 100%;
	}
	`;

	const flipContainerStyleTab = `
	.${blockId}{
		${wrapperMarginStylesTab}
		${wrapperPaddingStylesTab}
	}
	`;

	const flipContainerStyleMobile = `
	.${blockId}{
		${wrapperMarginStylesMobile}
		${wrapperPaddingStylesMobile}
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
	.${blockId} .front-title, .${blockId} .back-title {
		${titleTypoStylesDesktop}
		width: "100%";
		text-align: ${align};
	}

	.${blockId} .front-title {
		color: ${frontTitleColor || deafultFrontTitleColor};
	}

	.${blockId} .back-title {
		color: ${backTitleColor || defaultBackTitleColor},
	}
	`;

	const titleStylesTab = `
	.${blockId} .front-title, .${blockId} .back-title {
		${titleTypoStylesTab}
	}
	`;

	const titleStylesMobile = `
	.${blockId} .front-title, .${blockId} .back-title {
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
	.${blockId} .front-content, .${blockId} .back-content {
		${contentTypoStylesDesktop}
		width: "100%";
		text-align: ${align};
	}

	.${blockId} .front-content {
		color: ${frontContentColor || defaultFrontContentColor};
	}

	.${blockId} .back-content {
		color: ${backContentColor || defautlBackContentColor},
	}
	`;

	const contentStylesTab = `
	.${blockId} .front-content, .${blockId} .back-content {
		${contentTypoStylesTab}
	}
	`;

	const contentStylesMobile = `
	.${blockId} .front-content, .${blockId} .back-content {
		${contentTypoStylesMobile}
	}
	`;

	// all css styles for large screen width (desktop/laptop) in strings ⬇
	const desktopAllStyles = softMinifyCssStrings(`
		${isCssExists(flipContainerStyleDesktop) ? flipContainerStyleDesktop : " "}
		${isCssExists(titleStylesDesktop) ? titleStylesDesktop : " "}
		${isCssExists(contentStylesDesktop) ? contentStylesDesktop : " "}
	`);

	// all css styles for Tab in strings ⬇
	const tabAllStyles = softMinifyCssStrings(`
		${isCssExists(flipContainerStyleTab) ? flipContainerStyleTab : " "}
		${isCssExists(titleStylesTab) ? titleStylesTab : " "}
		${isCssExists(contentStylesTab) ? contentStylesTab : " "}
	`);

	// all css styles for Mobile in strings ⬇
	const mobileAllStyles = softMinifyCssStrings(`
		${isCssExists(flipContainerStyleMobile) ? flipContainerStyleMobile : " "}
		${isCssExists(titleStylesMobile) ? titleStylesMobile : " "}
		${isCssExists(contentStylesMobile) ? contentStylesMobile : " "}
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

	// const flipContainerStyle = {
	// 	height: `${boxHeight || 310}${heightUnit}`,
	// 	maxWidth: `${boxWidth || 600}${widthUnit}`,
	// 	width: "100%",
	// 	margin: `${containerMarginTop}${marginUnit} ${containerMarginRight}${marginUnit} ${containerMarginBottom}${marginUnit} ${containerMarginLeft}${marginUnit}`,
	// 	padding: `${containerPaddingTop}${paddingUnit} ${containerPaddingRight}${paddingUnit} ${containerPaddingBottom}${paddingUnit} ${containerPaddingLeft}${paddingUnit}`,
	// };

	const flipperStyle = {
		transform:
			isHover || selectedSide === "back" ? getFlipTransform(flipType) : "none",
		transition: `${transitionSpeed ? transitionSpeed / 10 : 0.6}s`,
	};

	const frontStyle = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		minHeight: `${boxHeight || 310}${heightUnit}`,
		maxWidth: `${boxWidth || 600}${widthUnit}`,
		height: "auto",
		width: "100%",
		backgroundImage: getBackgroundImage(
			frontBackgroundType,
			frontBackgroundGradient,
			frontBackgroundImageURL
		),
		backgroundSize:
			frontBackgroundSize === "custom"
				? `${frontBackgroundWidth}${frontBackgroundWidthUnit}`
				: frontBackgroundSize,
		backgroundPosition:
			frontBackgroundPosition === "custom"
				? `${frontBackgroundPosX}${frontBackgroundPosXUnit} ${frontBackgroundPosY}${frontBackgroundPosYUnit}`
				: frontBackgroundPosition,
		backgroundRepeat: frontBackgroundRepeat,
		backgroundColor:
			frontBackgroundType === "fill" && frontBackground
				? frontBackground
				: defaultFrontBackground,
		borderStyle: borderStyle,
		borderColor: borderColor || defaultBorderColor,
		borderWidth: `${borderWidth || 0}px`,
		borderRadius: `${borderRadius || 0}${radiusUnit}`,
		boxShadow: `${shadowVOffset || 0}px ${shadowHOffset || 0}px ${shadowBlur || 0
			}px ${shadowSpread || 0}px ${boxShadowColor || defaultBoxShadowColor}`,
	};

	const frontImageStyle = {
		wrapper: {
			alignSelf: getImageAlign(align),
			display: frontIconOrImage === "image" && frontImageUrl ? "block" : "none",
		},
		image: {
			height: `${frontImageSize || 100}px`,
			width: `${frontImageSize || 100}px`,
			borderRadius: `${frontImageRadius || 0}%`,
		},
	};

	const frontIconStyle = {
		fontSize: `${frontIconSize || DEFAULT_ICON_SIZE}px`,
		color: frontIconColor || "#ffffff",
		borderRadius: `${frontIconBorderRadius || 0}px`,
		background: frontIconBackground || defaultFrontIconBackground,
		padding: `${frontIconPadding || 0}px`,
		marginTop: `${frontIconTopMargin || 0}px`,
		borderStyle: frontIconBorderType,
		borderColor: frontIconBorderColor || defaultFrontIconBorderColor,
		borderWidth: `${frontIconBorderSize || 0}px`,
		width: "100%",
		textAlign: align,
	};

	// const frontTitleStyle = {
	// 	fontFamily: titleFontFamily,
	// 	fontSize: titleFontSize
	// 		? `${titleFontSize}${titleFontSizeUnit}`
	// 		: undefined,
	// 	fontWeight: titleFontWeight,
	// 	textDecoration: titleTextDecoration,
	// 	textTransform: titleTextTransform,
	// 	lineHeight: titleLineHeight
	// 		? `${titleLineHeight}${titleLineHeightUnit}`
	// 		: undefined,
	// 	letterSpacing: titleLetterSpacing
	// 		? `${titleLetterSpacing}${titleLetterSpacingUnit}`
	// 		: undefined,
	// 	color: frontTitleColor || deafultFrontTitleColor,
	// 	width: "100%",
	// 	textAlign: align,
	// };

	// const frontContentStyle = {
	// 	fontFamily: contentFontFamily,
	// 	fontSize: contentFontSize
	// 		? `${contentFontSize}${contentFontSizeUnit}`
	// 		: undefined,
	// 	fontWeight: contentFontWeight,
	// 	textDecoration: contentTextDecoration,
	// 	textTransform: contentTextTransform,
	// 	lineHeight: contentLineHeight
	// 		? `${contentLineHeight}${contentLineHeightUnit}`
	// 		: undefined,
	// 	letterSpacing: contentLetterSpacing
	// 		? `${contentLetterSpacing}${contentLetterSpacingUnit}`
	// 		: undefined,
	// 	color: frontContentColor || defaultFrontContentColor,
	// 	width: "100%",
	// 	textAlign: align,
	// };

	const backStyle = {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		minHeight: `${boxHeight || 310}${heightUnit}`,
		maxWidth: `${boxWidth || 600}${widthUnit}`,
		height: "auto",
		width: "100%",
		backgroundImage: getBackgroundImage(
			backBackgroundType,
			backBackgroundGradient,
			backBackgroundImageURL
		),
		backgroundSize:
			backBackgroundSize === "custom"
				? `${backBackgroundWidth}${backBackgroundWidthUnit}`
				: backBackgroundSize,
		backgroundPosition:
			backBackgroundPosition === "custom"
				? `${backBackgroundPosX}${backBackgroundPosXUnit} ${backBackgroundPosY}${backBackgroundPosYUnit}`
				: backBackgroundPosition,
		backgroundRepeat: backBackgroundRepeat,
		backgroundColor:
			backBackgroundType === "fill" && backBackground
				? backBackground
				: defaultBackBackground,
		borderStyle: borderStyle,
		bordercolor: borderColor || defaultBorderColor,
		borderWidth: `${borderWidth || 0}px`,
		borderRadius: `${borderRadius || 0}${radiusUnit}`,
		//  ? move it to helper file
		transform:
			(flipType === "flip-up" && "rotateX(-180deg)") ||
			(flipType === "flip-bottom" && "rotateX(180deg)") ||
			((flipType === "zoom-in" || flipType === "zoom-out") && "none"),
		zIndex:
			isHover && (flipType === "zoom-in" || flipType === "zoom-out" ? 5 : 0),
		boxShadow: `${shadowVOffset || 0}px ${shadowHOffset || 0}px ${shadowBlur || 0
			}px ${shadowSpread || 0}px ${boxShadowColor || defaultBoxShadowColor}`,
		cursor: linkType === "box" && link ? "pointer" : "default",
	};

	const backImageStyle = {
		wrapper: {
			alignSelf: getImageAlign(align),
			display: backIconOrImage === "image" && backImageUrl ? "block" : "none",
		},
		image: {
			height: `${backImageSize || 100}px`,
			width: `${backImageSize || 100}px`,
			borderRadius: `${backImageRadius || 0}%`,
		},
	};

	const backIconStyle = {
		fontSize: `${backIconSize || DEFAULT_ICON_SIZE}px`,
		color: backIconColor || "#ffffff",
		borderRadius: `${backIconBorderRadius || 0}%`,
		background: backIconBackground || defaultBackIconBackground,
		padding: `${backIconPadding || 0}px`,
		marginTop: `${backIconTopMargin || 0}px`,
		borderStyle: backIconBorderType,
		borderColor: backIconBorderColor || defaultBackIconBorderColor,
		borderWidth: `${backIconBorderSize || 0}px`,
		width: "100%",
		textAlign: align,
	};

	// const backTitleStyle = {
	// 	fontFamily: titleFontFamily,
	// 	fontSize: titleFontSize
	// 		? `${titleFontSize}${titleFontSizeUnit}`
	// 		: undefined,
	// 	fontWeight: titleFontWeight,
	// 	textDecoration: titleTextDecoration,
	// 	textTransform: titleTextTransform,
	// 	lineHeight: titleLineHeight
	// 		? `${titleLineHeight}${titleLineHeightUnit}`
	// 		: undefined,
	// 	letterSpacing: titleLetterSpacing
	// 		? `${titleLetterSpacing}${titleLetterSpacingUnit}`
	// 		: undefined,
	// 	color: backTitleColor || defaultBackTitleColor,
	// 	width: "100%",
	// 	textAlign: align,
	// };

	// const backContentStyle = {
	// 	fontFamily: contentFontFamily,
	// 	fontSize: contentFontSize
	// 		? `${contentFontSize}${contentFontSizeUnit}`
	// 		: undefined,
	// 	fontWeight: contentFontWeight,
	// 	textDecoration: contentTextDecoration,
	// 	textTransform: contentTextTransform,
	// 	lineHeight: contentLineHeight
	// 		? `${contentLineHeight}${contentLineHeightUnit}`
	// 		: undefined,
	// 	letterSpacing: contentLetterSpacing
	// 		? `${contentLetterSpacing}${contentLetterSpacingUnit}`
	// 		: undefined,
	// 	color: backContentColor || defautlBackContentColor,
	// 	width: "100%",
	// 	textAlign: align,
	// };

	// Empty button object for custom styling
	const backButtonStyle =
		buttonStyle === "custom"
			? {
				background: buttonBackground,
				color: buttonColor,
				width: `${buttonSize || 18}${buttonSizeUnit}`,
				border: `${buttonBorderSize || 0}px ${buttonBorderType} ${buttonBorderColor || defaultButtonBorderColor
					}`,
				borderRadius: `${buttonBorderRadius || 0}px`,
				padding: `${buttonPaddingTop}${buttonPaddingUnit} ${buttonPaddingRight}${buttonPaddingUnit} ${buttonPaddingBottom}${buttonPaddingUnit} ${buttonPaddingLeft}${buttonPaddingUnit}`,
				boxShadow: `${btnShadowVOffset || 0}px ${btnShadowHOffset || 0}px ${btnShadowBlur || 0
					}px ${btnShadowSpread || 0}px ${btnShadowColor || deafultBtnShadowColor
					}`,
				textDecoration: "none",
			}
			: {};

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
				className={`flip-container ${blockId}`} data-id={blockId}
				onMouseEnter={() => setAttributes({ isHover: true })}
				onMouseLeave={() => setAttributes({ isHover: false })}
			>
				<div className="flipper" style={flipperStyle}>
					<FlipboxWrapper className="front" style={frontStyle}>
						<FlipboxContent
							selectedSide={selectedSide}
							iconOrImage={frontIconOrImage}
							imageUrl={frontImageUrl}
							imageStyle={frontImageStyle}
							icon={frontIcon}
							iconStyle={frontIconStyle}
							linkType={linkType}
							title={frontTitle}
							// titleStyle={frontTitleStyle}
							content={frontContent}
							// contentStyle={frontContentStyle}
						/>
					</FlipboxWrapper>

					<div className="back" style={backStyle}>
						<FlipboxContent
							selectedSide={selectedSide}
							iconOrImage={backIconOrImage}
							imageUrl={backImageUrl}
							imageStyle={backImageStyle}
							icon={backIcon}
							iconStyle={backIconStyle}
							linkType={linkType}
							title={backTitle}
							// titleStyle={backTitleStyle}
							content={backContent}
							// contentStyle={backContentStyle}
						/>

						<FlipboxButton
							link={link}
							classNames={buttonClasses}
							style={{
								...backButtonStyle,
								display: linkType === "button" ? "block" : "none",
							}}
							displayButtonIcon={displayButtonIcon}
							buttonText={buttonText}
							buttonIcon={buttonIcon}
							buttonIconPos={buttonIconPos}
						/>
					</div>
				</div>
			</div>
		</div>,
	];
}

export default Edit;
