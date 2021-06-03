import React, { useState } from 'react';
import './Curriculo.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ProgressBar } from 'react-bootstrap'
import PDF from './CV-Thamires-Morais.pdf'

export default function Curriculo(){
    const [habilidades1] = useState([{nome: "HTML 5", porcentagem: "100"}, {nome: "CSS 3", porcentagem: "98"}, {nome: "JavaScript/Jquery", porcentagem: "90"}, {nome: "ReactJs", porcentagem: "88"}, {nome: "UI Design", porcentagem: "85"}, {nome: "Git/GitHub", porcentagem: "83"}])
    const [habilidades2] = useState([{nome: "Photoshop", porcentagem: "78"}, {nome: "NodeJs", porcentagem: "43"}, {nome: "UX Design", porcentagem: "30"}, {nome: "Java", porcentagem: "30"}, {nome: "Illustrator", porcentagem: "20"}])
    const [skills] = useState([{nome: "Criatividade", porcentagem: "87"}, {nome: "Liderança", porcentagem: "90"}, {nome: "Pontualidade", porcentagem: "95"}, {nome: "Comunicação", porcentagem: "95"}, {nome: "Compromisso", porcentagem: "100"}, {nome: "Proatividade", porcentagem: "100"}])

    
return(
    <div className="bg-black font-barlow text-center h-100v d-grid" id="Curriculo">   
         <div className="centralizar-meio">        
    
    <div className="text-start w-100 c-white m-auto p-0">
       <div className="c-white f-2 text-center mb-5">&lt; CURRÍCULO/&gt;</div>       
       <div className="row linha-port p-0 mt-5 justify-center m-auto">
           <div className="col" style={{minWidth: "300px"}}>
               {habilidades1.map(ability => {
                   return( <div className="row mt-3">
                       <div className="col-4" style={{minWidth: "150px"}}>
                            {ability.nome}
                        </div>
                        <div className="col m-auto"  style={{minWidth: "150px"}}>
                        <div className="f-06 c-gray-claro text-end">{ability.porcentagem}%</div>
                            <ProgressBar now={ability.porcentagem} className="bg-progress-bar"/>
                        </div>
                       
                  </div>)
               })}
           </div>
           <div className="col" style={{minWidth: "300px"}}>
               {habilidades2.map(ability => {
                   return(<div className="row mt-3">
                   <div className="col-4" style={{minWidth: "150px"}}>
                        {ability.nome}
                    </div>
                    <div className="col m-auto" style={{minWidth: "150px"}}>
                        <div className="f-06 c-gray-claro text-end">{ability.porcentagem}%</div>
                        <ProgressBar now={ability.porcentagem} className="bg-progress-bar"/>
                    </div>
                   
              </div>)
               })}
           </div>

       </div>
       <div className="row linha-port pt-5 justify-center m-auto">
           {skills.map(skill => {
               return ( <div className="col text-center mt-2"  style={{minWidth: "115px", maxWidth: "150px"}} >
                        <CircularProgressbar
                                value={skill.porcentagem}
                                text={`${skill.porcentagem}%`}
                                strokeWidth={5}
                                styles={buildStyles({
                                    textColor: "white",
                                    pathColor: "rgb(160 0 255)",
                                    trailColor: "#bebebe"
                                  })}
                            />
                            <div className="mt-2">{skill.nome}</div>
               </div>)
           })}
       </div>
       <div className="row linha-port pt-5 pb-5 justify-center m-auto">
       <a href={PDF} target='_blank' className="btn-black t-none p-2 w-50" rel='noopener noreferrer'> Visualizar currículo</a>
       </div>
       </div>
       </div>   
    </div>
);
}