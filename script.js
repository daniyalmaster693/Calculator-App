document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const sliderswitch = document.querySelector(".sliderswitch");
  const maincontainer = document.querySelector(".maincontainer");
  const toggle = document.getElementById("toggle");
  const clear = document.querySelector(".clear");
  const pi = document.querySelector(".pi");
  const exponent = document.querySelector(".exponent");
  const decimal = document.querySelector(".decimal");
  const add = document.querySelector(".add");
  const subtract = document.querySelector(".subtract");
  const multiply = document.querySelector(".multiply");
  const divide = document.querySelector(".divide");
  const equals = document.querySelector(".equals");
  const numbers = document.querySelectorAll(".number");
  const backspace = document.querySelector(".delete");
  const footer = document.querySelector(".footer");
  const answer = document.querySelector(".answer");
  answer.innerHTML = "<h1>0</h1>";

  function changeDisplayMode() {
    if (toggle.checked) {
      // Dark mode
      body.style.backgroundColor = "#17171c";
      body.style.transition = "all 0.4s ease-in-out";
      maincontainer.style.backgroundColor = "#f1f2f3";
      maincontainer.style.transition = "all 0.6s ease-in-out";
      maincontainer.style.boxShadow = "rgb(255 255 255 / 30%) 0px 2px 20px";
      answer.style.color = "black";
      footer.style.color = "#a0a0a0";
      body.classList.add("dark-mode");
      body.classList.remove("light-mode");
      clear.classList.add("light-mode");
      pi.classList.add("light-mode");
      exponent.classList.add("light-mode");
      add.classList.add("light-mode");
      subtract.classList.add("light-mode");
      multiply.classList.add("light-mode");
      divide.classList.add("light-mode");
      equals.classList.add("light-mode");
      numbers.forEach((number) => {
        number.classList.add("light-mode");
      });
      backspace.classList.add("light-mode");
      decimal.classList.add("light-mode");
      sliderswitch.style.backgroundColor = "#878997";
    } else {
      // Light Mode
      body.style.backgroundColor = "#f1f2f3";
      body.style.transition = "all 0.4s ease-in-out";
      maincontainer.style.backgroundColor = "#17171c";
      maincontainer.style.transition = "all 0.6s ease-in-out";
      maincontainer.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.3)";
      answer.style.color = "white";
      footer.style.color = "black";
      body.classList.add("light-mode");
      body.classList.remove("dark-mode");
      clear.classList.remove("light-mode");
      pi.classList.remove("light-mode");
      exponent.classList.remove("light-mode");
      add.classList.remove("light-mode");
      subtract.classList.remove("light-mode");
      multiply.classList.remove("light-mode");
      divide.classList.remove("light-mode");
      equals.classList.remove("light-mode");
      numbers.forEach((number) => {
        number.classList.remove("light-mode");
      });
      backspace.classList.remove("light-mode");
      decimal.classList.remove("light-mode");
      sliderswitch.style.backgroundColor = "#4e505f";
    }
  }

  function matchSystemTheme() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    toggle.checked = prefersDarkScheme.matches;
    changeDisplayMode();
  }

  function updateCalDisplay() {
    const key = event.key;
    const keyboardValue = key;
    const buttonValue = this.textContent;
    const currentDisplay = answer.textContent;

    if (currentDisplay.length < 13) {
      if (currentDisplay === "0") {
        answer.innerHTML = `<h1>${keyboardValue || buttonValue}</h1>`;
      } else {
        answer.innerHTML += `<h1>${keyboardValue || buttonValue}</h1>`;
      }
    }
    buttonSoundEffect();
  }

  function deleteDigit() {
    if (answer.textContent === "0") {
      return;
    } else {
      answer.textContent = answer.textContent.slice(0, -1);
      answer.style.fontSize = "30px";
      answer.style.fontWeight = "bold";
    }

    if (answer.textContent === "") {
      answer.textContent = "0";
    }

    buttonSoundEffect();
  }

  function clearCal() {
    answer.innerHTML = "<h1>0</h1>";
    answer.style.fontSize = "";
    answer.style.fontWeight = "";

    firstValue = 0;
    operator = null;

    firstDecimalCount = 0;
    secondDecimalCount = 0;

    buttonSoundEffect(operator);
  }

  let firstDecimalCount = 0;
  let secondDecimalCount = 0;

  function decimalInput() {
    const currentDisplay = answer.textContent;

    if (operator === null) {
      if (!currentDisplay.includes(".") && firstDecimalCount === 0) {
        answer.innerHTML += "<h1>.</h1>";
        firstDecimalCount++;
      }
    } else {
      if (!currentDisplay.includes(".") && secondDecimalCount === 0) {
        answer.innerHTML += "<h1>.</h1>";
        secondDecimalCount++;
      }
    }

    buttonSoundEffect();
  }

  let firstValue = 0;
  let operator = null;

  function handleOperator() {
    const key = event.key;
    const keyboardValue = key;

    if (operator === null) {
      firstValue = parseFloat(answer.textContent);
      answer.innerHTML = "";
    }

    if (this.textContent === "π") {
      answer.innerHTML = "<h1>π</h1>";
    }

    if (this.textContent === "x²") {
      answer.innerHTML = `<h1>${firstValue}x²</h1>`;
    }

    operator = this.textContent || keyboardValue;
    buttonSoundEffect(operator);
  }

  function calculate() {
    let result;
    let secondValue = parseFloat(answer.textContent);

    switch (operator) {
      case "+":
        result = firstValue + secondValue;
        break;
      case "-":
        result = firstValue - secondValue;
        break;
      case "x":
        result = firstValue * secondValue;
        break;
      case "÷":
        result = firstValue / secondValue;

        if (secondValue === 0) {
          result = NaN;
        }
        break;
      case "/":
        result = firstValue / secondValue;
        break;
      case "π":
        result = firstValue * Math.PI;
        break;
      case "x²":
        result = firstValue * firstValue;
        break;
    }

    if (Number.isInteger(result)) {
      answer.innerHTML = `<h1>${result}</h1>`;
    } else {
      answer.innerHTML = `<h1>${result.toFixed(3)}</h1>`;
    }

    firstValue = result;
    operator = null;

    copyAnswerToClipboard();
    buttonSoundEffect();
  }

  function keyboardInput() {
    const key = event.key;

    if (!isNaN(key)) {
      updateCalDisplay();
    }

    if (key === "Enter") {
      calculate();
    }

    if (key === "Backspace") {
      deleteDigit();
    }

    if (key === "c") {
      clearCal();
    }

    if (key === "+" || key === "-" || key === "x" || key === "/") {
      handleOperator();
    }

    if (key === ".") {
      decimalInput();
    }
  }

  function copyAnswerToClipboard() {
    const copyAnswer = document.createElement("textarea");
    copyAnswer.value = answer.textContent;
    document.body.appendChild(copyAnswer);
    copyAnswer.select();
    document.execCommand("copy");
    document.body.removeChild(copyAnswer);

    const message = document.querySelector(".message");
    message.style.display = "block";
    setTimeout(() => {
      message.style.display = "none";
    }, 3000);
  }

  function buttonSoundEffect() {
    const audio = new Audio("Keyboard Click Sound.mp3");
    audio.play();
  }

  toggle.addEventListener("change", changeDisplayMode);
  backspace.addEventListener("click", deleteDigit);
  clear.addEventListener("click", clearCal);
  equals.addEventListener("click", calculate);
  add.addEventListener("click", handleOperator);
  subtract.addEventListener("click", handleOperator);
  multiply.addEventListener("click", handleOperator);
  divide.addEventListener("click", handleOperator);
  pi.addEventListener("click", handleOperator);
  exponent.addEventListener("click", handleOperator);
  decimal.addEventListener("click", decimalInput);
  numbers.forEach((number) => {
    number.addEventListener("click", updateCalDisplay);
  });

  numbers.forEach((number) => {
    onkeydown = function () {
      keyboardInput();
    };
  });

  matchSystemTheme();
});
