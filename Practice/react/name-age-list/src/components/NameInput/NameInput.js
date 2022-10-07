import React, { useState } from "react";
import "./NameInput.css";

const NameInput = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameInputChangeHandler = (event) => {
    setName(event.target.value);
  }

  const ageInputChangeHandler = (event) => {
      setAge(event.target.value);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      props.inputValid(false);
      return;
    }
    
    if (age.trim() < 1) {
      props.inputValid("lessOne");
      return;
      
    }
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
          <input className="input-form__input" type="number" step="1" onChange={ageInputChangeHandler} value={age}></input> 
          <button className="input-form__submit-button" type="submit">Добавить Пользователя</button> 
      </form>
    </div>
  );
}

export default NameInput;
