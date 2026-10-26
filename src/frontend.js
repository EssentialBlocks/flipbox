window.addEventListener("DOMContentLoaded", () => {
	const allFlipbox = document.querySelectorAll(".eb-flipbox-container");
	if (allFlipbox.length === 0) return false;

	allFlipbox.forEach((item, index) => {
		// Box link: the back side navigates to its data-link URL.
		const linkedBack = item.querySelector(".eb-flipbox-back[data-link]");
		if (linkedBack) {
			const boxLink = linkedBack.getAttribute("data-link") || "";
			const scheme = boxLink.replace(/[\u0000-\u0020\u007F]/g, "").match(/^([a-z][a-z0-9+.-]*):/i);
			if (boxLink.trim() && (!scheme || /^(https?|mailto|tel)$/i.test(scheme[1]))) {
				linkedBack.addEventListener("click", function () {
					if ("true" === linkedBack.getAttribute("data-new-tab")) {
						window.open(boxLink, "_blank", "noopener");
					} else {
						window.location.href = boxLink;
					}
				});
			}
		}

		let flipMode = item.getAttribute("data-flip-mode");
		let flipType = item.getAttribute("data-flip-type");
		let flipMouseLeave = item.getAttribute("data-flip-mouseleave");
		let flipper = item.querySelector(".eb-flipper");

		// flip on click
		if (flipper && "click" === flipMode) {
			flipper.addEventListener("click", function (event) {
				if (flipper.classList.contains(flipType)) {
					flipper.classList.remove(flipType);
				} else {
					flipper.classList.add(flipType);
				}
			});

			// use mouse leave event
			if ("true" === flipMouseLeave) {
				flipper.addEventListener("mouseleave", function (event) {
					if (flipper.classList.contains(flipType)) {
						flipper.classList.remove(flipType);
					}
				});
			}
		}
	});
});
