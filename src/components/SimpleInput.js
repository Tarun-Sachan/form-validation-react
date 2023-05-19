import { useState } from "react";


const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredEmailIsValid = enteredEmail.trim().match("@");
  const nameInputInValid = !enteredNameIsValid && isTouched;
  const emailInputInValid = !enteredEmailIsValid && enteredEmailIsTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
  const inputNameHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const isTochedHandler = (e) => {
    setIsTouched(true);
  };
  const inputEmailHandler = (e)=>{
    setEnteredEmail(e.target.value);
  };
  const emailIsTochedHandler = (e)=>{
    setEnteredEmailIsTouched(true);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setIsTouched(true);
    setEnteredEmailIsTouched(true);
    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }
    console.log(enteredName);
    setEnteredName("");
    setEnteredEmail("");
    setIsTouched(false);
    setEnteredEmailIsTouched(false);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputNameHandler}
          onBlur={isTochedHandler}
          value={enteredName}
        />
      </div>
      {nameInputInValid && (
        <p className="error-text">Please enter a valid name</p>
      )}
      <div className="form-control">
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={inputEmailHandler}
          onBlur={emailIsTochedHandler}
          value={enteredEmail}
        />
      </div>
      {emailInputInValid && (
        <p className="error-text">Please enter a valid email</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
