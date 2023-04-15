import React from 'react'
import { useEffect,useState } from 'react';
import Card from './Card';
import { db } from "./firebaseConfig"
import { collection,getDocs} from "firebase/firestore"
const Landing = () => {

    let [products,setProducts] = useState([])
    let [showProducts,setShowProducts] = useState([])
    let [clothesFilter,setClothesFilter] = useState([])
    let [genderFilter,setGenderFilter] = useState([])
    let [colorFilter,setColorFilter] = useState([])

    useEffect(()=>{
        const productsCollection = collection(db,"products")
        const products = getDocs(productsCollection)
        products.then((res)=>{
            const productsDB = res.docs.map((product)=>{
                return product.data()
            })
            setProducts(productsDB)
            setShowProducts(productsDB)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    //Build String with inputs data
    const buildString = ()=>{
        console.log(products)
        let filteredProducts = ""
        if(clothesFilter.length===0&&genderFilter.length===0&&colorFilter.length===0){
            filteredProducts=products
            console.log(filteredProducts)
            setShowProducts(filteredProducts)
        }else{
            filteredProducts = products.filter(product=>clothesFilter.includes(product.category)&&genderFilter.includes(product.gender))
            console.log(filteredProducts)
            setShowProducts(filteredProducts)
        }
    }

    //Get inputs that are checked and store them by filter
    const filter = (filterInputs,previousInput,remove)=>{
        if(!remove){
            filterInputs.forEach(input=>{
                if(input==previousInput){
                    const inputFilter = input.getAttribute('name')
                    const inputValue = input.getAttribute('value')
                    switch(inputFilter){
                        case 'Clothes':
                            let clothesAdd = clothesFilter
                            if(!clothesAdd.includes(inputValue)){
                                clothesAdd.push(inputValue)
                            }
                            setClothesFilter(clothesAdd)
                            break;
                        case 'Gender':
                            let genderAdd = genderFilter
                            if(!genderAdd.includes(inputValue)){
                                genderAdd.push(inputValue)
                            }
                            setGenderFilter(genderAdd)
                            break;
                        case 'Color':
                            break;
                    }
                }
            })
            console.log(clothesFilter,genderFilter)  
        }
        else{
            filterInputs.forEach(input=>{
                if(input==previousInput){
                    const inputFilter = input.getAttribute('name')
                    const inputValue = input.getAttribute('value')
                    switch(inputFilter){
                        case 'Clothes':
                            let clothesRemove = clothesFilter
                            let indexClothes = clothesRemove.indexOf(inputValue)
                            if(indexClothes > -1){
                                clothesRemove.splice(indexClothes, 1)
                            }
                            setClothesFilter(clothesRemove)
                            break;
                        case 'Gender':
                            let genderRemove = genderFilter
                            let indexGender = genderRemove.indexOf(inputValue)
                            if(indexGender > -1){
                                genderRemove.splice(indexGender, 1)
                            }
                            setGenderFilter(genderRemove)
                            break;
                        case 'Color':
                            break;
                    }
                }
            })
            console.log(clothesFilter,genderFilter)  
        }
        //Query String Constructor Function
        buildString()
    }

    //Check if inputs are checked, then filter
    useEffect(()=>{
        const filterInputs = document.querySelectorAll(".filterInput")
        filterInputs.forEach(input=>{
            input.addEventListener('change',()=>{
                if (input.checked) {
                    filter(filterInputs,input,false)
                } else {
                    filter(filterInputs,input,true)
                }
            })
        })
    },[])
    

    return (
        <>
            <div className="landingPage">
                <div className="mainAdvertisement">
                    <h1>What's new!</h1>
                    <h2>View the latest styles</h2>
                </div>
                <div className="sidebar">
                    <div className="filter filterClothes">
                        <h2>
                            Categories 
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-triangle" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="fill"/>
                                <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
                            </svg>
                        </h2>
                        <div className="option">
                            <input className="filterInput" type="checkbox" id='T-Shirts' name='Clothes' value='T-Shirts' />
                            <label htmlFor="T-Shirts">T-Shirts</label>
                        </div>
                        <div className="option">
                            <input className="filterInput" type="checkbox" id='Jackets' name='Clothes' value='Jackets' />
                            <label htmlFor="Jackets">Jackets</label>
                        </div>
                        <div className="option">
                            <input className="filterInput" type="checkbox" id='Pants' name='Clothes' value='Pants' />
                            <label htmlFor="Pants">Pants</label>
                        </div>
                        <div className="option">
                            <input className="filterInput" type="checkbox" id='Shoes' name='Clothes' value='Shoes' />
                            <label htmlFor="Shoes">Shoes</label>
                        </div>
                    </div>
                    <div className="filter filterGender">
                        <h2>
                            Gender 
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-triangle" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="fill"/>
                                <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
                            </svg>
                        </h2>
                        <div className="option">
                            <input className="filterInput" type="checkbox" value='female' id='female' name='Gender' />
                            <label htmlFor="female">Women</label>
                        </div>
                        <div className="option">
                            <input className="filterInput" type="checkbox" value='male' id='male' name='Gender' />
                            <label htmlFor="male">Men</label>
                        </div>
                    </div>
                    <div className="filter filterColor">
                        <h2>
                            Color 
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-triangle" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="fill"/>
                                <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
                            </svg>
                        </h2>
                        <input className="filterInput" type="color" id="colorInput" name="Color" list="colorOptions" />
                        <datalist id="colorOptions">
                            <option value="#ff0000">Red</option>
                            <option value="#00ff00">Green</option>
                            <option value="#0000ff">Blue</option>
                            <option value="#ffff00">Yellow</option>
                            <option value="#ff00ff">Magenta</option>
                            <option value="#00ffff">Cyan</option>
                        </datalist>
                    </div>
                </div>
                <div className="productsContainer">
                    {showProducts.map(product=>{
                        return <Card key={product.id} product={product} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Landing