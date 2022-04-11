import axios from "axios";
import { useEffect, useState } from 'react'
import translate from 'translate';
import {
  useParams
} from "react-router-dom";


function CategoryApi({ changeMode }) {
  const [chucknoris2, setChucknoris2] = useState("");
  const [ch22, setCh22] = useState("");

  const { id } = useParams();
  changeMode(id);
  useEffect(async () => {
    var api_value;
    if (id) {
      api_value = await axios.get("https://api.chucknorris.io/jokes/random?category=" + id);
    } else {
      api_value = await axios.get("https://api.chucknorris.io/jokes/random");
    }
    var text_tran = await translate(api_value.data.value, "th");
    setChucknoris2(text_tran)

    if (id) {
      api_value = await axios.get("https://api.chucknorris.io/jokes/random?category=" + id);
    } else {
      api_value = await axios.get("https://api.chucknorris.io/jokes/random");
    }
    text_tran = await translate(api_value.data.value, "th");
    setCh22(text_tran);
  }, ["chucknoris2", "ch22"])

  async function getApi() {
    let api_value;
    if (id) {
      api_value = await axios.get("https://api.chucknorris.io/jokes/random?category=" + id);
    } else {
      api_value = await axios.get("https://api.chucknorris.io/jokes/random");
    }
    const text_tran = await translate(api_value.data.value, "th");
    setChucknoris2(text_tran)
  }

  async function getApi2() {
    let api_value;
    if (id) {
      api_value = await axios.get("https://api.chucknorris.io/jokes/random?category=" + id);
    } else {
      api_value = await axios.get("https://api.chucknorris.io/jokes/random");
    }
    const text_tran = await translate(api_value.data.value, "th");
    setCh22(text_tran);
  }

  document.title = id?"App | chuckmorris Category":"App | chuckmorris default";

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
}

export default CategoryApi;