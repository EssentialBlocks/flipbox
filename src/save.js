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
        selectedSide,
        frontIconOrImage,
        frontImageUrl,
        frontIcon,
        frontTitle,
        frontContent,
        backImageUrl,
        backIcon,
        backTitle,
        backContent,
        link,
        linkType,
        buttonText,
        buttonIcon,
        buttonIconPos,
        buttonClasses,
        displayButtonIcon,
    } = attributes;

    return (
        <div {...useBlockProps.save()}>
            <div
                className={`flip-container ${blockId}`}
                data-id={blockId}
                data-flip-type={flipType}
            >
                <div className={`flipper ${flipType}`}>
                    <FlipboxWrapper className="front">
                        <FlipboxContent
                            selectedSide={selectedSide}
                            iconOrImage={frontIconOrImage}
                            imageUrl={frontImageUrl}
                            icon={frontIcon}
                            linkType={linkType}
                            title={frontTitle}
                            content={frontContent}
                        />
                    </FlipboxWrapper>

                    <div
                        className="back"
                        onClick={
                            linkType === "box" && link ? `window.location='${link}'` : undefined
                        }
                    >
                        <div className="flipbox-items-container">
                            <div
                                className={`back-image-container`}
                            >
                                <img src={backImageUrl} />
                            </div>

                            <div
                                className={`flipbox-icon-wrapper-back`}
                                data-icon={backIcon}
                            >
                                <span className={`${backIcon} flipbox-icon`} />
                            </div>

                            <h3
                                className={`back-title`}
                                onClick={
                                    linkType === "title" && link
                                        ? `window.location='${link}'`
                                        : undefined
                                }
                            >
                                {backTitle}
                            </h3>

                            <p className={`back-content`} >
                                {backContent}
                            </p>
                        </div>

                        <FlipboxButton
                            classNames={buttonClasses}
                            link={link}
                            buttonText={buttonText}
                            buttonIcon={buttonIcon}
                            displayButtonIcon={displayButtonIcon}
                            buttonIconPos={buttonIconPos}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Save;
