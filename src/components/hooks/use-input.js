import { useState } from "react";

const useInput = (validateValue) => {
  const [inputValue, setInputValue] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const inputIsValid = validateValue(inputValue);
  const inputIsInvalid = !inputIsValid && inputIsTouched;

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const inputIsTouchedHandler = (event) => {
    setInputIsTouched(true);
  };

  const reset = () => {
    setInputValue("");
    setInputIsTouched(false);
  };

  return {
    value: inputValue,
    isValid: inputIsValid,
    hasError: inputIsInvalid,
    inputHandler,
    inputIsTouchedHandler,
    reset,
  };
};

export default useInput;
