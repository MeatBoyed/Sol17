import React from "react"
import "./PageNotFoundStyle.css"
import BannerImage from '../img/banner.jpg';
import { Link } from "react-router-dom";

export const PageNotFoundPage: React.FC = () => {
    return (
        <section id="PageNotFoundContainer" style={{backgroundImage: `url(${BannerImage})`}}>
            <h1 className="MainText"><Link to="/" >Sol - 18</Link></h1>
            <div className="ErrorMessageContainer">
                <h3>404 - Page Not Found</h3>
                <p>Seems as though you've entered the wrong link.</p>
                <p>Maybe you'll find the page back home</p>
                <a className="homeLink" href="/">HOME</a>
            </div>
        </section>
    )
}

export default PageNotFoundPage