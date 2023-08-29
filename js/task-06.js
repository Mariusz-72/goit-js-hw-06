// Pobierz element z DOM
const validationInput = document.querySelector("#validation-input");

// Funkcja sprawdzająca walidację
function checkValidation() {
  const expectedLength = parseInt(validationInput.getAttribute("data-length"));
  const inputValue = validationInput.value.trim();

  if (inputValue.length === expectedLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
}

// Obsługa zdarzenia blur (utrata fokusu)
validationInput.addEventListener("blur", checkValidation);
