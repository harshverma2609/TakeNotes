
import './App.css';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import NotesBar from './Components/NotesBar';


function App() {
  return (
    <div className='main'>
      <Header/>
      <SearchBar/>
      <NotesBar/>
    </div>
  );
}

export default App;
