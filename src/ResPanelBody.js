import { PanelBody } from "@wordpress/components";

function ResPanelBody(props) {
	const { title, initialOpen, children, resRequiredProps } = props;
	const { resOption, setAttributes } = resRequiredProps;

	const handleDesktopBtnClick = () => {
		document.body.classList.add("eb-res-option-desktop");
		document.body.classList.remove("eb-res-option-tab", "eb-res-option-mobile");
		setAttributes({
			resOption: "desktop",
		});
	};
	const handleTabBtnClick = () => {
		document.body.classList.add("eb-res-option-tab");
		document.body.classList.remove(
			"eb-res-option-desktop",
			"eb-res-option-mobile"
		);
		setAttributes({
			resOption: "tab",
		});
	};
	const handleMobileBtnClick = () => {
		document.body.classList.add("eb-res-option-mobile");
		document.body.classList.remove(
			"eb-res-option-desktop",
			"eb-res-option-tab"
		);
		setAttributes({
			resOption: "mobile",
		});
	};
	return (
		<>
			<PanelBody title={title} initialOpen={initialOpen}>
				<div className="eb-resButtons">
					<button
						className={`eb-res-btn eb-res-btn-desktop ${
							resOption == "desktop" && "active"
						}`}
						onClick={handleDesktopBtnClick}
					>
						{/* 🖥️ */}
						<span class="dashicons dashicons-desktop"></span>
					</button>
					<button
						className={`eb-res-btn eb-res-btn-tab ${
							resOption == "tab" && "active"
						}`}
						onClick={handleTabBtnClick}
					>
						{/* Tab */}
						<span class="dashicons dashicons-tablet"></span>
					</button>
					<button
						className={`eb-res-btn eb-res-btn-mobile ${
							resOption == "mobile" && "active"
						}`}
						onClick={handleMobileBtnClick}
					>
						{/* 📱 */}
						<span class="dashicons dashicons-smartphone"></span>
					</button>
				</div>
				{children}
			</PanelBody>
		</>
	);
}

export default ResPanelBody;
