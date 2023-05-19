import useInput from "./hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: enteredFirstNameIsInvalid,
    inputHandler: firstNameInputHandler,
    inputIsTouchedHandler: firstNameIsTouchedHandler,
    reset: resetFirstName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredSecondName,
    isValid: enteredSecondNameIsValid,
    hasError: enteredSecondNameIsInvalid,
    inputHandler: secondNameInputHandler,
    inputIsTouchedHandler: secondNameIsTouchedHandler,
    reset: resetSecondName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailIsInvalid,
    inputHandler: emailInputHandler,
    inputIsTouchedHandler: emailIsTouchedHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredSecondNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (
      enteredFirstNameIsInvalid &&
      enteredSecondNameIsInvalid &&
      enteredEmailIsInvalid
    ) {
      formIsValid = false;
      return;
    }
    console.log(
      enteredFirstName +
        " " +
        enteredSecondName +
        "  your email is : " +
        enteredEmail
    );

    resetFirstName();
    resetSecondName();
    resetEmail();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameInputHandler}
            onBlur={firstNameIsTouchedHandler}
            value={enteredFirstName}
          />
          {enteredFirstNameIsInvalid && <p>Enter a valid first name</p>}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={secondNameInputHandler}
            onBlur={secondNameIsTouchedHandler}
            value={enteredSecondName}
          />
          {enteredSecondNameIsInvalid && <p>Enter a valid second name</p>}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailInputHandler}
          onBlur={emailIsTouchedHandler}
          value={enteredEmail}
        />
        {enteredEmailIsInvalid && <p>Enter a valid E-mail</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
