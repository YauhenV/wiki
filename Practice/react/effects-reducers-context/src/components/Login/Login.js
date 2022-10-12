import React, { useState, useEffect, useReducer, useContext, useRef } from "react";

import Card from "../UI/Card/Card";
import styles from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../context/Auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (prevState, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.value,
      isValid: action.value.includes("@"),
    };
  };
    if (action.type === "INPUT_BLUR") {
      return {
        value: prevState.value,
        isValid: prevState.value.includes("@"),
      }
    };
  return {
    value: "",
    isValid: false,
  }
};

const passwordReducer = (prevState, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.value,
      isValid: action.value.trim().length > 7,
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: prevState.value,
      isValid: prevState.value.trim().length > 7,
    };
  }
  return {
    value: "",
    isValid: false,
  }
}

const Login = () => {
  const ctx = useContext(AuthContext);
  // const [inputEmail, setInputEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [inputPassword, setInputPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmailState] = useReducer(emailReducer, {value: "", isValid: undefined,});
  const [passwordState, dispatchPasswordState] = useReducer(passwordReducer, {value: "", isValid: undefined,});

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  
  const emailInputRef = useRef();
  const passwordlInputRef = useRef();


  useEffect(() => {
    const timer = setTimeout (() => {
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 1000);

    return () => {
      clearTimeout(timer)
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmailState({type: "USER_INPUT", value: event.target.value});

    // setFormIsValid(
    //     event.target.value.includes("@") && passwordState.isValid
    //   );
  };

  const passwordChangeHandler = (event) => {
    dispatchPasswordState({type: "USER_INPUT", value: event.target.value})

    // setFormIsValid(
    //   event.target.value.trim().length > 7 && emailState.isValid
    //   );
  };

  const validateEmailHandler = () => {
    dispatchEmailState({type: "INPUT_BLUR"});
  };

  const validatePasswordHandler = () => {
    dispatchPasswordState({type: "INPUT_BLUR"});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      ctx.onLogin(emailState.value, passwordState.value); 
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordlInputRef.current.focus();
    }
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <Input 
          ref = {emailInputRef}
          isValid = {emailIsValid}
          labelFor = "email"
          labelText = "Email"
          inputType = "email"
          inputId = "email"
          inputValue ={emailState.value}
          inputOnChange={emailChangeHandler}
          inputOnBlur={validateEmailHandler}
           />
        {/* 
          <div
            className={`${styles.control} ${
              emailState.isValid === false ? styles.invalid : ""
            }`}
          >
          <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={emailState.value}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
          />
          </div>
        */}
        <Input 
          ref = {passwordlInputRef}
          isValid = {passwordIsValid}
          labelFor = "password"
          labelText = "Пароль"
          inputType = "password"
          inputId = "password"
          inputValue ={passwordState.value}
          inputOnChange={passwordChangeHandler}
          inputOnBlur={validatePasswordHandler}
           />
        {/*
          <div
            className={`${styles.control} ${
              passwordState.isValid === false ? styles.invalid : ""
            }`}
          >
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
          </div>
        */}
        <div className={styles.actions}>
          <Button type="submit" className={styles.btn}>
            Вход
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
