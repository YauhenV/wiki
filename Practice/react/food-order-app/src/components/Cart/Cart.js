import CartContext from "../../store/cart-context";
import { useContext } from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;
  const hasItems = cartContext.item.length > 0;

  const removeCardItemHandler = (id) => {
    cartContext.removeItem(id);
  }

  const addCardItemHandler = (item) => {
    cartContext.addItem({...item, amount: 1,})
  }

  const cartItems = (
    <ul className = {styles["cart-items"]}>
      {
        cartContext.item.map((item) => (
          <CartItem 
            key = {item.id}
            name = {item.name}
            price = {item.price}
            amount = {item.amount}
            onRemove = {removeCardItemHandler.bind(null, item.id)}
            onAdd = {addCardItemHandler.bind(null, item)}
          />))
      }
    </ul>
  );

  return (
    <Modal onHideCart = {props.onHideCart}>
      {cartItems}
      <div className = {styles.total}>
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>
      <div className = {styles.actions}>
        <button className={styles["button--alt"]} onClick = {props.onHideCart}>Закрыть</button>
        {hasItems && <button className={styles.button}>Заказать</button>}

      </div>
    </Modal>
  );
};

export default Cart;