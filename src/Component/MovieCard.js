import React from "react";
import {Card,Button} from "react-bootstrap";
const MovieCard = ({movie}) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.image} width="200 px" height="200 px"/>
        <Card.Body>
          <Card.Title>{movie.name} rating:{movie.rating}</Card.Title>
          <Card.Text>
            {movie.description}
          </Card.Text>
          <Button variant="primary">Watch </Button>
        </Card.Body>
      </Card>
    );
};
export default MovieCard;
