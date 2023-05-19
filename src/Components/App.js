import '../Components/main.css'
import Landing from './Landing';
import Header from './Header';
import ContextProvider from './Context';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import LikedProductsContainer from './LikedProductsContainer';
import CartProductsContainer from './CartProductsContainer';
import SlideContent from './SlideContent';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchResults from './SearchResults';
function App() {

  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <SlideContent />
          <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='/product/:productURL' element={<ProductDetail />} />
              <Route path='/products/liked-products' element={<LikedProductsContainer />} />
              <Route path='/products/shopcart' element={<CartProductsContainer />} />
              <Route path='/products/query/:productQuery' element={<SearchResults />} />
          </Routes>
          <Footer />
          <ToastContainer />
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
