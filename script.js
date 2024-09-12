const heroSection = document.querySelector(".hero-section");
const logo = document.querySelector(".logo");
const styledIcon = document.querySelector(".styled-icon");
const main = document.querySelector(".main");
const formSection = document.querySelector(".form-section");
const mortgageRegion = document.querySelector(".region-mortage");
const allInput = document.querySelectorAll(".input-div input");
const customer = document.querySelector(".customer");
const form = document.querySelector(".form");
const logiBtn = document.querySelector(".login-btn");

let nut = false;

allInput.forEach((input) => {
	input.addEventListener("click", (e) => {
		e.target.parentElement.classList.add("shift-up");
	});
});

setTimeout(() => {
	heroSection.classList.add("unload");
}, 300);

heroSection.addEventListener("transitionend", () => {
	setTimeout(() => {
		logo.classList.add("unload");
	}, 200);
});

styledIcon.addEventListener("transitionend", () => {
	logo.classList.add("rotate");
	setTimeout(() => {
		logo.classList.add("fly");
		main.classList.add("divide-width");
		nut = true;
	}, 300);
});

logo.addEventListener("transitionend", () => {
	setTimeout(() => {
		formSection.classList.add("half");
	}, 2000);
});

formSection.addEventListener("transitionend", () => {
	if (nut) {
		setTimeout(() => {
			mortgageRegion.classList.add("slide");
			document.querySelector(".region-mortage").classList.add("slide");
		}, 2000);
	}
});

customer.addEventListener("transitionend", () => {
	setTimeout(() => {
		document.querySelector(".form-cont").classList.add("show");
	}, 1000);
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
	logiBtn.classList.add("tiggle");

	setTimeout(() => {
		document.querySelector(".form-cont").classList.remove("show");
	}, 3000);

	setTimeout(() => {
		document.querySelector(".region-mortage").classList.add("hide");
		document.querySelector(".header-btn-cont").classList.add("fade");
	}, 3300);

	setTimeout(() => {
		heroSection.classList.remove("unload");
	}, 3800);

	setTimeout(() => {
		logo.classList.add("antirotate");
	}, 4000);

	setTimeout(() => {
		logo.classList.remove("fly");
	}, 4100);

	setTimeout(() => {
		logo.classList.add("end");
	}, 4800);

  setTimeout(() => {
		logo.classList.add("bounce");
	}, 4800);
});

const onlineInput = allInput[0];
const passwordInput = allInput[1];

function validateInput() {
	const onlineInputFill = onlineInput.value.trim() !== "";
	const passwordValidFill = passwordInput.value.length >= 6;
	document.querySelector(".login-btn").disabled = !(onlineInputFill && passwordValidFill);
}

onlineInput.addEventListener("input", validateInput);
passwordInput.addEventListener("input", validateInput);
