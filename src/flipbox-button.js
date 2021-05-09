import React from "react";

export const FlipboxButton = ({
	link,
	classNames,
	buttonText,
	buttonIcon,
}) => (
	<div className="flipbox-button-container">
		<a className={`flipbox-button-link ${classNames}`} href={link ? link : "#"}>
			<div
				className="flipbox-button-content"
			>
				<span>{buttonText}</span>
				<span
					className={`${buttonIcon ? "fa fa-" + buttonIcon + " " : ''}flipbox-button-icon`}
				/>
			</div>
		</a>
	</div>
);
