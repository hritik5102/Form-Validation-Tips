const submitBtn = document.getElementsByTagName("button")[0];
const form = document.getElementsByTagName("form")[0];
const username = document.getElementById("name");

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
