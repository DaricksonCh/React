import React, { useEffect, useState } from "react";
import Api from "../components/Api";
import { Link } from "react-router-dom";

const ListarProducto = () => {
  const [productos, setProducto] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await Api.get('/listar')
        setProducto(response.data);
      } catch (e) {
        console.error("Error fetching Productos:", e);
      }
    };
    fetchProductos();
  }, []);

  return (
    <div className="m-3 p-3">
      <p className="font-bold bg-green-500 w-20 rounded text-white h-12">
        <Link to={`/registrarProducto`}>Registrar Producto</Link>
      </p>
      <h1 className="text-center font-bold underline text-3xl my-3">
        Productos
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border bg-white">
          <thead className="bg-green-800 text-white">
            <tr>
              <th className="py-2">#</th>
              <th className="py-2">Fecha Caducidad</th>
              <th className="py-2">Cantidad Peso</th>
              <th className="py-2">Unidad Peso</th>
              <th className="py-2">Descripción Producto</th>
              <th className="py-2">Precio Producto</th>
              <th className="py-2">ID UP</th>
              <th className="py-2">ID Tipo Producto</th>
              <th className="py-2">Estado</th>
              <th className="py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto, index) => (
              <tr key={producto.id_producto}>
                <td className="border py-2 text-center">{index + 1}</td>
                <td className="border py-2 text-center">
                  {producto.fecha_caducidad_producto}
                </td>
                <td className="border py-2 text-center">
                  {producto.cantidad_peso_producto}
                </td>
                <td className="border py-2 text-center">
                  {producto.unidad_peso_producto}
                </td>
                <td className="border py-2 text-center">
                  {producto.descripcion_producto}
                </td>
                <td className="border py-2 text-center">
                  {producto.precio_producto}
                </td>
                <td className="border py-2 text-center">{producto.fk_id_up}</td>
                <td className="border py-2 text-center">
                  {producto.fk_id_tipo_producto}
                </td>
                <td className="border py-2 text-center">{producto.estado}</td>
                <td className="border py-2 text-center">
                  <Link
                    to={`/edit/${producto.id_producto}`}
                    className="text-white bg-green-500 hover:bg-green-700 p-2 rounded-xl"
                  >
                    Acciones
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListarProducto;
