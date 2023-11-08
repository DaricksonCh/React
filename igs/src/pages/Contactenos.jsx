import React from "react";
import { useParams, useNavigate } from "react-router-dom";


const Contactenos = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="bg-gray-200 h-screen flex flex-col">
      <div className="flex flex-1 items-center justify-center">
        <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg flex items-center">
          <div className="flex-shrink-0">
            <img src="./img/igsgs.jpeg" alt="Logo" className="w-96 h-96" />
          </div>
          <div className="ml-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Sugerencias</h2>
            <form className="w-96">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Título de la Sugerencia
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Ingrese el título de la sugerencia"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Descripción de la Sugerencia
                </label>
                <textarea
                  className="mt-1 p-2 w-full h-32 border rounded-md resize-none"
                  placeholder="Ingrese la descripción de la sugerencia"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={handleSubmit}
              >
                Enviar Sugerencia
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactenos;
