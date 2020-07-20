import React from "react";

export const FlipboxIcon = ({ selectedSide, icon, style }) => (
	<div
		className={`flipbox-icon-wrapper-${selectedSide}`}
		style={style}
		data-icon={icon}
	>
		<span className={icon} />
	</div>
);
