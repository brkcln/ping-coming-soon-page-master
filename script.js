const submitBtn = document.querySelector(".form__button");
const emailAddress = document.getElementById("form__input-mail");
const emailError = document.querySelector("small");

const validate = (e) => {
	e.preventDefault();
	if (emailAddress.value === "") {
		emailError.innerHTML = "Email name cannot be empty";
		inputStyle();
		emailAddress.focus();
		return false;
	} else {
		emailError.innerHTML = "";
		emailAddress.style.border = "1px solid rgba(0, 0, 0, 0.226)";
	}
	if (!emailIsValid(emailAddress.value)) {
		emailError.innerHTML = "Looks like this is not an email";
		inputStyle();
		emailAddress.focus();
		return false;
	} else {
		emailError.innerHTML = "";
		emailAddress.style.border = "1px solid rgba(0, 0, 0, 0.226)";
	}
	emailAddress.style.border = "1px solid rgba(0, 0, 0, 0.226)";
	emailAddress.value = "";
	return true;
};
const emailIsValid = (email) => {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
const inputStyle = () => {
	emailAddress.style.border = "1px solid black";
};

submitBtn.addEventListener("click", validate);
