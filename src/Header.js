import './Header.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Header({ style_div }) {
    const [display_header, setDisplay_header] = useState(false);
    function bottomDisplay() {
        if (display_header) {
            setDisplay_header(false);
        } else {
            setDisplay_header(true);
        }
    }
    return (
        <div className='Header'>
            <div onClick={bottomDisplay} className='bg-w' style={{ fontSize: "20px" }}>Category</div>

            <div style={{ display: display_header ? "inline-block" : "none" }}>
                <div className='Header-sub'><Link to=" " className={style_div === undefined ? "Header-sub-a bg-b" : "Header-sub-a bg-w"}>Default</Link></div>
                {["animal", "career", "celebrity", "dev", "explicit", "fashion", "food", "history", "money", "movie", "music", "political", "religion", "science", "sport", "travel"].map((item) => {
                    // return <div className='Header-sub'><a href="#"> <b>{item}</b></a></div>;
                    return <div className='Header-sub'><Link to={item} className={style_div === item ? "Header-sub-a bg-b" : "Header-sub-a bg-w"}>{item}</Link></div>
                })}
            </div>
        </div>

    )
}

export default Header;