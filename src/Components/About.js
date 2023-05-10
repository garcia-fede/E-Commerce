import React from 'react'

const About = () => {
    return (
        <div className='aboutContainer' id='about'>
            <div className="closeAbout">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M18 15l-6 -6l-6 6h12" transform="rotate(270 12 12)" />
                    </svg>
                </button>
            </div>
            <div className='aboutContent'>
                <div className="aboutInfo">
                    <h2>About Us:</h2>
                    <p>We are a team of experienced e-commerce professionals dedicated to helping businesses achieve their online sales goals. With our expertise in web design, marketing, and customer experience, we provide customized solutions tailored to your specific needs.</p>
                    <h2>Contact Information:</h2>
                    <p>If you have any questions or comments, please do not hesitate to contact us using the information below:</p>
                </div>
                <ul className="aboutContact">
                    <li>Email: contact@ecommercepros.com</li>
                    <li>Phone: +1 (555) 555-5555</li>
                    <li>Address: 123 Main Street, Suite 100, Anytown, USA 12345</li>
                </ul>
            </div>
        </div>
    )
}

export default About