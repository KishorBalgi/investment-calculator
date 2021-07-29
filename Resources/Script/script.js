"use strict";
const selectType = document.querySelector(".select-type");
const investForm = document.querySelector(".invest-form");
const investStudent = document.querySelector(".invest-student");
const assetAllocation = document.querySelector(".asset-allocation");
const currency = document.getElementById("currency");
const salary = document.getElementById("salary");
const age = document.getElementById("age");
const spending = document.getElementById("spending");
const saving = document.getElementById("saving");
const equity = document.querySelector(".asset-equity p");
const bonds = document.querySelector(".asset-bonds p");
const gold = document.querySelector(".asset-gold p");
const crypto = document.querySelector(".asset-crypto p");
const btnWorking = document.querySelector(".btn-working");
const btnStudent = document.querySelector(".btn-student");
const btnInvestSubmitWorking = document.getElementById("btn-submit-working");
const btnBackInvest = document.querySelector(".btn-back-invest");
const btnBackInvestStudent = document.querySelector(".btn-back-student");
const returnForm = document.querySelector(".return-form");
const initial = document.getElementById("return-start");
const final = document.getElementById("return-end");
const period = document.getElementById("return-period");
const btnReturnSubmit = document.getElementById("btn-submit-return");
const resultReturnBox = document.querySelector(".result-return");
const resultReturn = document.querySelector(".result-return p");
const btnResetReturn = document.querySelector(".reset-return");
const btnTheme = document.getElementById("btn-theme");
// Currency:
const date = new Date();
// console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`);
// const currencyVal = fetch(
//   `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${date.getFullYear()}-${date.getMonth()}-${date.getDate()}/{endpoint}`
// );
const currencyVals = fetch(
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const currencies = Object.keys(data);
    addCurrencies(currencies);
  });
const addCurrencies = function (currencies) {
  currencies.forEach((cur) => {
    const html = `<option value="${cur}">${cur.toUpperCase()}</option>`;
    currency.insertAdjacentHTML("beforeend", html);
  });
};
// Submt Invest Working:
const clearFieldInvest = function () {
  salary.value = age.value = spending.value = saving.value = "";
};
const setErrorInvest = function (error) {
  investForm.setAttribute("data-afterInvest", error);
};
const activateForm = function () {
  if (!btnWorking.classList.contains("btn-type-active")) {
    investForm.classList.toggle("hidden");
    investStudent.classList.toggle("hidden");
    btnStudent.classList.toggle("btn-type-active");
    btnWorking.classList.toggle("btn-type-active");
  }
};
const switchInvest = function () {
  investForm.classList.toggle("hidden");
  selectType.classList.toggle("hidden");
  assetAllocation.classList.toggle("hidden");
};
const switchInvestStudent = function () {
  investForm.classList.toggle("hidden");
  investStudent.classList.toggle("hidden");
  btnStudent.classList.toggle("btn-type-active");
  btnWorking.classList.toggle("btn-type-active");
};
const submitInvestWorking = function (e) {
  e.preventDefault();
  if (
    salary.value === "" ||
    age.value === "" ||
    spending.value === "" ||
    saving.value === ""
  ) {
    setErrorInvest("*All fields are required.");
    return;
  }
  const currencyVal = currency.value.toUpperCase();
  const salaryVal = salary.value;
  const ageVal = age.value;
  const spendingVal = spending.value;
  const savingVal = saving.value;
  clearFieldInvest();

  //Constraints:
  if (+salaryVal < 0 || +ageVal < 0 || +spendingVal < 0 || +savingVal < 0) {
    setErrorInvest("*Values cannot be negative.");
    return;
  }
  if (ageVal > 0 && ageVal < 18) {
    setErrorInvest("*Select Student from Top.");
    return;
  }
  if (+savingVal + +spendingVal > +salaryVal) {
    setErrorInvest("*Savings+Spendings cannot be greater than Salary.");
    return;
  }
  if (spendingVal > +salaryVal) {
    setErrorInvest("*Spendings cannot be greater than Salary.");
    return;
  }
  if (savingVal > +salaryVal) {
    setErrorInvest("*Savings cannot be greater than Salary.");
    return;
  }
  setErrorInvest("");
  equity.innerHTML = `${(((100 - ageVal) / 100) * savingVal).toFixed(
    2
  )}${currencyVal} in Equity.`;
  bonds.innerHTML = `${(((2 * ageVal) / 300) * savingVal).toFixed(
    2
  )}${currencyVal} in Fixed Income.`;
  gold.innerHTML = `${((ageVal / 300) * savingVal).toFixed(
    2
  )}${currencyVal} in gold.`;
  crypto.innerHTML = `${(((5 * ageVal) / 3000) * savingVal).toFixed(2)}-${(
    ((8 * ageVal) / 3000) *
    savingVal
  ).toFixed(2)}${currencyVal} in gold and </br>${(
    ((2 * ageVal) / 3000) *
    savingVal
  ).toFixed(2)}-${(((5 * ageVal) / 3000) * savingVal).toFixed(
    2
  )}${currencyVal} in Crypto Currency.`;
  switchInvest();
};
btnWorking.addEventListener("click", activateForm);
btnStudent.addEventListener("click", switchInvestStudent);
btnInvestSubmitWorking.addEventListener("click", submitInvestWorking);
btnBackInvest.addEventListener("click", switchInvest);
btnBackInvestStudent.addEventListener("click", switchInvestStudent);

// Returns AR/CAGR:
const toggleResult = function () {
  resultReturnBox.classList.toggle("hidden");
  btnReturnSubmit.classList.toggle("hidden");
};
const resetRetun = function (e) {
  e.preventDefault();
  initial.value = final.value = period.value = "";
  toggleResult();
};
const calcReturns = function (e) {
  e.preventDefault();
  const initialVal = initial.value;
  const finalVal = final.value;
  const periodVal = period.value;

  if (initialVal === "" || finalVal === "" || periodVal === "") {
    returnForm.setAttribute("data-afterReturn", "*All fields are required");
    return;
  }
  returnForm.setAttribute("data-afterReturn", "");
  resultReturn.innerHTML = `AR:${((finalVal / initialVal - 1) * 100).toFixed(
    2
  )}%  CAGR:${(((finalVal / initialVal) ** (1 / periodVal) - 1) * 100).toFixed(
    2
  )}%`;
  toggleResult();
};
btnReturnSubmit.addEventListener("click", calcReturns);
btnResetReturn.addEventListener("click", resetRetun);
// Theme:
btnTheme.addEventListener("click", function (e) {
  btnTheme.value = btnTheme.value === "light" ? "dark" : "light";
  setTimeout(() => {
    if (btnTheme.value === "dark") {
      document.documentElement.style.setProperty("--theme", "rgb(34, 34, 34)");
      document.documentElement.style.setProperty(
        "--theme-complement",
        "rgb(202, 200, 200)"
      );
    } else {
      document.documentElement.style.setProperty(
        "--theme",
        "rgb(202, 200, 200)"
      );
      document.documentElement.style.setProperty(
        "--theme-complement",
        "rgb(34, 34, 34)"
      );
    }
  }, 300);
});
