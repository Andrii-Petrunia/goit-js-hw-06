const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (newName) => {
  nameOutput.textContent = nameInput.value || "Anonymous";
});

