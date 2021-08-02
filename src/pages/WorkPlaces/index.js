
import './styles.css';
import { IoMdAdd } from "react-icons/io";
import { BsPencil , BsTrash} from "react-icons/bs";
import React from "react";

const WorkPlaces = () => {
    const [arrLocaisTrabalho, setArrLocaisTrabalho] = React.useState([]);
    const [local, setLocal] = React.useState("");
    const [predio, setPredio] = React.useState("");
    const [localEditing, setLocalEditing] = React.useState(null);
    const [editingText, setEditingText] = React.useState("");
  
    React.useEffect(() => {
      const json = sessionStorage.getItem("arrLocaisTrabalho");
      const loadedTodos = JSON.parse(json);
      if (loadedTodos) {
        setArrLocaisTrabalho(loadedTodos);
      }
    }, []);
  
    React.useEffect(() => {
      const json = JSON.stringify(arrLocaisTrabalho);
      sessionStorage.setItem("arrLocaisTrabalho", json);
    }, [arrLocaisTrabalho]);
  
    function handleSubmit(e) {
      e.preventDefault();
      if(local==="" || predio===" "){
        return alert("Preencha os campos")
      } else{
      const newTodo = {
        id: new Date().getTime(),
        local: local,
        predio: predio
      };
      setArrLocaisTrabalho([...arrLocaisTrabalho].concat(newTodo));
      setLocal("");
      setPredio("")
      }
    }
  
    function deleteLocal(id) {
      let updatedLocal = [...arrLocaisTrabalho].filter((local) => local.id !== id);
      setArrLocaisTrabalho(updatedLocal);
    }
  
    function submitEdits(id) {
      const updatedLocal = [...arrLocaisTrabalho].map((local) => {
        if (local.id === id) {
          local.local = editingText;
        }
        return local;
      });
      setArrLocaisTrabalho(updatedLocal);
      setLocalEditing(null);
    }
  
    return (
     
      <div id="container" className="container">
        <div className="container-title">
          <p>Locais de Trabalho</p>
          <hr/>
        </div>
      <div className="container-all">
      <div className="container-half">
      <form className="container-form" >
      <div>
         <label>Prédio  </label>
          <select onChange={(e) => setPredio(e.target.value)} >
          <option disabled selected></option>
              <option value="Prédio 1">Prédio 1 </option>
              <option value="Prédio 2" >Prédio 2</option>
              <option value="Prédio 3">Prédio 3</option>
              <option value="Prédio 4" >Prédio 4</option>
              <option value="Prédio 5">Prédio 5</option>
              <option value="Prédio 6">Prédio 6</option>
              <option value="Prédio 7">Prédio 7</option>
          </select>  
        </div>
      <div>
          <label>Local de Trabalho  </label>
          <input
            type="text"
            required
            onChange={(e) => setLocal(e.target.value)}
            value={local}
          />
        </div>
        <div>
          <IoMdAdd onClick={handleSubmit} color="#1E4159" size={20} />
          </div>
        </form>
        {arrLocaisTrabalho.length !== 0?(
            <div className="container-text" >
               <p>Prédio</p>
              <p>Local de Trabalho </p>
              <div></div>
            </div> )
            : null}
        {arrLocaisTrabalho.map((local) => (
          <div key={local.id} >
             
            <div >
              {local.id === localEditing ? (
                <div className="container-edit">
                   <tr> {local.predio}</tr>
                <input
                  type="text"
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button onClick={() => submitEdits(local.id)}>ok</button>
                </div>
              ) : (
                <div className="container-list">
                <table>
                  <th key={local.id}>
                 <tr> {local.predio}</tr>
                 <tr> {local.local}</tr>
                 </th>
                 <div className="container-actions">
                    <BsPencil color="#1E4159" onClick={() => setLocalEditing(local.id)}/>
                    <BsTrash color="#1E4159" onClick={() => deleteLocal(local.id)}/>
                    
                    </div>
                  </table>
                </div>
              )}
            </div>
           
           
          </div>
        ))}
          </div>
      </div>
      </div>
    );
  };
  export default WorkPlaces