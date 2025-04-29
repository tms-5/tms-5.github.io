import { useTranslation } from "react-i18next";

const MenuItems = ({ topics, activeIndex, setActiveIndex }) => {
  const { t } = useTranslation();
  return topics.map((topic, i) => {
    return (
      <div className="col f-1-1 p-0" style={{ minWidth: "85px" }} key={i}>
        <div
          className={`c-white no-br p-2 ${
            activeIndex === topic.index ? "b-purple" : ""
          }`}
          index={topic.index}
          onClick={() => setActiveIndex(topic.index)}
        >
          <div className="c-pointer w-fit m-auto">
            <a className="c-white o-none t-none w-fit" href={topic.href}>
              {t(topic.name)}
            </a>
          </div>
        </div>
      </div>
    );
  });
};

export default MenuItems;
