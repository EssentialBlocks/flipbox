import { __ } from "@wordpress/i18n";

export const DEFAULT_ICON_SIZE = "50";
export const DEFAULT_FRONT_BACKGROUND = "#7967ff";
export const DEFAULT_BACK_BACKGROUND = "#4a5059";

export const FLIPBOX_SIDES = [
	{ label: __("Front"), value: "front" },
	{ label: __("Back"), value: "back" },
];

export const FLIPBOX_TYPE = [
	{ label: __("Flip Left"), value: "flip-left" },
	{ label: __("Flip Right"), value: "flip-right" },
	{ label: __("Flip Up"), value: "flip-up" },
	{ label: __("Flip Bottom"), value: "flip-bottom" },
	{ label: __("Zoom In"), value: "zoom-in" },
	{ label: __("Zoom Out"), value: "zoom-out" },
];

export const BORDER_STYLES = [
	{ label: __("Dashed"), value: "dashed" },
	{ label: __("Solid"), value: "solid" },
	{ label: __("Dotted"), value: "dotted" },
	{ label: __("Double"), value: "double" },
	{ label: __("Groove"), value: "groove" },
	{ label: __("Inset"), value: "inset" },
	{ label: __("Outset"), value: "outset" },
	{ label: __("Ridge"), value: "ridge" },
];

export const ICON_TYPE = [
	{ label: __("None"), value: "none" },
	{ label: __("Icon"), value: "icon" },
	{ label: __("Image"), value: "image" },
];

export const LINK_TYPE = [
	{ label: __("Box"), value: "box" },
	{ label: __("Title"), value: "title" },
	{ label: __("Button"), value: "button" },
];

export const ICON_POSITIONS = [
	{ label: __("Before"), value: "before" },
	{ label: __("After"), value: "after" },
];

export const BUTTON_STYLES = [
	{ label: __("Style 1"), value: "styleOne" },
	{ label: __("Style 2"), value: "styleTwo" },
	{ label: __("Style 3"), value: "styleThree" },
	{ label: __("Custom"), value: "custom" },
];

export const BACKGROUND_TYPE = [
	{ label: __("Fill"), value: "fill" },
	{ label: __("Gradient"), value: "gradient" },
	{ label: __("Image"), value: "image" },
];

export const BACKGROUND_SIZE = [
	{ label: __("Auto"), value: "auto" },
	{ label: __("Cover"), value: "cover" },
	{ label: __("Contain"), value: "contain" },
	{ label: __("Custom"), value: "custom" },
];

export const BACKGROUND_REPEAT = [
	{ label: __("Default"), value: "" },
	{ label: __("No-repeat"), value: "no-repeat" },
	{ label: __("Repeat"), value: "repeat" },
	{ label: __("Repeat-x"), value: "repeat-x" },
	{ label: __("Repeat-y"), value: "repeat-y" },
];

export const BACKGROUND_POSITION = [
	{ label: __("Default"), value: "" },
	{ label: __("Center Center"), value: "center center" },
	{ label: __("Center Left"), value: "center left" },
	{ label: __("Center Right"), value: "center right" },
	{ label: __("Top Center"), value: "top center" },
	{ label: __("Top Left"), value: "top left" },
	{ label: __("Top Right"), value: "top right" },
	{ label: __("Bottom Center"), value: "bottom center" },
	{ label: __("Bottom Left"), value: "bottom left" },
	{ label: __("Bottom Right"), value: "bottom right" },
	{ label: __("Custom"), value: "custom" },
];

export const BACKGROUND_ATTACHMENT = [
	{ label: __("Default"), value: "" },
	{ label: __("Fixed"), value: "fixed" },
	{ label: __("Scroll"), value: "scroll" },
];

export const FLIPBOX_STYLES = [
	{ label: __("Default"), value: "default" },
	{ label: __("Mint"), value: "mint" },
	{ label: __("Tangelo"), value: "tangelo" },
	{ label: __("Royal"), value: "royal" },
];

export const FONT_SIZES = [
	{ name: __("Small"), size: 12, slug: "s" },
	{ name: __("Medium"), size: 16, slug: "m" },
	{ name: __("Large"), size: 24, slug: "l" },
	{ name: __("Extra Large"), size: 36, slug: "xl" },
];

export const TEXT_TRANSFORM = [
	{ label: __("None"), value: "none" },
	{ label: __("Lowercase"), value: "lowercase" },
	{ label: __("Capitalize"), value: "capitalize" },
	{ label: __("Uppercase"), value: "uppercase" },
];

export const FONT_WEIGHTS = [
	{ label: __("Lighter"), value: "lighter" },
	{ label: __("Normal"), value: "normal" },
	{ label: __("Bold"), value: "bold" },
	{ label: __("Bolder"), value: "bolder" },
];

export const TEXT_DECORATION = [
	{ label: __("Initial"), value: "initial" },
	{ label: __("Overline"), value: "overline" },
	{ label: __("Line Through"), value: "line-through" },
	{ label: __("Underline"), value: "underline" },
	{ label: __("Underline Oveline"), value: "underline overline" },
];

export const UNIT_TYPES = [
	{ label: "px", value: "px" },
	{ label: "%", value: "%" },
	{ label: "em", value: "em" },
];
