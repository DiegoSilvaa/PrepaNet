import styles from "/src/styles/sidenav.module.css"
import { NavLink } from "react-router-dom";
import { navData } from "../lib/navData";
import {useContext} from "react";
import AuthContext from '../context/AuthContext';

export default function Sidenav() {
  const authCTX = useContext(AuthContext);

  return (
      <div className={styles.sidenav}>
        <div className={styles.sideitemini}> Bienvenido
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