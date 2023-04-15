import React from 'react'
import { useEffect,useState } from 'react';
// import Card from './Card';
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
                {/* {products.map(product=>{
                    return <Card key={product.id} product={product} />
                })} */}
                <div className="mainAdvertisement">
                    <h1>What's new!</h1>
                    <h2>View the latest styles</h2>
                </div>
            </div>
        </>
    )
}

export default Landing