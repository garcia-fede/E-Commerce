import React from 'react'
import { useEffect,useState,useContext } from 'react';
import WebsiteInfo from './WebsiteInfo';
import Sidebar from './Sidebar';
import Card from './Card';
import { context } from './Context';

const Landing = () => {

    const {showProducts,getDatabaseProducts} =useContext(context)

    useEffect(()=>{
        getDatabaseProducts()
    },[])

    return (
        <>
            <div className="landingPage">
                <div className="mainAdvertisement">
                    <h1>What's new!</h1>
                    <h2>View the latest styles</h2>
                </div>
                <WebsiteInfo />
                <Sidebar />
                <div className="productsContainer">
                    {showProducts.map(product=>{
                        return <Card key={product.productId} product={product} />
                    })}
                    <div className="endOfProducts">
                        <p>If you don't want to miss out our promotions and discount codes don't forget to follow us!</p>
                        <div className="socialIcons">
                            <div>
                                <a href="https://www.instagram.com/" target='_blank'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <rect x="4" y="4" width="16" height="16" rx="4" />
                                        <circle cx="12" cy="12" r="3" />
                                        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                                    </svg>
                                </a>
                                @ChillyPeaks
                            </div>
                            <div>
                                <a href="https://twitter.com/home" target='_blank'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                                    </svg>
                                </a>
                                @ChillyPeaks_Official
                            </div>
                            <div>
                                <a href="https://www.youtube.com/" target='_blank'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <rect x="3" y="5" width="18" height="14" rx="4" />
                                        <path d="M10 9l5 3l-5 3z" />
                                    </svg>
                                </a>
                                YT/ChillyPeaksClothing
                            </div>
                            <div>
                                <a href="https://tiktok.com/" target='_blank'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-tiktok" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5" />
                                    </svg>
                                </a>
                                @_ChillyPeaks
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) 

}

export default Landing