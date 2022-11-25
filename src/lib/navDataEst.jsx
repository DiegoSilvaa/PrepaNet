import HomeIcon from '@mui/icons-material/Home';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PersonIcon from '@mui/icons-material/Person';

export const navData = [
  {
    id: 0,
    icon: <HomeIcon />,
    text: "Home",
    link: "/home"
  },
  {
    id: 1,
    icon: <AssignmentTurnedInIcon />,
    text: "Inscripcion",
    link: "/inscripciones"
  },
  {
    id: 2,
    icon: <PersonIcon />,
    text: "Perfil",
    link: "/perfil"
  },
]
