document.addEventListener("DOMContentLoaded", () => {
  const billamount = document.querySelector(".billamount");
  const errormessage1 = document.querySelector(".errormessage1");
  const errormessage2 = document.querySelector(".errormessage2");
  const peoplenumber = document.querySelector(".peoplenumber");
  const tipbutton1 = document.querySelector(".tipbutton1");
  const tipbutton2 = document.querySelector(".tipbutton2");
  const tipbutton3 = document.querySelector(".tipbutton3");
  const tipbutton4 = document.querySelector(".tipbutton4");
  const tipbutton5 = document.querySelector(".tipbutton5");
  const tipcustom = document.querySelector(".tipcustom");
  const resetbutton = document.querySelector(".resetbutton");
  const totaltip = document.querySelector(".totaltip");
  const persontip = document.querySelector(".persontip");

  let tip = NaN;

  function acceptCharacters() {
    this.value = this.value.replace(/[^0-9.]/g, "");

    errorMessages();
    calculateTip();
    customTip();
  }

  function errorMessages() {
    const inputvalue1 = parseFloat(billamount.value);
    const inputvalue2 = parseFloat(peoplenumber.value);

    if (inputvalue1 === 0) {
      billamount.classList.add("invalid");
      errormessage1.style.display = "block";
    } else {
      billamount.classList.remove("invalid");
      errormessage1.style.display = "none";
    }

    if (inputvalue2 === 0) {
      peoplenumber.classList.add("invalid");
      errormessage2.style.display = "block";
    } else {
      peoplenumber.classList.remove("invalid");
      errormessage2.style.display = "none";
    }
  }

  function calculateTip() {
    const bill = parseFloat(billamount.value);
    const people = parseFloat(peoplenumber.value);

    const tipTotal = bill * tip;
    const perPerson = tipTotal / people;

    totaltip.innerHTML = "$" + tipTotal.toFixed(2);
    persontip.innerHTML = "$" + perPerson.toFixed(2);
  }

  function customTip() {
    tip = parseInt(tipcustom.value) / 100;
    calculateTip();

    tipbutton1.classList.remove("clicked");
    tipbutton2.classList.remove("clicked");
    tipbutton3.classList.remove("clicked");
    tipbutton4.classList.remove("clicked");
    tipbutton5.classList.remove("clicked");
  }

  function reset() {
    if (billamount) {
      billamount.value = "";
      billamount.classList.remove("invalid");
      errormessage1.style.display = "none";
    }

    if (tipcustom) {
      tipcustom.value = "";
    }

    if (peoplenumber) {
      peoplenumber.value = "";
      peoplenumber.classList.remove("invalid");
      errormessage2.style.display = "none";
    }

    tip = NaN;

    tipbutton1.classList.remove("clicked");
    tipbutton2.classList.remove("clicked");
    tipbutton3.classList.remove("clicked");
    tipbutton4.classList.remove("clicked");
    tipbutton5.classList.remove("clicked");

    totaltip.innerHTML = "$0.00";
    persontip.innerHTML = "$0.00";
  }

  function tipAmount1() {
    tip = 0.05;

    tipbutton1.classList.add("clicked");
    tipbutton2.classList.remove("clicked");
    tipbutton3.classList.remove("clicked");
    tipbutton4.classList.remove("clicked");
    tipbutton5.classList.remove("clicked");

    calculateTip();
  }

  function tipAmount2() {
    tip = 0.1;

    tipbutton2.classList.add("clicked");
    tipbutton1.classList.remove("clicked");
    tipbutton3.classList.remove("clicked");
    tipbutton4.classList.remove("clicked");
    tipbutton5.classList.remove("clicked");

    calculateTip();
  }

  function tipAmount3() {
    tip = 0.15;

    tipbutton3.classList.add("clicked");
    tipbutton1.classList.remove("clicked");
    tipbutton2.classList.remove("clicked");
    tipbutton4.classList.remove("clicked");
    tipbutton5.classList.remove("clicked");

    calculateTip();
  }

  function tipAmount4() {
    tip = 0.25;

    tipbutton4.classList.add("clicked");
    tipbutton1.classList.remove("clicked");
    tipbutton2.classList.remove("clicked");
    tipbutton3.classList.remove("clicked");
    tipbutton5.classList.remove("clicked");

    calculateTip();
  }

  function tipAmount5() {
    tip = 0.5;

    tipbutton5.classList.add("clicked");
    tipbutton1.classList.remove("clicked");
    tipbutton2.classList.remove("clicked");
    tipbutton3.classList.remove("clicked");
    tipbutton4.classList.remove("clicked");

    calculateTip();
  }

  billamount.addEventListener("input", acceptCharacters);
  peoplenumber.addEventListener("input", acceptCharacters);
  tipcustom.addEventListener("input", acceptCharacters);

  tipbutton1.addEventListener("click", tipAmount1);
  tipbutton2.addEventListener("click", tipAmount2);
  tipbutton3.addEventListener("click", tipAmount3);
  tipbutton4.addEventListener("click", tipAmount4);
  tipbutton5.addEventListener("click", tipAmount5);

  resetbutton.addEventListener("click", reset);
});
