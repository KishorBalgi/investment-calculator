"use strict";
const root = document.documentElement;
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
const SIPInitial = document.getElementById("sip-initial");
const SIPIntrest = document.getElementById("sip-intrest-slider");
const SIPIntrestInput = document.getElementById("sip-intrest");
const SIPPeriod = document.getElementById("sip-period-slider");
const SIPPeriodVal = document.querySelector(".sip-period-value");
const SIPResInit = document.querySelector(".sip-result-initial");
const SIPResRet = document.querySelector(".sip-result-return");
const SIPResTot = document.querySelector(".sip-result-total");
let SIPMode = 1;
// Currency:
const date = new Date();
// console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`);
// const currencyVal = fetch(
//   `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${date.getFullYear()}-${date.getMonth()}-${date.getDate()}/{endpoint}`
// );
// const currencyVals = fetch(
//   "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
// )
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     const currencies = Object.keys(data);
//     addCurrencies(currencies);
//   });
// const addCurrencies = function (currencies) {
//   currencies.forEach((cur) => {
//     const html = `<option value="${cur}">${cur.toUpperCase()}</option>`;
//     currency.insertAdjacentHTML("beforeend", html);
//   });
// };
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
  const currencyVal = "&#8377;";
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
    0
  )}${currencyVal} in Equity.`;
  bonds.innerHTML = `${(((2 * ageVal) / 300) * savingVal).toFixed(
    0
  )}${currencyVal} in Fixed Income.`;
  gold.innerHTML = `${((ageVal / 300) * savingVal).toFixed(
    0
  )}${currencyVal} in gold.`;
  crypto.innerHTML = `${(((5 * ageVal) / 3000) * savingVal).toFixed(0)}-${(
    ((8 * ageVal) / 3000) *
    savingVal
  ).toFixed(0)}${currencyVal} in gold and </br>${(
    ((2 * ageVal) / 3000) *
    savingVal
  ).toFixed(0)}-${(((5 * ageVal) / 3000) * savingVal).toFixed(
    0
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
      document.documentElement.style.setProperty("--theme", "#231824");
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
        "#231824"
      );
    }
  }, 300);
});
// SIP Caclculator:
const changeModeSIP = function (m) {
  if (m == 1) {
    document.querySelector(".sip-mode").innerHTML = "Monthly Investment";
    SIPMode = 1;
  } else {
    document.querySelector(".sip-mode").innerHTML = "Total Investment";
    SIPMode = 2;
  }
  renderSIP(document.getElementById(`sip-intrest`).value);
};
const renderSIPResult = function (init, int, per) {
  let maturity;
  if (SIPMode === 1) {
    const i = int / 1200;
    maturity = +(init * (((1 + i) ** (per * 12) - 1) / i) * (1 + i)).toFixed(0);
    init = init * per * 12;
  } else {
    maturity = (init * (1 + int / 100) ** per).toFixed(0);
  }

  SIPResInit.innerHTML = `&#8377; ${init}`;
  SIPResRet.innerHTML = `&#8377; ${(maturity - init).toFixed(0)}`;
  SIPResTot.innerHTML = `&#8377; ${maturity}`;
  root.style.setProperty("--data-init-sip", `${(init * 100) / maturity}%`);
};
const renderSIP = function (int) {
  SIPIntrest.value = SIPIntrestInput.value = int;
  const initial = SIPInitial.value;
  const intrest = SIPIntrest.value;
  const period = SIPPeriod.value;
  // Constraints:
  if (initial > 200000) SIPInitial.value = 200000;
  if (SIPIntrestInput.value > 30) SIPIntrest.value = SIPIntrestInput.value = 30;
  SIPPeriodVal.innerHTML = `${period} ${+period === 1 ? "Year" : "Years"}`;
  // Render Sliders:
  root.style.setProperty(
    "--data-intrest-sip",
    `${(intrest / 0.3).toFixed(2)}%`
  );
  root.style.setProperty("--data-period-sip", `${(period / 0.3).toFixed(2)}%`);
  renderSIPResult(initial, intrest, period);
};
