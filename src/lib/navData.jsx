import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import SettingsIcon from '@mui/icons-material/Settings';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
import SensorDoorIcon from '@mui/icons-material/SensorDoor';

export const navData = [
  {
    id: 0,
    icon: <HomeIcon />,
    text: "Home",
    link: "/"
  },
  {
    id: 1,
    icon: <PersonIcon />,
    text: "Alumnos",
    link: "alumnos"
  },
  {
    id: 2,
    icon: <AdminPanelSettingsIcon />,
    text: "Coordinadores",
    link: "coordinadores"
  },
  {
    id: 3,
    icon: <TravelExploreIcon />,
    text: "Periodos",
    link: "periodos"
  }
]
