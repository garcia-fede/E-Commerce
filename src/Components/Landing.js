import React from 'react'
import { useEffect,useState } from 'react';
import Card from './Card';
import { db } from "./firebaseConfig"
import { collection,getDocs} from "firebase/firestore"
const Landing = () => {

    let [products,setProducts] = useState([])
    let [addEvent,setAddEvent] = useState(true)
    let [showProducts,setShowProducts] = useState([])
    let [clothesFilter,setClothesFilter] = useState([])
    let [genderFilter,setGenderFilter] = useState([])
    let [colorFilter,setColorFilter] = useState([])

    function updateProducts() {
        console.log(clothesFilter,genderFilter)
        let clothes = clothesFilter.length
        let gender = genderFilter.length
        let color = colorFilter.length
        // if(clothes==0&&gender==0&&color==0){
        //     setShowProducts(products)
        // }
        // else{
        //     let filteredProducts = products.filter(product=>clothesFilter.includes(product.category)&&genderFilter.includes(product.gender))
        //     setShowProducts(filteredProducts)
        // }
    }

    function addFilter (inputValue,category) {
        let addToFilter
        switch(category){
            case 'Clothes':
                addToFilter = clothesFilter
                if(!addToFilter.includes(inputValue)){
                    addToFilter.push(inputValue)
                }
                setClothesFilter(addToFilter)
                break;
            case 'Gender':
                addToFilter = genderFilter
                if(!addToFilter.includes(inputValue)){
                    addToFilter.push(inputValue)
                }
                setGenderFilter(addToFilter)
                break;
            case 'Color':
                addToFilter = colorFilter
                if(!addToFilter.includes(inputValue)){
                    addToFilter.push(inputValue)
                }
                setColorFilter(addToFilter)
                break;
        }
        updateProducts()
    }

    function removeFilter (inputValue,category) {
        let removeFromFilter
        let index;
        switch(category){
            case 'Clothes':
                removeFromFilter = clothesFilter
                if(removeFromFilter.includes(inputValue)){
                    index = removeFromFilter.indexOf(inputValue)
                    if(index>-1){
                        removeFromFilter.splice(index, 1)
                    }
                }
                setClothesFilter(removeFromFilter)
                break;
            case 'Gender':
                removeFromFilter = genderFilter
                if(removeFromFilter.includes(inputValue)){
                    index = removeFromFilter.indexOf(inputValue)
                    if(index>-1){
                        removeFromFilter.splice(index, 1)
                    }
                }
                setGenderFilter(removeFromFilter)
                break;
            case 'Color':
                removeFromFilter = colorFilter
                break;
        } 
        updateProducts()
    }

    function categoryCheck (input) {
        let category = input.getAttribute("name")
        let inputValue = input.getAttribute("value")
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
        }
    }

    function filterArrays (input) {
        if(addEvent){
            input.addEventListener("change",()=>{
                categoryCheck(input)
            })
            setAddEvent(false)
        } 
    }

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
        const filterInputs = document.querySelectorAll(".filterInput")
        filterInputs.forEach(input=>filterArrays(input))
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