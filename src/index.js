import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import "./style.scss";
import Edit from "./edit";
import save from "./save";
import attributes from "./attributes";
import example from "./example";
import icon from "./icon";

registerBlockType("create-block/flipbox", {
	title: __("Flipbox"),
	description: __(""),
	category: "widgets",
	icon,
	attributes,
	example,
	edit: Edit,
	save,
});
