import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";

export const DEFAULT_ICON_SIZE = "50";
export const DEFAULT_FRONT_BACKGROUND = "#7967ff";
export const DEFAULT_BACK_BACKGROUND = "#4a5059";

export const FLIPBOX_SIDES = [
	{ label: __("Front", "flipbox"), value: "front" },
	{ label: __("Back", "flipbox"), value: "back" },
];

export const FLIPBOX_TYPE = [
	{ label: __("Flip Left", "flipbox"), value: "flip-left" },
	{ label: __("Flip Right", "flipbox"), value: "flip-right" },
	{ label: __("Flip Up", "flipbox"), value: "flip-up" },
	{ label: __("Flip Bottom", "flipbox"), value: "flip-bottom" },
	{ label: __("Zoom In", "flipbox"), value: "zoom-in" },
	{ label: __("Zoom Out", "flipbox"), value: "zoom-out" },
	{ label: __("Fade", "flipbox"), value: "fade" },
];

export const BORDER_STYLES = [
	{ label: __("Dashed", "flipbox"), value: "dashed" },
	{ label: __("Solid", "flipbox"), value: "solid" },
	{ label: __("Dotted", "flipbox"), value: "dotted" },
	{ label: __("Double", "flipbox"), value: "double" },
	{ label: __("Groove", "flipbox"), value: "groove" },
	{ label: __("Inset", "flipbox"), value: "inset" },
	{ label: __("Outset", "flipbox"), value: "outset" },
	{ label: __("Ridge", "flipbox"), value: "ridge" },
];

export const ICON_TYPE = [
	{ label: __("None", "flipbox"), value: "none" },
	{ label: __("Icon", "flipbox"), value: "icon" },
	{ label: __("Image", "flipbox"), value: "image" },
];

export const LINK_TYPE = [
	{ label: __("Box", "flipbox"), value: "box" },
	{ label: __("Title", "flipbox"), value: "title" },
	{ label: __("Button", "flipbox"), value: "button" },
];

export const ICON_POSITIONS = [
	{ label: __("Before", "flipbox"), value: "before" },
	{ label: __("After", "flipbox"), value: "after" },
];

export const BUTTON_STYLES = [
	{ label: __("Style 1", "flipbox"), value: "styleOne" },
	{ label: __("Style 2", "flipbox"), value: "styleTwo" },
	{ label: __("Style 3", "flipbox"), value: "styleThree" },
	{ label: __("Custom", "flipbox"), value: "custom" },
];

export const BACKGROUND_TYPE = [
	{ label: __("Fill", "flipbox"), value: "fill" },
	{ label: __("Gradient", "flipbox"), value: "gradient" },
	{ label: __("Image", "flipbox"), value: "image" },
];

export const BACKGROUND_SIZE = [
	{ label: __("Auto", "flipbox"), value: "auto" },
	{ label: __("Cover", "flipbox"), value: "cover" },
	{ label: __("Contain", "flipbox"), value: "contain" },
	{ label: __("Custom", "flipbox"), value: "custom" },
];

export const BACKGROUND_REPEAT = [
	{ label: __("Default", "flipbox"), value: "" },
	{ label: __("No-repeat", "flipbox"), value: "no-repeat" },
	{ label: __("Repeat", "flipbox"), value: "repeat" },
	{ label: __("Repeat-x", "flipbox"), value: "repeat-x" },
	{ label: __("Repeat-y", "flipbox"), value: "repeat-y" },
];

export const BACKGROUND_POSITION = [
	{ label: __("Default", "flipbox"), value: "" },
	{ label: __("Center Center", "flipbox"), value: "center center" },
	{ label: __("Center Left", "flipbox"), value: "center left" },
	{ label: __("Center Right", "flipbox"), value: "center right" },
	{ label: __("Top Center", "flipbox"), value: "top center" },
	{ label: __("Top Left", "flipbox"), value: "top left" },
	{ label: __("Top Right", "flipbox"), value: "top right" },
	{ label: __("Bottom Center", "flipbox"), value: "bottom center" },
	{ label: __("Bottom Left", "flipbox"), value: "bottom left" },
	{ label: __("Bottom Right", "flipbox"), value: "bottom right" },
	{ label: __("Custom", "flipbox"), value: "custom" },
];

export const BACKGROUND_ATTACHMENT = [
	{ label: __("Default", "flipbox"), value: "" },
	{ label: __("Fixed", "flipbox"), value: "fixed" },
	{ label: __("Scroll", "flipbox"), value: "scroll" },
];

export const FLIPBOX_STYLES = [
	{ label: __("Default", "flipbox"), value: "default" },
	{ label: __("Mint", "flipbox"), value: "mint" },
	{ label: __("Tangelo", "flipbox"), value: "tangelo" },
	{ label: __("Royal", "flipbox"), value: "royal" },
];

export const FONT_SIZES = [
	{ name: __("Small", "flipbox"), size: 12, slug: "s" },
	{ name: __("Medium", "flipbox"), size: 16, slug: "m" },
	{ name: __("Large", "flipbox"), size: 24, slug: "l" },
	{ name: __("Extra Large", "flipbox"), size: 36, slug: "xl" },
];

export const TEXT_TRANSFORM = [
	{ label: __("None", "flipbox"), value: "none" },
	{ label: __("Lowercase", "flipbox"), value: "lowercase" },
	{ label: __("Capitalize", "flipbox"), value: "capitalize" },
	{ label: __("Uppercase", "flipbox"), value: "uppercase" },
];

export const FONT_WEIGHTS = [
	{ label: __("Lighter", "flipbox"), value: "lighter" },
	{ label: __("Normal", "flipbox"), value: "normal" },
	{ label: __("Bold", "flipbox"), value: "bold" },
	{ label: __("Bolder", "flipbox"), value: "bolder" },
];

export const TEXT_DECORATION = [
	{ label: __("Initial", "flipbox"), value: "initial" },
	{ label: __("Overline", "flipbox"), value: "overline" },
	{ label: __("Line Through", "flipbox"), value: "line-through" },
	{ label: __("Underline", "flipbox"), value: "underline" },
	{ label: __("Underline Oveline", "flipbox"), value: "underline overline" },
];

export const UNIT_TYPES = [
	{ label: "px", value: "px" },
	{ label: "%", value: "%" },
	{ label: "em", value: "em" },
];

export const BOX_HEIGHT_UNIT = [
	{ label: "px", value: "px" },
	{ label: "%", value: "%" },
];

export const FRONT_IMAGE_UNITS = [
	{ label: "px", value: "px" },
	{ label: "%", value: "%" },
];

export const CONTENT_POSITION = [
	{ label: __(<Dashicon icon={"editor-alignleft"} />), value: "left" },
	{ label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
	{ label: __(<Dashicon icon={"editor-alignright"} />), value: "right" },
];
