import React, { useState } from 'react';
import './Portfolio.css'
import Virttus from '../Img/Projetos/virttus.png'
import centauro from '../Img/Projetos/centauro.png'
import mv from '../Img/Projetos/MV-telecom.png'
import nortax from '../Img/Projetos/nortax.png'
import tascom from '../Img/Projetos/tascom.png'

export default function Portfolio(){
const [projetos] = useState([{nome: "Centauro", image: centauro, texto: "Esse projeto foi um desafio desenvolvido para a aplicação em uma vaga. A sua finalidade era calcular a distância entre 2 pontos num plano cartesiano. Os pontos eram as lojas que informavam as 3 mais próximas ao usuário e a distância entre ele e as lojas."},
{nome: "Mockup - MvTelecom", image: mv, texto:"Projeto em andamento, em breve vídeo."}, {nome: "Mockup - Consultoria Jurídica", image: nortax, texto:"Mockup desenvolvido para uma empresa de consultoria jurídica voltada para tecnologia."},
{nome: "Mockup - TASCOM", image: tascom, texto: "Projeto do site da TASCOM informática em andamento, em breve vídeo."}, {nome: "Virttus Energia", image: Virttus, texto: "Projeto de simulação de energia"}])
return(
    <div className="bg-black font-barlow text-center h-100v d-grid" id="Portfolio">   

         <div className="centralizar-meio">        
    
         <div className="text-start c-white m-auto">
            <div className="c-white f-2 text-center mb-5">&lt; PORTFÓLIO/&gt;</div>         
                <div className="row m-3 pb-5 justify-center mt-5">
                        {projetos.map(projeto => {
                                return(      
                                           <div class="card-glass">
                                                   <div className="pl-3 pr-3 pt-3 fade-bg">        
                                                           <button className="btn-black ml-3 mt-2 f-08 hidden p-absolute z-10">Saiba mais</button>                                                   
                                                           <img src={projeto.image} width="100%"/>
                                                           </div>
                                                   <div className="pl-3 f-1-5">{projeto.nome}</div>
                                                   
                                                </div>
                                                   
                                )
                        })}

                        <div className="pop-up">

                        </div>
                </div>
            </div>

            </div>    
    </div>
);
}