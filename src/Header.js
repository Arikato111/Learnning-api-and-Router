import './Header.css'
import { Link, useParams } from 'react-router-dom';
function Header({style_div}) {
    return (
        <div className='Header'>
            <div className='Header-sub'><Link to=" "className={style_div === undefined? "Header-sub-a bg-b":"Header-sub-a bg-w" }>Default</Link></div>
            {["animal", "career", "celebrity", "dev", "explicit", "fashion", "food", "history", "money", "movie", "music", "political", "religion", "science", "sport", "travel"].map((item) => {
                // return <div className='Header-sub'><a href="#"> <b>{item}</b></a></div>;
                return <div className='Header-sub'><Link to={item} className={style_div === item? "Header-sub-a bg-b":"Header-sub-a bg-w" }>{item}</Link></div>
            })}
        </div>

    )
}

export default Header;