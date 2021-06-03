import React, { useState } from 'react';
import '../Assets/Utilitarios/Utilitarios.css'
import Topbar from '../Assets/Topbar/Topbar.js'
import Inicio from '../Assets/Inicio/Inicio.js'
import Sobre from '../Assets/Sobre/Sobre.js'
import Geometricos from '../Assets/Geometricos/Geometricos.js'
import Portfolio from '../Assets/Portfolio/Portfolio.js'
import Contato from '../Assets/Contato/Contato.js'
import Curriculo from '../Assets/Curriculo/Curriculo.js'
import Footer from '../Assets/Footer/Footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Index.css'

export default function Index(){

return(
    <div className="bg-black">       
        <Topbar />
        <Geometricos/>
        <Inicio />
        <Sobre />
        <Curriculo />
        <Portfolio />
        <Contato />
        <Footer />
    </div>
);
}