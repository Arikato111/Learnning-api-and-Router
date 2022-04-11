import { useState } from 'react'
import './App.css';
import Header from "./Header";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import CategoryApi from "./CategoryApi";

function App() {
  const [modeHeader, setModeHeader] = useState("");
  function changeModeHeader(value){
    setModeHeader(value);
  }

  return (
    <Router>
      <Header style_div={modeHeader} />
      <Switch>
        <Route path="/:id" element={
          <CategoryApi changeMode={changeModeHeader} />
        } />
        <Route />
        <Route path='' element={
          <CategoryApi changeMode={changeModeHeader} />
        } />
      </Switch>
      <Bottom />
    </Router>
  );
}

function Bottom(){
  return <div style={{padding: "20px", textAlign:"center"}}>this website it's just only for learnning React , using api and React-Router-dom</div>
}
export default App;
