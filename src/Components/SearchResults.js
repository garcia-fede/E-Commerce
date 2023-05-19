import React from 'react'
import { useEffect,useRef,useState,useContext } from 'react';
import { Link,useParams } from 'react-router-dom';
import { context } from './Context';
import MatchProduct from './MatchProduct'

const SearchResults = () => {
    //Scroll to top of component
    const isMountedRef = useRef(false);
    useEffect(() => {
        if (!isMountedRef.current) {
            window.scroll(0, 0);
            isMountedRef.current = true;
        }
    }, []);

    const {products,getDatabaseProducts} = useContext(context)
    const [matchingProducts,setMatchingProducts] = useState([])
    const {productQuery} = useParams()
    let divider = " > "
    let searchMatch = []
    
    const searchByQuery = ()=>{
        let lowercaseQuery = productQuery.toLowerCase();
        searchMatch = products.filter(product=>
        product.title.toLowerCase().includes(lowercaseQuery) ||
        product.color.toLowerCase().includes(lowercaseQuery))
        setMatchingProducts(searchMatch)
    }

    useEffect(()=>{
        if(products==""){
            getDatabaseProducts()
            searchByQuery()
        } else{
            searchByQuery()
        }
    },[])

    useEffect(()=>{
        searchByQuery()
    },[productQuery])

    return (
        <>
            <div className="websitePath">
                <p>Products<b>{divider}</b><span>{productQuery}</span></p>
            </div>
            <div className="sectionTitle">
                <h1>Search Results
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="10" cy="10" r="7" />
                        <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                </h1>
            </div>  
            <div className='searchProductsContainer'>
                {matchingProducts.length > 0 ? (
                    matchingProducts.map((product) => {
                        return <MatchProduct key={product.productId} product={product} />;
                    })
                    ) : (
                    <div className='messageSection'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                        </svg>
                        <h3>There is no product that matches with your request '{productQuery}'</h3>
                    </div>
                    )
                }
                
                <div className="returnToProducts">
                    <Link to="/">
                        <button>Return to shop</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SearchResults