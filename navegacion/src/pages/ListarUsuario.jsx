import React, { useEffect,useState } from "react";
import api from '../components/api';
import { Link } from "react-router-dom";


const Listar = () =>{
  const [usuarios, setUsuarios] = useState([]);

  useEffect(()=>{
    const fetchusuarios = async () =>{
      try{
        const response = await api.get('/user');
        setUsuarios(response.data);
      }catch(e){
        console.error('Error fetching usuarios:',e);
      }
    };
    fetchusuarios();
  },[]);    
  return (
    <div className="m-3 p-3">
      <p className="font-bold">
        <Link to={`/crearusuario`}> Crear Usuario </Link>
      </p>
      <h1 className="text-center font-bold underline text-3xl">Usuarios</h1>
      {usuarios.map((usuario)=>(
        <div className="border-y-1 focus:bg-slate-300"
          key={usuario.id}>
            <Link to={`/edit/${usuario.id}`}>{usuario.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default Listar;