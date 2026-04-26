import { Col, Row } from "react-bootstrap";
import MenuItems from "./MenuItems";
import ChangeLanguage from "./ChangeLanguage";
import logo from "../../Img/logo-web-png.png";

const DesktopMenu = ({ topics, activeIndex, setActiveIndex }) => {
  // Divide os tópicos
  const leftItems = topics.slice(0, 2);
  const rightItems = topics.slice(2, 4);

  return (
    <div className="topbar-desktop align-items-center justify-content-center">
      <Col className="d-flex justify-content-end p-0">
        {leftItems.map((topic, i) => (
          <MenuItems
            key={i}
            topic={topic}
            index={i}
            setActiveIndex={setActiveIndex}
            activeIndex={activeIndex}
          />
        ))}
      </Col>

      <Col
        xs="auto"
        className="align-center p-2 z-10 o-hidden logo-topbar"
      >
        <img
          src={logo}
          className="img-top z-10"
          alt="Logo Thamires Morais"
        />
      </Col>

      <Col
        className="d-flex justify-content-start"
      >
        {rightItems.map((topic, i) => (
          <MenuItems
            key={i + 2}
            topic={topic}
            index={i + 2}
            setActiveIndex={setActiveIndex}
            activeIndex={activeIndex}
          />
        ))}
          <ChangeLanguage />
      </Col>
    </div>
  );
};

export default DesktopMenu;
