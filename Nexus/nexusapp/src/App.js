import './App.css'; //This imports a CSS file to style the app.
import Header from './components/header/Header';
import api from './api/axiosConfig'; //This imports an API instance from the axiosConfig.js file in the api directory.
import {useState, useEffect} from 'react'; //This imports the useState and useEffect hooks from the React library.
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home.js';
import Login from './components/login/Login.js';
import Trailer from './components/trailer/Trailer';
import Notfound from './components/notfound/Notfound';
import Reviews from './components/reviews/Reviews';
import Root from './components/root/root.js';
import Test from './components/test/test.js';
import Search from "./components/search/search.js";

global.loginkey = '';

function App() {
  //This is the main component of the web app

  //Define state variables using the useState hook
  const [games,setGames] = useState([]);

  //Define a function called getMovies. "async" is a keyword in this code snippet. It is used to define an asynchronous function, which allows the function to use the "await" keyword to wait for promises to be resolved before continuing execution.
  const getMovies =  async () =>{
    try{
      // Makes an API request to fetch a list of games and updates the games state variable with the response data.
      
      const response = await api.get("/api/v1/recommend");
      // Assuming you have the local file path stored in a variable

      setGames(response.data)
    }
    catch(err){
      console.log(err);
    }
  }

  // The useEffect hook is used to call the getMovies function once when the component is mounted.
  useEffect(() => {getMovies();},[])

  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/search/:keywords" element={<Search/>}></Route>
          <Route path="/test" element={<Test/>}></Route>
          <Route path="/root" element={<Root/>}></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
          <Route path="/" element={<Home games={games}/>}></Route>
          <Route path="*" element={<Notfound/>}></Route>
          <Route path="/Reviews/:GameID" element ={<Reviews />}></Route>
          <Route path="/login" element ={<Login />}></Route>
        </Routes>
    </div>
  );
}

export default App;




