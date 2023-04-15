import '../Components/main.css'
import Landing from './Landing';
import Header from './Header';
import ContextProvider from './Context';

function App() {
  return (
    <>
      <ContextProvider>
        <Header />
        <Landing />
      </ContextProvider>
    </>
  );
}

export default App;
