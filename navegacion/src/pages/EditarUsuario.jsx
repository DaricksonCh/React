import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../components/api";

const EditarUsuario = () => {
  const { id } = useParams();
  const [usuario, setUsuario] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const buscarUsuario = async () => {
      try {
        const res = await api.get(`/user/${id}`);
        setUsuario(res.data);
      } catch (e) {
        console.log("Error buscando el usuario", e);
      }
    };
    buscarUsuario();
  }, [id]);

  const handleEditUser = async () => {
    try {
      await api.put(`/user/${id}`,usuario);
      navigate("/usuarios")
    } catch (e) {
      console.log("Error en handleEditUser", e);
    }
  };
  const handleDeleteUser = async () => {
    try {
      await api.delete(`/user/${id}`,usuario);
      navigate("/usuarios")
    } catch (e) {
      console.log("Error en handleDeleteUser", e);
    }
  };

  return (
    <div>
      <h1 className="text-center font-bold underline text-3-xl p-3 m-3">
        Editar Usuario
      </h1>
      <div className="max-w-xs">
        <input
          type="text"
          className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 laeding-tight focus:outline-none focus:shodow-outline"
          id="name"
          name="name"
          placeholder="Ingrese nombre"
          value={usuario.name}
          onChange={(e) => {
            setUsuario({ ...usuario, name: e.target.value });
          }}
        />
      </div>
      <div className="max-w-xs">
        <input
          type="email"
          className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 laeding-tight focus:outline-none focus:shodow-outline"
          id="email"
          name="email"
          placeholder="Ingrese email"
          value={usuario.email}
          onChange={(e) => {
            setUsuario({ ...usuario, email: e.target.value });
          }}
        />
      </div>
      <div className="max-w-xs">
        <input
          type="password"
          className="shadow appearance-none border rounded w-full p-2 m-2 text-gray-700 laeding-tight focus:outline-none focus:shodow-outline"
          id="password"
          name="password"
          placeholder="Ingrese Contaseña"
          value={usuario.password}
          onChange={(e) => {
            setUsuario({ ...usuario, password: e.target.value });
          }}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-2 rounded focus:outline-none focus:shadow-outline"
        type="submit"
        onClick={handleEditUser}
      >
        Editar Usuario
      </button>
      <button
        className="bg-rose-500 hover:bg-rose-700 text-white font-bold p-2 m-2 rounded focus:outline-none focus:shadow-outline"
        type="submit"
        onClick={handleDeleteUser}
      >
        Eliminar Usuario
      </button>
    </div>
  );
};

export default EditarUsuario;
