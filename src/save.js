/**
 * Internal dependencies
 */
import { FlipboxButton } from "./flipbox-button";
import FlipboxContent from "./flipbox-content";
import FlipboxWrapper from "./flipbox-wrapper";
import { useBlockProps } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
	const {
		blockId,
		flipType,
		frontIconOrImage,
		frontImageUrl,
		frontIcon,
		frontTitle,
		frontContent,
		backIconOrImage,
		backImageUrl,
		backIcon,
		backTitle,
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
						{/* <FlipboxContent
							selectedSide="front"
							iconOrImage={frontIconOrImage}
							imageUrl={frontImageUrl}
							icon={frontIcon}
							linkType={linkType}
							title={frontTitle}
							content={frontContent}
						/> */}
						<div className="eb-flipbox-items-container">
							{frontIconOrImage !== 'none' && (
								<div className="eb-flipbox-icon-wrapper">
									{(frontIconOrImage === 'image' && frontImageUrl) && (
										<div className="eb-flipbox-front-image-container">
											<img src={frontImageUrl} />
										</div>
									)}
									{(frontIconOrImage === 'icon' && frontIcon) && (
										<div className="eb-flipbox-icon-front" data-icon={frontIcon}>
											<span className={frontIcon} />
										</div>
									)}
								</div>
							)}
							{frontTitle && (
								<div className="eb-flipbox-front-title-wrapper">
									{
										linkType === "title" && link ?
											<a
												href={link ? link : "#"}
												className="title-link"
											>
												<h3 className="eb-flipbox-front-title">
													{frontTitle}
												</h3>
											</a> :
											<h3 className="eb-flipbox-front-title">
												{frontTitle}
											</h3>
									}
								</div>
							)}
							{frontContent && (
								<div className="eb-flipbox-front-content-wrapper">
									<p className="eb-flipbox-front-content">
										{frontContent}
									</p>
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
						{/* <div className="eb-flipbox-items-container">
							<div className={`back-image-container`}>
								<img src={backImageUrl} />
							</div>

							<div className={`flipbox-icon-wrapper-back`} data-icon={backIcon}>
								<span className={`${backIcon} flipbox-icon`} />
							</div>
							<a href={link ? link : "#"} className="title-link">
								<h3 className="back-title">{backTitle}</h3>
							</a>
							<h3 className={`back-title`}>{backTitle}</h3>

							<p className={`back-content`}>{backContent}</p>
						</div>

						<FlipboxButton
							classNames={buttonClasses}
							link={link}
							buttonText={buttonText}
							buttonIcon={buttonIcon}
							displayButtonIcon={displayButtonIcon}
							buttonIconPos={buttonIconPos}
						/> */}
						<div className="eb-flipbox-items-container">
							{backIconOrImage !== 'none' && (
								<div className="eb-flipbox-icon-wrapper">
									{(backIconOrImage === 'image' && backImageUrl) && (
										<div className="eb-flipbox-back-image-container">
											<img src={backImageUrl} />
										</div>
									)}
									{(backIconOrImage === 'icon' && backIcon) && (
										<div className="eb-flipbox-icon-back" data-icon={backIcon}>
											<span className={backIcon} />
										</div>
									)}
								</div>
							)}
							{backTitle && (
								<div className="eb-flipbox-back-title-wrapper">
									{
										linkType === "title" && link ?
											<a
												href={link ? link : "#"}
												className="title-link"
											>
												<h3 className="eb-flipbox-back-title">
													{backTitle}
												</h3>
											</a> :
											<h3 className="eb-flipbox-back-title">
												{backTitle}
											</h3>
									}
								</div>
							)}
							{backContent && (
								<div className="eb-flipbox-back-content-wrapper">
									<p className="eb-flipbox-back-content">
										{backContent}
									</p>
								</div>
							)}
							{linkType === 'button' && (
								<div className="eb-flipbox-button-container">
									<a className={`eb-flipbox-button-link ${buttonClasses}`} href={link ? link : "#"}>
										<div
											className="eb-flipbox-button-content"
										>
											<span>{buttonText}</span>
											<span
												className={`${buttonIcon ? "fa fa-" + buttonIcon + " " : ''}eb-flipbox-button-icon`}
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
