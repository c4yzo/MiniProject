import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import Showcase from './Components/Showcase/Showcase.jsx';
import FeaturedShelf from './Components/FeaturedShelf/FeaturedShelf.jsx';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<div>Home Page Content</div>} />
          </Routes>
          <Showcase />
          <FeaturedShelf />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
