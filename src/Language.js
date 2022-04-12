import { useState } from "react";

function LanguageSelect({ lang, setLang }) {
    const [display_language, setDisplay_language] = useState(false)
    function bottomDisplay(){
        if(display_language){
            setDisplay_language(false);
        } else {
            setDisplay_language(true);
        }
    }
    return <div style={{ paddingTop: "20px" }}>
        <div onClick={bottomDisplay} style={{ fontSize: "20px" }} className="bg-w">Language</div>
        <div style={{display:display_language?"block":'none'}}>
            <button className={lang === "th" ? "btn bg-b font-small" : "btn bg-w font-small"} onClick={() => { setLang("th"); }}>thai</button>
            <button className={lang === "ja" ? "btn bg-b font-small" : "btn bg-w font-small"} onClick={() => { setLang("ja"); }}>Japan</button>
            <button className={lang === "en" ? "btn bg-b font-small" : "btn bg-w font-small"} onClick={() => { setLang("en"); }}>English</button>
        </div>
    </div>
}

export default LanguageSelect;