import iconArea from "../../assets/jpg/area.jpg"
import './styles.css'

export default function Area(){
  return(
    <div>
      <div className="container-area">
        <div>
        <h1>Áreas</h1>
        </div>
        <img src={iconArea} alt='area'/>
      </div>
      <div  className="container-cards">
            <div>
                <p>Desenvolvimento Web</p>
            </div>
            <div>
                <p>Banco de Dados</p>
            </div>
            <div>
                <p>Design</p>
            </div>
      </div>
    </div>
  )
}