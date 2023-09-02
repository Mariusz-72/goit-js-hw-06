
const validationInput = document.querySelector("#validation-input");

function checkValidation() {
    const expectedLength = parseInt(validationInput.getAttribute("data-length"));
    //- z validationInput pobiera atrybut data-length i konwertuje to na liczbę , potem przypisuje do expectedLength
    const inputValue = validationInput.value; // pobiera wartość wprowadzoną i przypisuje ją do zmiennej inputValue

    if (inputValue.length === expectedLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
        } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
        }
}
    validationInput.addEventListener("blur", checkValidation); // na koniec nasłuch na blur'a na 'validationInput'
