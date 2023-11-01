import React, { useEffect,useState } from "react";
import Api from '../components/Api'
import { Link } from "react-router-dom";

const ListarProducto = () =>{
  const [productos, setProducto] = useState([])

  useEffect(() => {
    const fetchProductos = async () =>{
      try{
        const  response = await Api.get('/listar');
        setProducto(response.data);
      }catch(e){
        console.error('Error fetching Productos:',e);
      }
    };
    fetchProductos();
  },[])
  return (
    <div className="m-3 p-3">
      <p className="font-bold">
        <Link to={`/registrarProducto`}>Registrar Producto</Link>
      </p>
      <h1 className="text-center font-bold underline text-3xl">Productos</h1>
      {productos.map((producto)=>(
        <div className="border-y-1 focus:bg-slate-300"
          key={producto.id_producto}>
          <Link to={`/edit/${producto.id_producto}`}>{producto.descripcion_producto}</Link>
        </div>
      ))}
    </div>
  );
}

export default ListarProducto;