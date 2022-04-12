import { Link } from "react-router-dom";

function NotFound() {
    return <div className="App">
        <div className="content">
            <div style={{ fontSize: 30 }}>Not Found this category</div>
            <Link to="">
                <button className="btn">Fixed</button>
            </Link>
        </div>
    </div>
}

export default NotFound;