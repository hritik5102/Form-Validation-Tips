const submitBtn = document.getElementsByTagName("button")[0];
const form = document.getElementsByTagName("form")[0];
const username = document.getElementById("name");
const email = document.getElementById("email");
const emailErrorMessage = document.querySelector(".emailErrorMessage");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  form.reportValidity();
});

username.addEventListener("invalid", () => {
  const validityState = username.validity;

  if (validityState.valueMissing) {
    username.setCustomValidity("Please enter a non-empty username");
  } else if (validityState.patternMismatch) {
    username.setCustomValidity(
      "Username must be of 5 charachters and should only include a numbers"
    );
  } else {
    username.setCustomValidity("");
  }
});

email.addEventListener("change", () => {
  const value = email.value;
  const emailPattern = email.getAttribute("pattern");
  const isValidEmail = new RegExp(emailPattern).test(value);

  emailErrorMessage.textContent = "";
  emailErrorMessage.style.color = "";
  emailErrorMessage.style.fontSize = "";

  if (!isValidEmail) {
    emailErrorMessage.textContent = "Please enter a valid email address";
    emailErrorMessage.style.color = "red";
    emailErrorMessage.style.fontSize = "12px";
  }
});
