import React, { useState } from 'react';
import './Inicio.css'
import video from '../Img/dev-text.mp4'
import triangulo from '../Img/triangulo.png'
import quadrado from '../Img/quadrado.png'
import cilindro from '../Img/cilindro.png'

export default function Inicio(){

return(
    <div className="h-100v c-white" style={{paddingTop: "65px", overflow: "hidden"}} id="Inicio">        
        <div className="vid-dev bg-transparent">
            <video src={video} autoPlay loop muted/>
        </div>
        
    </div>
);
}