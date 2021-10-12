import React from 'react';
import logo from '../logo.png'

const Header = () => {
    return (
        
        <header className='container'>    
            <img src={logo} className='header-logo' alt="logo"/>
                <nav className='header navbar'>    
                    <ul>
                        <li>
                            <a href="/about-us">About Us</a>
                        </li>
                        <li>
                            <a href="/stories">Stories</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                        <li>
                            <a href="/log-in">Log In</a>
                        </li>
                        <li>
                            <a href="/sign up" className='sign-up'>
                                Sign up
                            </a>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header
