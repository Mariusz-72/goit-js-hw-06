
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);
const valueSpan = document.querySelector("#value");


let counterValue = 0;


function updateCounterView() {
  valueSpan.textContent = counterValue;
}


decrementButton.addEventListener("click", () => {
  counterValue--;
  updateCounterView();
});


incrementButton.addEventListener("click", () => {
  counterValue++;
  updateCounterView();
});


updateCounterView();
