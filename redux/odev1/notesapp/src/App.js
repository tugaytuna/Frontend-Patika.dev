import './App.css';
//import pages

import ListNotes from './Components/ListNotes';
import SearchNotes from './Components/SearchNotes';
import WriteNotes from './Components/WriteNotes';


function App() {
  return (
    <div className="App">
      <SearchNotes/>
      <WriteNotes/>
      <ListNotes/>
    
    </div>
  );
}

export default App;
