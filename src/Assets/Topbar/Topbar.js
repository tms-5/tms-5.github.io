import React, { useEffect, useState } from "react";
import "./Topbar.css";
import logo from "../Img/logo-web-png.png";
import { Col, Row } from "react-bootstrap";
import DesktopMenu from "./Components/DesktopMenu";
import MobileMenu from "./Components/MobileMenu";

export default function Topbar() {
  const [activeIndex, setActiveIndex] = useState("0");
  const [topics, setTopics] = useState([
    { name: "Inicio", index: "0", href: "#Inicio" },
    { name: "Sobre", index: "1", href: "#Sobre" },
    { name: "Curriculo", index: "2", href: "#Curriculo" },
    { name: "Portfolio", index: "3", href: "#Portfolio" },
    { name: "Contato", index: "4", href: "#Contato" },
  ]);
  const [offset, setOffset] = useState(0);
  const [tamanho] = useState(window.innerHeight);
  const [menuDesktop, setMenuDesktop] = useState(true);

  function handleResize() {
    const width = window.innerWidth;
    if (width < 920) {
      setMenuDesktop(false);
    } else {
      setMenuDesktop(true);
    }
  }

  window.addEventListener("resize", handleResize);

  useEffect(() => {
    handleScroll();
    window.onscroll = () => {
      setOffset(window.pageYOffset);
      handleScroll();
    };
  }, [offset]);

  async function handleScroll() {
    if (offset <= tamanho - 70) {
      setActiveIndex("0");
    } else if (offset <= tamanho * 2 - 70) {
      setActiveIndex("1");
    } else if (offset <= tamanho * 3 - 70) {
      setActiveIndex("2");
    } else if (offset <= tamanho * 4 - 70) {
      setActiveIndex("3");
    } else if (offset <= tamanho * 5 - 70) {
      setActiveIndex("4");
    }
  }

  return (
    <Row
      className="bg-topbar m-0 justify-s-b p-fixed w-100 o-hidden"
      style={{ zIndex: "100" }}
    >
      <Col
        sm={4}
        className="align-center p-2 z-10 o-hidden logo-topbar"
        style={{ height: "65px" }}
      >
        <img
          src={logo}
          className="img-top z-10"
          width="300px"
          alt="Logo Thamires Morais"
        />
      </Col>
      {menuDesktop ? (
        <DesktopMenu
          topics={topics}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ) : (
        <MobileMenu
          topics={topics}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      )}
    </Row>
  );
}
