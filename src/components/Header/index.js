
import './styles.css';
import { Link } from 'react-router-dom';
import { FiHome, FiUser } from "react-icons/fi";

export default function Header(){

  return(
    <div className="content">
    <div  className="title">
    <h1>Controle de locais de trabalho</h1>
    </div>
    <div  className="contentHeader">
      <Link to="/">
        <FiHome color="#FFF" size={24} />
      </Link>
      <Link to="/profile">
        <FiUser color="#FFF" size={24} />
        Usuário
      </Link>
      </div>
    </div>
  )
}