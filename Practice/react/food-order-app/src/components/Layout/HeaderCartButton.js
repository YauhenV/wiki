import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon"
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {

  const [isButtonAnimated, setIsButtonAnimated] = useState(false);

  const cartContext = useContext(CartContext);

  const cartItemNumber = cartContext.item.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  useEffect(() => {
    if (cartContext.item.length === 0) {
      return;
    }
    setIsButtonAnimated(true);

    const timer = setTimeout(() => {
      setIsButtonAnimated(false);
    }, 300);

    return () => {
      clearTimeout(timer)
    }
  }, [cartContext.item])

  const buttonClasses = `${styles.button} ${isButtonAnimated ? styles.bump : ""}`;

  return (
    <button className={buttonClasses} onClick = {props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>
        Корзина
      </span>
      <span className={styles.badge}>
        {cartItemNumber}
      </span>
    </button>
  );
};

export default HeaderCartButton;