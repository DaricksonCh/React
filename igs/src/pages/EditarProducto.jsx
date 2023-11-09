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
    const buscarProducto = async () => {
      try {
        const response = await Api.get(`/buscar/${id}`);
        const fechaCaducidad = new Date(response.data[0].fecha_caducidad_producto).toISOString().split('T')[0];
        setProducto({ ...response.data[0], fecha_caducidad_producto: fechaCaducidad });
      } catch (e) {
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

  const handleDeshabilitarProducto = async () =>{
    try{
      await Api.patch(`/deshabilitar/${id}`, producto);
      navigate('/')
    }catch (e) {
      console.log("Error en handleEditarProducto", e);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  return (
    <div>
      <h1 className="text-center font-bold underline text-3xl p-3 m-3">Editar Producto</h1>
      <div className="max-w-xs">
        <input type="date" className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 laeding-tight focus:outline-none focus:shodow-outline" id="fecha_caducidad_producto" name="fecha_caducidad_producto" value={producto.fecha_caducidad_producto} onChange={handleInputChange}/>
      </div>
      <div className="max-w-xs">
        <input type="text" className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 laeding-tight focus:outline-none focus:shodow-outline" id="cantidad_peso_producto" name="cantidad_peso_producto" value={producto.cantidad_peso_producto} onChange={handleInputChange} placeholder="Cantidad"/>
      </div>
      <div className="max-w-xs">
        <select id="unidad_peso_producto" name="unidad_peso_producto" className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 laeding-tight focus:outline-none focus:shodow-outline" value={producto.unidad_peso_producto} onChange={handleInputChange}>
          <option value="">Seleccionar un Peso</option>
          <option value="kg">kg</option>
          <option value="lb">lb</option>
          <option value="gr">gr</option>
          <option value="lt">lt</option>
          <option value="ml">ml</option>
        </select>
      </div>
      <div className="max-w-xs">
        <input type="text" className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 laeding-tight focus:outline-none focus:shodow-outline" id="descripcion_producto" name="descripcion_producto" value={producto.descripcion_producto} onChange={handleInputChange} placeholder="Descripcion"/>
      </div>
      <div className="max-w-xs">
        <input type="number" className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 laeding-tight focus:outline-none focus:shodow-outline" id="precio_producto" name="precio_producto" value={producto.precio_producto} onChange={handleInputChange} placeholder="Precio del Producto"/>
      </div>
      <button type="subtmi" className="bg-green-500 hover:bg-blue-700 text-white font-bold p-2 m-2 rounded focus:outline-none focus:shadow-outline" onClick={handleEditarProducto}>Editar Producto</button>
      <button type="subtmi" className="bg-rose-500 hover:bg-rose-700 text-white font-bold p-2 m-2 rounded focus:outline-none focus:shadow-outline" onClick={handleDeshabilitarProducto}>Eliminar Producto</button>
    </div>
  )
}

export default EditarProducto;