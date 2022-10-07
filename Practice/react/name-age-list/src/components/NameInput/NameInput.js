import React, { useState } from "react";
import "./NameInput.css";

const NameInput = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isInputValid, setIsInputValid] = useState("false");

  const nameInputChangeHandler = (event) => {
    if (event.target.value.trim().length < 1) {

    }
    console.log(event.target.value.trim().length)

    setName(event.target.value);
  }

  const ageInputChangeHandler = (event) => {
    setAge(event.target.value);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onSubmit([name, age]);

    setName("");
    setAge("");
  }

  return (
    <div className="input-form__wrap">
      <form className="input-form" onSubmit={formSubmitHandler}>
          <label className="input-form__input-title">Имя</label>  
          <input className="input-form__input" type="text" onChange={nameInputChangeHandler} value={name}></input> 
          <label className="input-form__input-title">Возраст</label>  
          <input className="input-form__input" type="number" min="1" step="1" onChange={ageInputChangeHandler} value={age}></input> 
          <button className="input-form__submit-button" type="submit">Добавить Пользователя</button>  
      </form>
    </div>
  );
}

export default NameInput;
