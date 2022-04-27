import React, { useEffect, useState } from 'react'
import './App.css';
import 'antd/dist/antd.css'
import Header from "./Header";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";

import CategoryApi from "./CategoryApi";
import LanguageSelect from './Language';

function App() {
  const [modeHeader, setModeHeader] = useState("");
  const [lang, setLang] = useState(localStorage.getItem("language")?localStorage.getItem("language"): "th");

  function changeModeHeader(value) {
    setModeHeader(value);
  }

  function changeLanguage(value){
    setLang(value)
  }

  useEffect(()=>{
    console.log(lang);
  },[lang])

  return (
    <Router>
      <Header style_div={modeHeader} />
      <LanguageSelect lang={lang} setLang={changeLanguage} />
      <Switch>
        <Route path="/:id" element={
          <CategoryApi changeMode={changeModeHeader} mode={modeHeader} language={lang} />
        } />
        <Route />
        <Route path='' element={
          <CategoryApi changeMode={changeModeHeader} language={lang} />
        } />
        <Route path='*' element={
          <Navigate to='' />
        } />
      </Switch>
      <Bottom />
    </Router>
  );
}

function Bottom() {
  return <div style={{ padding: "20px", textAlign: "center" }}>this website it's just only for learnning React and using api , React-Router-dom</div>
}
export default App;
