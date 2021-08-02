
import './styles.css'
import { FiUpload } from 'react-icons/fi';
import iconAvatar from '../../assets/png/avatar.png'

export default function Profile(){
  

  return(
      <div>
        <div className="container-profile">
          <form className="form-profile" >
            <label className="label-avatar">
                <img
                 src={iconAvatar} alt='avatar'/>
              <span>
                <FiUpload color="#FFF" size={25} />
              </span>

            </label>

            <label>Nome</label>
            <input type="text"  />

            <label>Email</label>
            <input type="text" />     

            <button type="submit">Salvar</button>       

          </form>
        </div>
     
    </div>
  )
}