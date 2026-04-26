import { Col } from "react-bootstrap";
import MenuItems from "./MenuItems";
import { useState } from "react";
import ChangeLanguage from "./ChangeLanguage";

const MobileMenu = ({ topics, activeIndex, setActiveIndex }) => {
  const [showMenu, setShowMenu] = useState(false);
  // Helper to trigger SVG animations
  const triggerSVGAnimation = (open) => {
    const top = document.getElementById(
      open
        ? "globalnav-anim-menutrigger-bread-top-open"
        : "globalnav-anim-menutrigger-bread-top-close"
    );
    const bottom = document.getElementById(
      open
        ? "globalnav-anim-menutrigger-bread-bottom-open"
        : "globalnav-anim-menutrigger-bread-bottom-close"
    );
    if (top) top.beginElement();
    if (bottom) bottom.beginElement();
  };

  // Handle menu open/close with animation
  const handleMenuOpen = () => {
    triggerSVGAnimation(true);
    setShowMenu(true);
  };

  const handleMenuClose = () => {
    triggerSVGAnimation(false);
    setShowMenu(false);
  };

  return (
    <>
      <Col className="mobile-version text-end 2-10">
        {!showMenu && (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            onClick={handleMenuOpen}
            style={{ cursor: "pointer" }}
          >
            <polyline
              id="globalnav-menutrigger-bread-bottom"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              points="2 12, 16 12"
              className="globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom"
            >
              <animate
                id="globalnav-anim-menutrigger-bread-bottom-open"
                attributeName="points"
                keyTimes="0;0.5;1"
                dur="0.24s"
                begin="indefinite"
                fill="freeze"
                calcMode="spline"
                keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                values="2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"
              ></animate>
              <animate
                id="globalnav-anim-menutrigger-bread-bottom-close"
                attributeName="points"
                keyTimes="0;0.5;1"
                dur="0.24s"
                begin="indefinite"
                fill="freeze"
                calcMode="spline"
                keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                values="3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"
              ></animate>
            </polyline>
            <polyline
              id="globalnav-menutrigger-bread-top"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              points="2 5, 16 5"
              className="globalnav-menutrigger-bread globalnav-menutrigger-bread-top"
            >
              <animate
                id="globalnav-anim-menutrigger-bread-top-open"
                attributeName="points"
                keyTimes="0;0.5;1"
                dur="0.24s"
                begin="indefinite"
                fill="freeze"
                calcMode="spline"
                keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                values="2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"
              ></animate>
              <animate
                id="globalnav-anim-menutrigger-bread-top-close"
                attributeName="points"
                keyTimes="0;0.5;1"
                dur="0.24s"
                begin="indefinite"
                fill="freeze"
                calcMode="spline"
                keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                values="3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"
              ></animate>
            </polyline>
          </svg>
        )}
        {showMenu && (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            onClick={handleMenuClose}
            style={{ cursor: "pointer" }}
          >
            <polyline
              id="globalnav-menutrigger-bread-bottom"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              points="3.5 15, 15 3.5"
              className="globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom"
            >
              <animate
                id="globalnav-anim-menutrigger-bread-bottom-open"
                attributeName="points"
                keyTimes="0;0.5;1"
                dur="0.24s"
                begin="indefinite"
                fill="freeze"
                calcMode="spline"
                keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                values="2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"
              ></animate>
              <animate
                id="globalnav-anim-menutrigger-bread-bottom-close"
                attributeName="points"
                keyTimes="0;0.5;1"
                dur="0.24s"
                begin="indefinite"
                fill="freeze"
                calcMode="spline"
                keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                values="3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"
              ></animate>
            </polyline>
            <polyline
              id="globalnav-menutrigger-bread-top"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              points="3.5 3.5, 15 15"
              className="globalnav-menutrigger-bread globalnav-menutrigger-bread-top"
            >
              <animate
                id="globalnav-anim-menutrigger-bread-top-open"
                attributeName="points"
                keyTimes="0;0.5;1"
                dur="0.24s"
                begin="indefinite"
                fill="freeze"
                calcMode="spline"
                keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                values="2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"
              ></animate>
              <animate
                id="globalnav-anim-menutrigger-bread-top-close"
                attributeName="points"
                keyTimes="0;0.5;1"
                dur="0.24s"
                begin="indefinite"
                fill="freeze"
                calcMode="spline"
                keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                values="3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"
              ></animate>
            </polyline>
          </svg>
        )}
      </Col>
      {showMenu && (
        <div
          className={`bg-topbar menu-mobile font-barlow w-100 Z-10 ${
            showMenu === true ? "show" : ""
          }`}
        >
          {topics.map((topic, i) => (
            <MenuItems
              key={i}
              topic={topic}
              index={i}
              setActiveIndex={setActiveIndex}
              activeIndex={activeIndex}
            />
          ))}
          <div className="col p-2 font-barlow text-center align-center dropdown d-flex">
            <ChangeLanguage />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
