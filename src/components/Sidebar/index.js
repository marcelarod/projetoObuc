
import './styles.css';

import { Link } from 'react-router-dom';
import { FiSettings } from "react-icons/fi";

export default function Sidebar(){

  return(
    <div className="sidebar">
    <hr/>
     <p>
     <FiSettings color="#FFF" size={24} />
         Administração
    </p>
     <Link to="/adm">
         Administradores
     </Link>
     <Link to="/area">
         Áreas
      </Link>    
     <Link to="/workplaces">
         Locais de trabalho
     </Link>           
     <Link to="/skills">
         Habilidades
     </Link>     
     <Link to="/logs">
         Logs
     </Link>     
     <Link to="/Responsibles">
         Responsáveis
     </Link>     
    </div>
  )
}