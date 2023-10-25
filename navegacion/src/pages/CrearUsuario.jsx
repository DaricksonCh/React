import React,{useEffect,useRef} from "react";
import api from '../components/api'
import {useNavigate} from 'react-router-dom'


const crearUsuario = () =>{

  const name = useRef();
  const email = useRef();
  const password = useRef();

  const navigate = useNavigate();
  
  useEffect(()=>{
    name.current.focus();
  },[])

  const handleSubmit = (e) =>{
    e.preventDefault();
    const data = {
      name:name.current.value,
      email: email.current.value,
      password: password.current.value
    };
    api.post('/user',data,{}).finally(()=>{
      navigate('/usuarios');
    })
  }
  return (
    <form onSubmit={handleSubmit} method="post">
      <h1 className="text-center font-bold underline text-3-xl p-3 m-3">Crear Usuario</h1>
      <div className="max-w-xs">
        <input type="text" className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 laeding-tight focus:outline-none focus:shodow-outline" id="name" name="name" ref={name} placeholder="Ingrese nombre"/>
      </div>
      <div className="max-w-xs">
        <input type="email" className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 laeding-tight focus:outline-none focus:shodow-outline" id="email" name="email" ref={email} placeholder="Ingrese email"/>
      </div>
      <div className="max-w-xs">
        <input type="password" className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 laeding-tight focus:outline-none focus:shodow-outline" id="password" name="password" ref={password} placeholder="Ingrese Contaseña"/>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-2 rounded focus:outline-none focus:shadow-outline" type="submit">Registrar Usuario</button>
    </form>
  );
}

export default crearUsuario;