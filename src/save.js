/**
 * Internal dependencies
 */
import { useBlockProps } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
	const {
		blockId,
		flipType,
		frontIconOrImage,
		frontImageUrl,
		frontIcon,
		showFrontTitle,
		frontTitle,
		showFrontContent,
		frontContent,
		backIconOrImage,
		backImageUrl,
		backIcon,
		showBackTitle,
		backTitle,
		showBackContent,
		backContent,
		link,
		linkType,
		buttonText,
		buttonIcon,
		buttonClasses,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div
				className={`eb-flipbox-container ${blockId}`}
				data-id={blockId}
				data-flip-type={flipType}
			>
				<div className={`eb-flipper ${flipType}`}>
					<div className="eb-flipbox-front">
						<div className="eb-flipbox-items-container">
							{frontIconOrImage !== "none" && (
								<div className="eb-flipbox-icon-wrapper">
									{frontIconOrImage === "image" && frontImageUrl && (
										<div className="eb-flipbox-front-image-container">
											<img src={frontImageUrl} />
										</div>
									)}
									{frontIconOrImage === "icon" && frontIcon && (
										<div
											className="eb-flipbox-icon-front"
											data-icon={frontIcon}
										>
											<span className={frontIcon} />
										</div>
									)}
								</div>
							)}
							{showFrontTitle && (
								<div className="eb-flipbox-front-title-wrapper">
									{linkType === "title" && link ? (
										<a href={link ? link : "#"} className="title-link">
											<h3 className="eb-flipbox-front-title">{frontTitle}</h3>
										</a>
									) : (
										<h3 className="eb-flipbox-front-title">{frontTitle}</h3>
									)}
								</div>
							)}
							{showFrontContent && (
								<div className="eb-flipbox-front-content-wrapper">
									<p className="eb-flipbox-front-content">{frontContent}</p>
								</div>
							)}
						</div>
					</div>

					<div
						className="eb-flipbox-back"
						onClick={
							linkType === "box" && link
								? `window.location='${link}'`
								: undefined
						}
					>
						<div className="eb-flipbox-items-container">
							{backIconOrImage !== "none" && (
								<div className="eb-flipbox-icon-wrapper">
									{backIconOrImage === "image" && backImageUrl && (
										<div className="eb-flipbox-back-image-container">
											<img src={backImageUrl} />
										</div>
									)}
									{backIconOrImage === "icon" && backIcon && (
										<div className="eb-flipbox-icon-back" data-icon={backIcon}>
											<span className={backIcon} />
										</div>
									)}
								</div>
							)}
							{showBackTitle && (
								<div className="eb-flipbox-back-title-wrapper">
									{linkType === "title" && link ? (
										<a href={link ? link : "#"} className="title-link">
											<h3 className="eb-flipbox-back-title">{backTitle}</h3>
										</a>
									) : (
										<h3 className="eb-flipbox-back-title">{backTitle}</h3>
									)}
								</div>
							)}
							{showBackContent && (
								<div className="eb-flipbox-back-content-wrapper">
									<p className="eb-flipbox-back-content">{backContent}</p>
								</div>
							)}
							{linkType === "button" && (
								<div className="eb-flipbox-button-container">
									<a
										className={`eb-flipbox-button-link ${buttonClasses}`}
										href={link ? link : "#"}
									>
										<div className="eb-flipbox-button-content">
											<span>{buttonText}</span>
											<span
												className={`${
													buttonIcon ? "fa fa-" + buttonIcon + " " : ""
												}eb-flipbox-button-icon`}
											/>
										</div>
									</a>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Save;
