import "./Header.css";
import { Link } from "react-router-dom";
import { message, Modal } from "antd";

import { useState } from "react";
function Header({ style_div }) {
  const [visibleModal, setVisibleModal] = useState(false);

  function checkCategory(value){
    if (value) {
        return value;
      } else {
        return "default";
      }
  }
  return (
    <div className="Header">
      <div
        onClick={() => {
          setVisibleModal(true);
        }}
        className="bg-w"
        style={{ fontSize: "20px" }}
      >
        Category | {checkCategory(style_div)}
      </div>
      <Modal
        style={{ top: 30 }}
        onCancel={() => {
          setVisibleModal(false);
        }}
        title="choose category"
        footer={null}
        keyboard={true}
        visible={visibleModal}
      >
        <div>
          <div
            onClick={() => {
              setVisibleModal(false);
              message.success("change category to default");
            }}
            className="Header-sub"
          >
            <Link
              to=" "
              className={
                style_div === undefined
                  ? "Header-sub-a bg-b"
                  : "Header-sub-a bg-w"
              }
            >
              Default
            </Link>
          </div>
          {[
            "animal",
            "career",
            "celebrity",
            "dev",
            "explicit",
            "fashion",
            "food",
            "history",
            "money",
            "movie",
            "music",
            "political",
            "religion",
            "science",
            "sport",
            "travel",
          ].map((item) => {
            return (
              <div
                onClick={() => {
                  setVisibleModal(false);
                  message.success("change category to " + item);
                }}
                className="Header-sub"
              >
                <Link
                  to={item}
                  className={
                    style_div === item
                      ? "Header-sub-a bg-b"
                      : "Header-sub-a bg-w"
                  }
                >
                  {item}
                </Link>
              </div>
            );
          })}
        </div>
      </Modal>
    </div>
  );
}

export default Header;
