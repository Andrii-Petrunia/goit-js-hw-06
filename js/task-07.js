const cnangeFontSize = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");
cnangeFontSize.addEventListener("input", () => {
  const fontSize = cnangeFontSize.value + "px";
  textElement.style.fontSize = fontSize;
});
