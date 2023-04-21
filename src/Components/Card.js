import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { context } from './Context'

const Card = ({product}) => {
    const {convertURL} = useContext(context)
    let productURL = convertURL(product)

    return (
        <>  
            <div className="card">
                <div className="cardImgContainer">
                    <Link to={`/product/${productURL}`}><img src={product.image} alt={product} /></Link>
                    <button className="likeButton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                        </svg>
                    </button>
                </div>
                <div className="cardContent">
                    <h2 className='productTittle'>{product.title}</h2>
                    <p className='productPrice'>${product.price}</p>
                    <div className="buttons">
                        <Link to={`/product/${productURL}`}><button className="button">Details</button></Link>
                        <Link>
                            <button className="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <circle cx="6" cy="19" r="2" />
                                        <circle cx="17" cy="19" r="2" />
                                        <path d="M17 17h-11v-14h-2" />
                                        <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                                        <path d="M15 6h6m-3 -3v6" />
                                    </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card

