/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import {
	PanelBody,
	PanelRow,
	SelectControl,
	Button,
	TextControl,
	TextareaControl,
	RangeControl,
	ToggleControl,
	ButtonGroup,
	BaseControl,
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
} from "./constants";
import { getButtonClasses } from "../util/helpers";
import ResponsiveDimensionsControl from "../util/dimensions-control-v2";
import ResponsiveRangeController from "../util/responsive-range-control";
import TypographyDropdown from "../util/typography-control-v2";
import UnitControl from "../util/unit-control";
import ColorControl from "../util/color-control";
import ResetControl from "../util/reset-control";
import ToggleButton from "../util/toggle-button";
import BackgroundControl from "../util/background-control";
import {
	flipboxFrontWrapper,
	flipboxBackWrapper,
} from "./constants/backgroundsConstants";
import {
	dimensionsMargin,
	dimensionsPadding,
	buttonPadding,
} from "./constants/dimensionsNames";
import {
	typoPrefix_title,
	typoPrefix_content,
} from "./constants/typographyPrefixConstants";
import { boxHeightAttr } from "./constants/rangeNames";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		resOption,
		boxHeight,
		boxWidth,
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
		showFrontTitle,
		frontTitle,
		showFrontContent,
		frontContent,
		showBackTitle,
		backTitle,
		showBackContent,
		backContent,
		frontImageSize,
		backImageSize,
		frontBackground,
		backBackground,
		borderStyle,
		borderColor,
		borderWidth,
		borderRadius,
		linkType,
		buttonText,
		buttonIcon,
		buttonIconPos,
		link,
		frontTitleColor,
		frontOpacityColor,
		backTitleColor,
		backOpacityColor,
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
		buttonBackground,
		buttonColor,
		buttonSize,
		buttonBorderSize,
		buttonBorderColor,
		buttonBorderType,
		buttonBorderRadius,
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
		backIconBackground,
		backIconPadding,
		backIconBorderRadius,
		backIconTopMargin,
		backIconBorderSize,
		backIconBorderType,
		backIconBorderColor,
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
		radiusUnit,
		buttonSizeUnit,
		heightUnit,
		widthUnit,
	} = attributes;

	// Genereate different button styles
	const handleButtonStyle = (newStyle) => {
		const buttonStyle = newStyle;
		const buttonClasses = getButtonClasses(newStyle);

		setAttributes({ buttonStyle, buttonClasses });
	};

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
			const regexCssMimmikSpace =
				/(?<=mimmikcssStart\s\*\/).+(?=\/\*\smimmikcssEnd)/i;
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
		attributes,
	};

	return (
		<InspectorControls keys="controls">
			<span className="eb-panel-control">
				<PanelBody>
					<BaseControl label={__("Selected Side")}>
						<ToggleButton
							options={FLIPBOX_SIDES}
							onChange={(value) => setAttributes({ selectedSide: value })}
						/>
					</BaseControl>
				</PanelBody>
				<PanelBody title={__("Flipbox Settings")} initialOpen={false}>
					<UnitControl
						selectedUnit={heightUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
						]}
						onClick={(heightUnit) => setAttributes({ heightUnit })}
					/>

					<ResetControl onReset={() => setAttributes({ boxHeight: undefined })}>
						<RangeControl
							label={__("Box Height")}
							value={boxHeight}
							onChange={(newSize) => setAttributes({ boxHeight: newSize })}
							min={heightUnit === "px" ? 310 : 20}
							max={heightUnit === "px" ? 600 : 100}
						/>
					</ResetControl>

					<ResponsiveRangeController
						baseLabel={__("New Box Height", "flipbox")}
						controlName={boxHeightAttr}
						requiredProps={resRequiredProps}
						min={0}
						max={500}
						step={2}
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

					<ResetControl onReset={() => setAttributes({ boxWidth: undefined })}>
						<RangeControl
							label={__("Box Width")}
							value={boxWidth}
							onChange={(newSize) => setAttributes({ boxWidth: newSize })}
							min={0}
							max={600}
						/>
					</ResetControl>

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

					{selectedSide === "front" && (
						<>
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
						</>
					)}

					{selectedSide === "back" && (
						<>
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
						</>
					)}
				</PanelBody>

				{selectedSide === "front" && frontIconOrImage === "icon" && (
					<PanelBody title={__("Front Icon Settings")} initialOpen={false}>
						<>
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
								<>
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

									<ResetControl
										onReset={() => setAttributes({ frontIconSize: undefined })}
									>
										<RangeControl
											label={__("Icon Size")}
											value={frontIconSize || DEFAULT_ICON_SIZE}
											onChange={(newSize) =>
												setAttributes({
													frontIconSize: newSize,
												})
											}
											min={8}
											max={100}
										/>
									</ResetControl>

									<ResetControl
										onReset={() =>
											setAttributes({ frontIconPadding: undefined })
										}
									>
										<RangeControl
											label={__("Icon Padding")}
											value={frontIconPadding}
											onChange={(newValue) =>
												setAttributes({
													frontIconPadding: newValue,
												})
											}
											min={0}
											max={100}
										/>
									</ResetControl>

									<ResetControl
										onReset={() =>
											setAttributes({ frontIconTopMargin: undefined })
										}
									>
										<RangeControl
											label={__("Top Margin")}
											value={frontIconTopMargin}
											onChange={(newValue) =>
												setAttributes({
													frontIconTopMargin: newValue,
												})
											}
											min={0}
											max={100}
										/>
									</ResetControl>

									<PanelBody title={__("Border Settings")} initialOpen={false}>
										<ResetControl
											onReset={() =>
												setAttributes({ frontIconBorderSize: undefined })
											}
										>
											<RangeControl
												label={__("Border Size")}
												value={frontIconBorderSize}
												onChange={(newValue) =>
													setAttributes({
														frontIconBorderSize: newValue,
													})
												}
												min={0}
												max={30}
											/>
										</ResetControl>

										<ResetControl
											onReset={() =>
												setAttributes({ frontIconBorderRadius: undefined })
											}
										>
											<RangeControl
												label={__("Border Radius")}
												value={frontIconBorderRadius}
												onChange={(newValue) =>
													setAttributes({
														frontIconBorderRadius: newValue,
													})
												}
												min={0}
												max={50}
											/>
										</ResetControl>

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
								</>
							)}
						</>
					</PanelBody>
				)}

				{selectedSide === "front" && frontIconOrImage === "image" && (
					<PanelBody title={__("Front Image Settings")} initialOpen={false}>
						<BaseControl
							label={__("Flipbox Image")}
							id="eb-flipbox-front-image"
						>
							{frontImageUrl ? (
								<>
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
								</>
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
					<PanelBody title={__("Back Icon Settings")} initialOpen={false}>
						<>
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
								<>
									<ColorControl
										label={__("Icon Color")}
										color={backIconColor}
										onChange={(backIconColor) =>
											setAttributes({ backIconColor })
										}
									/>

									<ColorControl
										label={__("Icon Background")}
										color={backIconBackground}
										onChange={(backIconBackground) =>
											setAttributes({ backIconBackground })
										}
									/>

									<ResetControl
										onReset={() => setAttributes({ backIconSize: undefined })}
									>
										<RangeControl
											label={__("Icon Size")}
											value={backIconSize || DEFAULT_ICON_SIZE}
											onChange={(newSize) =>
												setAttributes({
													backIconSize: newSize,
												})
											}
											min={8}
											max={64}
										/>
									</ResetControl>

									<ResetControl
										onReset={() =>
											setAttributes({ backIconPadding: undefined })
										}
									>
										<RangeControl
											label={__("Padding")}
											value={backIconPadding}
											onChange={(newValue) =>
												setAttributes({
													backIconPadding: newValue,
												})
											}
											min={0}
											max={100}
										/>
									</ResetControl>

									<ResetControl
										onReset={() =>
											setAttributes({ backIconTopMargin: undefined })
										}
									>
										<RangeControl
											label={__("Top Margin")}
											value={backIconTopMargin}
											onChange={(newValue) =>
												setAttributes({
													backIconTopMargin: newValue,
												})
											}
											min={0}
											max={100}
										/>
									</ResetControl>

									<PanelBody
										title={__("Back Icon Border Settings")}
										initialOpen={false}
									>
										<ResetControl
											onReset={() =>
												setAttributes({ backIconBorderSize: undefined })
											}
										>
											<RangeControl
												label={__("Border Size")}
												value={backIconBorderSize}
												onChange={(newValue) =>
													setAttributes({
														backIconBorderSize: newValue,
													})
												}
												min={0}
												max={30}
											/>
										</ResetControl>

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
								</>
							)}
						</>
					</PanelBody>
				)}

				{selectedSide === "back" && backIconOrImage === "image" && (
					<PanelBody title={__("Back Image Settings")} initialOpen={false}>
						<BaseControl label={__("Flipbox Image")}>
							{backImageUrl ? (
								<>
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
								</>
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
						<>
							<ToggleControl
								label={__("Show Title?")}
								checked={showFrontTitle}
								onChange={() => {
									setAttributes({ showFrontTitle: !showFrontTitle });
								}}
							/>
							{showFrontTitle && (
								<TextControl
									label={__("Front Title")}
									value={frontTitle}
									onChange={(newText) => setAttributes({ frontTitle: newText })}
								/>
							)}
							<ToggleControl
								label={__("Show Content?")}
								checked={showFrontContent}
								onChange={() => {
									setAttributes({ showFrontContent: !showFrontContent });
								}}
							/>
							{showFrontContent && (
								<TextareaControl
									label={__("Front Content")}
									value={frontContent}
									onChange={(newText) =>
										setAttributes({ frontContent: newText })
									}
								/>
							)}
						</>
					)}
					{selectedSide === "back" && (
						<>
							<ToggleControl
								label={__("Show Title?")}
								checked={showBackTitle}
								onChange={() => {
									setAttributes({ showBackTitle: !showBackTitle });
								}}
							/>
							{showBackTitle && (
								<TextControl
									label={__("Back Title")}
									value={backTitle}
									onChange={(newText) => setAttributes({ backTitle: newText })}
								/>
							)}
							<ToggleControl
								label={__("Show Content?")}
								checked={showBackContent}
								onChange={() => {
									setAttributes({ showBackContent: !showBackContent });
								}}
							/>
							{showBackContent && (
								<TextareaControl
									label={__("Back Content")}
									value={backContent}
									onChange={(newText) =>
										setAttributes({ backContent: newText })
									}
								/>
							)}
						</>
					)}
				</PanelBody>

				<PanelBody title={__("Flipbox Style")} initialOpen={false}>
					{selectedSide === "front" && (
						<BackgroundControl
							controlName={flipboxFrontWrapper}
							resRequiredProps={resRequiredProps}
						/>
					)}

					<>
						{/* {selectedSide === "front" && (
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
								gradientColor={frontBackgroundGradient}
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

								<ColorControl
									label={__("Background Color & Opacity")}
									color={frontOpacityColor}
									onChange={(frontOpacityColor) =>
										setAttributes({ frontOpacityColor })
									}
								/>
							</PanelBody>
						)} */}
					</>
					{selectedSide === "front" && (
						<>
							<ColorControl
								label={__("Front Title")}
								color={frontTitleColor}
								onChange={(frontTitleColor) =>
									setAttributes({ frontTitleColor })
								}
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

								<ColorControl
									label={__("Background Color & Opacity")}
									color={backOpacityColor}
									onChange={(backOpacityColor) =>
										setAttributes({ backOpacityColor })
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

					<PanelBody title={__("Margin & Padding")} initialOpen={false}>
						<ResponsiveDimensionsControl
							resRequiredProps={resRequiredProps}
							className="forWrapperMargin"
							controlName={dimensionsMargin}
							baseLabel="Margin"
						/>
						<ResponsiveDimensionsControl
							resRequiredProps={resRequiredProps}
							className="forWrapperPadding"
							controlName={dimensionsPadding}
							baseLabel="Padding"
						/>
					</PanelBody>

					<PanelBody title={__("Border Settings")} initialOpen={false}>
						<SelectControl
							label={__("Border Style")}
							value={borderStyle}
							options={BORDER_STYLES}
							onChange={(newStyle) => setAttributes({ borderStyle: newStyle })}
						/>

						<ColorControl
							label={__("Border Color")}
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
							onChange={(newValue) =>
								setAttributes({ shadowVOffset: newValue })
							}
							min={0}
							max={100}
						/>

						<RangeControl
							label={__("Horizontal Offset")}
							value={shadowHOffset}
							onChange={(newValue) =>
								setAttributes({ shadowHOffset: newValue })
							}
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
					<TypographyDropdown
						baseLabel={__("Title", "flipbox")}
						typographyPrefixConstant={typoPrefix_title}
						resRequiredProps={resRequiredProps}
					/>

					<TypographyDropdown
						baseLabel={__("Content", "flipbox")}
						typographyPrefixConstant={typoPrefix_content}
						resRequiredProps={resRequiredProps}
					/>
				</PanelBody>

				<PanelBody title={__("Link Settings")} initialOpen={false}>
					<PanelRow>
						<em>{__("Note: Link settings will only work on back side.")}</em>
					</PanelRow>
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
								<>
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

										<ResetControl
											onReset={() => setAttributes({ buttonSize: undefined })}
										>
											<RangeControl
												label={__("Button Size")}
												value={buttonSize}
												onChange={(newSize) =>
													setAttributes({
														buttonSize: newSize,
													})
												}
												min={20}
												max={600}
											/>
										</ResetControl>
									</PanelBody>

									<PanelBody title={__("Button Padding")} initialOpen={false}>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											className="forWrapperPadding"
											controlName={buttonPadding}
											baseLabel="Padding"
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

										<ResetControl
											onReset={() =>
												setAttributes({ btnShadowVOffset: undefined })
											}
										>
											<RangeControl
												label={__("Vertical Offset")}
												value={btnShadowVOffset}
												onChange={(newValue) =>
													setAttributes({
														btnShadowVOffset: newValue,
													})
												}
												min={0}
												max={30}
											/>
										</ResetControl>

										<ResetControl
											onReset={() =>
												setAttributes({ btnShadowHOffset: undefined })
											}
										>
											<RangeControl
												label={__("Horizontal Offset")}
												value={btnShadowHOffset}
												onChange={(newValue) =>
													setAttributes({
														btnShadowHOffset: newValue,
													})
												}
												min={0}
												max={30}
											/>
										</ResetControl>

										<ResetControl
											onReset={() =>
												setAttributes({ btnShadowBlur: undefined })
											}
										>
											<RangeControl
												label={__("Blur")}
												value={btnShadowBlur}
												onChange={(newValue) =>
													setAttributes({
														btnShadowBlur: newValue,
													})
												}
												min={0}
												max={30}
											/>
										</ResetControl>

										<ResetControl
											onReset={() =>
												setAttributes({ btnShadowSpread: undefined })
											}
										>
											<RangeControl
												label={__("Spread")}
												value={btnShadowSpread}
												onChange={(newValue) =>
													setAttributes({
														btnShadowSpread: newValue,
													})
												}
												min={0}
												max={30}
											/>
										</ResetControl>
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
											<>
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
											</>
										)}
									</PanelBody>
								</>
							)}
						</PanelBody>
					)}
				</PanelBody>
			</span>
		</InspectorControls>
	);
};

export default Inspector;
