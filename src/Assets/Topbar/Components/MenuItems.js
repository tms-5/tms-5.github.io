import { useTranslation } from "react-i18next";

const MenuItems = ({ topic, index, activeIndex }) => {
  const { t } = useTranslation();
  return (
    <div className="col f-1-1 p-0" style={{ minWidth: "85px" }} key={index}>
      <div
        className={`no-br p-2 ${
          activeIndex === index.toString() ? "b-purple" : ""
        }`}
        index={index}
      >
        <div className="c-pointer w-fit">
          <a className="o-none t-none w-fit" href={topic.href}>
            {t(topic.name)}
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
