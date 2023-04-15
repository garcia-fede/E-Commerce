import React from 'react'
import Logo from '../Images/Logo.png'

const Header = () => {
    return (
        <>
            <header>
                <div className="topLiner"></div>
                <nav>
                    <div className="logoContainer">
                        <img src={Logo} className='logo' alt="Logo - Chilly Peaks" />
                    </div>
                    <input type="checkbox" id="hamburgerCheckbox" />
                    <label for="hamburgerCheckbox" class="hamburgerButton">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <ul>
                        <li><a href="">Products</a></li>
                        <li><a href="">About us</a></li>
                        <li><a href="">Contact</a></li>
                        <li className='searchBar'>
                            <input type="text" placeholder='Search product by name...'/>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="25" height="25" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <circle cx="10" cy="10" r="7" />
                                <line x1="21" y1="21" x2="15" y2="15" />
                            </svg>
                        </li>
                        <li className='shopCartContainer'>
                            <svg id='shopCart' xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="25" height="25" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
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