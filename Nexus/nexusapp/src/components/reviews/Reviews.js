import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from "../../api/axiosConfig"
import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import ReviewForm from './ReviewForm';
import Header from "../header/Header.js";

const Reviews = () => {
    //Use hooks
    const [game, setGame] = useState();
    const [reviews, setReviews] = useState([]);
    const GameID = useParams().GameID;
    const revText = useRef();
    

    //Get the game information
    const getGame = async (GameID) =>{
        try {
            const response = await api.get(`/api/v1/games/${GameID}`);
            debugger
            setGame(response.data[0]);
            // const response = await api.get(`/api/v1/reviews/${GameID}`);
            // setReviews(response.data.reviews)
        }
        catch(err) {
            console.log(err);
        }
    }

    //Post the reviews
    const postReview = async (e) =>{
        e.preventDefault();
        const textarea = revText.current;

        const response = await api.post("/api/v1/reviews",{reviewBody:textarea.value,GameID:GameID});

        const updatedReviews = [...reviews, {body:textarea.value}];

        textarea.value = "";

        setReviews(updatedReviews);
    
    }

    //The function to run when mounted
    useEffect(() => {getGame(GameID);},[])

    return (
        <div>
        <Header/>
        <Container>
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <img src={game?.PosterImage} alt="" />
                </Col>
                <Col>
                    {
                        <>
                            <Row>
                                <Col>
                                <ReviewForm handleSubmit={postReview} revText={revText} labelText = "Write a Review?" />  
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </>
                    }
                    {
                        reviews?.map((r) => {
                            return(
                                <>
                                    <Row>
                                        <Col>{r.body}</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row>                                
                                </>
                            )
                        })
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>        
        </Container>
    </div>
    )
}


export default Reviews


