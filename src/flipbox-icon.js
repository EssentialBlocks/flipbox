import React from "react";

export const FlipboxIcon = ({ selectedSide, icon }) => (
	<div
		className={`flipbox-icon-wrapper-${selectedSide}`}
		data-icon={icon}
	>
		<span className={icon} />
	</div>
);
