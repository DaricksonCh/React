import React from 'react'
import { Outlet,Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div>
      <nav className='bg-green-600 p-4'>
        <ul className='flex space-x-4 text-white'>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/contactenos">Contactenos</Link></li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  );
}
