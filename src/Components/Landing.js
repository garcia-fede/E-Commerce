import React from 'react'
import { useEffect,useState } from 'react';
import Card from './Card';
import { db } from "./firebaseConfig"
import { collection,getDocs,query,where } from "firebase/firestore"

const Landing = () => {
    let [products,setProducts] = useState([])
    useEffect(()=>{
        const productosCollection = collection(db,"products")
        const products = getDocs(productosCollection)
        products.then((res)=>{
            const productsDB = res.docs.map((product)=>{
                return product.data()
            })
            setProducts(productsDB)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    console.log(products)
    return (
        <>
            <div className="landingPage">
                <div className="mainAdvertisement">
                    <h1>What's new!</h1>
                    <h2>View the latest styles</h2>
                </div>
                <sidebar className="sidebar">

                    <div className="filter">
                        <h2>
                            Categories 
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-triangle" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="fill"/>
                                <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
                            </svg>
                        </h2>
                        <div className="option">
                            <input type="checkbox" id='T-Shirts' />
                            <label htmlFor="T-Shirts">T-Shirts</label>
                        </div>
                        <div className="option">
                            <input type="checkbox" id='Jackets' />
                            <label htmlFor="Jackets">Jackets</label>
                        </div>
                        <div className="option">
                            <input type="checkbox" id='Pants' />
                            <label htmlFor="Pants">Pants</label>
                        </div>
                        <div className="option">
                            <input type="checkbox" id='Shoes' />
                            <label htmlFor="Shoes">Shoes</label>
                        </div>
                    </div>
                    <div className="filter">
                        <h2>
                            Gender 
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-triangle" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="fill"/>
                                <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
                            </svg>
                        </h2>
                        <div className="option">
                            <input type="checkbox" id='Women' />
                            <label htmlFor="Women">Women</label>
                        </div>
                        <div className="option">
                            <input type="checkbox" id='Men' />
                            <label htmlFor="Men">Men</label>
                        </div>
                    </div>
                    <div className="filter">
                        <h2>
                            Color 
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-triangle" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="fill"/>
                                <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
                            </svg>
                        </h2>
                        <input type="color" id="color-input" name="color" list="color-options" />
                        <datalist id="color-options">
                            <option value="#ff0000">Red</option>
                            <option value="#00ff00">Green</option>
                            <option value="#0000ff">Blue</option>
                            <option value="#ffff00">Yellow</option>
                            <option value="#ff00ff">Magenta</option>
                            <option value="#00ffff">Cyan</option>
                        </datalist>
                    </div>
                </sidebar>
                <div className="productsContainer">
                    {products.map(product=>{
                        return <Card key={product.id} product={product} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Landing