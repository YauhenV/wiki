import React, { useContext } from "react";
import AuthContext from "../../context/Auth-context";

import styles from "./Navigation.module.css";

const Navigation = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <nav className={styles.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Пользователи</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Админ</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Выйти</button>
          </li>
        )}
      </ul>
    </nav>


    // <AuthContext.Consumer>
    //   {(ctx) => {
    //     return (
    //       <nav className={styles.nav}>
    //         <ul>
    //           {ctx.isLoggedIn && (
    //             <li>
    //               <a href="/">Пользователи</a>
    //             </li>
    //           )}
    //           {ctx.isLoggedIn && (
    //             <li>
    //               <a href="/">Админ</a>
    //             </li>
    //           )}
    //           {ctx.isLoggedIn && (
    //             <li>
    //               <button onClick={props.onLogout}>Выйти</button>
    //             </li>
    //           )}
    //         </ul>
    //       </nav>
    //     )
    //   }}
      
    // </AuthContext.Consumer>
  );
};

export default Navigation;
