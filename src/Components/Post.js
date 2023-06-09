import React from "react";
import PlaceholderImg from "../static/placeholder.png";
import { Card, ListGroup, Row, Col, Button, Ratio } from "react-bootstrap";

class Post extends React.Component {
    render(){
        return(
            <Card max className="p-1 m-3" bg="dark" text="white">
                <Card.Header as="h4">{this.props.recipe.name}</Card.Header>
                <Ratio aspectRatio="4x3">
                    <Card.Img src={PlaceholderImg}></Card.Img>
                </Ratio>
                <Row lg={2} className="p-2">
                    <Col>
                        <Card.Text className="recipe-time">
                            Prep Time: {this.props.recipe.prepTime} Minutes
                            <br></br>
                            Cook Time: {this.props.recipe.cookTime} Minutes
                        </Card.Text>
                        
                    </Col>
                    <Col>
                    <Button className="m-1" variant="info"><i className="fas fa-print"></i> Print</Button>
                    <Button className="m-1" variant="info"><i className="far fa-share-alt"></i> Share</Button>
                    </Col>
                </Row>
                <Card.Body>
                    
                    <Card.Title className="recipe-title">Equipment</Card.Title>
                    <ListGroup className="w-10">
                    {this.props.recipe.equipment.map((i,ind)=>{
                        return <ListGroup.Item key={ind}>{i}</ListGroup.Item>
                    })}
                    </ListGroup>
                </Card.Body>
                <Card.Body>
                    <Card.Title className="recipe-title">Ingredients</Card.Title>
                    <ListGroup className="w-10">
                    {this.props.recipe.ingredients.map((i,ind)=>{
                        return <ListGroup.Item key={ind}>{i[0] + " " + i[1] + " " + i[2]}</ListGroup.Item>
                    })}
                    </ListGroup>
                </Card.Body>
                <Card.Body>
                    <Card.Title className="recipe-title">Instructions</Card.Title>
                    <ListGroup className="w-10">
                    {this.props.recipe.instructions.map((i,ind)=>{
                        return <ListGroup.Item key={ind}>{i}</ListGroup.Item>
                    })}
                    </ListGroup>
                </Card.Body>
                <Card.Footer>
                    <Card.Title>Notes:</Card.Title>
                </Card.Footer>
            </Card>
            

        )
    }

}

export default Post;