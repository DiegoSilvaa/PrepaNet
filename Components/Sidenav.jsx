import styles from "./sidenav.module.css"
import { NavLink } from "react-router-dom";
import { navData } from "../lib/navData";
import { useState } from "react";
import SensorDoorIcon from '@mui/icons-material/SensorDoor';

export default function Sidenav() {
  const [open, setopen] = useState(true)
  const toggleOpen = () => {
    setopen(!open)
  }
  

  const usuario = "Diego";

  const NavDataIni = [
    {
        id: 4,
        icon: <SensorDoorIcon/>,
        text: "Cerrar Sesion",
        link: "app"
    }
]
  
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
  {NavDataIni.map(item => {
    return <NavLink key={item.id} className={styles.cerrarses} to={item.link}>
               {item.icon}
               <span className={styles.linkText}>{item.text}</span>
           </NavLink>
  })} 
  </div>
  )
}