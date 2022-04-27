import { useState } from "react";
import { Modal, message } from "antd";

function LanguageSelect({ lang, setLang }) {
  const [visibleModal, setVisibleModal] = useState(false);

  function checkLanguageValue(lang) {
    if (lang == "en") return "English";
    else if (lang == "ja") return "Japanese";
    else if (lang == "th") return "Thai";
    else if (lang == "fr") return "French";
    else if (lang == "de") return "German";
  }

  return (
    <div style={{ paddingTop: "20px" }}>
      <div
        onClick={() => {
          setVisibleModal(true);
        }}
        style={{ fontSize: "20px" }}
        className="bg-w"
      >
        Language | {checkLanguageValue(lang)}
      </div>
      <Modal
        visible={visibleModal}
        onCancel={() => {
          setVisibleModal(false);
        }}
        title={"choose language"}
        footer={null}
        keyboard={true}
      >
        <div>
          <button
            className={
              lang === "th" ? "btn bg-b font-small" : "btn bg-w font-small"
            }
            onClick={() => {
              setLang("th");
              setVisibleModal(false);
              localStorage.setItem("language","th")
              message.success("change language to TH",1)
            }}
          >
            thai
          </button>
          <button
            className={
              lang === "ja" ? "btn bg-b font-small" : "btn bg-w font-small"
            }
            onClick={() => {
              setLang("ja");
              localStorage.setItem("language","ja")
              setVisibleModal(false);
              message.success("change language to JA",1)
            }}
          >
            Japanese
          </button>
          <button
            className={
              lang === "en" ? "btn bg-b font-small" : "btn bg-w font-small"
            }
            onClick={() => {
              setLang("en");
              localStorage.setItem("language","en")
              setVisibleModal(false);
              message.success("change language to EN",1)
            }}
          >
            English
          </button>
          <button
            className={
              lang === "fr" ? "btn bg-b font-small" : "btn bg-w font-small"
            }
            onClick={() => {
              setLang("fr");
              localStorage.setItem("language","fr")
              setVisibleModal(false);
              message.success("change language to FR",1)
            }}
          >
            French
          </button>
          <button
            className={
              lang === "de" ? "btn bg-b font-small" : "btn bg-w font-small"
            }
            onClick={() => {
              setLang("de");
              localStorage.setItem("language","de")
              setVisibleModal(false);
              message.success("change language to DE",1)
            }}
          >
            German
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default LanguageSelect;
