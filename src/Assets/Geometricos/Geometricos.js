import React from 'react';
import './Geometricos.css'
import triangulo from '../Img/triangulo.png'
import quadrado from '../Img/quadrado.png'
import cilindro from '../Img/cilindro.png'

export default function Geometricos(){

return(
    <div>   
    <img src={triangulo} className="p-absolute triangulo-1" width="18%"/>
        <img src={quadrado} className="p-absolute quadrado-1" width="6%"/>
        <img src={cilindro} className="p-absolute cilindro-1" width="5%"/>
        <img src={triangulo} className="p-absolute triangulo-2" width="3%"/>
        <img src={quadrado} className="p-absolute quadrado-2" width="3%"/>
        <img src={cilindro} className="p-absolute cilindro-2" width="5%"/>
        <img src={triangulo} className="p-absolute triangulo-sobre-1" width="3%"/>
        <img src={quadrado} className="p-absolute quadrado-sobre-1" width="3%"/>
        <img src={cilindro} className="p-absolute cilindro-sobre-1" width="5%"/>
        <img src={triangulo} className="p-absolute triangulo-sobre-2" width="13%"/>
        <img src={cilindro} className="p-absolute cilindro-sobre-2" width="3%"/>        
        <img src={quadrado} className="p-absolute quadrado-curriculo-1" width="13%"/>
        <img src={quadrado} className="p-absolute quadrado-curriculo-2" width="10%"/>
        <img src={quadrado} className="p-absolute quadrado-curriculo-3" width="13%"/>
        <img src={cilindro} className="p-absolute cilindro-curriculo-1" width="5%"/>
        <img src={triangulo} className="p-absolute triangulo-curriculo-1" width="13%"/>        
        <img src={quadrado} className="p-absolute quadrado-port-1" width="13%"/>
        <img src={cilindro} className="p-absolute cilindro-port-1" width="7%"/>
        <img src={triangulo} className="p-absolute triangulo-port-1" width="13%"/>
        <img src={quadrado} className="p-absolute quadrado-contato-1" width="13%"/>
        <img src={quadrado} className="p-absolute quadrado-contato-2" width="3%"/>
        <img src={cilindro} className="p-absolute cilindro-contato-1" width="4%"/>
    </div>
);
}