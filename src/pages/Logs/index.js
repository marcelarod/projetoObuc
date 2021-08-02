import iconMaintenance from "../../assets/png/maintenance.png"
import { Link } from "react-router-dom"

export default function Logs(){
    return(
        <div>
          <div className="container-welcome">
            <div>
            <h1>Ops!! Desculpe essa página esta em manutenção.<br/>
                 Mas entre me contato com os nosso <Link to="/adm"> Administradores</Link><br/>
                 </h1>
            </div>
            <img src={iconMaintenance}  alt='maintenance'/>
          </div>
         
        </div>
      )
    }