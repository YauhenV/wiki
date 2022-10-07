import styles from "./NameItem.module.css"

const NameItem = (props) => {
  return (
    <li className={styles["name-item"]}>
      {props.children}
    </li>
  );
}

export default NameItem;