import React, { useEffect, useState } from 'react'
import Logo from '../Images/Logo.png'
import mountainLogo from '../Images/mountainLogo.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { context } from './Context'

const Header = () => {
    const {cartProducts,cartQuantity,updateCartQuantity,slideIn} = useContext(context)
    
    useEffect(()=>{
        updateCartQuantity()
    },[cartProducts])
    return (
        <>
            <header id='headerElement'>
                <div className="topLiner"></div>
                <nav>
                    <div className="logoContainer">
                        <Link to="/">
                            <img src={mountainLogo} className='logo' alt="Logo - Chilly Peaks" />
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
                        <li onClick={()=>{slideIn()}}><a>About us</a></li>
                        <li><a>Contact</a></li>
                        <li className='searchBar'>
                            <input type="text" placeholder='Search product by name...' />
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="25" height="25" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <circle cx="10" cy="10" r="7" />
                                <line x1="21" y1="21" x2="15" y2="15" />
                            </svg>
                        </li>
                        <li className='interactContainer'>
                            <Link to="products/liked-products">
                                <svg id='likeHeart' xmlns="http://www.w3.org/2000/svg" className="icon" width="25" height="25" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                </svg>
                            </Link>
                            <Link to="products/shopcart">
                                <span id='shopCartContainer' className='icon'>
                                    <svg id='shopCart' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <circle cx="6" cy="19" r="2" />
                                        <circle cx="17" cy="19" r="2" />
                                        <path d="M17 17h-11v-14h-2" />
                                        <path d="M6 5l14 1l-1 7h-13" />
                                    </svg>
                                    <span id='cartQuantity'>{cartQuantity}</span>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header