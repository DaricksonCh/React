import { Route, Routes } from "react-router-dom";
import React from 'react'
import Inicio from './pages/Inicio'
import Nosotros  from './pages/Nosotros';
import Contactenos from './pages/Contactenos'
import {Menu} from './pages/Menu'
import ListarProducto from "./pages/ListarProducto";



export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Menu/>}>
          <Route path="/" element={<ListarProducto/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path="/contactenos" element={<Contactenos/>}/>
        </Route>
      </Routes>
    </>
  )
}
