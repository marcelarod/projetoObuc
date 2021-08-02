import iconWelcome from "../../assets/jpg/welcome.jpg"
import './styles.css'

export default function Home(){
  

  return(
    <div>
      <div className="container-welcome">
        <div>
        <h1>Bem vindo(a)</h1>
        </div>
        <img src={iconWelcome}  alt='welcome'/>
      </div>
     
    </div>
  )
}