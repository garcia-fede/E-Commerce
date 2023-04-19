import React from 'react'
import { useEffect,useState } from 'react';
import Card from './Card';
import { db } from "./firebaseConfig"
import { collection,getDocs} from "firebase/firestore"
const Landing = () => {

    const [products,setProducts] = useState([])
    const [showProducts,setShowProducts] = useState([])
    const [clothesFilter,setClothesFilter] = useState([])
    const [genderFilter,setGenderFilter] = useState([])
    const [colorFilter,setColorFilter] = useState([])

    const updateProducts = ()=>{
        let clothes = clothesFilter.length
        let gender = genderFilter.length
        let color = colorFilter.length
        if(clothes==0&&gender==0&&color==0){
            setShowProducts(products)
        }
        else if(clothes>0&&gender==0&&color==0){
            let filteredProducts = products.filter(product=>clothesFilter.includes(product.category))
            setShowProducts(filteredProducts)
        }
        else if(clothes==0&&gender>0&&color==0){
            let filteredProducts = products.filter(product=>genderFilter.includes(product.gender))
            setShowProducts(filteredProducts)
        }
        else if(clothes==0&&gender==0&&color>0){
            let filteredProducts = products.filter(product=>colorFilter.includes(product.color))
            setShowProducts(filteredProducts)
        }
        else if(clothes>0&&gender>0&&color==0){
            let filteredProducts = products.filter(product=>clothesFilter.includes(product.category)&&genderFilter.includes(product.gender))
            setShowProducts(filteredProducts)
        }
        else if(clothes>0&&gender==0&&color>0){
            let filteredProducts = products.filter(product=>clothesFilter.includes(product.category)&&colorFilter.includes(product.color))
            setShowProducts(filteredProducts)
        }
        else if(clothes==0&&gender>0&&color>0){
            let filteredProducts = products.filter(product=>genderFilter.includes(product.gender)&&colorFilter.includes(product.color))
            setShowProducts(filteredProducts)
        }
        else{
            let filteredProducts = products.filter(product=>clothesFilter.includes(product.category)&&genderFilter.includes(product.gender)&&colorFilter.includes(product.color))
            setShowProducts(filteredProducts)
        }
    }

    const addFilter = (inputValue,category)=>{
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
                break;
        }
        updateProducts()
    }

    const removeFilter = (inputValue,category)=>{
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
                if(removeFromFilter.includes(inputValue)){
                    index = removeFromFilter.indexOf(inputValue)
                    if(index>-1){
                        removeFromFilter.splice(index, 1)
                    }
                }
                break;
        } 
        updateProducts()
    }

    //Receives the targeted input and extracts it's name and value
    const categoryCheck = (input)=>{
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
                if(input.checked){
                    addFilter(inputValue,category)
                }else{
                    removeFilter(inputValue,category)
                }
                break;
        }
    }

    const prueba = (element)=>{
        let id = element.getAttribute("id")
        switch(id){
            case 'Clothes':
                break;
            case 'Gender':
                break;
            case 'Color':
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
                <div className="sidebar">
                    <div className="filter filterClothes">
                        <h2 id="Categories" onClick={(e)=>prueba(e.target)}>
                            Categories 
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-triangle" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="fill"/>
                                <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
                            </svg>
                        </h2>
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
                        <h2 id="Gender" onClick={(e)=>prueba(e.target)}>
                            Gender 
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-triangle" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="fill"/>
                                <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
                            </svg>
                        </h2>
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
                    <div className="filter filterColor" onCli>
                        <h2 id="Color" onClick={(e)=>prueba(e.target)}>
                            Color 
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-triangle" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="fill"/>
                                <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
                            </svg>
                        </h2>
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
                </div>
            </div>
        </>
    ) 

}

export default Landing