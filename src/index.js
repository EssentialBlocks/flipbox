import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import "./style.scss";
import Edit from "./edit";
import save from "./save";
import attributes from "./attributes";
import example from "./example";
import icon from "./icon";
console.log(attributes)
registerBlockType("flipbox/flipbox-block", {
	apiVersion: 2,
	title: __("Flipbox"),
	description: __("Deliver Your Content Beautifully To Grab Attention"),
	category: "widgets",
	keywords: ["flipbox", "flip", "box"],
	icon,
	attributes,
	example,
	edit: Edit,
	save,
});
