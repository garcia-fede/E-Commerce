import React from 'react'
import mountainLogo from '../Images/mountainLogo.png'
import Logo from '../Images/Logo.png'

const About = () => {
    const slideOutAbout = ()=>{
        const slide = document.getElementById("slide");
        slide.style.left="-100%";
        slide.style.borderTopRightRadius = "5% 50%";
        slide.style.borderBottomRightRadius = "5% 50%";
        document.body.classList.remove('lock-scroll');
    }
    return (
        <div className='aboutContainer' id='slide'>
            <div className="closeAbout">
                <button onClick={slideOutAbout}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M18 15l-6 -6l-6 6h12" transform="rotate(270 12 12)" />
                    </svg>
                </button>
            </div>
            <div className='aboutContent'>
                <div className="aboutInfo">
                    <div className='logos'>
                        <img src={mountainLogo} id="mountainLogo" alt="Logo" />
                        <img src={Logo} id="textLogo" alt="Logo" />
                    </div>
                    <h2>About Us:</h2>
                    <p>At Chilly Peaks, we're dedicated to providing you with the best quality and stylish clothing for any occasion.</p>
                    <p>With a team of experienced fashion designers, we know how to create comfortable and fashionable clothing that you'll love to wear.</p>
                    <p>Whether you're looking for casual wear or something more formal, we've got you covered with a wide range of top-quality clothing to choose from.</p>
                </div>
            </div>
        </div>
    )
}

export default About