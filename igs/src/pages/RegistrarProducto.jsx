import React,{useRef} from 'react';
import Api from '../components/Api'
import {useNavigate} from 'react-router-dom'

const RegistrarProducto = () =>{

  const fechaCaducidadProducto = useRef();
  const cantidadPesoProducto = useRef();
  const unidadPesoProducto = useRef();
  const descripcionProducto = useRef();
  const precioProducto = useRef();

  const navigate = useNavigate();
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    const data = {
      fecha_caducidad_producto:fechaCaducidadProducto.current.value,
      cantidad_peso_producto:cantidadPesoProducto.current.value,
      unidad_peso_producto:unidadPesoProducto.current.value,
      descripcion_producto:descripcionProducto.current.value,
      precio_producto:precioProducto.current.value
    };
    Api.post('/registrar',data,{}).finally(()=>{
      navigate('/');
    })
  }
  return (
    <form onSubmit={handleSubmit} method="post">
      <h1 className="text-center font-bold underline text-3-xl p-3 m-3">Registrar Producto</h1>
      <div className="max-w-xs">
        <input type="date" className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 laeding-tight focus:outline-none focus:shodow-outline" id="fechaCaducidadProducto" name="fechaCaducidadProducto" ref={fechaCaducidadProducto}/>
      </div>
      <div className="max-w-xs">
        <input type="number" className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 laeding-tight focus:outline-none focus:shodow-outline" id="cantidadPesoProducto" name="cantidadPesoProducto" ref={cantidadPesoProducto} placeholder="Cantidad"/>
      </div>
      <div className="max-w-xs">
        <select id="unidadPesoProducto" name="unidadPesoProducto" className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 laeding-tight focus:outline-none focus:shodow-outline" ref={unidadPesoProducto}>
          <option value="">Seleccionar un Peso</option>
          <option value="kg">kg</option>
          <option value="lb">lb</option>
          <option value="gr">gr</option>
          <option value="lt">lt</option>
          <option value="ml">ml</option>
        </select>
      </div>
      <div className="max-w-xs">
        <input type="text" className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 laeding-tight focus:outline-none focus:shodow-outline" id="descripcionProducto" name="descripcionProducto" ref={descripcionProducto} placeholder="Descripcion"/>
      </div>
      <div className="max-w-xs">
        <input type="number" className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 laeding-tight focus:outline-none focus:shodow-outline" id="precioProducto" name="precioProducto" ref={precioProducto} placeholder="Precio del Producto"/>
      </div>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold p-2 m-2 rounded focus:outline-none focus:shadow-outline" type="submit">Registrar Usuario</button>
    </form>
  );
}

export default RegistrarProducto;