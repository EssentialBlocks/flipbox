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
			// Make the box reachable and usable from the keyboard. A box that
			// holds its own link or button keeps those as the interactive
			// elements, so it gets no button role.
			const isButton = !flipper.querySelector("a, button");
			flipper.setAttribute("tabindex", "0");
			if (isButton) {
				flipper.setAttribute("role", "button");
				flipper.setAttribute("aria-pressed", "false");
			}

			const setFlipped = function (flipped) {
				flipper.classList.toggle(flipType, flipped);
				if (isButton) {
					flipper.setAttribute("aria-pressed", flipped ? "true" : "false");
				}
			};

			flipper.addEventListener("click", function (event) {
				setFlipped(!flipper.classList.contains(flipType));
			});

			// Enter or Space on the box itself flips it, like a button
			flipper.addEventListener("keydown", function (event) {
				if (event.target !== flipper) return;
				if (event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
					event.preventDefault();
					setFlipped(!flipper.classList.contains(flipType));
				}
			});

			// use mouse leave event
			if ("true" === flipMouseLeave) {
				flipper.addEventListener("mouseleave", function (event) {
					if (flipper.classList.contains(flipType)) {
						setFlipped(false);
					}
				});
			}
		}
	});
});
