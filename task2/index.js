// inputs
const gosnumberInput = document.getElementById("gosnumber");
const autoInput = document.getElementById("auto");
const dateInput = document.getElementById("date");
const driverNameInput = document.getElementById("namedriver");
const passportSeriaInput = document.getElementById("passportSeria");
const passportNumberInput = document.getElementById("passportNumber");
const datePassportInput = document.getElementById("passportDate");
//buttons
const clearButton = document.getElementById("clear");
const submitButton = document.getElementById("submit");
const cancelButton = document.getElementById("cancel");
const clearModalButton = document.getElementById("clearModal");
const showModalIconButton = document.querySelector(".showModalIcon");
//regex

const gosnumberRegex = /^[АВЕКМНОРСТУХ]\d{3}(?<!000)[АВЕКМНОРСТУХ]{2}\d{2,3}$/i;
const textRegex = /^(?=.*[a-zA-Zа-яА-Я]).*$/i;
const dateRegex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}/;
const driverNameRegex = /^([а-я]+ ){2}[а-я]+$/i;
const passportSeriaRegex = /^[0-9]{2} [0-9]{2}$/;
const passportNumberRegex = /^[0-9]{6}$/;
const controlKeys = [
  "Backspace",
  "Tab",
  "Enter",
  "ArrowLeft",
  "ArrowRight",
  "Delete",
];

const validationRules = {
  gosnumber: gosnumberRegex,
  auto: textRegex,
  date: dateRegex,
  namedriver: driverNameRegex,
  passportSeria: passportSeriaRegex,
  passportNumber: passportNumberRegex,
  passportData: textRegex,
  passportDate: dateRegex,
};
// formsData
const modalDialog = document.getElementById("clearData");
const Form = document.querySelector(".form");
const FormEls = new FormData(Form);
let formObj = {};

document.addEventListener("DOMContentLoaded", e => {
  formObj = JSON.parse(localStorage.getItem("formData"));
  if (formObj) {
    loadFormData();
  }
});

function loadFormData() {
  for (const key in formObj) {
    document.getElementById(key).value = formObj[key];
    //span visible
    if (key === "date" && formObj[key]) {
      document.querySelector(".custom-placeholder").style.display = "none";
    }
    if (key === "passportDate" && formObj[key]) {
      document.querySelector(
        ".custom-placeholder--date-passport"
      ).style.display = "none";
    }
  }
}

Array.from(FormEls).forEach(el => {
  document.getElementById(el[0]).addEventListener("focus", e => {
    deleteError(el[0]);
    //span visible
    if (el[0] === "date") {
      document.querySelector(".custom-placeholder").style.display = "none";
    }
    if (el[0] === "passportDate") {
      document.querySelector(
        ".custom-placeholder--date-passport"
      ).style.display = "none";
    }
  });
  document.getElementById(el[0]).addEventListener("blur", e => {
    updateFormElement(el[0], e.target.value);
    //span visible
    if (el[0] === "date" && !e.target.value) {
      document.querySelector(".custom-placeholder").style.display = "inline";
    }
    if (el[0] === "passportDate" && !e.target.value) {
      document.querySelector(
        ".custom-placeholder--date-passport"
      ).style.display = "inline";
    }
  });
});

// function for updateData form elements
function updateFormElement(id, value) {
  formObj = {
    ...formObj,
    [id]: value,
  };
  localStorage.setItem("formData", JSON.stringify(formObj));
}

/* eventListeners action keydown */
passportSeriaInput.addEventListener("keydown", e => {
  if (controlKeys.includes(e.key)) return;
  if (!/^[0-9 ]$/.test(e.key)) {
    e.preventDefault();
  }
});
passportNumberInput.addEventListener("keydown", e => {
  if (controlKeys.includes(e.key)) return;
  if (!/^[0-9]$/.test(e.key)) {
    e.preventDefault();
  }
});

// clearData
function showModal(e) {
  e.preventDefault();
  modalDialog.showModal();
}
function clear() {
  Form.reset();
  Array.from(FormEls).forEach(el => deleteError(el[0]));
  localStorage.clear();
}
//eventListeners
clearButton.addEventListener("click", showModal);
cancelButton.addEventListener("click", e => {
  e.preventDefault();
  modalDialog.close();
});
clearModalButton.addEventListener("click", e => {
  e.preventDefault();
  clear();
  modalDialog.close();
});
showModalIconButton.addEventListener("click", showModal);

// submitForm
submitButton.addEventListener("click", e => {
  let res = true;
  Object.keys(validationRules).forEach(id => {
    const regex = validationRules[id];
    if (!checksField(id, regex)) {
      res = false;
    }
  });
  if (!res) {
    e.preventDefault();
    alert("Пожалуйста введите валидные данные");
    return;
  } else {
    e.preventDefault();
    console.log(formObj);
    alert("Форма отправлена!");
    clear();
  }
});
// check field
function checksField(id, regex) {
  let result = true;
  if (!regex.test(document.getElementById(id).value)) {
    setError(id);
    result = false;
  }
  return result;
}

function setError(id) {
  document.getElementById(id).style.border = "1px solid red";
}
function deleteError(id) {
  document.getElementById(id).style.border = "1px solid black";
}
