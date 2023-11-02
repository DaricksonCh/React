import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Api from '../components/Api'

const EditarProducto = () =>{
  const { id } = useParams();
  const [producto, setProducto] = useState({fecha_caducidad_producto: "", cantidad_peso_producto: "", unidad_peso_producto: "", descripcion_producto: "",precio_producto:""})
  const navigate = useNavigate();

  useEffect(() => {
    const buscarProducto = async () =>{
      try{
        const response = await Api.get(`/buscar/${id}`)
        setProducto(response.data)
      }catch (e) {
        console.log("Error buscando el Producto", e);
      }
    };
    buscarUsuario();
  }, [id]);

  const handleEditarProducto = async () =>{
    try{
      await Api.put(`/buscar/${id}`,producto)
      navigate('/')
    }catch (e) {
      console.log("Error en handleEditarProducto", e);
    }
  };

  return (
    <div>
      <h1 className="text-center font-bold underline text-3xl p-3 m-3">Editar Producto</h1>
      <div className="max-w-xs">
        <input type="date" className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 laeding-tight focus:outline-none focus:shodow-outline" id="fecha_caducidad_producto" name="fecha_caducidad_producto" value={producto.fecha_caducidad_producto} onChange={(e)=>{setProducto({ ...producto fecha_caducidad_producto: e.target.value})}}/>
      </div>
    </div>
  )
}

export default EditarProducto;