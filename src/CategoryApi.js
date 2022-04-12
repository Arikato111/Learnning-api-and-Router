import axios from "axios";
import React, { useEffect, useState } from 'react'
import translate from 'translate';
import {
  useParams
} from "react-router-dom";
import NotFound from "./NotFound";
function CategoryApi({ changeMode, language, mode }) {
  const [chucknoris2, setChucknoris2] = useState("");
  const [ch22, setCh22] = useState("");

  const { id } = useParams();
  changeMode(id);


  async function getApi() {
    let api_value;
    if (id) {
      api_value = await axios.get("https://api.chucknorris.io/jokes/random?category=" + id);
    } else {
      api_value = await axios.get("https://api.chucknorris.io/jokes/random");
    }
    const text_tran = await translate(api_value.data.value, language);
    setChucknoris2(text_tran)
  }

  async function getApi2() {
    let api_value;
    if (id) {
      api_value = await axios.get("https://api.chucknorris.io/jokes/random?category=" + id);
    } else {
      api_value = await axios.get("https://api.chucknorris.io/jokes/random");
    }
    const text_tran = await translate(api_value.data.value, language);
    setCh22(text_tran);
  }

  useEffect(() => {
    getApi();
    getApi2();
  }, [language, mode])

  document.title = id ? "App | chuckmorris Category" : "App | chuckmorris default";

  const data_head = ["animal", "career", "celebrity", "dev", "explicit", "fashion", "food", "history", "money", "movie", "music", "political", "religion", "science", "sport", "travel"];
  if (data_head.includes(mode) || mode === undefined) {
    return <div className="App">
      <div className="content">
        <div style={{ fontSize: 30 }}>{chucknoris2}</div>
        <button className="btn" onClick={getApi}>Change</button>
      </div>
      <div className="content">
        <div style={{ fontSize: 30 }}>{ch22}</div>
        <button className="btn" onClick={getApi2}>Change</button>
      </div>
    </div>
  } else {
    return <NotFound />
  }
}

export default CategoryApi;