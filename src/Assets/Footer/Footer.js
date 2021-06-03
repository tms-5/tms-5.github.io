import React from 'react';
import './Footer.css'
export default function Portfolio(){

return(
    <div className="bg-topbar font-barlow">   
    <div className="row linha-footer p-3 m-auto">
        <div className="col">
            <div className="c-white fw-500 f-1-2">
                Thamires Morais de Sousa
            </div>
            <div className="c-gray-claro d-grid">
                UI Designer |<br/>
                Front-end Software Engenieer
            </div>
        </div>
        <div className="col">
        <div className="c-white fw-500 f-1-2">
                Mapa do site
            </div>
            <div className="c-gray-claro d-grid mt-2">
                <a href="#Inicio" className="c-gray-claro o-none w-fit">Início</a>
                <a href="#Sobre" className="c-gray-claro o-none w-fit">Sobre</a>
                <a href="#Curriculo" className="c-gray-claro o-none w-fit" >Curriculo</a>
                <a href="#Portfolio" className="c-gray-claro o-none w-fit">Portfólio</a>
                <a href="#Contato" className="c-gray-claro o-none w-fit">Contato</a>
            </div>
        </div>
        <div className="col">
        <div className="c-white fw-500 f-1-2">
               Redes sociais
            </div>
            <div className="c-gray-claro d-grid mt-2">
                <a className="c-gray-claro o-none w-fit" href="https://www.linkedin.com/in/thamires-morais-3b1053187/" target="_blank">Linkedin</a>
                <a className="c-gray-claro o-none w-fit" href="https://www.instagram.com/thamsjobs/" target="_blank">Instagram</a>
                <a className="c-gray-claro o-none w-fit" href="https://api.whatsapp.com/send?phone=5581997350799" target="_blank">WhatsApp</a>
            </div>
        </div>
        <div className="col">
        <div className="c-white fw-500 f-1-2">
               Contato
            </div>
            <div className="c-gray-claro mt-2">
               +55 81 997350799<br/>
               tms5@cin.ufpe.br
            </div>
        </div>
    </div>
    <div className="row c-white text-center w-75 m-auto pt-2 justify-center" style={{borderTop: "1px solid rgb(190 190 190 / 37%)"}}>
        2021 &nbsp; | &nbsp; Todos os direitos reservados.
    </div>
    </div>
);
}