import React from "react";

const Nosotros = () => {
  return (
    <div className="bg-gray-200 h-screen flex flex-col">
      <div className="flex flex-1 items-center justify-center">
        <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg flex items-center">
          <div className="flex-shrink-0">
            <img src="./img/igsgs.jpeg" alt="Logo" className="w-96 h-96" />
          </div>
          <div className="ml-4 text-center">
            <h2 className="text-2xl  flex items-center h-full">
              El Sistema de Gestión (IGS) es una innovadora herramienta
              informática creada para optimizar la gestión de recursos en el
              ámbito gastronómico. Este software ha sido desarrollado por
              aprendices que participan en el programa de formación en
              Tecnología en Análisis y Desarrollo de Software, impartido en el
              reconocido centro educativo SENA en su sede Yamboró. La principal
              función del IGS es supervisar y mantener un control detallado del
              inventario utilizado en la producción gastronómica. Su objetivo
              fundamental es garantizar la máxima eficiencia en el uso de los
              recursos disponibles. Con esta plataforma, los profesionales del
              área podrán gestionar de manera óptima los insumos, asegurando un
              manejo adecuado y sostenible de los ingredientes esenciales para
              sus preparaciones culinarias. El equipo de desarrolladores ha
              trabajado arduamente para crear una solución tecnológica intuitiva
              y fácil de usar, adaptada específicamente a las necesidades del
              sector gastronómico.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
