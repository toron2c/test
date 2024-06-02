// inputs
const gosnumberInput = document.getElementById("gosnumber");
const autoInput = document.getElementById("auto");
const dateInput = document.getElementById("date");
const driverNameInput = document.getElementById("driver");
const passportSeriaInput = document.getElementById("passportSeria");
const passportNumberInput = document.getElementById("passportNumber");
const datePassportInput = document.getElementById("passportDate");
let formData = JSON.parse(localStorage.getItem("data")) | [];

//regex
const gosnumberRegex = /^[АВЕКМНОРСТУХ]\d{3}(?<!000)[АВЕКМНОРСТУХ]{2}\d{2,3}$/i;
const autoRegex = /^[\w]+/i;
const driverNameRegex = /^([а-я]+ ){2}[а-я]+$/i;
const passportSeriaRegex = /^[0-9]{2} [0-9]{2}$/;
const passportNumberRegex = /^[0-9]{6}$/;

// eventListeners action input
gosnumberInput.addEventListener("input", e => {
  e.target.style.border = "1px solid black";
  //localStorage.setItem("gosnumber", e.target.value);
});
autoInput.addEventListener("input", e => {
  e.target.style.border = "1px solid black";
});
dateInput.addEventListener("focus", e => {
  e.target.style.border = "1px solid black";
});

// eventListeners action keydown
passportSeriaInput.addEventListener("keydown", e => {
  if (!/^[0-9 ]$/.test(e.key)) {
    e.preventDefault();
  }
});
passportNumberInput.addEventListener("keydown", e => {
  if (!/^[0-9]$/.test(e.key)) {
    e.preventDefault();
  }
});

// eventListeners action blur
dateInput.addEventListener("blur", e => {
  e.target.placeholder = "Дата*";

  formData = {
    ...formData,
    date: e.target.value,
  };
  localStorage.setItem("formData", JSON.stringify(formData));
});

document.addEventListener("DOMContentLoaded", e => {});
