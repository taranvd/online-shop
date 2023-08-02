import _vars from "../_vars";

if (_vars.stepper) {
  const stepperInput = _vars.stepper.querySelector(".stepper__input"),
    stepperMinus = _vars.stepper.querySelector(".stepper__btn--minus"),
    stepperPlus = _vars.stepper.querySelector(".stepper__btn--plus");

  stepperInput.addEventListener("keydown", (e) => {
    if (e.currentTarget.value <= 1) {
      stepperMinus.classList.add("stepper__btn--disabled");
      stepperPlus.classList.remove("stepper__btn--disabled");
    } else {
      stepperMinus.classList.remove("stepper__btn--disabled");
    }

    if (e.currentTarget.value > 99998) {
      stepperMinus.classList.remove("stepper__btn--disabled");
      stepperPlus.classList.add("stepper__btn--disabled");
    } else {
      stepperPlus.classList.remove("stepper__btn--disabled");
    }
  });

  stepperPlus.addEventListener("click", (e) => {
    let currentValue = parseInt(stepperInput.value);

    currentValue++;

    stepperInput.value = currentValue;

    stepperMinus.classList.remove("stepper__btn--disabled");

    if (stepperInput.value > 99998) {
      stepperInput.value = 99999;
      stepperPlus.classList.add("stepper__btn--disabled");
    } else {
      stepperPlus.classList.remove("stepper__btn--disabled");
    }
  });

  stepperMinus.addEventListener("click", (e) => {
    let currentValue = parseInt(stepperInput.value);

    currentValue--;

    stepperInput.value = currentValue;

    stepperPlus.classList.remove("stepper__btn--disabled");

    if (stepperInput.value <= 1) {
      stepperInput.value = 1;
      stepperMinus.classList.add("stepper__btn--disabled");
    } else {
      stepperMinus.classList.remove("stepper__btn--disabled");
    }
  });
}
