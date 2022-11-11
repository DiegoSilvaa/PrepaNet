import styles from "/src/styles/sidenav.module.css"
import { NavLink } from "react-router-dom";
import { navData } from "../lib/navDataEst";
import { useState } from "react";

export default function Sidenav() {

  const usuario = "Diego";

  return (
      <div className={styles.sidenav}>
        <div className={styles.sideitemini}> Hola, {usuario}
        </div>
        {navData.map(item => {
          return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
            {item.icon}
            <span className={styles.linkText}>{item.text}</span>
          </NavLink>
        })}
      </div>
  )
}