import { useTranslation } from "react-i18next";

const MenuItems = ({ topic, index, activeIndex }) => {
  const { t } = useTranslation();
  return (
    <div className="min-w-[85px] flex-1 p-0" key={index}>
      <div
        className={`rounded-none p-2 ${
          activeIndex === index.toString() ? "bg-plum text-white" : ""
        }`}
        index={index}
      >
        <div className="w-fit cursor-pointer">
          <a className="w-fit text-inherit no-underline outline-none" href={topic.href}>
            {t(topic.name)}
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
