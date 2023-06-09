import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Post from "../Components/Post.js";
import recipes from "../Data/recipes.json";

class Recipes extends React.Component {
    
    render(){
        return(
            <Container>
                <h3>Recipes:</h3>
                <Row sm={1} md={1} lg={2}>
                    
                    {recipes.map((r, i)=>{
                        return (
                            <Col>
                                <Post key={i} recipe={r}/>
                            </Col>
                        );

                    })}
                
                    
                    
                    
                </Row>

            </Container>
        )
    }
}

export default Recipes;