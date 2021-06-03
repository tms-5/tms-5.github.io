import React, { useEffect, useState } from 'react';
import './Topbar.css'
import logo from '../Img/logo-web-png.png'
import logogif from '../Img/logo-gif.gif'
import menu from '../Img/menu.gif'
import X from '../Img/X.gif'

export default function Topbar(){
    const [activeIndex, setActiveIndex] = useState("0");
    const [showMenu, setShowMenu] = useState("");
    const [topics, setTopics] = useState([{name: "Início", index: "0", href: "#Inicio"}, {name: "Sobre", index: "1", href: "#Sobre"},{name: "Currículo", index: "2", href: "#Curriculo"}, {name: "Portfólio", index: "3", href: "#Portfolio"}, {name: "Contato", index: "4", href: "#Contato"}])
    const [offset, setOffset] = useState(0);
    const [tamanho] = useState(window.innerHeight)

    useEffect(() => {
        handleScroll()
           window.onscroll = () => {               
          setOffset(window.pageYOffset);
          handleScroll()        
        }
      }, [offset]);
      
        async function handleScroll () {
                if( offset <= (tamanho - 70)){
                    setActiveIndex("0")
                } else if ( offset <= ((tamanho * 2) -70 )){
                    setActiveIndex("1")
                } else if ( offset <= ((tamanho * 3) -70 )){
                    setActiveIndex("2")
                } else if ( offset <= ((tamanho * 4) -70 )){
                    setActiveIndex("3")
                }
                else if ( offset <= ((tamanho * 5) -70 )){
                    setActiveIndex("4")
                }
            }
    
return(
    <div className="row bg-topbar m-0 justify-s-b p-fixed w-100 o-hidden" style={{zIndex: "100"}}>
        <div className="col align-center p-2 z-10 o-hidden" style={{height: "65px"}}>
            <img src={logo} className="img-top z-10" width="300px"/>
        </div>
        <div className="col-7 p-2 desktop-version font-barlow text-center align-center" style={{minWidth: "480px"}}>
            {topics.map(topic => {
                return(<div className="col f-1-1 p-0" style={{minWidth: "85px"}}>
                    <div className={`c-white no-br p-2 ${activeIndex === topic.index ? "b-purple" : ""}`} index={topic.index} onClick={ () => setActiveIndex(topic.index)}>
                        <div className="c-pointer w-fit m-auto"><a className="c-white o-none t-none w-fit" href={topic.href}>{topic.name}</a></div>
                    </div>
                </div>)
            })}
        </div>
        <div className="col-3 mobile-version text-end 2-10">
            <img src={menu} width="30px" className="c-pointer m-2 pt-2" onClick={ () => setShowMenu(!showMenu)} style={{display: showMenu ? "none" : "initial"}}/>
            <img src={X} width="30px" className="c-pointer m-2 pt-2" onClick={ () => setShowMenu(!showMenu)} style={{display: showMenu ? "initial" : "none"}}/>               
        </div>

            <div className={`bg-topbar menu-mobile font-barlow w-100 Z-10 ${showMenu === true ? "show" : ""}`}>
                {topics.map(topic => {
                                return(<div className="col f-1-1 bg-topbar">
                                    <div className={`c-white no-br p-2 ${activeIndex === topic.index ? "b-purple" : ""}`} index={topic.index} onClick={ () => setActiveIndex(topic.index)}>
                                    <div className="c-pointer w-fit m-auto"><a className="c-white o-none t-none w-fit" href={topic.href}>{topic.name}</a></div>
                                    </div>
                                </div>)
                            })}

        </div>

    </div>
);
}