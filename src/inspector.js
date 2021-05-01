/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Fragment, useEffect } from "@wordpress/element";
import {
	PanelBody,
	SelectControl,
	Button,
	TextControl,
	TextareaControl,
	RangeControl,
	ToggleControl,
	ButtonGroup,
	BaseControl,
	Dropdown,
} from "@wordpress/components";
import { InspectorControls, MediaUpload } from "@wordpress/block-editor";

/*
 * Internal dependencies
 */
import faIcons from "../util/faIcons";
import GradientColorControl from "../util/gradient-color-controller";
import ImageAvater from "../util/image-avatar/ImageAvater";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import {
	BACKGROUND_SIZE,
	BACKGROUND_TYPE,
	BACKGROUND_REPEAT,
	BACKGROUND_POSITION,
	BORDER_STYLES,
	BUTTON_STYLES,
	FLIPBOX_SIDES,
	FLIPBOX_TYPE,
	ICON_POSITIONS,
	ICON_TYPE,
	LINK_TYPE,
	DEFAULT_ICON_SIZE,
	FONT_WEIGHTS,
	TEXT_TRANSFORM,
	TEXT_DECORATION,
	UNIT_TYPES
} from "./constants";
import { getButtonClasses } from "../util/helper";
import DimensionsControl from "../util/dimensions-control";
import UnitControl from "../util/unit-control";
import FontPicker from "../util/typography-control/FontPicker";
import ColorControl from "../util/color-control";
import ResPanelBody from "./ResPanelBody";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		resOption,
		flipboxStyle,
		boxHeight,
		boxWidth,
		isHover,
		flipType,
		selectedSide,
		frontIconOrImage,
		frontIcon,
		frontImageUrl,
		frontImageId,
		backIconOrImage,
		backIcon,
		backImageUrl,
		backImageId,
		frontTitle,
		frontContent,
		backTitle,
		backContent,
		frontImageSize,
		backImageSize,
		frontBackground,
		backBackground,
		borderStyle,
		borderColor,
		borderWidth,
		borderRadius,
		addLink,
		linkType,
		buttonText,
		buttonIcon,
		buttonIconPos,
		link,
		frontTitleColor,
		backTitleColor,
		frontContentColor,
		backContentColor,
		frontImageRadius,
		backImageRadius,
		frontIconSize,
		backIconSize,
		frontIconColor,
		backIconColor,
		boxShadowColor,
		shadowVOffset,
		shadowHOffset,
		shadowSpread,
		shadowBlur,
		buttonStyle,
		buttonClasses,
		buttonBackground,
		buttonColor,
		buttonSize,
		buttonBorderSize,
		buttonBorderColor,
		buttonBorderType,
		buttonBorderRadius,
		buttonPaddingTop,
		buttonPaddingRight,
		buttonPaddingBottom,
		buttonPaddingLeft,
		btnShadowColor,
		btnShadowVOffset,
		btnShadowHOffset,
		btnShadowBlur,
		btnShadowSpread,
		frontIconBackground,
		frontIconPadding,
		frontIconBorderRadius,
		frontIconTopMargin,
		frontIconBorderSize,
		frontIconBorderType,
		frontIconBorderColor,
		displayFrontIconBorder,
		backIconBackground,
		backIconPadding,
		backIconBorderRadius,
		backIconTopMargin,
		backIconBorderSize,
		backIconBorderType,
		backIconBorderColor,
		displayBackIconBorder,
		frontBackgroundType,
		frontBackgroundGradient,
		backBackgroundType,
		backBackgroundGradient,
		transitionSpeed,
		frontBackgroundImageID,
		frontBackgroundImageURL,
		frontBackgroundPosition,
		frontBackgroundPosX,
		frontBackgroundPosXUnit,
		frontBackgroundPosY,
		frontBackgroundPosYUnit,
		frontBackgroundSize,
		frontBackgroundWidth,
		frontBackgroundWidthUnit,
		frontBackgroundRepeat,
		backBackgroundImageID,
		backBackgroundImageURL,
		backBackgroundPosition,
		backBackgroundPosX,
		backBackgroundPosXUnit,
		backBackgroundPosY,
		backBackgroundPosYUnit,
		backBackgroundSize,
		backBackgroundWidth,
		backBackgroundWidthUnit,
		backBackgroundRepeat,
		displayButtonIcon,
		linkedButtonPadding,
		titleFontSize,
		titleFontSizeUnit,
		contentFontSize,
		contentFontSizeUnit,
		linkedContainerMargin,
		containerMarginTop,
		containerMarginRight,
		containerMarginBottom,
		containerMarginLeft,
		linkedContainerPadding,
		containerPaddingTop,
		containerPaddingRight,
		containerPaddingBottom,
		containerPaddingLeft,

		TABcontainerMarginTop,
		TABcontainerMarginRight,
		TABcontainerMarginBottom,
		TABcontainerMarginLeft,
		TABcontainerPaddingTop,
		TABcontainerPaddingRight,
		TABcontainerPaddingBottom,
		TABcontainerPaddingLeft,

		MOBcontainerMarginTop,
		MOBcontainerMarginRight,
		MOBcontainerMarginBottom,
		MOBcontainerMarginLeft,
		MOBcontainerPaddingTop,
		MOBcontainerPaddingRight,
		MOBcontainerPaddingBottom,
		MOBcontainerPaddingLeft,


		marginUnit,
		paddingUnit,
		TABmarginUnit,
		TABpaddingUnit,
		MOBmarginUnit,
		MOBpaddingUnit,
		radiusUnit,
		buttonSizeUnit,
		buttonPaddingUnit,
		heightUnit,
		widthUnit,
		titleFontFamily,
		titleFontWeight,
		titleTextTransform,
		titleTextDecoration,
		titleLetterSpacing,
		titleLetterSpacingUnit,
		titleLineHeight,
		titleLineHeightUnit,
		contentFontFamily,
		contentFontWeight,
		contentTextTransform,
		contentTextDecoration,
		contentLetterSpacing,
		contentLetterSpacingUnit,
		contentLineHeight,
		contentLineHeightUnit,
	} = attributes;

	// Genereate different button styles
	const handleButtonStyle = (newStyle) => {
		const buttonStyle = newStyle;
		const buttonClasses = getButtonClasses(newStyle);

		setAttributes({ buttonStyle, buttonClasses });
	};

	const TITLE_SIZE_STEP = titleFontSizeUnit === "em" ? 0.1 : 1;
	const TITLE_SIZE_MAX = titleFontSizeUnit === "em" ? 10 : 100;

	const TITLE_LINE_HEIGHT_STEP = titleLineHeightUnit === "em" ? 0.1 : 1;
	const TITLE_LINE_HEIGHT_MAX = titleLineHeightUnit === "em" ? 10 : 100;

	const TITLE_SPACING_STEP = titleLetterSpacingUnit === "em" ? 0.1 : 1;
	const TITLE_SPACING_MAX = titleLetterSpacingUnit === "em" ? 10 : 100;

	const CONTENT_SIZE_STEP = contentFontSizeUnit === "em" ? 0.1 : 1;
	const CONTENT_SIZE_MAX = contentFontSizeUnit === "em" ? 10 : 100;

	const CONTENT_LINE_HEIGHT_STEP = contentLineHeightUnit === "em" ? 0.1 : 1;
	const CONTENT_LINE_HEIGHT_MAX = contentLineHeightUnit === "em" ? 10 : 100;

	const CONTENT_SPACING_STEP = contentLetterSpacingUnit === "em" ? 0.1 : 1;
	const CONTENT_SPACING_MAX = contentLetterSpacingUnit === "em" ? 10 : 100;


		// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once
		useEffect(() => {
			const bodyClasses = document.body.className;
	
			if (!/eb\-res\-option\-/i.test(bodyClasses)) {
				document.body.classList.add("eb-res-option-desktop");
				setAttributes({
					resOption: "desktop",
				});
			} else {
				const resOption = bodyClasses
					.match(/eb-res-option-[^\s]+/g)[0]
					.split("-")[3];
				setAttributes({ resOption });
			}
		}, []);
	
		// this useEffect is for mimmiking css for all the eb blocks on resOption changing
		useEffect(() => {
			const allEbBlocksWrapper = document.querySelectorAll(
				".eb-guten-block-main-parent-wrapper:not(.is-selected) > style"
			);
			if (allEbBlocksWrapper.length < 1) return;
			allEbBlocksWrapper.forEach((styleTag) => {
				const cssStrings = styleTag.textContent;
				const minCss = cssStrings.replace(/\s+/g, " ");
				const regexCssMimmikSpace = /(?<=mimmikcssStart\s\*\/).+(?=\/\*\smimmikcssEnd)/i;
				let newCssStrings = " ";
				if (resOption === "tab") {
					const tabCssStrings = (minCss.match(
						/(?<=tabcssStart\s\*\/).+(?=\/\*\stabcssEnd)/i
					) || [" "])[0];
					newCssStrings = minCss.replace(regexCssMimmikSpace, tabCssStrings);
				} else if (resOption === "mobile") {
					const tabCssStrings = (minCss.match(
						/(?<=tabcssStart\s\*\/).+(?=\/\*\stabcssEnd)/i
					) || [" "])[0];
	
					const mobCssStrings = (minCss.match(
						/(?<=mobcssStart\s\*\/).+(?=\/\*\smobcssEnd)/i
					) || [" "])[0];
	
					newCssStrings = minCss.replace(
						regexCssMimmikSpace,
						`${tabCssStrings} ${mobCssStrings}`
					);
				} else {
					newCssStrings = minCss.replace(regexCssMimmikSpace, " ");
				}
				styleTag.textContent = newCssStrings;
			});
		}, [resOption]);
	
		const resRequiredProps = {
			setAttributes,
			resOption,
		};
	
		const typoRequiredProps = {
			attributes,
			setAttributes,
			resOption,
		};

	return (
		<InspectorControls keys="controls">
			<PanelBody title={__("Flipbox setting")}>
				<UnitControl
					selectedUnit={heightUnit}
					unitTypes={[
						{ label: "px", value: "px" },
						{ label: "em", value: "em" },
						{ label: "%", value: "%" },
					]}
					onClick={(heightUnit) => setAttributes({ heightUnit })}
				/>

				<RangeControl
					label={__("Box Height")}
					value={boxHeight}
					allowReset
					onChange={(newSize) => setAttributes({ boxHeight: newSize })}
					min={0}
					max={600}
				/>

				<UnitControl
					selectedUnit={widthUnit}
					unitTypes={[
						{ label: "px", value: "px" },
						{ label: "em", value: "em" },
						{ label: "%", value: "%" },
					]}
					onClick={(widthUnit) => setAttributes({ widthUnit })}
				/>

				<RangeControl
					label={__("Box Width")}
					value={boxWidth}
					allowReset
					onChange={(newSize) => setAttributes({ boxWidth: newSize })}
					min={0}
					max={600}
				/>

				<SelectControl
					label={__("Flipbox Type")}
					value={flipType}
					options={FLIPBOX_TYPE}
					onChange={(newStyle) => setAttributes({ flipType: newStyle })}
				/>

				<RangeControl
					label={__("Transition Speed")}
					value={transitionSpeed}
					onChange={(newValue) => {
						let transitionSpeed = newValue;
						setAttributes({ transitionSpeed });
					}}
					min={0}
					max={20}
				/>

				<BaseControl label={__("Selected Side")}>
					<ButtonGroup>
						{FLIPBOX_SIDES.map((option) => (
							<Button
								isLarge
								isPrimary={selectedSide === option.value}
								isSecondary={selectedSide !== option.value}
								onClick={() =>
									setAttributes({
										selectedSide: option.value,
									})
								}
							>
								{option.label}
							</Button>
						))}
					</ButtonGroup>
				</BaseControl>

				{selectedSide === "front" && (
					<Fragment>
						<BaseControl label={__("Icon Type")} id="eb-flipbox-icon-type">
							<ButtonGroup id="eb-flipbox-icon-type">
								{ICON_TYPE.map((item) => (
									<Button
										isLarge
										isPrimary={frontIconOrImage === item.value}
										isSecondary={frontIconOrImage !== item.value}
										onClick={() =>
											setAttributes({
												frontIconOrImage: item.value,
											})
										}
									>
										{item.label}
									</Button>
								))}
							</ButtonGroup>
						</BaseControl>
					</Fragment>
				)}

				{selectedSide === "back" && (
					<Fragment>
						<BaseControl label={__("Icon Type")} id="eb-flipbox-icon-type">
							<ButtonGroup id="eb-flipbox-icon-type">
								{ICON_TYPE.map((item) => (
									<Button
										isLarge
										isPrimary={backIconOrImage === item.value}
										isSecondary={backIconOrImage !== item.value}
										onClick={() =>
											setAttributes({
												backIconOrImage: item.value,
											})
										}
									>
										{item.label}
									</Button>
								))}
							</ButtonGroup>
						</BaseControl>
					</Fragment>
				)}
			</PanelBody>

			{selectedSide === "front" && frontIconOrImage === "icon" && (
				<PanelBody title={__("Front Icon Settings")}>
					<Fragment>
						<BaseControl label={__("Select Front Icon")}>
							<FontIconPicker
								icons={faIcons}
								value={frontIcon}
								onChange={(frontIcon) => setAttributes({ frontIcon })}
								appendTo="body"
								closeOnSelect
							/>
						</BaseControl>

						{frontIcon && (
							<Fragment>
								<ColorControl
									label={__("Icon Color")}
									color={frontIconColor}
									onChange={(frontIconColor) =>
										setAttributes({ frontIconColor })
									}
								/>

								<ColorControl
									label={__("Icon Background")}
									color={frontIconBackground}
									onChange={(frontIconBackground) =>
										setAttributes({ frontIconBackground })
									}
								/>

								<RangeControl
									label={__("Icon Size")}
									value={frontIconSize || DEFAULT_ICON_SIZE}
									allowReset
									onChange={(newSize) =>
										setAttributes({
											frontIconSize: newSize,
										})
									}
									min={8}
									max={100}
								/>

								<RangeControl
									label={__("Icon Padding")}
									value={frontIconPadding}
									allowReset
									onChange={(newValue) =>
										setAttributes({
											frontIconPadding: newValue,
										})
									}
									min={0}
									max={100}
								/>

								<RangeControl
									label={__("Top Margin")}
									value={frontIconTopMargin}
									allowReset
									onChange={(newValue) =>
										setAttributes({
											frontIconTopMargin: newValue,
										})
									}
									min={0}
									max={100}
								/>

								<PanelBody title={__("Border Settings")} initialOpen={false}>
									<RangeControl
										label={__("Border Size")}
										value={frontIconBorderSize}
										allowReset
										onChange={(newValue) =>
											setAttributes({
												frontIconBorderSize: newValue,
											})
										}
										min={0}
										max={30}
									/>

									<RangeControl
										label={__("Border Radius")}
										value={frontIconBorderRadius}
										allowReset
										onChange={(newValue) =>
											setAttributes({
												frontIconBorderRadius: newValue,
											})
										}
										min={0}
										max={50}
									/>

									<SelectControl
										label={__("Border Type")}
										value={frontIconBorderType}
										options={BORDER_STYLES}
										onChange={(newValue) =>
											setAttributes({
												frontIconBorderType: newValue,
											})
										}
									/>

									<ColorControl
										label={__("Border Color")}
										color={frontIconBorderColor}
										onChange={(frontIconBorderColor) =>
											setAttributes({ frontIconBorderColor })
										}
									/>
								</PanelBody>
							</Fragment>
						)}
					</Fragment>
				</PanelBody>
			)}

			{selectedSide === "front" && frontIconOrImage === "image" && (
				<PanelBody title={__("Front Image Settings")}>
					<BaseControl label={__("Flipbox Image")} id="eb-flipbox-front-image">
						{frontImageUrl ? (
							<Fragment>
								<ImageAvater
									imageUrl={frontImageUrl}
									onDeleteImage={() =>
										setAttributes({
											frontImageUrl: null,
										})
									}
								/>

								<RangeControl
									label={__("Image Size")}
									value={frontImageSize}
									onChange={(newSize) =>
										setAttributes({
											frontImageSize: newSize,
										})
									}
									min={0}
									max={300}
								/>

								<RangeControl
									label={__("Border Radius")}
									value={frontImageRadius}
									onChange={(newValue) =>
										setAttributes({
											frontImageRadius: newValue,
										})
									}
									min={0}
									max={50}
								/>
							</Fragment>
						) : (
							<MediaUpload
								onSelect={(media) =>
									setAttributes({
										frontImageId: media.id,
										frontImageUrl: media.url,
									})
								}
								type="image"
								value={frontImageId}
								render={({ open }) =>
									!frontImageUrl && (
										<Button
											className="eb-flipbox-upload-button"
											label={__("Upload Image")}
											icon="format-image"
											onClick={open}
										/>
									)
								}
							/>
						)}
					</BaseControl>
				</PanelBody>
			)}

			{selectedSide === "back" && backIconOrImage === "icon" && (
				<PanelBody title={__("Back Icon Settings")}>
					<Fragment>
						<BaseControl
							label={__("Select Back Icon")}
							id="eb-flipbox-back-icon"
						>
							<FontIconPicker
								icons={faIcons}
								value={backIcon}
								onChange={(backIcon) => setAttributes({ backIcon })}
								appendTo="body"
								closeOnSelect
							/>
						</BaseControl>

						{backIcon && (
							<Fragment>
								<ColorControl
									label={__("Icon Color")}
									color={backIconColor}
									onChange={(backIconColor) => setAttributes({ backIconColor })}
								/>

								<ColorControl
									label={__("Icon Background")}
									color={backIconBackground}
									onChange={(backIconBackground) =>
										setAttributes({ backIconBackground })
									}
								/>

								<RangeControl
									label={__("Icon Size")}
									value={backIconSize || DEFAULT_ICON_SIZE}
									allowReset
									onChange={(newSize) =>
										setAttributes({
											backIconSize: newSize,
										})
									}
									min={8}
									max={64}
								/>

								<RangeControl
									label={__("Padding")}
									value={backIconPadding}
									allowReset
									onChange={(newValue) =>
										setAttributes({
											backIconPadding: newValue,
										})
									}
									min={0}
									max={100}
								/>

								<RangeControl
									label={__("Top Margin")}
									value={backIconTopMargin}
									allowReset
									onChange={(newValue) =>
										setAttributes({
											backIconTopMargin: newValue,
										})
									}
									min={0}
									max={100}
								/>

								<PanelBody
									title={__("Back Icon Border Settings")}
									initialOpen={false}
								>
									<RangeControl
										label={__("Border Size")}
										value={backIconBorderSize}
										allowReset
										onChange={(newValue) =>
											setAttributes({
												backIconBorderSize: newValue,
											})
										}
										min={0}
										max={30}
									/>

									<RangeControl
										label={__("Border Radius")}
										value={backIconBorderRadius}
										onChange={(newValue) =>
											setAttributes({
												backIconBorderRadius: newValue,
											})
										}
										min={0}
										max={50}
									/>

									<SelectControl
										label={__("Border Type")}
										value={backIconBorderType}
										options={BORDER_STYLES}
										onChange={(newValue) =>
											setAttributes({
												backIconBorderType: newValue,
											})
										}
									/>

									<ColorControl
										label={__("Border Color")}
										color={backIconBorderColor}
										onChange={(backIconBorderColor) =>
											setAttributes({ backIconBorderColor })
										}
									/>
								</PanelBody>
							</Fragment>
						)}
					</Fragment>
				</PanelBody>
			)}

			{selectedSide === "back" && backIconOrImage === "image" && (
				<PanelBody title={__("Back Image Settings")}>
					<BaseControl label={__("Flipbox Image")}>
						{backImageUrl ? (
							<Fragment>
								<ImageAvater
									imageUrl={backImageUrl}
									onDeleteImage={() =>
										setAttributes({
											backImageUrl: null,
										})
									}
								/>
								<RangeControl
									label={__("Image Size")}
									value={backImageSize}
									onChange={(newSize) =>
										setAttributes({
											backImageSize: newSize,
										})
									}
									min={0}
									max={300}
								/>

								<RangeControl
									label={__("Border Radius")}
									value={backImageRadius}
									onChange={(newValue) =>
										setAttributes({
											backImageRadius: newValue,
										})
									}
									min={0}
									max={50}
								/>
							</Fragment>
						) : (
							<MediaUpload
								onSelect={(media) =>
									setAttributes({
										backImageId: media.id,
										backImageUrl: media.url,
									})
								}
								type="image"
								value={backImageId}
								render={({ open }) =>
									!backImageUrl && (
										<Button
											className="eb-flipbox-upload-button"
											label={__("Upload Image")}
											icon="format-image"
											onClick={open}
										/>
									)
								}
							/>
						)}
					</BaseControl>
				</PanelBody>
			)}

			<PanelBody title={__(`Flipbox Content`)} initialOpen={false}>
				{selectedSide === "front" && (
					<Fragment>
						<TextControl
							label={__("Front Title")}
							value={frontTitle}
							onChange={(newText) => setAttributes({ frontTitle: newText })}
						/>

						<TextareaControl
							label={__("Front Content")}
							value={frontContent}
							onChange={(newText) => setAttributes({ frontContent: newText })}
						/>
					</Fragment>
				)}
				{selectedSide === "back" && (
					<Fragment>
						<TextControl
							label={__("Back Title")}
							value={backTitle}
							onChange={(newText) => setAttributes({ backTitle: newText })}
						/>

						<TextareaControl
							label={__("Back Content")}
							value={backContent}
							onChange={(newText) => setAttributes({ backContent: newText })}
						/>
					</Fragment>
				)}
			</PanelBody>

			<PanelBody title={__()} initialOpen={false} />
			<PanelBody title={__("Flipbox Style")} initialOpen={false}>
				{selectedSide === "front" && (
					<BaseControl
						label={__("Front Background Type")}
						id="eb-flipbox-front-background-type"
					>
						<ButtonGroup id="eb-flipbox-front-background-type">
							{BACKGROUND_TYPE.map((item) => (
								<Button
									isLarge
									isPrimary={frontBackgroundType === item.value}
									isSecondary={frontBackgroundType !== item.value}
									onClick={() =>
										setAttributes({
											frontBackgroundType: item.value,
										})
									}
								>
									{item.label}
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>
				)}

				{selectedSide === "front" && frontBackgroundType === "fill" && (
					<ColorControl
						label={__("Front Background")}
						color={frontBackground}
						onChange={(frontBackground) => setAttributes({ frontBackground })}
					/>
				)}

				{selectedSide === "front" && frontBackgroundType === "gradient" && (
					<PanelBody title={__("Background Gradient Colors")}>
						<GradientColorControl
              gradientColor={frontBackgroundGradient }
							onChange={(frontBackgroundGradient) =>
								setAttributes({ frontBackgroundGradient })
							}
						/>
					</PanelBody>
				)}

				{selectedSide === "front" && frontBackgroundType === "image" && (
					<MediaUpload
						onSelect={(media) => {
							setAttributes({
								frontBackgroundImageID: media.id,
								frontBackgroundImageURL: media.url,
							});
						}}
						type="image"
						value={frontBackgroundImageID}
						render={({ open }) =>
							!frontBackgroundImageID && (
								<Button
									isSecondary
									onClick={open}
									className="eb-flipbox-upload-button"
									label={__("Upload Image")}
									icon="format-image"
								></Button>
							)
						}
					/>
				)}

				{selectedSide === "front" &&
					frontBackgroundType === "image" &&
					frontBackgroundImageID && (
						<PanelBody title={__("Background Image")}>
							<ImageAvater
								imageUrl={frontBackgroundImageURL}
								onDeleteImage={() =>
									setAttributes({
										frontBackgroundImageID: null,
										frontBackgroundImageURL: null,
									})
								}
							/>

							<SelectControl
								label={__("Background Position")}
								value={frontBackgroundPosition}
								options={BACKGROUND_POSITION}
								onChange={(frontBackgroundPosition) =>
									setAttributes({ frontBackgroundPosition })
								}
							/>

							{frontBackgroundPosition === "custom" && (
								<>
									<UnitControl
										selectedUnit={frontBackgroundPosXUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
											{ label: "%", value: "%" },
										]}
										onClick={(frontBackgroundPosXUnit) =>
											setAttributes({ frontBackgroundPosXUnit })
										}
									/>

									<RangeControl
										label={__("X Position")}
										value={frontBackgroundPosX}
										onChange={(frontBackgroundPosX) =>
											setAttributes({ frontBackgroundPosX })
										}
									/>

									<UnitControl
										selectedUnit={frontBackgroundPosYUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
											{ label: "%", value: "%" },
										]}
										onClick={(frontBackgroundPosYUnit) =>
											setAttributes({ frontBackgroundPosYUnit })
										}
									/>
									<RangeControl
										label={__("Y Position")}
										value={frontBackgroundPosY}
										onChange={(frontBackgroundPosY) =>
											setAttributes({ frontBackgroundPosY })
										}
									/>
								</>
							)}

							<SelectControl
								label={__("Background Size")}
								value={frontBackgroundSize}
								options={BACKGROUND_SIZE}
								onChange={(frontBackgroundSize) =>
									setAttributes({ frontBackgroundSize })
								}
							/>

							{frontBackgroundSize === "custom" && (
								<>
									<UnitControl
										selectedUnit={frontBackgroundWidthUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
											{ label: "%", value: "%" },
										]}
										onClick={(frontBackgroundWidthUnit) =>
											setAttributes({ frontBackgroundWidthUnit })
										}
									/>

									<RangeControl
										label={__("Width")}
										value={frontBackgroundWidth}
										onChange={(frontBackgroundWidth) =>
											setAttributes({ frontBackgroundWidth })
										}
									/>
								</>
							)}

							<SelectControl
								label={__("Background Repeat")}
								value={frontBackgroundRepeat}
								options={BACKGROUND_REPEAT}
								onChange={(frontBackgroundRepeat) =>
									setAttributes({ frontBackgroundRepeat })
								}
							/>
						</PanelBody>
					)}

				{selectedSide === "front" && (
					<>
						<ColorControl
							label={__("Front Title")}
							color={frontTitleColor}
							onChange={(frontTitleColor) => setAttributes({ frontTitleColor })}
						/>

						<ColorControl
							label={__("Front Content")}
							color={frontContentColor}
							onChange={(frontContentColor) =>
								setAttributes({ frontContentColor })
							}
						/>
					</>
				)}

				{selectedSide === "back" && (
					<BaseControl
						label={__("Back Background Type")}
						id="eb-flipbox-back-background-type"
					>
						<ButtonGroup id="eb-flipbox-back-background-type">
							{BACKGROUND_TYPE.map((item) => (
								<Button
									isLarge
									isPrimary={backBackgroundType === item.value}
									isSecondary={backBackgroundType !== item.value}
									onClick={() =>
										setAttributes({
											backBackgroundType: item.value,
										})
									}
								>
									{item.label}
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>
				)}

				{selectedSide === "back" && backBackgroundType === "fill" && (
					<ColorControl
						label={__("Back Background")}
						color={backBackground}
						onChange={(backBackground) => setAttributes({ backBackground })}
					/>
				)}

				{backBackgroundType === "gradient" && (
					<PanelBody title={__("Background Gradient Colors")}>
						<GradientColorControl
							gradientColor={backBackgroundGradient}
							onChange={(backBackgroundGradient) =>
								setAttributes({
									backBackgroundGradient,
								})
							}
						/>
					</PanelBody>
				)}

				{backBackgroundType === "image" && (
					<MediaUpload
						onSelect={(media) => {
							setAttributes({
								backBackgroundImageID: media.id,
								backBackgroundImageURL: media.url,
							});
						}}
						allowedTypes={["image"]}
						value={backBackgroundImageID}
						render={({ open }) =>
							!backBackgroundImageID && (
								<Button
									className="eb-flipbox-upload-button"
									label={__("Upload Image")}
									icon="format-image"
									onClick={open}
								></Button>
							)
						}
					/>
				)}

				{selectedSide === "back" &&
					backBackgroundType === "image" &&
					backBackgroundImageID && (
						<PanelBody title={__("Background Image")}>
							<ImageAvater
								imageUrl={backBackgroundImageURL}
								onDeleteImage={() =>
									setAttributes({
										backBackgroundImageID: null,
										backBackgroundImageURL: null,
									})
								}
							/>

							<SelectControl
								label={__("Background Position")}
								value={backBackgroundPosition}
								options={BACKGROUND_POSITION}
								onChange={(backBackgroundPosition) =>
									setAttributes({ backBackgroundPosition })
								}
							/>

							{backBackgroundPosition === "custom" && (
								<>
									<UnitControl
										selectedUnit={backBackgroundPosXUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
											{ label: "%", value: "%" },
										]}
										onClick={(backBackgroundPosXUnit) =>
											setAttributes({ backBackgroundPosXUnit })
										}
									/>

									<RangeControl
										label={__("X Position")}
										value={backBackgroundPosX}
										onChange={(backBackgroundPosX) =>
											setAttributes({ backBackgroundPosX })
										}
									/>

									<UnitControl
										selectedUnit={backBackgroundPosYUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
											{ label: "%", value: "%" },
										]}
										onClick={(backBackgroundPosYUnit) =>
											setAttributes({ backBackgroundPosYUnit })
										}
									/>
									<RangeControl
										label={__("Y Position")}
										value={backBackgroundPosY}
										onChange={(backBackgroundPosY) =>
											setAttributes({ backBackgroundPosY })
										}
									/>
								</>
							)}

							<SelectControl
								label={__("Background Size")}
								value={backBackgroundSize}
								options={BACKGROUND_SIZE}
								onChange={(backBackgroundSize) =>
									setAttributes({ backBackgroundSize })
								}
							/>

							{backBackgroundSize === "custom" && (
								<>
									<UnitControl
										selectedUnit={backBackgroundWidthUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
											{ label: "%", value: "%" },
										]}
										onClick={(backBackgroundWidthUnit) =>
											setAttributes({ backBackgroundWidthUnit })
										}
									/>

									<RangeControl
										label={__("Width")}
										value={backBackgroundWidth}
										onChange={(backBackgroundWidth) =>
											setAttributes({ backBackgroundWidth })
										}
									/>
								</>
							)}

							<SelectControl
								label={__("Background Repeat")}
								value={backBackgroundRepeat}
								options={BACKGROUND_REPEAT}
								onChange={(backBackgroundRepeat) =>
									setAttributes({ backBackgroundRepeat })
								}
							/>
						</PanelBody>
					)}

				{selectedSide === "back" && (
					<>
						<ColorControl
							label={__("Back Title Color")}
							color={backTitleColor}
							onChange={(backTitleColor) => setAttributes({ backTitleColor })}
						/>

						<ColorControl
							label={__("Back Content Color")}
							color={backContentColor}
							onChange={(backContentColor) =>
								setAttributes({ backContentColor })
							}
						/>
					</>
				)}

				<ResPanelBody
					title={__("Margin & Padding")}
					initialOpen={false}
					resRequiredProps={resRequiredProps}
				>
					{resOption == "desktop" && (
						<>
							<UnitControl
								selectedUnit={marginUnit}
								unitTypes={UNIT_TYPES}
								onClick={(marginUnit) => setAttributes({ marginUnit })}
							/>

							<DimensionsControl
								label={__("Margin")}
								top={containerMarginTop}
								right={containerMarginRight}
								bottom={containerMarginBottom}
								left={containerMarginLeft}
								onChange={({ top, right, bottom, left }) =>
									setAttributes({
										containerMarginTop: top,
										containerMarginRight: right,
										containerMarginBottom: bottom,
										containerMarginLeft: left,
									})
								}
							/>

							<UnitControl
								selectedUnit={paddingUnit}
								unitTypes={UNIT_TYPES}
								onClick={(paddingUnit) => setAttributes({ paddingUnit })}
							/>

							<DimensionsControl
								label={__("Padding")}
								top={containerPaddingTop}
								right={containerPaddingRight}
								bottom={containerPaddingBottom}
								left={containerPaddingLeft}
								onChange={({ top, right, bottom, left }) =>
									setAttributes({
										containerPaddingTop: top,
										containerPaddingRight: right,
										containerPaddingBottom: bottom,
										containerPaddingLeft: left,
									})
								}
							/>
						</>
					)}
					{resOption == "tab" && (
						<>
							<UnitControl
								selectedUnit={TABmarginUnit}
								unitTypes={UNIT_TYPES}
								onClick={(TABmarginUnit) => setAttributes({ TABmarginUnit })}
							/>

							<DimensionsControl
								label={__("Margin")}
								top={TABcontainerMarginTop}
								right={TABcontainerMarginRight}
								bottom={TABcontainerMarginBottom}
								left={TABcontainerMarginLeft}
								onChange={({ top, right, bottom, left }) =>
									setAttributes({
										TABcontainerMarginTop: top,
										TABcontainerMarginRight: right,
										TABcontainerMarginBottom: bottom,
										TABcontainerMarginLeft: left,
									})
								}
							/>

							<UnitControl
								selectedUnit={TABpaddingUnit}
								unitTypes={UNIT_TYPES}
								onClick={(TABpaddingUnit) => setAttributes({ TABpaddingUnit })}
							/>

							<DimensionsControl
								label={__("Padding")}
								top={TABcontainerPaddingTop}
								right={TABcontainerPaddingRight}
								bottom={TABcontainerPaddingBottom}
								left={TABcontainerPaddingLeft}
								onChange={({ top, right, bottom, left }) =>
									setAttributes({
										TABcontainerPaddingTop: top,
										TABcontainerPaddingRight: right,
										TABcontainerPaddingBottom: bottom,
										TABcontainerPaddingLeft: left,
									})
								}
							/>
						</>
					)}
					{resOption == "mobile" && (
						<>
							<UnitControl
								selectedUnit={MOBmarginUnit}
								unitTypes={UNIT_TYPES}
								onClick={(MOBmarginUnit) => setAttributes({ MOBmarginUnit })}
							/>

							<DimensionsControl
								label={__("Margin")}
								top={MOBcontainerMarginTop}
								right={MOBcontainerMarginRight}
								bottom={MOBcontainerMarginBottom}
								left={MOBcontainerMarginLeft}
								onChange={({ top, right, bottom, left }) =>
									setAttributes({
										MOBcontainerMarginTop: top,
										MOBcontainerMarginRight: right,
										MOBcontainerMarginBottom: bottom,
										MOBcontainerMarginLeft: left,
									})
								}
							/>

							<UnitControl
								selectedUnit={MOBpaddingUnit}
								unitTypes={UNIT_TYPES}
								onClick={(MOBpaddingUnit) => setAttributes({ MOBpaddingUnit })}
							/>

							<DimensionsControl
								label={__("Padding")}
								top={MOBcontainerPaddingTop}
								right={MOBcontainerPaddingRight}
								bottom={MOBcontainerPaddingBottom}
								left={MOBcontainerPaddingLeft}
								onChange={({ top, right, bottom, left }) =>
									setAttributes({
										MOBcontainerPaddingTop: top,
										MOBcontainerPaddingRight: right,
										MOBcontainerPaddingBottom: bottom,
										MOBcontainerPaddingLeft: left,
									})
								}
							/>
						</>
					)}
				</ResPanelBody>
				
				<PanelBody title={__("Border Settings")} initialOpen={false}>
					<SelectControl
						label={__("Border Style")}
						value={borderStyle}
						options={BORDER_STYLES}
						onChange={(newStyle) => setAttributes({ borderStyle: newStyle })}
					/>

					<ColorControl
						label={__("Bordr Color")}
						color={borderColor}
						onChange={(borderColor) => setAttributes({ borderColor })}
					/>

					<RangeControl
						label={__("Border Width")}
						value={borderWidth}
						onChange={(newSize) => setAttributes({ borderWidth: newSize })}
						min={0}
						max={100}
					/>

					<UnitControl
						selectedUnit={radiusUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(radiusUnit) => setAttributes({ radiusUnit })}
					/>

					<RangeControl
						label={__("Border Radius")}
						value={borderRadius}
						onChange={(newSize) => setAttributes({ borderRadius: newSize })}
						min={0}
						max={100}
					/>
				</PanelBody>

				<PanelBody title={__("Shadow Settings")} initialOpen={false}>
					<ColorControl
						label={__("Shadow Color")}
						color={boxShadowColor}
						onChange={(boxShadowColor) => setAttributes({ boxShadowColor })}
					/>

					<RangeControl
						label={__("Vertical Offset")}
						value={shadowVOffset}
						onChange={(newValue) => setAttributes({ shadowVOffset: newValue })}
						min={0}
						max={100}
					/>

					<RangeControl
						label={__("Horizontal Offset")}
						value={shadowHOffset}
						onChange={(newValue) => setAttributes({ shadowHOffset: newValue })}
						min={0}
						max={100}
					/>

					<RangeControl
						label={__("Blur")}
						value={shadowBlur}
						onChange={(newValue) => setAttributes({ shadowBlur: newValue })}
						min={0}
						max={100}
					/>

					<RangeControl
						label={__("Spread")}
						value={shadowSpread}
						onChange={(newValue) => setAttributes({ shadowSpread: newValue })}
						min={0}
						max={100}
					/>
				</PanelBody>
			</PanelBody>

			<PanelBody title={__("Typography")} initialOpen={false}>
				<BaseControl label={__("Title")} className="eb-typography-base">
					<Dropdown
						className="eb-typography-dropdown"
						contentClassName="my-popover-content-classname"
						position="bottom right"
						renderToggle={({ isOpen, onToggle }) => (
							<Button
								isSmall
								onClick={onToggle}
								aria-expanded={isOpen}
								icon="edit"
							></Button>
						)}
						renderContent={() => (
							<div style={{ padding: "1rem" }}>
								<FontPicker
									label={__("Font Family")}
									value={titleFontFamily}
									onChange={(titleFontFamily) =>
										setAttributes({ titleFontFamily })
									}
								/>

								<UnitControl
									selectedUnit={titleFontSizeUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "%", value: "%" },
										{ label: "em", value: "em" },
									]}
									onClick={(titleFontSizeUnit) =>
										setAttributes({ titleFontSizeUnit })
									}
								/>

								<RangeControl
									label={__("Font Size")}
									value={titleFontSize}
									onChange={(titleFontSize) => setAttributes({ titleFontSize })}
									step={TITLE_SIZE_STEP}
									min={0}
									max={TITLE_SIZE_MAX}
								/>

								<SelectControl
									label={__("Font Weight")}
									value={titleFontWeight}
									options={FONT_WEIGHTS}
									onChange={(titleFontWeight) =>
										setAttributes({ titleFontWeight })
									}
								/>

								<SelectControl
									label={__("Text Transform")}
									value={titleTextTransform}
									options={TEXT_TRANSFORM}
									onChange={(titleTextTransform) =>
										setAttributes({ titleTextTransform })
									}
								/>

								<SelectControl
									label={__("Text Decoration")}
									value={titleTextDecoration}
									options={TEXT_DECORATION}
									onChange={(titleTextDecoration) =>
										setAttributes({ titleTextDecoration })
									}
								/>

								<UnitControl
									selectedUnit={titleLetterSpacingUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "em", value: "em" },
									]}
									onClick={(titleLetterSpacingUnit) =>
										setAttributes({ titleLetterSpacingUnit })
									}
								/>

								<RangeControl
									label={__("Letter Spacing")}
									value={titleLetterSpacing}
									onChange={(titleLetterSpacing) =>
										setAttributes({ titleLetterSpacing })
									}
									min={0}
									max={TITLE_SPACING_MAX}
									step={TITLE_SPACING_STEP}
								/>

								<UnitControl
									selectedUnit={titleLineHeightUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "em", value: "em" },
									]}
									onClick={(titleLineHeightUnit) =>
										setAttributes({ titleLineHeightUnit })
									}
								/>

								<RangeControl
									label={__("Line Height")}
									value={titleLineHeight}
									onChange={(titleLineHeight) =>
										setAttributes({ titleLineHeight })
									}
									min={0}
									max={TITLE_LINE_HEIGHT_MAX}
									step={TITLE_LINE_HEIGHT_STEP}
								/>
							</div>
						)}
					/>
				</BaseControl>

				<BaseControl label={__("Content")} className="eb-typography-base">
					<Dropdown
						className="eb-typography-dropdown"
						contentClassName="my-popover-content-classname"
						position="bottom right"
						renderToggle={({ isOpen, onToggle }) => (
							<Button
								isSmall
								onClick={onToggle}
								aria-expanded={isOpen}
								icon="edit"
							></Button>
						)}
						renderContent={() => (
							<div style={{ padding: "1rem" }}>
								<FontPicker
									label={__("Font Family")}
									value={contentFontFamily}
									onChange={(contentFontFamily) =>
										setAttributes({ contentFontFamily })
									}
								/>

								<UnitControl
									selectedUnit={contentFontSizeUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "%", value: "%" },
										{ label: "em", value: "em" },
									]}
									onClick={(contentFontSizeUnit) =>
										setAttributes({ contentFontSizeUnit })
									}
								/>

								<RangeControl
									label={__("Font Size")}
									value={contentFontSize}
									onChange={(contentFontSize) =>
										setAttributes({ contentFontSize })
									}
									step={CONTENT_SIZE_STEP}
									min={0}
									max={CONTENT_SIZE_MAX}
								/>

								<SelectControl
									label={__("Font Weight")}
									value={contentFontWeight}
									options={FONT_WEIGHTS}
									onChange={(contentFontWeight) =>
										setAttributes({ contentFontWeight })
									}
								/>

								<SelectControl
									label={__("Text Transform")}
									value={contentTextTransform}
									options={TEXT_TRANSFORM}
									onChange={(contentTextTransform) =>
										setAttributes({ contentTextTransform })
									}
								/>

								<SelectControl
									label={__("Text Decoration")}
									value={contentTextDecoration}
									options={TEXT_DECORATION}
									onChange={(contentTextDecoration) =>
										setAttributes({ contentTextDecoration })
									}
								/>

								<UnitControl
									selectedUnit={contentLetterSpacingUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "em", value: "em" },
									]}
									onClick={(contentLetterSpacingUnit) =>
										setAttributes({ contentLetterSpacingUnit })
									}
								/>

								<RangeControl
									label={__("Letter Spacing")}
									value={contentLetterSpacing}
									onChange={(contentLetterSpacing) =>
										setAttributes({ contentLetterSpacing })
									}
									min={0}
									max={CONTENT_SPACING_MAX}
									step={CONTENT_SPACING_STEP}
								/>

								<UnitControl
									selectedUnit={contentLineHeightUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "em", value: "em" },
									]}
									onClick={(contentLineHeightUnit) =>
										setAttributes({ contentLineHeightUnit })
									}
								/>

								<RangeControl
									label={__("Line Height")}
									value={contentLineHeight}
									onChange={(contentLineHeight) =>
										setAttributes({ contentLineHeight })
									}
									min={0}
									max={CONTENT_LINE_HEIGHT_MAX}
									step={CONTENT_LINE_HEIGHT_STEP}
								/>
							</div>
						)}
					/>
				</BaseControl>
			</PanelBody>

			<PanelBody title={__("Font Sizes")} initialOpen={false}>
				<RangeControl
					label={__("Title Font Size")}
					value={titleFontSize}
					allowReset
					onChange={(titleFontSize) => setAttributes({ titleFontSize })}
					min={0}
					max={64}
				/>

				<RangeControl
					label={__("Content Font Size")}
					value={contentFontSize}
					allowReset
					onChange={(contentFontSize) => setAttributes({ contentFontSize })}
					min={0}
					max={64}
				/>
			</PanelBody>

			<PanelBody title={__("Link Settings")} initialOpen={false}>
				<BaseControl label={__("Link Type")} id="eb-flipbox-link-type">
					<ButtonGroup id="eb-flipbox-link-type">
						{LINK_TYPE.map((item) => (
							<Button
								isLarge
								isPrimary={linkType === item.value}
								isSecondary={linkType !== item.value}
								onClick={() => setAttributes({ linkType: item.value })}
							>
								{item.label}
							</Button>
						))}
					</ButtonGroup>
				</BaseControl>

				<TextControl
					label={__("Link")}
					value={link}
					placeholder="https://your-link.com"
					onChange={(newLink) => setAttributes({ link: newLink })}
				/>

				{linkType === "button" && (
					<TextControl
						label={__("Button Text")}
						value={buttonText}
						onChange={(newText) => setAttributes({ buttonText: newText })}
					/>
				)}

				{linkType === "button" && (
					<PanelBody title={__("Button Settings")}>
						<SelectControl
							label={__("Button Style")}
							value={buttonStyle}
							options={BUTTON_STYLES}
							onChange={(newStyle) => handleButtonStyle(newStyle)}
						/>

						{buttonStyle === "custom" && (
							<Fragment>
								<ColorControl
									label={__("Background ")}
									color={buttonBackground}
									onChange={(buttonBackground) =>
										setAttributes({ buttonBackground })
									}
								/>

								<ColorControl
									label={__("Color")}
									color={buttonColor}
									onChange={(buttonColor) => setAttributes({ buttonColor })}
								/>

								<PanelBody title={__("Button Size")} initialOpen={false}>
									<UnitControl
										selectedUnit={buttonSizeUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
											{ label: "%", value: "%" },
										]}
										onClick={(buttonSizeUnit) =>
											setAttributes({ buttonSizeUnit })
										}
									/>

									<RangeControl
										label={__("Button Size")}
										value={buttonSize}
										allowReset
										onChange={(newSize) =>
											setAttributes({
												buttonSize: newSize,
											})
										}
										min={20}
										max={600}
									/>
								</PanelBody>

								<PanelBody title={__("Button Padding")} initialOpen={false}>
									<UnitControl
										selectedUnit={buttonPaddingUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
											{ label: "%", value: "%" },
										]}
										onClick={(buttonPaddingUnit) =>
											setAttributes({ buttonPaddingUnit })
										}
									/>

									<DimensionsControl
										label={__("Padding")}
										top={buttonPaddingTop}
										right={buttonPaddingRight}
										bottom={buttonPaddingBottom}
										left={buttonPaddingLeft}
										onChange={({ top, right, bottom, left }) =>
											setAttributes({
												buttonPaddingTop: top,
												buttonPaddingRight: right,
												buttonPaddingBottom: bottom,
												buttonPaddingLeft: left,
											})
										}
									/>
								</PanelBody>

								<PanelBody title={__("Button Border")} initialOpen={false}>
									<ColorControl
										label={__("Border Color")}
										color={buttonBorderColor}
										onChange={(buttonBorderColor) =>
											setAttributes({ buttonBorderColor })
										}
									/>

									<RangeControl
										label={__("Border Size")}
										value={buttonBorderSize}
										onChange={(newSize) =>
											setAttributes({
												buttonBorderSize: newSize,
											})
										}
										min={0}
										max={10}
									/>

									<RangeControl
										label={__("Border Radius")}
										value={buttonBorderRadius}
										onChange={(newSize) =>
											setAttributes({
												buttonBorderRadius: newSize,
											})
										}
										min={0}
										max={50}
									/>

									<SelectControl
										label={__("Border Type")}
										value={buttonBorderType}
										options={BORDER_STYLES}
										onChange={(newType) =>
											setAttributes({
												buttonBorderType: newType,
											})
										}
									/>
								</PanelBody>

								<PanelBody title={__("Button Shadow")} initialOpen={false}>
									<ColorControl
										label={__("Shadow Color")}
										color={btnShadowColor}
										onChange={(btnShadowColor) =>
											setAttributes({ btnShadowColor })
										}
									/>

									<RangeControl
										label={__("Vertical Offset")}
										value={btnShadowVOffset}
										allowReset
										onChange={(newValue) =>
											setAttributes({
												btnShadowVOffset: newValue,
											})
										}
										min={0}
										max={30}
									/>

									<RangeControl
										label={__("Horizontal Offset")}
										value={btnShadowHOffset}
										allowReset
										onChange={(newValue) =>
											setAttributes({
												btnShadowHOffset: newValue,
											})
										}
										min={0}
										max={30}
									/>

									<RangeControl
										label={__("Blur")}
										value={btnShadowBlur}
										allowReset
										onChange={(newValue) =>
											setAttributes({
												btnShadowBlur: newValue,
											})
										}
										min={0}
										max={30}
									/>

									<RangeControl
										label={__("Spread")}
										value={btnShadowSpread}
										allowReset
										onChange={(newValue) =>
											setAttributes({
												btnShadowSpread: newValue,
											})
										}
										min={0}
										max={30}
									/>
								</PanelBody>

								<PanelBody title={__("Button Icon")} initialOpen={false}>
									<ToggleControl
										label={__("Display Button Icon")}
										checked={displayButtonIcon}
										onChange={() =>
											setAttributes({
												displayButtonIcon: !displayButtonIcon,
											})
										}
									/>

									{displayButtonIcon && (
										<BaseControl
											label={__("Select Icon")}
											id="eb-flipbox-link-icon"
											help="Add icon with button (optional)"
										>
											<FontIconPicker
												icons={faIcons}
												value={buttonIcon}
												onChange={(buttonIcon) =>
													setAttributes({
														buttonIcon,
													})
												}
												appendTo="body"
												closeOnSelect
											/>
										</BaseControl>
									)}

									{displayButtonIcon && buttonIcon && (
										<Fragment>
											<BaseControl
												label={__("Icon Position")}
												id="eb-flipbox-icon-pos"
											>
												<ButtonGroup id="eb-flipbox-icon-pos">
													{ICON_POSITIONS.map((item) => (
														<Button
															style={{
																zIndex: 0,
															}} // ? Add this style to fix icon list and primary button issue
															isLarge
															isSecondary={buttonIconPos !== item.value}
															isPrimary={buttonIconPos === item.value}
															onClick={() =>
																setAttributes({
																	buttonIconPos: item.value,
																})
															}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>
										</Fragment>
									)}
								</PanelBody>
							</Fragment>
						)}
					</PanelBody>
				)}
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
