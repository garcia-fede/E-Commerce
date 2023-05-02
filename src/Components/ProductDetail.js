import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useContext } from 'react'
import { context } from './Context'

const ProductDetail = () => {
    //Scroll to top of component
    window.scrollTo(0,0)
    
    //Load fail product if necessary
    const defaultProduct = {
        tittle: "Loading",
        image: "Loading",
        description: "Loading",
        price: "Loading",
        category: "Loading"
    }
    
    const {productURL} = useParams()
    const [detailedProduct,setDetailedProduct] = useState(defaultProduct)
    const [quantity,setQuantity] = useState(1)
    const [size,setSize] = useState("")
    const {products,convertURL,getDatabaseProducts,likeProduct,addToCart} = useContext(context)

    let categorySize = ""
    if(detailedProduct.category=='Shoes'){
        categorySize = 
        <select className="selectSize" defaultValue={"40"} onChange={(e)=>{setSize(e.target.value)}} >
            <option value="36">36</option>
            <option value="38">38</option>
            <option value="40" selected>40</option>
            <option value="42">42</option>
            <option value="44">44</option>
        </select>
    }
    else{
        categorySize = 
        <select className="selectSize" defaultValue={"M"} onChange={(e)=>{setSize(e.target.value)}} >
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M" selected>M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
        </select>
    }

    useEffect(()=>{
        if(products==""){
            getDatabaseProducts()
        }
    },[])

    useEffect(()=>{
        let productComparison = ""
        products.map(product=>{
            productComparison = convertURL(product)
            if(productComparison==productURL){
                setDetailedProduct(product)
            }
        })
    },[products])

    const updateQuantity = (Boolean)=>{
        let newQuantity = quantity
        if(Boolean){
            newQuantity = newQuantity + 1
        } else if(newQuantity>1){
            newQuantity = newQuantity - 1
        }
        setQuantity(newQuantity)
    }

    return (
        <div className='productDetailContainer'>
            <div className="productImage">
                <img src={detailedProduct.image} alt="product image" />
            </div>
            <div className="productDetail">
                <h1>{detailedProduct.title}</h1>
                <h2>${detailedProduct.price}</h2>
                <p>{detailedProduct.description}</p>
                <div className="buttons">
                    <div>
                        <button className='substractButton' onClick={()=>{updateQuantity(false)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <line x1="8" y1="12" x2="16" y2="12" />
                            </svg>
                        </button>
                        <div className="quantityInput">{quantity}</div>
                        <button className='addButton' onClick={()=>{updateQuantity(true)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <line x1="12" y1="7" x2="12" y2="17" />
                                <line x1="7" y1="12" x2="17" y2="12" />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <button className="addToCart" onClick={()=>{addToCart(detailedProduct,size,quantity)}}>Add to cart</button>
                        <button className='likeButton' onClick={(e)=>{likeProduct(e.target,detailedProduct)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                            </svg>
                        </button>
                    </div>
                </div>
                <h3>
                    <b>Size:</b>
                    {categorySize}
                </h3>
                <h3><b>Category:</b> {detailedProduct.category}</h3>
                <h3><b>Color:</b> {detailedProduct.color}</h3>
            </div>
        </div>
    )
}

export default ProductDetail