import '../Components/main.css'
import Landing from './Landing';
import Header from './Header';
import ContextProvider from './Context';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import LikedProductsContainer from './LikedProductsContainer';
import CartProductsContainer from './CartProductsContainer';
import About from './About';

function App() {

  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <About />
          <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='/product/:productURL' element={<ProductDetail />} />
              <Route path='/products/liked-products' element={<LikedProductsContainer />} />
              <Route path='/products/shopcart' element={<CartProductsContainer />} />
              {/* <Route path='/' element={<About />} /> */}
              {/* <Route path='/' element={<Contact />} /> */}
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
