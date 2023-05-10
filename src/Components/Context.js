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
    const [cartProducts,setCartProducts] = useState([])
    const [cartQuantity,setCartQuantity] = useState(0)
    const [cartTotal,setCartTotal] = useState(0)
    const [slideContent,setSlideContent] = useState(true)
    
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

    // Discard cart products

    const discardProducts = ()=>{
        setCartProducts([])
    }

    // Add cart products

    const addToCart = (product,size,quantity)=>{
        let productSize, productQuantity
        let cartItemKey = generateRandomId()
        let shopCart = document.getElementById('shopCartContainer')
        shopCart.classList.add('bounce')

        if(size==""||size==undefined){
            if(product.category=='Shoes'){
                productSize = 40
            } else{
                productSize = 'M'
            }
        } else{
            productSize = size
        }
        if(quantity==undefined){
            productQuantity=1
        } else{
            productQuantity = quantity
        }
        
        //Check if a type of product in a specific size is already on the cart
        if(cartProducts.length!=0){
            //If there is, then increment the quantity of said product
            let repeatedIndex = -1;
            const checkForRepeated = cartProducts.some((cartItem, index) => {
                const isMatch = cartItem.product.productId == product.productId && cartItem.order.size == productSize;
                if (isMatch) {
                    repeatedIndex = index
                }
                    return isMatch;
                });
            if(checkForRepeated){
                let replaceCartItem = [...cartProducts]
                if(repeatedIndex!=-1){
                    replaceCartItem[repeatedIndex].order.quantity = replaceCartItem[repeatedIndex].order.quantity + productQuantity
                }
                setCartProducts(replaceCartItem)
            } else{
            //If there isn't any, then add said product with said size to the cart
                const cartItem = {
                    product:{
                        ...product
                    },
                    order:{
                        size: productSize,
                        quantity: productQuantity,
                        orderId: cartItemKey
                    }
                }
                let addCartProduct = [...cartProducts]
                addCartProduct.push(cartItem)
                setCartProducts(addCartProduct)
            }
        }else{
            //If the array is empty, there is no need to check for repeated elements
            const cartItem = {
                product:{
                    ...product
                },
                order:{
                    size: productSize,
                    quantity: productQuantity,
                    orderId: cartItemKey
                }
            }
            let addCartProduct = [...cartProducts]
            addCartProduct.push(cartItem)
            setCartProducts(addCartProduct)
        }
        setTimeout(() => {
            shopCart.classList.remove('bounce');
        }, 500);
    }

    // Remove cart items

    const removeCartItem = (product)=>{
        let cartProductsUpdate = [...cartProducts]
        let index = cartProducts.indexOf(product)
        if(index>-1){
            cartProductsUpdate.splice(index, 1)
        }
        setCartProducts(cartProductsUpdate)
    }

    // Update Header Cart
    const updateCartQuantity = ()=>{
        let quantity = 0
        if(cartProducts.length==0){
            setCartQuantity(0)
            setCartTotal(0)
        } else{
            let checkoutTotal = 0;
            cartProducts.map(product=>{
                quantity = quantity+product.order.quantity
                checkoutTotal = checkoutTotal+(product.order.quantity*product.product.price)
                setCartQuantity(quantity)
            })
            setCartTotal(checkoutTotal)
        }
    }

    // Set liked products

    const likeProduct = (targetSVG,product)=>{
        let productId = product.productId
        let addLikedProduct = [...likedProducts]
        let likeHeart = document.getElementById('likeHeart')
        likeHeart.classList.add('bounce')

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
        setTimeout(() => {
            likeHeart.classList.remove('bounce');
        }, 500);
    }

    // Remove liked products

    const removeLikedProduct = (product)=>{
        let likedProductsUpdate = [...likedProducts]
        let index = likedProducts.indexOf(product)
        if(index>-1){
            likedProductsUpdate.splice(index, 1)
        }
        setLikedProducts(likedProductsUpdate)
    }

    // Generate random ID - Used in cart items

    function generateRandomId() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < 15; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
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
        setClothesFilter,
        setGenderFilter,
        setColorFilter,
        convertURL,
        generateRandomId,
        likeProduct,
        removeLikedProduct,
        addToCart,
        removeCartItem,
        setCartQuantity,
        updateCartQuantity,
        discardProducts,
        setSlideContent,
        cartTotal,
        cartQuantity,
        cartProducts,
        likedProducts,
        showProducts,
        products,
        slideContent
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default ContextProvider