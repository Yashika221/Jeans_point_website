import React from 'react';
import "../styles/HomeStyle.css";
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='container'>
            <h1>JEANS   POINT</h1>
            <p className='heading'>"Style is a way to say who you are without having to speak"</p>
            <Link to="/items">
                <button className='btn'>
                    Explore NOW!
                </button>
            </Link>
        </div>
    );


}

export default Home;