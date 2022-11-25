import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

export const navData = [
  {
    id: 0,
    icon: <HomeIcon />,
    text: "Home",
    link: "/home"
  },
  {
    id: 1,
    icon: <PersonIcon />,
    text: "Alumnos",
    link: "/alumnos"
  },
  {
    id: 2,
    icon: <AdminPanelSettingsIcon />,
    text: "Coordinadores",
    link: "/coordinadores"
  },
  {
    id: 3,
    icon: <TravelExploreIcon />,
    text: "Periodos",
    link: "/periodos"
  },
  {
    id: 4,
    icon: <FolderOpenIcon />,
    text: "Reporte",
    link: "/reporte"
  }
]
