let displayValue = "";

function calcul(value) {
  displayValue += value;
  document.getElementById("display").value = displayValue;
}
function deletes() {
  displayValue = "";
  document.getElementById("display").value = "";
}
function Result() {
  try {
    displayValue = eval(displayValue);
    document.getElementById("display").value = displayValue;
  } catch (error) {
    document.getElementById("display").value = "eror";
  }
}
