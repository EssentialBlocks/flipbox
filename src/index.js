import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import "./style.scss";
import Edit from "./edit";
import save from "./save";
import attributes from "./attributes";
import example from "./example";
import icon from "./icon";

registerBlockType("essential-blocks/flipbox", {
	title: __("Flipbox", "essential-blocks"),
	description: __("", "essential-blocks"),
	category: "widgets",
	icon,
	attributes,
	example,
	edit: Edit,
	save,
});
