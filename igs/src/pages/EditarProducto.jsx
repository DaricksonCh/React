import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Api from '../components/Api'

const EditarProducto = () =>{
  const { id } = useParams();
  const [producto, setProducto] = useState({
    fecha_caducidad_producto: "",
    cantidad_peso_producto: "",
    unidad_peso_producto: "",
    descripcion_producto: "",
    precio_producto: ""
  });
  const navigate = useNavigate();

  useEffect(() => {
    const buscarProducto = async () =>{
      try{
        const response = await Api.get(`/buscar/${id}`);
        console.log(response.data);
        setProducto(response.data)
      }catch (e) {
        console.log("Error buscando el Producto", e);
      }
    };
    buscarProducto();
  }, [id]);

  const handleEditarProducto = async () =>{
    try{
      await Api.put(`/actualizar/${id}`, producto);
      navigate('/')
    }catch (e) {
      console.log("Error en handleEditarProducto", e);
    }
  };

  return (
    <div>
      <h1 className="text-center font-bold underline text-3xl p-3 m-3">Editar Producto</h1>
      <div className="max-w-xs">
        <input type="date" className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 laeding-tight focus:outline-none focus:shodow-outline" id="fecha_caducidad_producto" name="fecha_caducidad_producto"  onChange={(e)=>{setProducto({...producto, fecha_caducidad_producto: e.target.value})}}/>
      </div>
      <div className="max-w-xs">
        <input type="text" className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 laeding-tight focus:outline-none focus:shodow-outline" id="cantidad_peso_producto" name="cantidad_peso_producto" value={producto.cantidad_peso_producto || ""} onChange={(e)=>{setProducto({...producto, cantidad_peso_producto: e.target.value})}} placeholder="Cantidad"/>
      </div>
      <div className="max-w-xs">
        <select id="unidad_peso_producto" name="unidad_peso_producto" className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 laeding-tight focus:outline-none focus:shodow-outline" onChange={(e)=>{setProducto({...producto, unidad_peso_producto: e.target.value})}}>
          <option value="">Seleccionar un Peso</option>
          <option value="kg">kg</option>
          <option value="lb">lb</option>
          <option value="gr">gr</option>
          <option value="lt">lt</option>
          <option value="ml">ml</option>
        </select>
      </div>
      <div className="max-w-xs">
        <input type="text" className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 laeding-tight focus:outline-none focus:shodow-outline" id="descripcion_producto" name="descripcion_producto" value={producto.descripcion_producto || ""} onChange={(e)=>{setProducto({...producto, descripcion_producto: e.target.value})}} placeholder="Descripcion"/>
      </div>
      <div className="max-w-xs">
        <input type="number" className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 laeding-tight focus:outline-none focus:shodow-outline" id="precio_producto" name="precio_producto" value={producto.precio_producto || ""} onChange={(e)=>{setProducto({...producto, precio_producto: e.target.value})}} placeholder="Precio del Producto"/>
      </div>
      <button type="subtmi" className="bg-green-500 hover:bg-blue-700 text-white font-bold p-2 m-2 rounded focus:outline-none focus:shadow-outline" onClick={handleEditarProducto}>Editar Producto</button>
    </div>
  )
}

export default EditarProducto;