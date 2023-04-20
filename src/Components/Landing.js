import React from 'react'
import { useEffect,useState,useContext } from 'react';
import Card from './Card';
import { db } from "./firebaseConfig"
import { collection,getDocs} from "firebase/firestore"
import { context } from './Context';

const Landing = () => {

    const {addFilter,removeFilter,setProducts,setShowProducts,showProducts} =useContext(context)

    //Receives the targeted input and extracts it's name and value
    const categoryCheck = (input)=>{
        let category = input.getAttribute("name")
        let inputValue = input.getAttribute("value")
        const labelSibling = input.nextElementSibling;
        if(input.checked){
            labelSibling.style.color='rgb(248, 126, 45)'
        } else{
            labelSibling.style.color='black'
        }
        switch(category){
            case 'Clothes':
                if(input.checked){
                    addFilter(inputValue,category)
                }else{
                    removeFilter(inputValue,category)
                }
                break;
            case 'Gender':
                if(input.checked){
                    addFilter(inputValue,category)
                }else{
                    removeFilter(inputValue,category)
                }
                break;
            case 'Color':
                if(input.checked){
                    addFilter(inputValue,category)
                }else{
                    removeFilter(inputValue,category)
                }
                break;
        }
    }

    useEffect(()=>{
        const productsCollection = collection(db,"products")
        const productsUnformatted = getDocs(productsCollection)
        productsUnformatted.then((res)=>{
            const productsDB = res.docs.map((product)=>{
                return product.data()
            })
            setProducts(productsDB)
            setShowProducts(productsDB)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    return (
        <>
            <div className="landingPage">
                <div className="mainAdvertisement">
                    <h1>What's new!</h1>
                    <h2>View the latest styles</h2>
                </div>
                <div className="websiteInfo">
                    <h2>
                        BENEFITS
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="9" cy="7" r="4" />
                            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            <path d="M16 11l2 2l4 -4" />
                        </svg>
                    </h2>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="12" cy="12" r="9" />
                            <line x1="3.6" y1="9" x2="20.4" y2="9" />
                            <line x1="3.6" y1="15" x2="20.4" y2="15" />
                            <path d="M11.5 3a17 17 0 0 0 0 18" />
                            <path d="M12.5 3a17 17 0 0 1 0 18" />
                        </svg>
                        <p>
                            WORLD WIDE SHIPPING
                        </p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5" />
                        </svg>
                        <p>
                            1 MONTH LOCAL WARRANTY 
                        </p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="8.5" cy="8.5" r="1" fill="currentColor" />
                            <path d="M4 7v3.859c0 .537 .213 1.052 .593 1.432l8.116 8.116a2.025 2.025 0 0 0 2.864 0l4.834 -4.834a2.025 2.025 0 0 0 0 -2.864l-8.117 -8.116a2.025 2.025 0 0 0 -1.431 -.593h-3.859a3 3 0 0 0 -3 3z" />
                        </svg>
                        <p>
                            ALMOST 50 DIFFERENT BRANDS
                        </p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <rect x="3" y="5" width="18" height="14" rx="3" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                            <line x1="7" y1="15" x2="7.01" y2="15" />
                            <line x1="11" y1="15" x2="13" y2="15" />
                        </svg>
                        <p>
                            MULTIPLE TYPES OF PAYMENTS
                        </p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <rect x="7" y="9" width="14" height="10" rx="2" />
                            <circle cx="14" cy="14" r="2" />
                            <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2" />
                        </svg>
                        <p>
                            PAY UP TO 6 INSTALLMENTS
                        </p>
                    </div>
                </div>
                <div className="sidebar">
                    <div className="filter filterClothes">
                        <h1>
                            Filters
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <circle cx="14" cy="6" r="2" />
                                <line x1="4" y1="6" x2="12" y2="6" />
                                <line x1="16" y1="6" x2="20" y2="6" />
                                <circle cx="8" cy="12" r="2" />
                                <line x1="4" y1="12" x2="6" y2="12" />
                                <line x1="10" y1="12" x2="20" y2="12" />
                                <circle cx="17" cy="18" r="2" />
                                <line x1="4" y1="18" x2="15" y2="18" />
                                <line x1="19" y1="18" x2="20" y2="18" />
                            </svg>
                            </h1>
                        <h2 id="Categories">Categories</h2>
                        <div className="optionsClothes">
                            <div className="option">
                                <input className="filterInput" type="checkbox" id='T-Shirts' name='Clothes' value='T-Shirts' onClick={(e) => categoryCheck(e.target)}/>
                                <label htmlFor="T-Shirts">T-Shirts</label>
                            </div>
                            <div className="option">
                                <input className="filterInput" type="checkbox" id='Jackets' name='Clothes' value='Jackets' onClick={(e) => categoryCheck(e.target)}/>
                                <label htmlFor="Jackets">Jackets</label>
                            </div>
                            <div className="option">
                                <input className="filterInput" type="checkbox" id='Pants' name='Clothes' value='Pants' onClick={(e) => categoryCheck(e.target)}/>
                                <label htmlFor="Pants">Pants</label>
                            </div>
                            <div className="option">
                                <input className="filterInput" type="checkbox" id='Shoes' name='Clothes' value='Shoes' onClick={(e) => categoryCheck(e.target)}/>
                                <label htmlFor="Shoes">Shoes</label>
                            </div>
                        </div>
                    </div>
                    <div className="filter filterGender">
                        <h2 id="Gender">Gender</h2>
                        <div className="optionsGender">
                            <div className="option">
                                <input className="filterInput" type="checkbox" value='female' id='female' name='Gender' onClick={(e) => categoryCheck(e.target)} />
                                <label htmlFor="female">Women</label>
                            </div>
                            <div className="option">
                                <input className="filterInput" type="checkbox" value='male' id='male' name='Gender' onClick={(e) => categoryCheck(e.target)} />
                                <label htmlFor="male">Men</label>
                            </div>
                        </div>
                    </div>
                    <div className="filter filterColor" >
                        <h2 id="Color">Color</h2>
                        <div className="optionsColors">
                            <div className="option">
                                <input type="checkbox" value="Pink Cream" id='Pink Cream' name="Color" onClick={(e)=>categoryCheck(e.target)} />
                                <label htmlFor="Pink Cream">Pink Cream</label>
                            </div>
                            <div className="option">
                                <input type="checkbox" value="Pink" id="Pink" name="Color" onClick={(e)=>categoryCheck(e.target)} />
                                <label htmlFor="Pink">Pink</label>
                            </div>
                            <div className="option">
                                <input type="checkbox" value="Black" id="Black" name="Color" onClick={(e)=>categoryCheck(e.target)} />
                                <label htmlFor="Black">Black</label>
                            </div>
                            <div className="option">
                                <input type="checkbox" value="Beige" id="Beige" name="Color" onClick={(e)=>categoryCheck(e.target)} />
                                <label htmlFor="Beige">Beige</label>
                            </div>
                            <div className="option">
                                <input type="checkbox" value="White" id="White" name="Color" onClick={(e)=>categoryCheck(e.target)} />
                                <label htmlFor="White">White</label>
                            </div>
                            <div className="option">
                                <input type="checkbox" value="Blue" id="Blue" name="Color" onClick={(e)=>categoryCheck(e.target)} />
                                <label htmlFor="Blue">Blue</label>
                            </div>
                            <div className="option">
                                <input type="checkbox" value="Orange" id="Orange" name="Color" onClick={(e)=>categoryCheck(e.target)} />
                                <label htmlFor="Orange">Orange</label>
                            </div>
                            <div className="option">
                                <input type="checkbox" value="Red" id="Red" name="Color" onClick={(e)=>categoryCheck(e.target)} />
                                <label htmlFor="Red">Red</label>
                            </div>
                            <div className="option">
                                <input type="checkbox" value="Light Gray" id="Light Gray" name="Color" onClick={(e)=>categoryCheck(e.target)} />
                                <label htmlFor="Light Gray">Light Gray</label>
                            </div>
                            <div className="option">
                                <input type="checkbox" value="Gray" id="Gray" name="Color" onClick={(e)=>categoryCheck(e.target)} />
                                <label htmlFor="Gray">Gray</label>
                            </div>
                            <div className="option">
                                <input type="checkbox" value="Light Blue" id="Light Blue" name="Color" onClick={(e)=>categoryCheck(e.target)} />
                                <label htmlFor="Light Blue">Light Blue</label>
                            </div>
                            <div className="option">
                                <input type="checkbox" value="Brown" id="Brown" name="Color" onClick={(e)=>categoryCheck(e.target)} />
                                <label htmlFor="Brown">Brown</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="productsContainer">
                    {showProducts.map(product=>{
                        return <Card key={product.id} product={product} />
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