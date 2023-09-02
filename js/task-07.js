
const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

function changeFontSize() {
    const fontSizeValue = fontSizeControl.value + "px"; // dodaję tekst "px" aby wartość była z jednostką px
  textSpan.style.fontSize = fontSizeValue;
}

fontSizeControl.addEventListener("input", changeFontSize); // nasłuch na inpucie
