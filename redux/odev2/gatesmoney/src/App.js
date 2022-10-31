import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import Products from './Components/Products';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
     <Header/>
     <Products/>
     <Cart/>
    </div>
  );
}

export default App;
