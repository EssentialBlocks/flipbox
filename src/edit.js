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
} from "./helpers";

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

	// height: ${boxHeight || 310}${heightUnit};
		// ${wrapperHeightStylesDesktop}
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
	.${blockId} .front-title, .${blockId} .back-title {
		${titleTypoStylesDesktop}
		width: 100%;
		text-align: ${align};
	}

	.${blockId} .front-title {
		color: ${frontTitleColor || deafultFrontTitleColor};
		display: ${linkType !== "title" ? "block" : "none"};
	}

	.${blockId} .back-title {
		color: ${backTitleColor || defaultBackTitleColor};
		display: ${linkType !== "title" ? "block" : "none"};
	}

	.${blockId} .front .title-link, .${blockId} .front .title-link .front-title, .${blockId} .back .title-link, .${blockId} .back .title-link .back-title {
		display: ${linkType === "title" ? "block" : "none"};
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
		width: 100%;
		text-align: ${align};
	}

	.${blockId} .front-content {
		color: ${frontContentColor || defaultFrontContentColor};
	}

	.${blockId} .back-content {
		color: ${backContentColor || defautlBackContentColor};
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

	// flipper style
	const flipperStyle = `
	.${blockId} .flipper {
		transition: ${transitionSpeed ? transitionSpeed / 10 : 0.6}s
	}
	.${blockId} .flipper.back-is-selected {
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
	.${blockId} .flipper .front {
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
		background-size: ${
			frontBackgroundSize === "custom"
				? frontBackgroundWidth + frontBackgroundWidthUnit
				: frontBackgroundSize
		};
		background-position: ${
			frontBackgroundPosition === "custom"
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
		box-shadow: ${shadowVOffset || 0}px ${shadowHOffset || 0}px ${
		shadowBlur || 0
	}px ${shadowSpread || 0}px ${boxShadowColor || defaultBoxShadowColor};
	}
	.${blockId} .flipper .front::before {
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
		.${blockId} .flipper .front {
			${wrapperMinHeightStylesTab}
		}
	`;

	const frontStyleMobile = `
		.${blockId} .flipper .front {
			${wrapperMinHeightStylesMobile}
		}
	`;

	const frontImageStyleDesktop = `
	.${blockId} .front .front-image-container, .${blockId} .back .front-image-container {
		align-self: ${getImageAlign(align)};
		display: ${frontIconOrImage === "image" && frontImageUrl ? "block" : "none"};
	}

	.${blockId} .front .front-image-container img {
		height: ${frontImageSize || 100}px;
		width: ${frontImageSize || 100}px;
		border-radius: ${frontImageRadius || 0}%;
	}
	`;

	const backStyleDesktop = `
	.${blockId} .flipper .back {
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
		background-size: ${
			backBackgroundSize === "custom"
				? backBackgroundWidth + backBackgroundWidthUnit
				: backBackgroundSize
		};
		background-position: ${
			backBackgroundPosition === "custom"
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
		box-shadow: ${shadowVOffset || 0}px ${shadowHOffset || 0}px ${
		shadowBlur || 0
	}px ${shadowSpread || 0}px ${boxShadowColor || defaultBoxShadowColor};
		transform:  ${
			(flipType === "flip-up" && "rotateX(-180deg)") ||
			(flipType === "flip-bottom" && "rotateX(180deg)") ||
			((flipType === "zoom-in" || flipType === "zoom-out") && "none")
		};
		cursor: ${linkType === "box" && link ? "pointer" : "default"};
		position: relative;
		${isHover && (flipType === "zoom-in" || flipType === "zoom-out") ? 'z-index: 5;' : ''}
	}
	
	.${blockId} .flipper .back::before {
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
		.${blockId} .flipper .back {
			${wrapperMinHeightStylesTab}
		}
	`;

	const backStyleMobile = `
		.${blockId} .flipper .back {
			${wrapperMinHeightStylesMobile}
		}
	`;

	const frontIconStyleDesktop = `
		.${blockId} .flipbox-icon-wrapper-front {
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
	.${blockId} .back .back-image-container {
		align-self: ${getImageAlign(align)};
		display: ${backIconOrImage === "image" && backImageUrl ? "block" : "none"};
	}

	.${blockId} .back .back-image-container img {
		height: ${backImageSize || 100}px;
		width: ${backImageSize || 100}px;
		border-radius: ${backImageRadius || 0}%;
	}
	`;

	const backIconStyleDesktop = `
	.${blockId} .flipbox-icon-wrapper-back {
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

	const backButtonStyleDisplay = `
	.${blockId} .flipbox-button-container .flipbox-button-link {
		display: ${linkType === "button" ? "block" : "none"};
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
		.${blockId} .flipbox-button-container .flipbox-button-link {
			${buttonPaddingStylesDesktop}
			background: ${buttonBackground};
			color: ${buttonColor};
			width: ${buttonSize || 18}${buttonSizeUnit};
			border: ${buttonBorderSize || 0}px ${buttonBorderType} ${
			buttonBorderColor || defaultButtonBorderColor
		};
			border-radius: ${buttonBorderRadius || 0}px;
			box-shadow: ${btnShadowVOffset || 0}px ${btnShadowHOffset || 0}px ${
			btnShadowBlur || 0
		}px ${btnShadowSpread || 0}px ${btnShadowColor || deafultBtnShadowColor};
			text-decoration: none;
		}

		.${blockId} .flipbox-button-container .flipbox-button-content {
			display: flex;
			flex-direction: ${buttonIconPos === "after" ? "row" : "row-reverse"};
			justify-content: space-around;
		}

		.${blockId} .flipbox-button-container .flipbox-button-content .flipbox-button-icon {
			display: ${displayButtonIcon ? "block" : "none" };
		}
		`;

		backButtonStyleTab = `
		.${blockId} .flipbox-button-container .flipbox-button-link {
			${buttonPaddingStylesTab}
		}
		`;

		backButtonStyleMobile = `
		.${blockId} .flipbox-button-container .flipbox-button-link {
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
		${isCssExists(backButtonStyleDisplay) ? backButtonStyleDisplay : " "}
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
				className={`flip-container ${blockId}`}
				data-id={blockId}
				onMouseEnter={() => setAttributes({ isHover: true })}
				onMouseLeave={() => setAttributes({ isHover: false })}
			>
				<div
					className={`flipper${
						isHover || selectedSide === "back" ? " back-is-selected" : ""
					}`}
				>
					<FlipboxWrapper className="front">
						<FlipboxContent
							selectedSide="front"
							imageUrl={frontImageUrl}
							icon={frontIcon}
							linkType={linkType}
							link={link}
							title={frontTitle}
							content={frontContent}
						/>
					</FlipboxWrapper>

					<div className="back">
						<FlipboxContent
							selectedSide="back"
							imageUrl={backImageUrl}
							icon={backIcon}
							linkType={linkType}
							link={link}
							title={backTitle}
							content={backContent}
						/>

						<FlipboxButton
							link={link}
							classNames={buttonClasses}
							buttonText={buttonText}
							buttonIcon={buttonIcon}
						/>
					</div>
				</div>
			</div>
		</div>,
	];
}

export default Edit;
