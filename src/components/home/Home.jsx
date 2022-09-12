import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home_page">
            <div className="hero_area">
                <h1>Connect, Grow, and Inspire.</h1>
                <p>
                    Chatscrum is a great place to meet all your friends and talk
                    about anything. It's easy, intuitive and most of all, fun!
                </p>
                <div className="links">
                    <p><Link to="/signup">Sign up</Link></p>
                    <p><Link to="/signin">Sign in</Link></p>
                </div>
            </div>
        </div>
    );
}
