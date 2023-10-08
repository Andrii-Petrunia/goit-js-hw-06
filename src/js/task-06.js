const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const enteredValue = input.value;
  const requiredLength = Number(input.getAttribute("data-length"));

  if (enteredValue.length === requiredLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
