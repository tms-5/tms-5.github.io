import { Col } from "react-bootstrap";
import MenuItems from "./MenuItems";
import { useState } from "react";
import menu from "../../Img/menu.gif";
import X from "../../Img/X.gif";
import ChangeLanguage from "./ChangeLanguage";

const MobileMenu = ({ topics, activeIndex, setActiveIndex }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <Col className="mobile-version text-end 2-10">
        {" "}
        <img
          src={menu}
          width="30px"
          className="c-pointer m-2 pt-2"
          onClick={() => setShowMenu(!showMenu)}
          style={{ display: showMenu ? "none" : "initial" }}
          alt={"Menu em barras"}
        />
        <img
          src={X}
          width="30px"
          className="c-pointer m-2 pt-2"
          onClick={() => setShowMenu(!showMenu)}
          style={{ display: showMenu ? "initial" : "none" }}
          alt={"X"}
        />
      </Col>
      {showMenu && (
        <div
          className={`bg-topbar menu-mobile font-barlow w-100 Z-10 ${
            showMenu === true ? "show" : ""
          }`}
        >
          {" "}
          <MenuItems
            topics={topics}
            setActiveIndex={setActiveIndex}
            activeIndex={activeIndex}
          />
          <div className="col p-2 font-barlow text-center align-center dropdown d-flex">
            <ChangeLanguage />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
