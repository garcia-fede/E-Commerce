import '../Components/main.css'
import Landing from './Landing';
import Header from './Header';
import ContextProvider from './Context';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductDetail from './ProductDetail';

function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/product/:productURL' element={<ProductDetail />} />
            {/* <Route path='/' element={<About />} /> */}
            {/* <Route path='/' element={<Contact />} /> */}
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
