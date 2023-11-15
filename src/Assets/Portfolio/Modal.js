import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Modal(props) {
  const [type] = useState(props.type);
  const [midia, setMidia] = useState(props.media);
  useEffect(() => {
    let a = midia.replace(/"/g, "");
    setMidia(a);
  }, []);
  const { t } = useTranslation();

  return (
    <div id="myModal">
      <div className="overlay"></div>
      <div className="modal-content c-black">
        <div className="close-bar">
          <span
            className="close o-hidden w-fit"
            onClick={() => props.hideModal()}
            onBlur={() => props.hideModal()}
          >
            &times;
          </span>
        </div>
        <p>{t(props.texto)}</p>
        {type === 0 ? (
          <div className="o-auto h-80vh">
            {props.media === `${midia}` ? <img width="100%" src={midia} /> : ""}
          </div>
        ) : (
          ""
        )}
        {type === 1 ? (
          <div>
            {props.media === `${midia}` ? (
              <video width="100%" src={midia} controls />
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
