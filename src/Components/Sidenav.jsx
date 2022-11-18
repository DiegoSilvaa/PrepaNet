import styles from "/src/styles/sidenav.module.css"
import { NavLink } from "react-router-dom";
import { navData } from "../lib/navData";
import {useContext} from "react";
import { AuthContext } from '../context/Auth.context.jsx';

export default function Sidenav() {
  const { state } = useContext(AuthContext);
  const usuario = state.name;

  return (
      <div className={styles.sidenav}>
        <div className={styles.sideitemini}> Bienvenido, {usuario}
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