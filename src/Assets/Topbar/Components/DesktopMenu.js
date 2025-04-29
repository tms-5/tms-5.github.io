import { Col } from "react-bootstrap";
import MenuItems from "./MenuItems";
import ChangeLanguage from "./ChangeLanguage";

const DesktopMenu = ({ topics, activeIndex, setActiveIndex }) => {
  return (
    <Col
      className="p-2 desktop-version font-barlow text-center align-center"
      style={{ minWidth: "480px" }}
    >
      {" "}
      <MenuItems
        topics={topics}
        setActiveIndex={setActiveIndex}
        activeIndex={activeIndex}
      />
      <div className="col-2 p-2 font-barlow text-center align-center dropdown d-flex">
        <ChangeLanguage />
      </div>
    </Col>
  );
};

export default DesktopMenu;
