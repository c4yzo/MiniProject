import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import HomeScreen from './Screens/HomeScreen/HomeScreen.jsx';
import ProductScreen from './Screens/ProductScreen/ProductScreen.jsx';
import CartScreen from './Screens/CartScreen/CartScreen.jsx';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
