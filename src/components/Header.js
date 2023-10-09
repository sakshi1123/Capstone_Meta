import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../images/restauranfood.jpg'

const Header = () => {
    return (
        <header className='header'>
            <section>
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>California</h3>
                    <p>For the love of delicious food where every flavor tells a story.</p>
                    <Link to="/booking"><button aria-label='On Click'>Reserve Table</button></Link>
                </div>
                {/* banner image*/}
                <div className='banner-img'>
                    <img src={bannerImg} alt='' />
                </div>
            </section>
        </header>
    );
};

export default Header;