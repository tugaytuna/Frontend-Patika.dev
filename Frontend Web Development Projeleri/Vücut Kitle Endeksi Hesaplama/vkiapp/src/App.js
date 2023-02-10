import './App.css';
import BMIHesapla from './Components/BMIHesapla';
import BMINedir from './Components/BMINedir';
import Header from './Components/Header';
import Result from './Components/Result';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <BMIHesapla>
     </BMIHesapla>
     {/* <Result></Result> */}
     <BMINedir></BMINedir>
    </div>
  );
}

export default App;
