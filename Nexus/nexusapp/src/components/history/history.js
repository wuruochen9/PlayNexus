import "./history.css";
import { useState, useEffect } from 'react'  
import api from '../../api/axiosConfig'; 
import Header from  '../header/Header.js'; 

const History = () => {
    const [users,setUsers] = useState([]);
    const [usergame,setUserGame] = useState([]);
    // var usergame;

    const getHistory =  async () =>{
      try{
        // Makes an API request to fetch a list of games and updates the games state variable with the response data.
        // debugger
        const response = await api.get('/api/v1/usergame');
        setUserGame(response.data);
        // usergame=response.data;
      }
      catch(err){
        console.log(err);
      }
    }

    useEffect(() => {getHistory();},[])
    // debugger
    return (
      <div>
      <Header/>
      <div className="viewedhistory">
      <h2>History</h2>
      <div className="historylist" >
        
          {usergame.map((game) => (
            <div className="historyitem">
            
            <a href={`/Reviews/${game.GameID}`} className="gameName"><h4 className="gameTitle">{game.GameName}</h4></a>
            <span className="timestamp">{new Date(game.Timestamp).toLocaleString()}</span>
            </div>
          ))}
        
      </div>
      </div>
      </div>
    );
};

export default History;

