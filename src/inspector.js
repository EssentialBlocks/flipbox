/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { InspectorControls, MediaUpload } from "@wordpress/block-editor";
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
	TabPanel
} from "@wordpress/components";
import { select } from "@wordpress/data";

/*
 * External dependencies
 */
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";

/*
 * Internal dependencies
 */
import objAttributes from "./attributes";
import {
	BUTTON_STYLES,
	FLIPBOX_SIDES,
	FLIPBOX_TYPE,
	ICON_POSITIONS,
	ICON_TYPE,
	LINK_TYPE,
	// BOX_HEIGHT_UNIT,
	FRONT_IMAGE_UNITS,
	CONTENT_POSITION,
} from "./constants";

// import faIcons from "../../../util/faIcons";
// import ImageAvatar from "../../../util/image-avatar";
// import BorderShadowControl from "../../../util/border-shadow-control";
// import {
// 	getButtonClasses,
// 	mimmikCssForResBtns,
// 	mimmikCssOnPreviewBtnClickWhileBlockSelected,
// } from "../../../util/helpers";
// import ResponsiveDimensionsControl from "../../../util/dimensions-control-v2";
// import ResponsiveRangeController from "../../../util/responsive-range-control";
// import TypographyDropdown from "../../../util/typography-control-v2";
// import ColorControl from "../../../util/color-control";
// import BackgroundControl from "../../../util/background-control";

const {
	faIcons,
	ImageAvatar,
	BorderShadowControl,

	//
	getButtonClasses,
	// mimmikCssForResBtns,
	// mimmikCssOnPreviewBtnClickWhileBlockSelected,

	//
	ResponsiveDimensionsControl,
	ResponsiveRangeController,
	TypographyDropdown,
	ColorControl,
	BackgroundControl,
} = window.EBFlipboxControls;

const editorStoreForGettingPreivew =
	eb_style_handler.editor_type === "edit-site"
		? "core/edit-site"
		: "core/edit-post";

import {
	flipboxFrontWrapper,
	flipboxBackWrapper,
} from "./constants/backgroundsConstants";
import {
	dimensionsMargin,
	dimensionsPadding,
	buttonPadding,
	frontIconMargin,
	frontIconPadding,
	backIconMargin,
	backIconPadding,
} from "./constants/dimensionsNames";
import {
	borderShadow,
	borderShadowBtn,
	borderShadowFrontIcon,
	borderShadowBackIcon,
} from "./constants/borderShadowConstants";
import {
	typoPrefix_title,
	typoPrefix_content,
} from "./constants/typographyPrefixConstants";
import {
	boxHeightAttr,
	boxWidthAttr,
	boxFrontIconSizeAttr,
	boxBackIconSizeAttr,
	buttonIconSizeAttr,
	frontImgSizeAttr,
	backImgSizeAttr,
	frontImgRadiusAttr,
	backImgRadiusAttr,
} from "./constants/rangeNames";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		resOption,
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
		linkType,
		buttonText,
		buttonIcon,
		buttonIconPos,
		link,
		frontTitleColor,
		backTitleColor,
		frontContentColor,
		backContentColor,
		frontIconColor,
		backIconColor,
		buttonStyle,
		buttonBackground,
		buttonColor,
		frontIconBackground,
		backIconBackground,
		transitionSpeed,
		displayButtonIcon,
		contentPosition,
	} = attributes;

	// Genereate different button styles
	const handleButtonStyle = (newStyle) => {
		const buttonStyle = newStyle;
		const buttonClasses = getButtonClasses(newStyle);

		setAttributes({ buttonStyle, buttonClasses });
	};

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once
	useEffect(() => {
		setAttributes({
			resOption: select(editorStoreForGettingPreivew).__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// // this useEffect is for mimmiking css for all the eb blocks on resOption changing
	// useEffect(() => {
	// 	mimmikCssForResBtns({
	// 		domObj: document,
	// 		resOption,
	// 	});
	// }, [resOption]);

	// // this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM
	// useEffect(() => {
	// 	const cleanUp = mimmikCssOnPreviewBtnClickWhileBlockSelected({
	// 		domObj: document,
	// 		select,
	// 		setAttributes,
	// 	});
	// 	return () => {
	// 		cleanUp();
	// 	};
	// }, []);

	const resRequiredProps = {
		setAttributes,
		resOption,
		attributes,
		objAttributes,
	};

	return (
		<InspectorControls keys="controls">
			<div className="eb-panel-control">
				<TabPanel
					className="eb-parent-tab-panel"
					activeClass="active-tab"
					tabs={[
						{
							name: "general",
							title: __("General", "flipbox"),
							className: "eb-tab general",
						},
						{
							name: "styles",
							title: __("Style", "flipbox"),
							className: "eb-tab styles",
						},
					]}
				>
					{(tab) => (
						<div className={"eb-tab-controls" + tab.name}>
							{tab.name === "general" && (
								<>
									<PanelBody>
										<BaseControl label={__("Selected Side", "flipbox")}>
											<ButtonGroup id="eb-flipbox-sides">
												{FLIPBOX_SIDES.map((item) => (
													<Button
														// isLarge
														isPrimary={selectedSide === item.value}
														isSecondary={selectedSide !== item.value}
														onClick={() =>
															setAttributes({
																selectedSide: item.value,
															})
														}
													>
														{item.label}
													</Button>
												))}
											</ButtonGroup>
										</BaseControl>
									</PanelBody>
									<PanelBody
										title={__("Flipbox Settings", "flipbox")}
										initialOpen={true}
									>
										<BaseControl
											label={__("Alignment", "flipbox")}
											id="eb-button-group-alignment"
										>
											<ButtonGroup id="eb-button-group-alignment">
												{CONTENT_POSITION.map((item) => (
													<Button
														// isLarge
														isPrimary={contentPosition === item.value}
														isSecondary={contentPosition !== item.value}
														onClick={() =>
															setAttributes({
																contentPosition: item.value,
															})
														}
													>
														{item.label}
													</Button>
												))}
											</ButtonGroup>
										</BaseControl>
										<ResponsiveRangeController
											baseLabel={__("Box Height", "flipbox")}
											controlName={boxHeightAttr}
											resRequiredProps={resRequiredProps}
											min={310}
											max={600}
											step={1}
											noUnits
										/>

										<ResponsiveRangeController
											baseLabel={__("Box Width", "flipbox")}
											controlName={boxWidthAttr}
											resRequiredProps={resRequiredProps}
											min={0}
											max={600}
											step={1}
											noUnits
										/>

										<SelectControl
											label={__("Flipbox Type", "flipbox")}
											value={flipType}
											options={FLIPBOX_TYPE}
											onChange={(newStyle) =>
												setAttributes({ flipType: newStyle })
											}
										/>

										<RangeControl
											label={__(
												"Transition Speed(millisecond)",
												"flipbox"
											)}
											value={transitionSpeed}
											onChange={(newValue) => {
												let transitionSpeed = newValue;
												setAttributes({ transitionSpeed });
											}}
											min={0}
											max={5000}
											step={500}
										/>

										{selectedSide === "front" && (
											<>
												<BaseControl
													label={__("Icon Type", "flipbox")}
													id="eb-flipbox-icon-type"
												>
													<ButtonGroup id="eb-flipbox-icon-type">
														{ICON_TYPE.map((item) => (
															<Button
																// isLarge
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
												<BaseControl
													label={__("Icon Type", "flipbox")}
													id="eb-flipbox-icon-type"
												>
													<ButtonGroup id="eb-flipbox-icon-type">
														{ICON_TYPE.map((item) => (
															<Button
																// isLarge
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
										<PanelBody
											title={__("Front Icon Settings", "flipbox")}
											initialOpen={false}
										>
											<>
												<BaseControl
													label={__("Select Front Icon", "flipbox")}
												>
													<FontIconPicker
														icons={faIcons}
														value={frontIcon}
														onChange={(frontIcon) =>
															setAttributes({ frontIcon })
														}
														appendTo="body"
														closeOnSelect
													/>
												</BaseControl>

												{frontIcon && (
													<ResponsiveRangeController
														baseLabel={__("Icon Size", "flipbox")}
														controlName={boxFrontIconSizeAttr}
														resRequiredProps={resRequiredProps}
														min={8}
														max={100}
													/>
												)}
											</>
										</PanelBody>
									)}

									{selectedSide === "front" && frontIconOrImage === "image" && (
										<PanelBody
											title={__("Front Image Settings", "flipbox")}
											initialOpen={false}
										>
											<BaseControl
												label={__("Flipbox Image", "flipbox")}
												id="eb-flipbox-front-image"
											>
												{frontImageUrl ? (
													<>
														<ImageAvatar
															imageUrl={frontImageUrl}
															onDeleteImage={() =>
																setAttributes({
																	frontImageUrl: null,
																})
															}
														/>

														<ResponsiveRangeController
															baseLabel={__("Image Size", "flipbox")}
															controlName={frontImgSizeAttr}
															resRequiredProps={resRequiredProps}
															units={FRONT_IMAGE_UNITS}
															min={0}
															max={300}
															step={1}
														/>

														<ResponsiveRangeController
															baseLabel={__("Image Radius", "flipbox")}
															controlName={frontImgRadiusAttr}
															resRequiredProps={resRequiredProps}
															units={FRONT_IMAGE_UNITS}
															min={0}
															max={100}
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
																	label={__("Upload Image", "flipbox")}
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
										<PanelBody
											title={__("Back Icon Settings", "flipbox")}
											initialOpen={false}
										>
											<>
												<BaseControl
													label={__("Select Back Icon", "flipbox")}
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
													<ResponsiveRangeController
														baseLabel={__("Icon Size", "flipbox")}
														controlName={boxBackIconSizeAttr}
														resRequiredProps={resRequiredProps}
														min={8}
														max={100}
													/>
												)}
											</>
										</PanelBody>
									)}

									{selectedSide === "back" && backIconOrImage === "image" && (
										<PanelBody
											title={__("Back Image Settings", "flipbox")}
											initialOpen={false}
										>
											<BaseControl
												label={__("Flipbox Image", "flipbox")}
											>
												{backImageUrl ? (
													<>
														<ImageAvatar
															imageUrl={backImageUrl}
															onDeleteImage={() =>
																setAttributes({
																	backImageUrl: null,
																})
															}
														/>
														<ResponsiveRangeController
															baseLabel={__("Image Size", "flipbox")}
															controlName={backImgSizeAttr}
															resRequiredProps={resRequiredProps}
															units={FRONT_IMAGE_UNITS}
															min={0}
															max={300}
														/>

														<ResponsiveRangeController
															baseLabel={__("Image Radius", "flipbox")}
															controlName={backImgRadiusAttr}
															resRequiredProps={resRequiredProps}
															units={FRONT_IMAGE_UNITS}
															min={0}
															max={100}
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
																	label={__("Upload Image", "flipbox")}
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

									<PanelBody
										title={__("Flipbox Content", "flipbox")}
										initialOpen={false}
									>
										{selectedSide === "front" && (
											<>
												<ToggleControl
													label={__("Show Title?", "flipbox")}
													checked={showFrontTitle}
													onChange={() => {
														setAttributes({ showFrontTitle: !showFrontTitle });
													}}
												/>
												{showFrontTitle && (
													<TextControl
														label={__("Front Title", "flipbox")}
														value={frontTitle}
														onChange={(newText) =>
															setAttributes({ frontTitle: newText })
														}
													/>
												)}
												<ToggleControl
													label={__("Show Content?", "flipbox")}
													checked={showFrontContent}
													onChange={() => {
														setAttributes({
															showFrontContent: !showFrontContent,
														});
													}}
												/>
												{showFrontContent && (
													<TextareaControl
														label={__("Front Content", "flipbox")}
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
													label={__("Show Title?", "flipbox")}
													checked={showBackTitle}
													onChange={() => {
														setAttributes({ showBackTitle: !showBackTitle });
													}}
												/>
												{showBackTitle && (
													<TextControl
														label={__("Back Title", "flipbox")}
														value={backTitle}
														onChange={(newText) =>
															setAttributes({ backTitle: newText })
														}
													/>
												)}
												<ToggleControl
													label={__("Show Content?", "flipbox")}
													checked={showBackContent}
													onChange={() => {
														setAttributes({
															showBackContent: !showBackContent,
														});
													}}
												/>
												{showBackContent && (
													<TextareaControl
														label={__("Back Content", "flipbox")}
														value={backContent}
														onChange={(newText) =>
															setAttributes({ backContent: newText })
														}
													/>
												)}
											</>
										)}
									</PanelBody>

									<PanelBody
										title={__("Link Settings", "flipbox")}
										initialOpen={false}
									>
										<PanelRow>
											<em>
												{__(
													"Note: Link settings will only work on back side.",
													"flipbox"
												)}
											</em>
										</PanelRow>
										<BaseControl
											label={__("Link Type", "flipbox")}
											id="eb-flipbox-link-type"
										>
											<ButtonGroup id="eb-flipbox-link-type">
												{LINK_TYPE.map((item) => (
													<Button
														// isLarge
														isPrimary={linkType === item.value}
														isSecondary={linkType !== item.value}
														onClick={() =>
															setAttributes({ linkType: item.value })
														}
													>
														{item.label}
													</Button>
												))}
											</ButtonGroup>
										</BaseControl>

										<TextControl
											label={__("Link", "flipbox")}
											value={link}
											placeholder="https://your-link.com"
											onChange={(newLink) => setAttributes({ link: newLink })}
										/>

										{linkType === "button" && (
											<>
												<TextControl
													label={__("Button Text", "flipbox")}
													value={buttonText}
													onChange={(newText) =>
														setAttributes({ buttonText: newText })
													}
												/>
												<SelectControl
													label={__("Button Style", "flipbox")}
													value={buttonStyle}
													options={BUTTON_STYLES}
													onChange={(newStyle) => handleButtonStyle(newStyle)}
												/>
											</>
										)}
									</PanelBody>
								</>
							)}
							{tab.name === "styles" && (
								<>
									<PanelBody>
										<BaseControl
											label={__("Selected Side", "flipbox")}
										>
											<ButtonGroup id="eb-flipbox-sides">
												{FLIPBOX_SIDES.map((item) => (
													<Button
														// isLarge
														isPrimary={selectedSide === item.value}
														isSecondary={selectedSide !== item.value}
														onClick={() =>
															setAttributes({
																selectedSide: item.value,
															})
														}
													>
														{item.label}
													</Button>
												))}
											</ButtonGroup>
										</BaseControl>
									</PanelBody>
									<PanelBody
										title={__("Flipbox Style", "flipbox")}
										initialOpen={true}
									>
										{selectedSide === "front" && (
											<>
												<ColorControl
													label={__("Front Title", "flipbox")}
													color={frontTitleColor}
													onChange={(frontTitleColor) =>
														setAttributes({ frontTitleColor })
													}
												/>

												<ColorControl
													label={__("Front Content", "flipbox")}
													color={frontContentColor}
													onChange={(frontContentColor) =>
														setAttributes({ frontContentColor })
													}
												/>
												<BaseControl>
													<h3 className="eb-control-title">
														{__("Front Side Background", "flipbox")}
													</h3>
												</BaseControl>
												<BackgroundControl
													controlName={flipboxFrontWrapper}
													resRequiredProps={resRequiredProps}
												/>
											</>
										)}

										{selectedSide === "back" && (
											<>
												<ColorControl
													label={__("Back Title Color", "flipbox")}
													color={backTitleColor}
													onChange={(backTitleColor) =>
														setAttributes({ backTitleColor })
													}
												/>

												<ColorControl
													label={__("Back Content Color", "flipbox")}
													color={backContentColor}
													onChange={(backContentColor) =>
														setAttributes({ backContentColor })
													}
												/>
												<BaseControl>
													<h3 className="eb-control-title">
														{__("Back Side Background", "flipbox")}
													</h3>
												</BaseControl>
												<BackgroundControl
													controlName={flipboxBackWrapper}
													resRequiredProps={resRequiredProps}
												/>
											</>
										)}

										<BaseControl>
											<h3 className="eb-control-title">
												{__("Margin & Padding", "flipbox")}
											</h3>
										</BaseControl>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											className="forWrapperMargin"
											controlName={dimensionsMargin}
											baseLabel="Margin"
											disableLeftRight={true}
										/>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											className="forWrapperPadding"
											controlName={dimensionsPadding}
											baseLabel="Padding"
										/>
										<BaseControl>
											<h3 className="eb-control-title">
												{__("Border & Shadow", "flipbox")}
											</h3>
										</BaseControl>
										<BorderShadowControl
											controlName={borderShadow}
											resRequiredProps={resRequiredProps}
										/>
									</PanelBody>
									{selectedSide === "front" && frontIconOrImage === "icon" && (
										<PanelBody
											title={__("Front Icon Style", "flipbox")}
											initialOpen={false}
										>
											<>
												{frontIcon && (
													<>
														<ColorControl
															label={__("Icon Color", "flipbox")}
															color={frontIconColor}
															onChange={(frontIconColor) =>
																setAttributes({ frontIconColor })
															}
														/>

														<ColorControl
															label={__("Icon Background", "flipbox")}
															color={frontIconBackground}
															onChange={(frontIconBackground) =>
																setAttributes({ frontIconBackground })
															}
														/>

														<BaseControl>
															<h3 className="eb-control-title">
																{__("Margin & Padding", "flipbox")}
															</h3>
														</BaseControl>
														<ResponsiveDimensionsControl
															resRequiredProps={resRequiredProps}
															className="frontIconMargin"
															controlName={frontIconMargin}
															baseLabel="Margin"
														/>
														<ResponsiveDimensionsControl
															resRequiredProps={resRequiredProps}
															className="frontIconPadding"
															controlName={frontIconPadding}
															baseLabel="Padding"
														/>
														<BaseControl>
															<h3 className="eb-control-title">
																{__("Border", "flipbox")}
															</h3>
														</BaseControl>
														<BorderShadowControl
															controlName={borderShadowFrontIcon}
															resRequiredProps={resRequiredProps}
															noShadow
														/>
													</>
												)}
											</>
										</PanelBody>
									)}
									{selectedSide === "back" && backIconOrImage === "icon" && (
										<PanelBody
											title={__("Back Icon Style", "flipbox")}
											initialOpen={false}
										>
											<>
												{backIcon && (
													<>
														<ColorControl
															label={__("Icon Color", "flipbox")}
															color={backIconColor}
															onChange={(backIconColor) =>
																setAttributes({ backIconColor })
															}
														/>

														<ColorControl
															label={__("Icon Background", "flipbox")}
															color={backIconBackground}
															onChange={(backIconBackground) =>
																setAttributes({ backIconBackground })
															}
														/>

														<BaseControl>
															<h3 className="eb-control-title">
																{__("Margin & Padding", "flipbox")}
															</h3>
														</BaseControl>
														<ResponsiveDimensionsControl
															resRequiredProps={resRequiredProps}
															className="backIconMargin"
															controlName={backIconMargin}
															baseLabel="Margin"
														/>
														<ResponsiveDimensionsControl
															resRequiredProps={resRequiredProps}
															className="backIconPadding"
															controlName={backIconPadding}
															baseLabel="Padding"
														/>
														<BaseControl>
															<h3 className="eb-control-title">
																{__("Border", "flipbox")}
															</h3>
														</BaseControl>
														<BorderShadowControl
															controlName={borderShadowBackIcon}
															resRequiredProps={resRequiredProps}
															noShadow
														/>
													</>
												)}
											</>
										</PanelBody>
									)}
									<PanelBody
										title={__("Typography", "flipbox")}
										initialOpen={false}
									>
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
									{linkType === "button" && buttonStyle === "custom" && (
										<PanelBody title={__("Button Style", "flipbox")}>
											<>
												<ColorControl
													label={__("Background", "flipbox")}
													color={buttonBackground}
													onChange={(buttonBackground) =>
														setAttributes({ buttonBackground })
													}
												/>

												<ColorControl
													label={__("Color", "flipbox")}
													color={buttonColor}
													onChange={(buttonColor) =>
														setAttributes({ buttonColor })
													}
												/>

												<ResponsiveRangeController
													baseLabel={__("Button Size", "flipbox")}
													controlName={buttonIconSizeAttr}
													resRequiredProps={resRequiredProps}
													min={20}
													max={600}
												/>

												<BaseControl>
													<h3 className="eb-control-title">
														{__("Padding", "flipbox")}
													</h3>
												</BaseControl>

												<ResponsiveDimensionsControl
													resRequiredProps={resRequiredProps}
													className="forWrapperPadding"
													controlName={buttonPadding}
													baseLabel="Padding"
												/>

												<BaseControl>
													<h3 className="eb-control-title">
														{__("Border & Shadow", "flipbox")}
													</h3>
												</BaseControl>

												<BorderShadowControl
													controlName={borderShadowBtn}
													resRequiredProps={resRequiredProps}
												/>

												<BaseControl>
													<h3 className="eb-control-title">
														{__("Button Icon", "flipbox")}
													</h3>
												</BaseControl>

												<ToggleControl
													label={__("Display Button Icon", "flipbox")}
													checked={displayButtonIcon}
													onChange={() =>
														setAttributes({
															displayButtonIcon: !displayButtonIcon,
														})
													}
												/>

												{displayButtonIcon && (
													<BaseControl
														label={__("Select Icon", "flipbox")}
														id="eb-flipbox-link-icon"
														help={__(
															"Add icon with button (optional)",
															"flipbox"
														)}
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
															label={__("Icon Position", "flipbox")}
															id="eb-flipbox-icon-pos"
														>
															<ButtonGroup id="eb-flipbox-icon-pos">
																{ICON_POSITIONS.map((item) => (
																	<Button
																		style={{
																			zIndex: 0,
																		}} // ? Add this style to fix icon list and primary button issue
																		// isLarge
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
											</>
										</PanelBody>
									)}
								</>
							)}
						</div>
					)}
				</TabPanel>
			</div>
		</InspectorControls>
	);
};

export default Inspector;
