import "./Home.css"
import Carousel from "react-material-ui-carousel"
import {Paper} from "@mui/material"
import React from 'react'
import { Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons"
import { Link, useNavigate } from "react-router-dom"


const Home = ({games}) => {
  
    const navigate = useNavigate();
    function gotoReviews(gameId)
    {
        navigate(`/Reviews/${gameId}`);
    }
    return (
        <div>
            <Carousel>
            {
                games?.map((game) => {
                    return(
                        <Paper key={game.GameID}>
                            {/* Each child in a list should have a unique "key" prop */}
                            <div className="game-card-container">
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
        </div>
    )
}

export default Home

