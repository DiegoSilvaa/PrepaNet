import styles from "/src/styles/sidenav.module.css"
import { NavLink } from "react-router-dom";
import { navData } from "../lib/navDataCoor";
import {useContext} from "react";
import AuthContext from '../context/AuthContext';
import SensorDoorIcon from '@mui/icons-material/SensorDoor';

export default function Sidenav() {
  const authCTX = useContext(AuthContext);
  const user = authCTX.user;

  const { logout } = useContext(AuthContext);
  const onLogout = (e) => {
    e.preventDefault();
    logout();
  }

  const cerrarSe = 
  {
      id: 4,
      icon: <SensorDoorIcon />,
      text: "Cerrar Sesion",
      link: "/login"
  };

  return (
      <div className={styles.sidenav}>
        <div className={styles.sideitemini}> Bienvenido, {user}
        </div>
        {navData.map(item => {
          return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
            {item.icon}
            <span className={styles.linkText}>{item.text}</span>
          </NavLink>
        })}

        <NavLink key={cerrarSe.id} className={styles.sideitem} to={cerrarSe.link}>
            {cerrarSe.icon}
          <span className={styles.linkText} onClick={onLogout}> {cerrarSe.text} </span>
          </NavLink>
      </div>
  )
}