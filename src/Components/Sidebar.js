import React from 'react'
import { useContext } from 'react'
import { context } from './Context';

const Sidebar = () => {

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

    return (
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
    )
}

export default Sidebar