import React from 'react'
import { context } from './Context'
import { useContext } from 'react'
import About from './About'
import Contact from './Contact'

const SlideContent = () => {
    const { slideContent } = useContext(context);
    return <About />;
    // return slideContent ? <About /> : <Contact />;
};

export default SlideContent