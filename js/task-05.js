// Pobierz elementy z DOM
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

// Obsługa zdarzenia input
nameInput.addEventListener("input", () => {
  const inputValue = nameInput.value.trim();

  if (inputValue === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = inputValue;
  }
});
