const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import "./style.scss";
import Edit from "./edit";
import save from "./save";
import attributes from "./attributes";
import example from "./example";
import icon from "./icon";
import deprecated from "./deprecated";
registerBlockType("flipbox/flipbox-block", {
	apiVersion: 2,
	title: __("Flipbox", "flipbox"),
	description: __(
		"Deliver Your Content Beautifully To Grab Attention",
		"flipbox"
	),
	category: "widgets",
	keywords: ["flipbox", "flip", "box"],
	icon,
	attributes,
	example,
	edit: Edit,
	save,
	deprecated,
});
