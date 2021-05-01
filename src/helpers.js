// function to generate typography attributes for multiple typography control based on the array of prefix
export const generateTypographyAttributes = (prefixArray) => {
	const typoAttrs = prefixArray.reduce((total, current) => {
		const result = {
			[`${current}FontFamily`]: {
				type: "string",
			},
			[`${current}SizeUnit`]: {
				type: "string",
				default: "px",
			},
			[`${current}FontSize`]: {
				type: "number",
			},
			[`${current}FontWeight`]: {
				type: "string",
			},
			[`${current}TextTransform`]: {
				type: "string",
			},
			[`${current}TextDecoration`]: {
				type: "string",
			},
			[`${current}LetterSpacingUnit`]: {
				type: "string",
				default: "px",
			},
			[`${current}LetterSpacing`]: {
				type: "number",
			},
			[`${current}LineHeightUnit`]: {
				type: "string",
				default: "em",
			},
			[`${current}LineHeight`]: {
				type: "number",
			},

			[`TAB${current}SizeUnit`]: {
				type: "string",
				default: "px",
			},
			[`TAB${current}FontSize`]: {
				type: "number",
			},
			[`TAB${current}LetterSpacingUnit`]: {
				type: "string",
				default: "px",
			},
			[`TAB${current}LetterSpacing`]: {
				type: "number",
			},
			[`TAB${current}LineHeightUnit`]: {
				type: "string",
				default: "em",
			},
			[`TAB${current}LineHeight`]: {
				type: "number",
			},

			[`MOB${current}SizeUnit`]: {
				type: "string",
				default: "px",
			},
			[`MOB${current}FontSize`]: {
				type: "number",
			},
			[`MOB${current}LetterSpacingUnit`]: {
				type: "string",
				default: "px",
			},
			[`MOB${current}LetterSpacing`]: {
				type: "number",
			},
			[`MOB${current}LineHeightUnit`]: {
				type: "string",
				default: "em",
			},
			[`MOB${current}LineHeight`]: {
				type: "number",
			},
		};
		return {
			...total,
			...result,
		};
	}, {});

	return typoAttrs;
};

// helper Functions: function 'textInsideForEdit' is for setting the innertext depending on whether separator should be shown and which separator should be shown
export const textInsideForEdit = (value, isShowSeparator, separator) =>
	isShowSeparator
		? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
		: value.toString();

// generateRandomNumber function is for generating a random number
export const generateRandomNumber = () =>
	Math.floor(Math.random() * 1000000000);

// hardMinifyCssStrings is for minifying the css which is in the style tag as a string  for view.js
export const hardMinifyCssStrings = (cssString) => {

	return (
		cssString
			.replace(/\s+/g, " ")
			.replace(/(?<=\:).+(?=\;)/g, function (match) {
				return match.trim().replace(/\s+/g, "__s_p_a_c_e__");
			})
			// .replace(/\s+(?!(?:[\w\d\.\-\#]+\{))/g, "")
			.replace(/\s+(?![\w\d\.\-\#]+\{)/g, "")
			.replace(/\s+/g, " ")
			.replace(/__s_p_a_c_e__/g, " ")
	);
};

// softMinifyCssStrings is for minifying the css which is in the style tag as a string  for view.js
export const softMinifyCssStrings = (cssString) =>
	cssString.replace(/\s+/g, " ");

// check if css string is empty or not.
export const isCssExists = (cssString) =>
	/.+(?=\:(?!hover)(?!focus))/.test(cssString);

// check if range controller input numbers  has value
export const hasVal = (val) => val || val === 0;

//
// function to generate typography styles for an element based on it's prefix
export const generateTypographyStyles = ({
	prefixConstant,
	defaultFontSize,
	attributes,
}) => {
	const {
		[`${prefixConstant}FontFamily`]: fontFamily,
		[`${prefixConstant}FontWeight`]: fontWeight,
		[`${prefixConstant}TextTransform`]: textTransform,
		[`${prefixConstant}TextDecoration`]: textDecoration,
		[`${prefixConstant}FontSize`]: fontSize = defaultFontSize,
		[`${prefixConstant}SizeUnit`]: sizeUnit,
		[`${prefixConstant}LetterSpacing`]: letterSpacing,
		[`${prefixConstant}LetterSpacingUnit`]: letterSpacingUnit,
		[`${prefixConstant}LineHeight`]: lineHeight,
		[`${prefixConstant}LineHeightUnit`]: lineHeightUnit,

		[`TAB${prefixConstant}SizeUnit`]: TABsizeUnit,
		[`TAB${prefixConstant}LetterSpacingUnit`]: TABletterSpacingUnit,
		[`TAB${prefixConstant}LineHeightUnit`]: TABlineHeightUnit,
		[`TAB${prefixConstant}FontSize`]: TABfontSize,
		[`TAB${prefixConstant}LetterSpacing`]: TABletterSpacing,
		[`TAB${prefixConstant}LineHeight`]: TABlineHeight,

		[`MOB${prefixConstant}SizeUnit`]: MOBsizeUnit,
		[`MOB${prefixConstant}LetterSpacingUnit`]: MOBletterSpacingUnit,
		[`MOB${prefixConstant}LineHeightUnit`]: MOBlineHeightUnit,
		[`MOB${prefixConstant}FontSize`]: MOBfontSize,
		[`MOB${prefixConstant}LetterSpacing`]: MOBletterSpacing,
		[`MOB${prefixConstant}LineHeight`]: MOBlineHeight,
	} = attributes;

	const typoStylesDesktop = `
			${fontFamily ? `font-family: ${fontFamily};` : " "}
			${hasVal(fontSize) ? `font-size: ${fontSize}${sizeUnit};` : " "}
			${hasVal(lineHeight) ? `line-height: ${lineHeight}${lineHeightUnit};` : " "}
			${fontWeight ? `font-weight: ${fontWeight};` : " "}
			${textDecoration ? `text-decoration: ${textDecoration};` : " "}
			${textTransform ? `text-transform: ${textTransform};` : " "}
			${
				hasVal(letterSpacing)
					? `letter-spacing: ${letterSpacing}${letterSpacingUnit};`
					: " "
			}
		`;

	const typoStylesTab = `
			${hasVal(TABfontSize) ? `font-size: ${TABfontSize}${TABsizeUnit};` : " "}
			${
				hasVal(TABlineHeight)
					? `line-height: ${TABlineHeight}${TABlineHeightUnit};`
					: " "
			}
			${
				hasVal(TABletterSpacing)
					? `letter-spacing: ${TABletterSpacing}${TABletterSpacingUnit};`
					: " "
			}
		`;

	const typoStylesMobile = `
			${hasVal(MOBfontSize) ? `font-size: ${MOBfontSize}${MOBsizeUnit};` : " "}
			${
				hasVal(MOBlineHeight)
					? `line-height: ${MOBlineHeight}${MOBlineHeightUnit};`
					: " "
			}
			${
				hasVal(MOBletterSpacing)
					? `letter-spacing: ${MOBletterSpacing}${MOBletterSpacingUnit};`
					: " "
			}
		`;

	return {
		typoStylesDesktop,
		typoStylesTab,
		typoStylesMobile,
	};
};
