import "./Home.css"
import Carousel from "react-material-ui-carousel"
import {Paper} from "@mui/material"
import React from 'react'
import { Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons"
import { Link, useNavigate } from "react-router-dom"
import Header from "../header/Header"


const Home = ({games}) => {
  
    const navigate = useNavigate();
    function gotoReviews(gameId)
    {
        navigate(`/Reviews/${gameId}`);
    }
    return (
        <div>
            <Header/>
            <Carousel className="section1">
            {
                games?.map((game) => {
                    return(
                        <Paper key={game.GameID}>
                            {/* Each child in a list should have a unique "key" prop */}
                            <div className="game-card-container" style={{"box-shadow":"rgb(0,0,0,0)"}}>
                                <div className="game-card" style={{ backgroundImage: `url(${game.BackgroundImage})` }}>
                                    {/* game Card Background */}
                                    <div className="game-detail">
                                        <div className="game-poster">
                                            {/* Picture Discription */}
                                            <img src={game.PosterImage} alt="" />
                                        </div>
                                        {/* <div className="game-title">
                                            {/* Text Discription */}
                                            {/* <h4>{game.GameName}</h4> */}
                                            {/* <img src={game.PosterImage} alt="" /> */}
                                        {/* </div>  */}
                                        <div className="game-review-button-container">
                                            <h4>{game.GameName}</h4>
                                            <Button variant ="info" onClick={() => gotoReviews(game.GameID)} >Reviews</Button>
                                        </div> 
                                    </div>
                                </div>
                            </div>  
                        </Paper>
                    )
                })
            }
            </Carousel>
        <section className="section2">
            <h2>Games</h2>
            <section  className="game-list">
                <img src="http://cdn.akamai.steamstatic.com/steam/apps/38740/header.jpg" alt="game1"/>
                <img src="http://cdn.akamai.steamstatic.com/steam/apps/15700/header.jpg?t=1461320042" alt="game1"/>
                <img src="http://cdn.akamai.steamstatic.com/steam/apps/38740/header.jpg" alt="game1"/>
                <img src="http://cdn.akamai.steamstatic.com/steam/apps/15700/header.jpg?t=1461320042" alt="game1"/>
            </section>
        </section>
        </div>
    )
}

export default Home

