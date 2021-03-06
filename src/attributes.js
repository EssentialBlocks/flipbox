import * as prefixObjs from "./constants/typographyPrefixConstants";
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
	generateTypographyAttributes,
	generateDimensionsAttributes,
	generateResponsiveRangeAttributes,
	generateBackgroundAttributes,
	generateBorderShadowAttributes,
} from "../util/helpers";

import {
	flipboxFrontWrapper,
	flipboxBackWrapper,
} from "./constants/backgroundsConstants";
const attributes = {
	// responsive control attributes ⬇
	resOption: {
		type: "string",
		default: "Desktop",
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
	flipboxStyle: {
		type: "string",
		default: "default",
	},
	isHover: {
		type: "boolean",
		default: false,
	},
	flipType: {
		type: "string",
		source: "attribute",
		selector: ".eb-flipbox-container",
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
		selector: "eb-flipbox-icon-wrapper-front",
		attribute: "data-icon",
		default: "fab fa-rev",
	},
	frontImageUrl: {
		type: "attribute",
		selector: "eb-flipbox-front-image-container img",
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
	showFrontTitle: {
		type: "boolean",
		default: true,
	},
	frontTitle: {
		type: "string",
		selector: "eb-flipbox-front-title",
		default: "Front Title Here",
	},
	showFrontContent: {
		type: "boolean",
		default: true,
	},
	frontContent: {
		type: "string",
		selector: "eb-flipbox-front-content",
		default: "Front Content Here",
	},
	showBackTitle: {
		type: "boolean",
		default: true,
	},
	backTitle: {
		type: "string",
		selector: "eb-flipbox-back-title",
		default: "Back Title Here",
	},
	showBackContent: {
		type: "boolean",
		default: true,
	},
	backContent: {
		type: "string",
		selector: "eb-flipbox-back-content",
		default: "Back Content Here",
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
	backTitleColor: {
		type: "string",
	},
	frontContentColor: {
		type: "string",
	},
	backContentColor: {
		type: "string",
	},
	frontIconColor: {
		type: "string",
	},
	backIconColor: {
		type: "string",
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
	frontIconBackground: {
		type: "string",
	},
	backIconBackground: {
		type: "string",
	},
	transitionSpeed: {
		type: "number",
	},
	displayButtonIcon: {
		type: "boolean",
		default: false,
	},
	align: {
		type: "string",
		default: "center",
	},
	// typography attributes ⬇
	...generateTypographyAttributes(Object.values(prefixObjs)),
	// margin padding attributes ⬇
	...generateDimensionsAttributes(dimensionsMargin),
	...generateDimensionsAttributes(dimensionsPadding),
	...generateDimensionsAttributes(buttonPadding),
	...generateDimensionsAttributes(frontIconMargin),
	...generateDimensionsAttributes(frontIconPadding),
	...generateDimensionsAttributes(backIconMargin),
	...generateDimensionsAttributes(backIconPadding),
	// range controller
	...generateResponsiveRangeAttributes(boxHeightAttr, {
		defaultRange: 310,
	}),
	...generateResponsiveRangeAttributes(boxWidthAttr, {
		defaultRange: 600,
	}),
	...generateResponsiveRangeAttributes(boxFrontIconSizeAttr, {
		defaultRange: 50,
	}),
	...generateResponsiveRangeAttributes(boxBackIconSizeAttr, {
		defaultRange: 50,
	}),
	...generateResponsiveRangeAttributes(buttonIconSizeAttr, {
		defaultRange: 100,
	}),
	...generateResponsiveRangeAttributes(frontImgSizeAttr, {
		defaultRange: 100,
	}),
	...generateResponsiveRangeAttributes(backImgSizeAttr, {
		defaultRange: 100,
	}),
	...generateResponsiveRangeAttributes(frontImgRadiusAttr),
	...generateResponsiveRangeAttributes(backImgRadiusAttr),
	// border shadow controller
	...generateBorderShadowAttributes(borderShadow),
	...generateBorderShadowAttributes(borderShadowBtn),
	...generateBorderShadowAttributes(borderShadowFrontIcon, { noShadow: true }),
	...generateBorderShadowAttributes(borderShadowBackIcon, { noShadow: true }),
	// background Attributes
	...generateBackgroundAttributes(flipboxFrontWrapper, {
		defaultFillColor: "#7967ff",
		defaultBgGradient: "linear-gradient(45deg,#3347CA,#8593F2)",
	}),
	...generateBackgroundAttributes(flipboxBackWrapper, {
		defaultFillColor: "#3074ff",
		defaultBgGradient: "linear-gradient(45deg,#8593F2,#3347CA)",
	}),
};

export default attributes;
