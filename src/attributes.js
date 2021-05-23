import * as prefixObjs from "./typographyPrefixConstants";
import * as rangePrefixObjs from "./rangeNames";
import {
	dimensionsMargin,
	dimensionsPadding,
	buttonPadding,
	boxHeight
} from "./dimensionsNames";
import {
	generateTypographyAttributes,
	generateDimensionsAttributes,
	generateResponsiveRangeAttributes
} from "./helpers";
const attributes = {
	// responsive control attributes ⬇
	resOption: {
		type: "string",
		default: "desktop",
	},
	// uniqueIdNumber attribute for making unique className
	uniqueIdNumber: {
		type: "number",
	},
	blockId: {
		type: "string",
	},
	blockRoot: {
		type: "string",
		default: "essential_block",
	},
	blockMeta: {
		type: "object",
	},
	// typography attributes ⬇
	...generateTypographyAttributes(Object.values(prefixObjs)),
	// margin padding attributes ⬇
	...generateDimensionsAttributes(dimensionsMargin),
	...generateDimensionsAttributes(dimensionsPadding),
	...generateDimensionsAttributes(buttonPadding),
	// range controller
	...generateResponsiveRangeAttributes(Object.values(rangePrefixObjs)),
	flipboxStyle: {
		type: "string",
		default: "default",
	},
	boxHeight: {
		type: "number",
	},
	boxWidth: {
		type: "number",
	},
	isHover: {
		type: "boolean",
		default: false,
	},
	flipType: {
		type: "string",
		source: "attribute",
		selector: ".flip-container",
		attribute: "data-flip-type",
		default: "flip-left",
	},
	selectedSide: {
		type: "string",
		default: "front",
	},
	frontIconOrImage: {
		type: "string",
		default: "icon",
	},
	frontIcon: {
		type: "attribute",
		selector: "flipbox-icon-wrapper-front",
		attribute: "data-icon",
		default: "fab fa-rev",
	},
	frontImageUrl: {
		type: "attribute",
		selector: "front-image-container img",
		attribute: "src",
	},
	frontImageId: {
		type: "string",
		default: null,
	},
	backIconOrImage: {
		type: "string",
		default: "icon",
	},
	backIcon: {
		type: "attribute",
		selector: "flipbox-icon-wrapper-back",
		attribute: "data-icon",
		default: "fab fa-rev",
	},
	backImageUrl: {
		type: "attribute",
		selector: "back-image-container img",
		attribute: "src",
	},
	backImageId: {
		type: "string",
		default: null,
	},
	frontTitle: {
		type: "string",
		selector: "front-title",
		default: "Front Title Here",
	},
	frontContent: {
		type: "string",
		selector: "front-content",
		default: "Front Content Here",
	},
	backTitle: {
		type: "string",
		selector: "back-title",
		default: "Back Title Here",
	},
	backContent: {
		type: "string",
		selector: "back-content",
		default: "Back Content Here",
	},
	frontImageSize: {
		type: "number",
		default: 100,
	},
	backImageSize: {
		type: "number",
		default: 100,
	},
	frontBackground: {
		type: "string",
		default: "#7967ff"
	},
	backBackground: {
		type: "string",
		default: "#3074ff"
	},
	borderStyle: {
		type: "string",
		default: "solid",
	},
	borderColor: {
		type: "string",
	},
	borderWidth: {
		type: "number",
	},
	borderRadius: {
		type: "number",
	},
	addLink: {
		type: "boolean",
		default: false,
	},
	linkType: {
		type: "string",
		default: "box",
	},
	buttonText: {
		type: "string",
		default: "Click Here",
	},
	buttonIcon: {
		type: "string",
	},
	buttonIconPos: {
		type: "string",
		default: "before",
	},
	link: {
		type: "string",
	},
	frontTitleColor: {
		type: "string",
	},
	frontOpacityColor: {
		type: "string",
		default: "rgba(121, 103, 255, 0.5)"
	},
	backTitleColor: {
		type: "string",
	},
	backOpacityColor: {
		type: "string",
		default: "rgba(48, 116, 255, 0.5)"
	},
	frontContentColor: {
		type: "string",
	},
	backContentColor: {
		type: "string",
	},
	frontImageRadius: {
		type: "number",
	},
	backImageRadius: {
		type: "number",
	},
	frontIconSize: {
		type: "number",
	},
	backIconSize: {
		type: "number",
	},
	frontIconColor: {
		type: "string",
	},
	backIconColor: {
		type: "string",
	},
	boxShadowColor: {
		type: "string",
	},
	shadowVOffset: {
		type: "number",
	},
	shadowHOffset: {
		type: "number",
	},
	shadowBlur: {
		type: "number",
	},
	shadowSpread: {
		type: "number",
	},
	buttonStyle: {
		type: "string",
		defautl: "styleOne",
	},
	buttonClasses: {
		type: "string",
		default: "",
	},
	buttonBackground: {
		type: "string",
	},
	buttonColor: {
		type: "string",
	},
	buttonSize: {
		type: "number",
	},
	buttonBorderSize: {
		type: "number",
	},
	buttonBorderColor: {
		type: "string",
	},
	buttonBorderType: {
		type: "string",
		default: "solid",
	},
	buttonBorderRadius: {
		type: "number",
	},
	linkedButtonPadding: {
		type: "boolean",
		default: true,
	},
	buttonPaddingTop: {
		type: "number",
		default: 0,
	},
	buttonPaddingRight: {
		type: "number",
		default: 0,
	},
	buttonPaddingBottom: {
		type: "number",
		default: 0,
	},
	buttonPaddingLeft: {
		type: "number",
		default: 0,
	},
	btnShadowColor: {
		type: "string",
	},
	btnShadowVOffset: {
		type: "number",
	},
	btnShadowHOffset: {
		type: "number",
	},
	btnShadowBlur: {
		type: "number",
	},
	btnShadowSpread: {
		type: "number",
	},
	frontIconBackground: {
		type: "string",
	},
	frontIconPadding: {
		type: "number",
	},
	frontIconBorderRadius: {
		type: "number",
	},
	frontIconTopMargin: {
		type: "number",
	},
	frontIconBorderSize: {
		type: "number",
	},
	frontIconBorderType: {
		type: "string",
		default: "solid",
	},
	frontIconBorderColor: {
		type: "string",
	},
	displayFrontIconBorder: {
		type: "boolean",
		default: false,
	},
	backIconBackground: {
		type: "string",
	},
	backIconPadding: {
		type: "number",
	},
	backIconBorderRadius: {
		type: "number",
	},
	backIconTopMargin: {
		type: "number",
	},
	backIconBorderSize: {
		type: "number",
	},
	backIconBorderType: {
		type: "string",
		default: "solid",
	},
	backIconBorderColor: {
		type: "string",
	},
	displayBackIconBorder: {
		type: "boolean",
		default: false,
	},
	frontBackgroundType: {
		type: "string",
		default: "fill",
	},
	frontBackgroundGradient: {
		type: "string",
		default: "linear-gradient(45deg, #11998e, #38ef7d)",
	},
	backBackgroundType: {
		type: "string",
		default: "fill",
	},
	backBackgroundGradient: {
		type: "string",
		default: "linear-gradient(45deg, #f12711, #f5af19)",
	},
	transitionSpeed: {
		type: "number",
	},
	frontBackgroundImageID: {
		type: "number",
	},
	frontBackgroundImageURL: {
		type: "string",
	},
	frontBackgroundPosition: {
		type: "string",
		default: "initial"
	},
	frontBackgroundPosX: {
		type: "number",
		default: 0,
	},
	frontBackgroundPosXUnit: {
		type: "string",
		default: "px",
	},
	frontBackgroundPosY: {
		type: "number",
		default: 0,
	},
	frontBackgroundPosYUnit: {
		type: "string",
		default: "px",
	},
	frontBackgroundSize: {
		type: "string",
		default: "auto",
	},
	frontBackgroundWidth: {
		type: "number",
	},
	frontBackgroundWidthUnit: {
		type: "string",
		default: "px",
	},
	frontBackgroundRepeat: {
		type: "string",
		default: "initial"
	},
	backBackgroundImageID: {
		type: "number",
	},
	backBackgroundImageURL: {
		type: "string",
	},
	backBackgroundPosition: {
		type: "string",
		default: "initial"
	},
	backBackgroundPosX: {
		type: "number",
		default: 0,
	},
	backBackgroundPosXUnit: {
		type: "string",
		default: "px",
	},
	backBackgroundPosY: {
		type: "number",
		default: 0,
	},
	backBackgroundPosYUnit: {
		type: "string",
		default: "px",
	},
	backBackgroundWidth: {
		type: "number",
	},
	backBackgroundWidthUnit: {
		type: "string",
		default: "px",
	},
	backBackgroundRepeat: {
		type: "string",
		default: "initial"
	},
	backBackgroundSize: {
		type: "string",
		default: "auto",
	},
	displayButtonIcon: {
		type: "boolean",
		default: false,
	},
	titleFontSize: {
		type: "number",
	},
	titleFontSizeUnit: {
		type: "string",
		default: "px",
	},
	contentFontSize: {
		type: "number",
	},
	contentFontSizeUnit: {
		type: "string",
		default: "px",
	},
	linkedContainerMargin: {
		type: "boolean",
		default: true,
	},
	containerMarginTop: {
		type: "string",
	},
	containerMarginRight: {
		type: "string",
	},
	containerMarginBottom: {
		type: "string",
	},
	containerMarginLeft: {
		type: "string",
	},
	TABcontainerMarginTop: {
		type: "string",
	},
	TABcontainerMarginRight: {
		type: "string",
	},
	TABcontainerMarginBottom: {
		type: "string",
	},
	TABcontainerMarginLeft: {
		type: "string",
	},
	MOBcontainerMarginTop: {
		type: "string",
	},
	MOBcontainerMarginRight: {
		type: "string",
	},
	MOBcontainerMarginBottom: {
		type: "string",
	},
	MOBcontainerMarginLeft: {
		type: "string",
	},
	linkedContainerPadding: {
		type: "boolean",
		default: true,
	},
	containerPaddingTop: {
		type: "string",
	},
	containerPaddingRight: {
		type: "string",
	},
	containerPaddingBottom: {
		type: "string",
	},
	containerPaddingLeft: {
		type: "string",
	},
	TABcontainerPaddingTop: {
		type: "string",
	},
	TABcontainerPaddingRight: {
		type: "string",
	},
	TABcontainerPaddingBottom: {
		type: "string",
	},
	TABcontainerPaddingLeft: {
		type: "string",
	},
	MOBcontainerPaddingTop: {
		type: "string",
	},
	MOBcontainerPaddingRight: {
		type: "string",
	},
	MOBcontainerPaddingBottom: {
		type: "string",
	},
	MOBcontainerPaddingLeft: {
		type: "string",
	},
	align: {
		type: "string",
		default: "center",
	},
	marginUnit: {
		type: "string",
		default: "px",
	},
	paddingUnit: {
		type: "string",
		default: "px",
	},
	TABmarginUnit: {
		type: "string",
		default: "px",
	},
	TABpaddingUnit: {
		type: "string",
		default: "px",
	},
	MOBmarginUnit: {
		type: "string",
		default: "px",
	},
	MOBpaddingUnit: {
		type: "string",
		default: "px",
	},
	radiusUnit: {
		type: "string",
		default: "px",
	},
	buttonPaddingUnit: {
		type: "string",
		default: "px",
	},
	buttonSizeUnit: {
		type: "string",
		default: "px",
	},
	heightUnit: {
		type: "string",
		default: "px",
	},
	widthUnit: {
		type: "string",
		default: "px",
	},
	titleFontFamily: {
		type: "string",
	},
	titleFontWeight: {
		type: "string",
		default: "normal",
	},
	titleTextTransform: {
		type: "string",
	},
	titleTextDecoration: {
		type: "string",
	},
	titleLetterSpacing: {
		type: "number",
	},
	titleLetterSpacingUnit: {
		type: "string",
		default: "px",
	},
	titleLineHeight: {
		type: "number",
	},
	titleLineHeightUnit: {
		type: "string",
		default: "px",
	},
	contentFontFamily: {
		type: "string",
	},
	contentFontWeight: {
		type: "string",
		default: "normal",
	},
	contentTextTransform: {
		type: "string",
	},
	contentTextDecoration: {
		type: "string",
	},
	contentLetterSpacing: {
		type: "number",
	},
	contentLetterSpacingUnit: {
		type: "string",
		default: "px",
	},
	contentLineHeight: {
		type: "number",
	},
	contentLineHeightUnit: {
		type: "string",
		default: "px",
	},
};

export default attributes;
