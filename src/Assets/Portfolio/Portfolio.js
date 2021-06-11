import React, { useEffect, useState } from 'react';
import './Portfolio.css'
import mvMidia from './Arquivos/mv-telecom-site.png'
import Virttus from '../Img/Projetos/virttus.png'
import centauro from '../Img/Projetos/centauro.png'
import mv from '../Img/Projetos/MV-telecom.png'
import nortax from '../Img/Projetos/nortax.png'
import tascom from '../Img/Projetos/tascom.png'
import Modal from './Modal.js'
import centauroMidia from './Arquivos/TesteCentauro.mp4'
import tascomMidia from './Arquivos/mockup-TASCOM.png'
import nortaxMidia from './Arquivos/mockup-advg.png'
import virttusMidia from './Arquivos/virttus-video.mp4'

export default function Portfolio(){
const [projetos] = useState([{nome: "Centauro", index: 1, type: 1, image: centauro, media: centauroMidia, texto: "Esse projeto foi um desafio desenvolvido para a aplicação em uma vaga. A sua finalidade era calcular a distância entre 2 pontos num plano cartesiano. Os pontos eram as lojas que informavam as 3 mais próximas ao usuário e a distância entre ele e as lojas."},
{nome: "MvTelecom",index: 2, type: 0, image: mv, media: mvMidia, texto:"Projeto em andamento, em breve vídeo."}, {nome: "Consultoria Jurídica", media: nortaxMidia, index: 3, type: 0, image: nortax, texto:"Mockup desenvolvido para uma empresa de consultoria jurídica voltada para tecnologia."},
{nome: "TASCOM",index: 4,  image: tascom, type: 0, media: tascomMidia, texto: "Projeto do site da TASCOM informática em andamento, em breve vídeo."}, {nome: "Virttus Energia", index: 5, type: 1, media: virttusMidia,  image: Virttus, texto: "Projeto de simulação de energia"}])
const [modal, setModal] = useState(false)
const [text, setText] = useState(null)
const [media, setMedia] = useState(null)
const [type, setType] = useState(true)


return(
    <div className="bg-black font-barlow text-center h-100v d-grid" id="Portfolio">   

         <div className="centralizar-meio">        
    
         <div className="text-start c-white m-auto">
            <div className="c-white f-2 text-center mb-5">&lt; PORTFÓLIO/&gt;</div>          
                <div className="row m-3 pb-5 justify-center mt-5">
                        {projetos.map(projeto => {
                                return(      
                                <div className="card-port">

                                           <div class="card-glass">
                                                   <div className="pl-3 pr-3 pt-3 fade-bg">        
                                                   <button className="btn-black f-09 hidden p-absolute z-10" onClick={() => {setModal(true); setText(projeto.texto); setMedia(projeto.media); setType(projeto.type)}}>Saiba mais</button>                                      
                                                           <img src={projeto.image} width="100%"/>
                                                           </div>
                                                   <div className="pl-3 f-1-5">{projeto.nome}</div>
                                                   
                                                </div>                                             
                                                </div>
                                                   
                                )
                        })}
                        </div>
                        {modal ? <Modal type={type} texto={text} media={media} hideModal={ () => setModal(false)} /> : ""}

                       
                
            </div>

            </div>    
    </div>
);
}