import React from 'react'
import { useEffect,useState,useContext } from 'react';
import WebsiteInfo from './WebsiteInfo';
import Sidebar from './Sidebar';
import Card from './Card';
import Socials from './Socials';
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
                    <Socials />
                </div>
            </div>
        </>
    ) 

}

export default Landing