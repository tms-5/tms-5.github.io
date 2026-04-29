import MenuItems from "./MenuItems";
import ChangeLanguage from "./ChangeLanguage";
import logo from "../../../Assets/Img/logo-web-png.png";

const DesktopMenu = ({ topics, activeIndex, setActiveIndex }) => {
  // Divide os tópicos
  const leftItems = topics.slice(0, 2);
  const rightItems = topics.slice(2, 4);

  return (
    <div className="flex items-center justify-center">
      <div className="flex justify-end p-0">
        {leftItems.map((topic, i) => (
          <MenuItems
            key={i}
            topic={topic}
            index={i}
            setActiveIndex={setActiveIndex}
            activeIndex={activeIndex}
          />
        ))}
      </div>

      <div className="z-10 overflow-hidden p-2 text-center">
        <img
          src={logo}
          className="z-10"
          alt="Logo Thamires Morais"
        />
      </div>

      <div className="flex justify-start">
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
      </div>
    </div>
  );
};

export default DesktopMenu;
