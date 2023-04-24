import React from 'react'
import Logo from '../Images/Logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header>
                <div className="topLiner"></div>
                <nav>
                    <div className="logoContainer">
                        <Link to="/">
                            <img src={Logo} className='logo' alt="Logo - Chilly Peaks" />
                        </Link>
                    </div>
                    <input type="checkbox" id="hamburgerCheckbox" />
                    <label htmlFor="hamburgerCheckbox" className="hamburgerButton">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <ul>
                        <li><Link to="/">Products</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><a href="">Contact</a></li>
                        <li className='searchBar'>
                            <input type="text" placeholder='Search product by name...' />
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="25" height="25" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <circle cx="10" cy="10" r="7" />
                                <line x1="21" y1="21" x2="15" y2="15" />
                            </svg>
                        </li>
                        <li className='interactContainer'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="25" height="25" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                            </svg>
                            <svg id='shopCart' xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="25" height="25" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <circle cx="6" cy="19" r="2" />
                                <circle cx="17" cy="19" r="2" />
                                <path d="M17 17h-11v-14h-2" />
                                <path d="M6 5l14 1l-1 7h-13" />
                            </svg>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header