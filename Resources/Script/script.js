"use strict";
const root = document.documentElement;
const sections = document.querySelectorAll("section");
const navlinks = document.querySelectorAll(".nav-link");
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
// SIP
const SIPInitial = document.getElementById("sip-initial");
const SIPIntrest = document.getElementById("sip-intrest-slider");
const SIPIntrestInput = document.getElementById("sip-intrest");
const SIPPeriod = document.getElementById("sip-period-slider");
const SIPPeriodVal = document.querySelector(".sip-period-value");
const SIPResInit = document.querySelector(".sip-result-initial");
const SIPResRet = document.querySelector(".sip-result-return");
const SIPResTot = document.querySelector(".sip-result-total");
// MF
const MFInitial = document.getElementById("mf-initial");
const MFIntrest = document.getElementById("mf-intrest-slider");
const MFIntrestInput = document.getElementById("mf-intrest");
const MFPeriod = document.getElementById("mf-period-slider");
const MFPeriodVal = document.querySelector(".mf-period-value");
const MFResInit = document.querySelector(".mf-result-initial");
const MFResRet = document.querySelector(".mf-result-return");
const MFResTot = document.querySelector(".mf-result-total");
// FD
const FDInitial = document.getElementById("fd-initial");
const FDIntrest = document.getElementById("fd-intrest-slider");
const FDIntrestInput = document.getElementById("fd-intrest");
const FDPeriod = document.getElementById("fd-period-slider");
const FDPeriodVal = document.getElementById("fd-period-value");
const FDResInit = document.querySelector(".fd-result-initial");
const FDResRet = document.querySelector(".fd-result-return");
const FDResTot = document.querySelector(".fd-result-total");
const FDMode = document.getElementById("fd-mode");
// RD
const RDInitial = document.getElementById("rd-initial");
const RDIntrest = document.getElementById("rd-intrest-slider");
const RDIntrestInput = document.getElementById("rd-intrest");
const RDPeriod = document.getElementById("rd-period-slider");
const RDPeriodVal = document.getElementById("rd-period-value");
const RDResInit = document.querySelector(".rd-result-initial");
const RDResRet = document.querySelector(".rd-result-return");
const RDResTot = document.querySelector(".rd-result-total");
const RDMode = document.getElementById("rd-mode");
let SIPMode = 1;
// Income Tax:
const AgeGroup = document.getElementById("age-group");
const InSalary = document.getElementById("it-income-salary");
const InSA = document.getElementById("it-income-sa");
const InLTA = document.getElementById("it-income-lta");
const InDA = document.getElementById("it-income-da");
const InHRA = document.getElementById("it-income-hra");
const InRent = document.getElementById("it-income-rent");
const InOth = document.getElementById("it-income-other");
const InInt = document.getElementById("it-income-intrest");
const InIntHL = document.getElementById("it-income-intresthome");
const InMetro = document.getElementById("it-metro");
const DeELSS = document.getElementById("it-ded-elss");
const DePPF = document.getElementById("it-ded-ppf");
const DeSSY = document.getElementById("it-ded-ssy");
const DeFD = document.getElementById("it-ded-fd");
const DeEPF = document.getElementById("it-ded-epf");
const DeNSC = document.getElementById("it-ded-nsc");
const DeTution = document.getElementById("it-ded-tution");
const DeLoanPrinc = document.getElementById("it-ded-loanprinciple");
const DeOth = document.getElementById("it-ded-other");
const DeMedS = document.getElementById("it-ded-meds");
const DeMedP = document.getElementById("it-ded-medp");
const DeSenior = document.getElementById("it-ded-senior");
const DeIntSav = document.getElementById("it-ded-intsav");
const DeIntEdu = document.getElementById("it-ded-eduloan");
const DeLTA = document.getElementById("it-ded-lta");
const ITCalculate = document.querySelector(".it-calculate");
const ITResultBox = document.querySelector(".it-result-box");
const ITResult = document.querySelector(".it-result-total");
// Internationalization:
const options = {
  style: "currency",
  currency: "INR",
  useGrouping: true,
};
// console.log(new Intl.NumberFormat("en-IN", options).format());
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
  equity.innerHTML = `${new Intl.NumberFormat("en-IN", options).format(
    (((100 - ageVal) / 100) * savingVal).toFixed(0)
  )} in Equity.`;
  bonds.innerHTML = `${new Intl.NumberFormat("en-IN", options).format(
    (((2 * ageVal) / 300) * savingVal).toFixed(0)
  )} in Fixed Income.`;
  gold.innerHTML = `${new Intl.NumberFormat("en-IN", options).format(
    ((ageVal / 300) * savingVal).toFixed(0)
  )} in gold.`;
  crypto.innerHTML = `${new Intl.NumberFormat("en-IN", options).format(
    (((5 * ageVal) / 3000) * savingVal).toFixed(0)
  )}-${new Intl.NumberFormat("en-IN", options)
    .format(((8 * ageVal) / 3000) * savingVal)
    .toFixed(0)} in gold and </br>${new Intl.NumberFormat(
    "en-IN",
    options
  ).format(
    (((2 * ageVal) / 3000) * savingVal).toFixed(0)
  )}-${new Intl.NumberFormat("en-IN", options).format(
    (((5 * ageVal) / 3000) * savingVal).toFixed(0)
  )} in Crypto Currency.`;
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

  SIPResInit.innerHTML = `${new Intl.NumberFormat("en-IN", options).format(
    init
  )}`;
  SIPResRet.innerHTML = `${new Intl.NumberFormat("en-IN", options).format(
    (maturity - init).toFixed(0)
  )}`;
  SIPResTot.innerHTML = `${new Intl.NumberFormat("en-IN", options).format(
    maturity
  )}`;
  root.style.setProperty("--data-init-sip", `${(init * 100) / maturity}%`);
};
const renderSIP = function (int) {
  SIPIntrest.value = SIPIntrestInput.value = int;
  if (SIPInitial.value > 200000) SIPInitial.value = 200000;
  if (SIPInitial.value <= 0) SIPInitial.value = 500;
  if (SIPIntrestInput.value <= 0) SIPIntrest.value = SIPIntrestInput.value = 1;
  if (SIPIntrestInput.value > 30) SIPIntrest.value = SIPIntrestInput.value = 30;
  const initial = SIPInitial.value;
  const intrest = SIPIntrest.value;
  const period = SIPPeriod.value;
  // Constraints:

  SIPPeriodVal.innerHTML = `${period} ${+period === 1 ? "Year" : "Years"}`;
  // Render Sliders:
  root.style.setProperty(
    "--data-intrest-sip",
    `${(intrest / 0.3).toFixed(2)}%`
  );
  root.style.setProperty("--data-period-sip", `${(period / 0.3).toFixed(2)}%`);
  renderSIPResult(initial, intrest, period);
};

// MF Caclculator:
const renderMFResult = function (init, int, per) {
  let maturity;
  maturity = (init * (1 + int / 100) ** per).toFixed(0);
  MFResInit.innerHTML = `${new Intl.NumberFormat("en-IN", options).format(
    init
  )}`;
  MFResRet.innerHTML = `${new Intl.NumberFormat("en-IN", options).format(
    (maturity - init).toFixed(0)
  )}`;
  MFResTot.innerHTML = `${new Intl.NumberFormat("en-IN", options).format(
    maturity
  )}`;
  root.style.setProperty("--data-init-mf", `${(init * 100) / maturity}%`);
};
const renderMF = function (int) {
  MFIntrest.value = MFIntrestInput.value = int;
  if (MFInitial.value > 5000000) MFInitial.value = 5000000;
  if (MFInitial.value <= 0) MFInitial.value = 500;
  if (MFIntrestInput.value <= 0) MFIntrest.value = MFIntrestInput.value = 1;
  if (MFIntrestInput.value > 50) MFIntrest.value = MFIntrestInput.value = 50;
  const initial = MFInitial.value;
  const intrest = MFIntrest.value;
  const period = MFPeriod.value;
  // Constraints:

  MFPeriodVal.innerHTML = `${period} ${+period === 1 ? "Year" : "Years"}`;
  // Render Sliders:
  root.style.setProperty("--data-intrest-mf", `${(intrest / 0.5).toFixed(2)}%`);
  root.style.setProperty("--data-period-mf", `${(period / 0.3).toFixed(2)}%`);
  renderMFResult(initial, intrest, period);
};
// RD
const SliderAttr = function (min, max, step, val, id) {
  id.setAttribute("min", min);
  id.setAttribute("max", max);
  id.setAttribute("step", step);
  id.setAttribute("value", val);
};
RDMode.oninput = function () {
  if (RDMode.value === "YY") SliderAttr(1, 10, 1, 2, RDPeriod);
  else SliderAttr(3, 9, 3, 6, RDPeriod);
  renderRD(RDIntrest.value);
};
const renderRDResult = function (init, int, per) {
  let maturity = 0;
  let t = RDMode.value === "YY" ? per * 12 : per;
  const N = (RDMode.value === "YY" ? per * 12 : per) / 3;
  const tot = init * (RDMode.value === "YY" ? per * 12 : per);
  while (t !== 0) {
    maturity = maturity + init * (1 + int / (100 * N)) ** ((N * t) / 12);
    t--;
  }
  RDResInit.innerHTML = `${new Intl.NumberFormat("en-IN", options).format(
    tot
  )}`;
  RDResRet.innerHTML = `${new Intl.NumberFormat("en-IN", options).format(
    (maturity - tot).toFixed(0)
  )}`;
  RDResTot.innerHTML = `${new Intl.NumberFormat("en-IN", options).format(
    maturity
  )}`;
  root.style.setProperty("--data-init-rd", `${(tot * 100) / maturity}%`);
};
const renderRD = function (int) {
  RDIntrest.value = RDIntrestInput.value = int;
  if (RDInitial.value > 1000000) RDInitial.value = 1000000;
  if (RDInitial.value <= 0) RDInitial.value = 500;
  if (RDIntrestInput.value <= 0) RDIntrest.value = RDIntrestInput.value = 1;
  if (RDIntrestInput.value > 12) RDIntrest.value = RDIntrestInput.value = 12;
  const initial = RDInitial.value;
  const intrest = RDIntrest.value;
  const period = RDPeriod.value;
  // Constraints:

  RDPeriodVal.value = period;
  // Render Sliders:
  root.style.setProperty(
    "--data-intrest-rd",
    `${(intrest / 0.12).toFixed(2)}%`
  );
  root.style.setProperty(
    "--data-period-rd",
    `${(RDMode.value === "YY" ? period / 0.1 : (period - 3) / 3 / 0.02).toFixed(
      2
    )}%`
  );
  renderRDResult(initial, intrest, period);
};
// FD
FDMode.oninput = function () {
  if (FDMode.value === "YY") SliderAttr(1, 10, 1, 2, FDPeriod);
  else if (FDMode.value === "MM") SliderAttr(1, 11, 1, 3, FDPeriod);
  else SliderAttr(1, 31, 1, 7, FDPeriod);
  renderFD(FDIntrest.value);
};
const renderFDResult = function (init, int, per) {
  let maturity;
  maturity = init * (1 + int / 100) ** per;
  FDResInit.innerHTML = `${new Intl.NumberFormat("en-IN", options).format(
    init
  )}`;
  FDResRet.innerHTML = `${new Intl.NumberFormat("en-IN", options).format(
    (maturity - init).toFixed(0)
  )}`;
  FDResTot.innerHTML = `${new Intl.NumberFormat("en-IN", options).format(
    maturity
  )}`;
  root.style.setProperty("--data-init-fd", `${(init * 100) / maturity}%`);
};
const renderFD = function (int) {
  FDIntrest.value = FDIntrestInput.value = int;
  if (FDInitial.value > 100000000) FDInitial.value = 100000000;
  if (FDInitial.value <= 0) FDInitial.value = 500;
  if (FDIntrestInput.value <= 0) FDIntrest.value = FDIntrestInput.value = 1;
  if (FDIntrestInput.value > 15) FDIntrest.value = FDIntrestInput.value = 15;
  const initial = FDInitial.value;
  const intrest = FDIntrest.value;
  const period = FDPeriod.value;
  // Constraints:

  FDPeriodVal.value = period;
  // Render Sliders:
  root.style.setProperty(
    "--data-intrest-fd",
    `${(intrest / 0.15).toFixed(2)}%`
  );
  root.style.setProperty(
    "--data-period-fd",
    `${(FDMode.value === "YY"
      ? period / 0.1
      : FDMode.value === "MM"
      ? period / 0.11
      : period / 0.31
    ).toFixed(2)}%`
  );
  renderFDResult(initial, intrest, period);
};
renderSIP(SIPIntrest.value);
renderMF(MFIntrest.value);
renderRD(RDIntrest.value);
renderFD(FDIntrest.value);
// Income Tax:
// HRA Exemption:
const calcHRA = function () {
  if (InHRA.value === "") return 0;
  const BDA = +InSalary.value + +InDA.value;
  const A = +InHRA.value;
  const B = InMetro.value === "y" ? BDA * 0.5 : BDA * 0.4;
  const C = +InRent.value - BDA * 0.1;
  if (A < B && A < C) return A;
  else if (B < A && B < C) return B;
  else return C;
};
// Regime 1:
const regime1 = function (Taxable) {
  let Tax = 0;
  if (AgeGroup.value === "59") {
    if (Taxable < 500000) return Tax;
    // 0 to 2.5L:
    if (Taxable > 250000) Tax += 0;
    else return Tax;
    // 2.5L to 5L:
    if (Taxable > 500000) Tax += 12500;
    else return (Tax += (Taxable - 250000) * 0.05);
    // 5L to 7.5L:
    if (Taxable > 750000) Tax += 50000;
    else return (Tax += (Taxable - 500000) * 0.2);
    // 7.5L to 10L:
    if (Taxable > 1000000) Tax += 50000;
    else return (Tax += (Taxable - 750000) * 0.2);
    // 10L to 12.5L:
    if (Taxable > 1250000) Tax += 75000;
    else return (Tax += (Taxable - 1000000) * 0.3);
    // 12.5L to 15L:
    if (Taxable > 1500000) Tax += 75000;
    else return (Tax += (Taxable - 1250000) * 0.3);
    // 15L and above:
    if (Taxable > 1500000) return (Tax += (Taxable - 1500000) * 0.3);
  } else if (AgeGroup.value === "60") {
    if (Taxable < 500000) return Tax;
    // 0 to 3L:
    if (Taxable > 300000) Tax += 0;
    else return Tax;
    // 3L to 5L:
    if (Taxable > 500000) Tax += 10000;
    else return (Tax += (Taxable - 300000) * 0.05);
    // 5L to 10L:
    if (Taxable > 1000000) Tax += 100000;
    else return (Tax += (Taxable - 500000) * 0.2);
    // 10L and above:
    if (Taxable > 1000000) return (Tax += (Taxable - 1000000) * 0.3);
  } else {
    if (Taxable < 500000) return Tax;
    // 0 to 5L:
    if (Taxable > 500000) Tax += 0;
    else return Tax;
    // 5L to 10L:
    if (Taxable > 1000000) Tax += 100000;
    else return (Tax += (Taxable - 500000) * 0.2);
    // 10L and above:
    if (Taxable > 1000000) return (Tax += (Taxable - 1000000) * 0.3);
  }
};
// Regime 2:
const regime2 = function (Taxable) {
  let Tax = 0;
  if (Taxable < 500000) return Tax;
  // 0 to 2.5L:
  if (Taxable > 250000) Tax += 0;
  else return Tax;
  // 2.5L to 5L:
  if (Taxable > 500000) Tax += 12500;
  else return (Tax += (Taxable - 250000) * 0.05);
  // 5L to 7.5L:
  if (Taxable > 750000) Tax += 25000;
  else return (Tax += (Taxable - 500000) * 0.1);
  // 7.5L to 10L:
  if (Taxable > 1000000) Tax += 37500;
  else return (Tax += (Taxable - 750000) * 0.15);
  // 10L to 12.5L:
  if (Taxable > 1250000) Tax += 50000;
  else return (Tax += (Taxable - 1000000) * 0.2);
  // 10L to 12.5L:
  if (Taxable > 1500000) Tax += 62500;
  else return (Tax += (Taxable - 1250000) * 0.25);
  // 10L to 12.5L:
  if (Taxable > 1500000) return (Tax += (Taxable - 1500000) * 0.3);
};
// Main Func:
const calcIT = function () {
  const GrossSalary =
    +InSalary.value + +InSA.value + +InLTA.value + +InDA.value + +InHRA.value;
  const HRAexe = calcHRA();
  const LTAexe = DeLTA === "" ? 0 : +DeLTA.value;
  const IncOther = +InOth.value + +InInt.value;
  const GrossTotIncome1 = GrossSalary + IncOther - HRAexe - LTAexe - 50000;
  const GrossTotIncome2 = GrossSalary + IncOther;
  const Ded80C =
    +DeELSS.value +
    +DeEPF.value +
    +DeFD.value +
    +DeSSY.value +
    +DePPF.value +
    +DeNSC.value +
    +DeTution.value +
    +DeLoanPrinc.value +
    +DeOth.value;
  const S80Cexe = Ded80C < 150000 ? Ded80C : 150000;
  const MedS = DeMedS.value < 25000 ? +DeMedS.value : 25000;
  const MedP =
    DeSenior.value === "n"
      ? DeMedP.value < 25000
        ? +DeMedP.value
        : 25000
      : DeMedP.value < 50000
      ? +DeMedP.value
      : 50000;
  const S80Dexe = MedS + MedP;
  const IntSav = DeIntSav.value < 10000 ? +DeIntSav.value : 10000;
  const S80TTAexe = IntSav + +DeIntEdu.value;
  const TaxableInc1 = GrossTotIncome1 - S80Cexe - S80Dexe - S80TTAexe;
  const Tax1 = regime1(TaxableInc1);
  const Tax2 = regime2(GrossTotIncome2);
  const TotTax1 = Tax1 + 0.04 * Tax1;
  const TotTax2 = Tax2 + 0.04 * Tax2;
  ITResult.innerHTML = `Old Regime:${new Intl.NumberFormat(
    "en-IN",
    options
  ).format(TotTax1)}<br><br>New Regime:${new Intl.NumberFormat(
    "en-IN",
    options
  ).format(TotTax2)}`;
  ITResultBox.classList.remove("hidden");
};
ITCalculate.addEventListener("click", calcIT);
// Section reveal:
sections.forEach((s) => {
  s.classList.add("hidden");
});
sections[0].classList.remove("hidden");
navlinks.forEach((link) =>
  link.addEventListener("click", function (e) {
    const id = e.target.getAttribute("href");
    console.log(id);
    const sec = document.querySelector(id);
    sections.forEach((s) => {
      if (!s.classList.contains("hidden")) s.classList.add("hidden");
    });
    sec.classList.remove("hidden");
  })
);
//
