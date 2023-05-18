import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react'
import { context } from './Context'

const Footer = ()=>{
    const {slideIn} = useContext(context)
    const [showModal,setShowModal] = useState(false)
    const toggleModal = ()=>{
        setShowModal(!showModal)
    }
    const handleKeyPress = (event) => {
        if(event.key==='Escape'&&showModal){
            setShowModal(false)
        }
    };
    document.addEventListener('keydown', handleKeyPress);

    return (
        <div className='footerContainer' id='footer'>
            <div className="footerContent">
                <ul>
                    <h3>Navigation</h3>
                    <li><Link to="/">Products</Link></li>
                    <li onClick={()=>{slideIn()}}>About us</li>
                    <li><Link to="/products/shopcart">Liked Products</Link></li>
                    <li><Link to="/products/liked-products">My Cart</Link></li>
                </ul>
                <ul>
                    <h3>Contact us!</h3>
                    <p>
                        If you have any suggestions or feedback, please share them with us. 
                        We value your input and are dedicated to improving our services based on your recommendations.
                    </p>
                    <button onClick={toggleModal}>CONTACT</button>
                    {showModal && (
                        <div className="contactModal">
                        <div className="modalContent" id="modal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" onClick={toggleModal}>
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M18 6l-12 12" />
                                <path d="M6 6l12 12" />
                            </svg>
                            <h3>Name</h3>
                            <input type="text" />
                            <h3>Last name</h3>
                            <input type="text" />
                            <h3>Email</h3>
                            <input type="email" />
                            <h3>Message</h3>
                            <span role="textbox" contentEditable={true}></span>
                            <button>SEND</button>
                        </div>
                        </div>
                    )}
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                            <path d="M3 7l9 6l9 -6" />
                        </svg>
                        chillypeaks@chillypeaks.com
                    </li>
                </ul>
            </div>
            <div className="copyright">
                <a target="_blank" href="https://www.linkedin.com/in/federico-garc%C3%ADa-088917236/" rel="noopener">© Federico Garcia 2023</a>
            </div>
        </div>
    )
}

export default Footer