import './App.css';
import {NavLink, Route, Switch} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {fetchCats, fetchDogs} from './services/data'
import Home from './components/Home'
import Dog from './components/Dog'
import Cat from './components/Cat'
import Footer from './components/Footer'

function App() {
  
  const [dogs, setDogs] = useState("");
  const [cats, setCats] = useState([]);

  const getCats = async () => {
    const catRes = await fetchCats();
    setCats(catRes);
  }

  const getDogs = async () => {
    const dogRes = await fetchDogs();
    setDogs(dogRes.message);
  }

  useEffect(() => {
    getCats()
  }, [])
  
  useEffect(() => {
    getDogs()
  }, [])

  const handleDogClick = () => {
    getDogs()
  }
  
  return (
    <div className="App">
      <div>
        <nav>
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/cats"> Cats </NavLink>
          <NavLink to="/dogs"> Dogs </NavLink>
        </nav>
      </div>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cats" ><Cat cats={cats} /></Route>
          <Route path="/dogs" ><Dog dog={dogs} handleClick={() => {handleDogClick()}} /></Route>
        </Switch>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
