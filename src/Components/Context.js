import { createContext, useEffect, useState } from "react";
import { db } from "./firebaseConfig"
import { collection,getDocs} from "firebase/firestore"
export const context = createContext()
const { Provider } = context

const ContextProvider = ({children}) => {

    const [products,setProducts] = useState([])
    const [showProducts,setShowProducts] = useState([])
    const [clothesFilter,setClothesFilter] = useState([])
    const [genderFilter,setGenderFilter] = useState([])
    const [colorFilter,setColorFilter] = useState([])
    const [likedProducts,setLikedProducts] = useState([])
    // Import products from firebase

    const getDatabaseProducts = ()=>{
        const productsCollection = collection(db,"products")
        const productsUnformatted = getDocs(productsCollection)
        productsUnformatted.then((res)=>{
            const productsDB = res.docs.map((product)=>{
                return {productId: product.id, ...product.data()};
            })
            setProducts(productsDB)
            setShowProducts(productsDB)
        }).catch((err)=>{
            console.log(err)
        })
    }

    // Set liked products

    const likeProduct = (targetSVG,product)=>{
        let productId = product.productId
        let addLikedProduct = [...likedProducts]
        if(likedProducts.length==0){
            addLikedProduct.push(product)
            setLikedProducts(addLikedProduct)
        }else{
            let checkForRepeated = addLikedProduct.some(existingProduct => existingProduct.productId == productId)
            if(checkForRepeated){
                let index
                for(let i=0;i<addLikedProduct.length;i++){
                    if(addLikedProduct[i].productId==product.productId){
                        index=i
                    }
                    else{
                        index=-1
                    }
                }
                if(index>-1){
                    addLikedProduct.splice(index, 1)
                    setLikedProducts(addLikedProduct)
                }
            } else{
                addLikedProduct.push(product)
                setLikedProducts(addLikedProduct)
            }
        }
    }

    const removeLikedProduct = (product)=>{
        let likedProductsUpdate = [...likedProducts]
        let index = likedProducts.indexOf(product)
        if(index>-1){
            likedProductsUpdate.splice(index, 1)
        }
        setLikedProducts(likedProductsUpdate)
    }

    // Sidebar filter function

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
                setColorFilter(addToFilter)
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

    // Product name,color and gender to URL convertion

    const convertURL = (product)=>{
        let gender = ''
        if(product.gender=='male'){
            gender = 'men'
        }else {
            gender = 'women'
        }
        let identificationString = gender + '-' + product.title + '-' + product.color
        const formatString = identificationString.toLowerCase().normalize("NFD").replace(/[^a-zA-Z0-9\s-]/g, "").replace(/[\u0300-\u036f]/g, "");
        const urlString = formatString.replace(/ /g, "-")
        return urlString;
    }

    const contextValue = {
        getDatabaseProducts,
        addFilter,
        removeFilter,
        setProducts,
        setShowProducts,
        convertURL,
        likeProduct,
        removeLikedProduct,
        likedProducts,
        showProducts,
        products
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default ContextProvider