import React,{useRef} from 'react';
import Api from '../components/Api'
import {useNavigate} from 'react-router-dom'

const RegistrarProducto = () =>{

  const fecha_caducidad_producto = useRef();
  const cantidad_peso_producto = useRef();
  const unidad_peso_producto = useRef();
  const descripcion_producto = useRef();
  const precio_producto = useRef();

  const navigate = useNavigate();
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    const data = {
      fecha_caducidad_producto:fecha_caducidad_producto.current.value,
      cantidad_peso_producto:cantidad_peso_producto.current.value,
      unidad_peso_producto:unidad_peso_producto.current.value,
      descripcion_producto:descripcion_producto.current.value,
      precio_producto:precio_producto.current.value
    };
    Api.post('/registrar',data,{}).finally(()=>{
      navigate('/');
    })
  }
  return (
    <form onSubmit={handleSubmit} method="post">
      <h1 className="text-center font-bold underline text-3-xl p-3 m-3">Registrar Producto</h1>
      <div className="max-w-xs">
        <input type="date" className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 laeding-tight focus:outline-none focus:shodow-outline" id="fecha_caducidad_producto" name="fecha_caducidad_producto" ref={fecha_caducidad_producto}/>
      </div>
      <div className="max-w-xs">
        <input type="number" className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 laeding-tight focus:outline-none focus:shodow-outline" id="cantidad_peso_producto" name="cantidad_peso_producto" ref={cantidad_peso_producto} placeholder="Cantidad"/>
      </div>
      <div className="max-w-xs">
        <select id="unidad_peso_producto" name="unidad_peso_producto" className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 laeding-tight focus:outline-none focus:shodow-outline" ref={unidad_peso_producto}>
          <option value="">Seleccionar un Peso</option>
          <option value="kg">kg</option>
          <option value="lb">lb</option>
          <option value="gr">gr</option>
          <option value="lt">lt</option>
          <option value="ml">ml</option>
        </select>
      </div>
      <div className="max-w-xs">
        <input type="text" className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 laeding-tight focus:outline-none focus:shodow-outline" id="descripcion_producto" name="descripcion_producto" ref={descripcion_producto} placeholder="Descripcion"/>
      </div>
      <div className="max-w-xs">
        <input type="number" className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 laeding-tight focus:outline-none focus:shodow-outline" id="precio_producto" name="precio_producto" ref={precio_producto} placeholder="Precio del Producto"/>
      </div>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold p-2 m-2 rounded focus:outline-none focus:shadow-outline" type="submit">Registrar Usuario</button>
    </form>
  );
}

export default RegistrarProducto;