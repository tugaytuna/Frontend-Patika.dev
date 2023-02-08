import logo from './logo.svg';
import './App.css';
import BMIHesapla from './Components/BMIHesapla';
import BMINedir from './Components/BMINedir';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <BMIHesapla>
     </BMIHesapla>
     <BMINedir></BMINedir>
    </div>
  );
}

export default App;
