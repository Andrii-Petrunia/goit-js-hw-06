const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector("#value");

let counterValue = 0;

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  newCounterValue();
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  newCounterValue();
});

function newCounterValue() {
  valueSpan.textContent = counterValue;
}
