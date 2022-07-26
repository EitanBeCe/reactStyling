import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//   .form-control {
//     margin: 0.5rem 0;
//   }

//   .form-control label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//   }

//   .form-control input {
//     display: block;
//     width: 100%;
//     border: 1px solid #ccc;
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   .form-control input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   .form-control.invalid input {
//     border-color: red;
//     background: rgb(205, 148, 148);
//   }

//   .form-control.invalid label {
//     color: red;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
      {/* <div className={`form-control ${!isValid ? "invalid" : ""}`}> */}
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
