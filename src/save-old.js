/**
 * Internal dependencies
 */
import { FlipboxButton } from "./flipbox-button";
import FlipboxContent from "./flipbox-content";
import FlipboxWrapper from "./flipbox-wrapper";
import { DEFAULT_ICON_SIZE } from "./constants";
import { useBlockProps } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
	const {
		blockId,
		boxHeight,
		boxWidth,
		flipType,
		selectedSide,
		frontBackground,
		frontIconOrImage,
		frontImageUrl,
		frontImageSize,
		frontIcon,
		frontTitle,
		frontContent,
		backBackground,
		backIconOrImage,
		backImageUrl,
		backImageSize,
		backIcon,
		backTitle,
		backContent,
		borderStyle,
		borderColor,
		borderWidth,
		borderRadius,
		link,
		linkType,
		buttonText,
		buttonIcon,
		buttonIconPos,
		frontTitleColor,
		frontContentColor,
		backTitleColor,
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
		align,
		marginUnit,
		paddingUnit,
		radiusUnit,
		buttonPaddingUnit,
		buttonSizeUnit,
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

	// const flipContainerStyle = {
	// 	height: `${boxHeight || 310}${heightUnit}`,
	// 	maxWidth: `${boxWidth || 600}${widthUnit}`,
	// 	width: "100%",
	// 	margin: `${containerMarginTop}${marginUnit} ${containerMarginRight}${marginUnit} ${containerMarginBottom}${marginUnit} ${containerMarginLeft}${marginUnit}`,
	// 	padding: `${containerPaddingTop}${paddingUnit} ${containerPaddingRight}${paddingUnit} ${containerPaddingBottom}${paddingUnit} ${containerPaddingLeft}${paddingUnit}`,
	// };

	// const flipperStyle = {
	// 	transition: `${transitionSpeed ? transitionSpeed / 10 : 0.6}s`,
	// };

	const frontStyle = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		minHeight: `${boxHeight || 310}${heightUnit}`,
		maxWidth: `${boxWidth || 600}${widthUnit}`,
		height: "auto",
		width: "100%",
		backgroundImage:
			(frontBackgroundType === "gradient" && frontBackgroundGradient) ||
			(frontBackgroundType === "image" &&
				frontBackgroundImageURL &&
				`url(${frontBackgroundImageURL})`) ||
			"none",
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
		textAlign: align,
		width: "100%",
	};

	const frontImageStyle = {
		wrapper: {
			display: frontIconOrImage === "image" && frontImageUrl ? "block" : "none",
			alignSelf:
				(align === "left" && "flex-start") ||
				(align === "right" && "flex-end") ||
				"center",
		},
		image: {
			height: `${frontImageSize || 100}px`,
			width: `${frontImageSize || 100}px`,
			borderRadius: `${frontImageRadius || 0}%`,
		},
	};

	const frontTitleStyle = {
		fontFamily: titleFontFamily,
		fontSize: titleFontSize
			? `${titleFontSize}${titleFontSizeUnit}`
			: undefined,
		fontWeight: titleFontWeight,
		textDecoration: titleTextDecoration,
		textTransform: titleTextTransform,
		lineHeight: titleLineHeight
			? `${titleLineHeight}${titleLineHeightUnit}`
			: undefined,
		letterSpacing: titleLetterSpacing
			? `${titleLetterSpacing}${titleLetterSpacingUnit}`
			: undefined,
		color: frontTitleColor || deafultFrontTitleColor,
		width: "100%",
		textAlign: align,
	};

	const frontContentStyle = {
		fontFamily: contentFontFamily,
		fontSize: contentFontSize
			? `${contentFontSize}${contentFontSizeUnit}`
			: undefined,
		fontWeight: contentFontWeight,
		textDecoration: contentTextDecoration,
		textTransform: contentTextTransform,
		lineHeight: contentLineHeight
			? `${contentLineHeight}${contentLineHeightUnit}`
			: undefined,
		letterSpacing: contentLetterSpacing
			? `${contentLetterSpacing}${contentLetterSpacingUnit}`
			: undefined,
		color: frontContentColor || defaultFrontContentColor,
		width: "100%",
		textAlign: align,
	};

	const backStyle = {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		minHeight: `${boxHeight || 310}${heightUnit}`,
		maxWidth: `${boxWidth || 600}${widthUnit}`,
		height: "auto",
		width: "100%",
		backgroundImage:
			(backBackgroundType === "gradient" && backBackgroundGradient) ||
			(backBackgroundType === "image" &&
				backBackgroundImageURL &&
				`url(${backBackgroundImageURL})`) ||
			"none",
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
		transform:
			(flipType === "flip-up" && "rotateX(180deg)") ||
			(flipType === "flip-bottom" && "rotateX(-180deg)"),
		boxShadow: `${shadowVOffset || 0}px ${shadowHOffset || 0}px ${shadowBlur || 0
			}px ${shadowSpread || 0}px ${boxShadowColor || defaultBoxShadowColor}`,
		cursor: linkType === "box" && link ? "pointer" : "default",
	};

	const backImageStyle = {
		wrapper: {
			display: backIconOrImage === "image" && backImageUrl ? "block" : "none",
			alignSelf:
				(align === "left" && "flex-start") ||
				(align === "right" && "flex-end") ||
				"center",
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
		display: backIconOrImage === "icon" ? "block" : "none",
		width: "100%",
		textAlign: align,
	};

	const backTitleStyle = {
		fontFamily: titleFontFamily,
		fontSize: titleFontSize
			? `${titleFontSize}${titleFontSizeUnit}`
			: undefined,
		fontWeight: titleFontWeight,
		textDecoration: titleTextDecoration,
		textTransform: titleTextTransform,
		lineHeight: titleLineHeight
			? `${titleLineHeight}${titleLineHeightUnit}`
			: undefined,
		letterSpacing: titleLetterSpacing
			? `${titleLetterSpacing}${titleLetterSpacingUnit}`
			: undefined,
		color: backTitleColor || defaultBackTitleColor,
		cursor: linkType === "title" && link ? "pointer" : "default",
		width: "100%",
		textAlign: align,
	};

	const backContentStyle = {
		fontFamily: contentFontFamily,
		fontSize: contentFontSize
			? `${contentFontSize}${contentFontSizeUnit}`
			: undefined,
		fontWeight: contentFontWeight,
		textDecoration: contentTextDecoration,
		textTransform: contentTextTransform,
		lineHeight: contentLineHeight
			? `${contentLineHeight}${contentLineHeightUnit}`
			: undefined,
		letterSpacing: contentLetterSpacing
			? `${contentLetterSpacing}${contentLetterSpacingUnit}`
			: undefined,
		color: backContentColor || defautlBackContentColor,
		width: "100%",
		textAlign: align,
	};

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

	return (
		<div {...useBlockProps.save()}>
			<div
				className={`flip-container ${blockId}`}
				data-id={blockId}
				data-flip-type={flipType}
			>
				<div className={`flipper ${flipType}`}>
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

					<div
						className="back"
						style={backStyle}
						onClick={
							linkType === "box" && link ? `window.location='${link}'` : undefined
						}
					>
						<div className="flipbox-items-container">
							<div
								className={`back-image-container`}
								style={backImageStyle.wrapper}
							>
								<img src={backImageUrl} style={backImageStyle.image} />
							</div>

							<div
								className={`flipbox-icon-wrapper-back`}
								style={backIconStyle}
								data-icon={backIcon}
							>
								<span className={`${backIcon} flipbox-icon`} />
							</div>

							<h3
								className={`back-title`}
								// style={backTitleStyle}
								onClick={
									linkType === "title" && link
										? `window.location='${link}'`
										: undefined
								}
							>
								{backTitle}
							</h3>

							<p className={`back-content`}>
								{backContent}
							</p>
						</div>

						<FlipboxButton
							classNames={buttonClasses}
							style={{
								...backButtonStyle,
								display: linkType === "button" ? "block" : "none",
							}}
							link={link}
							buttonText={buttonText}
							buttonIcon={buttonIcon}
							displayButtonIcon={displayButtonIcon}
							buttonIconPos={buttonIconPos}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Save;
