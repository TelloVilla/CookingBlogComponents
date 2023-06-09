import React from "react";
import { Button, Row, Col, Container, Form, InputGroup } from "react-bootstrap";

class PostMaker extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            prepTime: 0,
            cookTime: 0,
            equipment: [],
            ingredients: [],
            steps: []
            }
    }
    handleTitle(e){
        this.setState({title: e.target.value});
    }
    handlePrepTime(e){
        let input = parseInt(e.target.value);
        //error check
        this.setState({prepTime: input});

    }
    handleCookTime(e) {
        let input = parseInt(e.target.value);
        //error check
        this.setState({cookTime: input});

    }
    
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
    }
    handleIngredient(e){
        e.preventDefault();
        let currentIngredient = this.state.ingredients;
        let input = document.getElementById(e.target.name);
        console.log(e.target.name)
        console.log(input)
        console.log(e)
        currentIngredient.push([input.childNodes[3].value, Number(input.childNodes[1].value), input.childNodes[2].value]);
        this.setState({ingredients: currentIngredient});
    }
    handleDelIng(e){
        e.preventDefault();
        let input = document.getElementById(e.target.name);
        let ingDel = input.childNodes[3].value;
        let filterIng = this.state.ingredients.filter(i => !i.includes(ingDel));
        this.setState({ingredients: filterIng});

    }
    handleEquipment(e){
        e.preventDefault()
        let currentEquipment = this.state.equipment;
        let input = document.getElementById(e.target.name);
        console.log(input)
        currentEquipment.push(input.childNodes[1].value)
        this.setState({equipment: currentEquipment});
    }
    handleEquipDel(e){
        e.preventDefault();
        let input = document.getElementById(e.target.name);
        let equipDel = input.childNodes[1].value;
        let filterEquip = this.state.equipment.filter(i => i !== equipDel);
        this.setState({equipment: filterEquip});

    }
    handleStepDel(e){
        e.preventDefault();
        let input = document.getElementById(e.target.name);
        let stepDel = input.childNodes[1].value;
        console.log(stepDel)
        let filterStep = this.state.steps.filter(i => i !== stepDel);
        this.setState({steps: filterStep});
    }
    handleSteps(e){
        e.preventDefault();
        let currentSteps = this.state.steps;
        let input = document.getElementById(e.target.name);
        console.log(e.target.name)
        console.log(input);
        currentSteps.push(input.childNodes[1].value)
        this.setState({steps: currentSteps});

    }
    render(){
        const Ingredients = this.state.ingredients.map((v, i) => {
            return(
            <InputGroup id={"ing" + i}>
                <InputGroup.Text>(Quantity) (Unit) (Ingredient)</InputGroup.Text>
                <Form.Control id={"quant" + this.state.ingredients.length} type="text" value={v[1]}></Form.Control>
                <Form.Control id={"unit" + this.state.ingredients.length} type="text" value={v[2]}></Form.Control>
                <Form.Control id={"item" + this.state.ingredients.length} type="text" value={v[0]}></Form.Control>
                <Button variant="danger" name={"ing" + i} onClick={(e)=>this.handleDelIng(e)}><span style={{color: "white"}}><i className="fas fa-times-circle"></i></span></Button>
            </InputGroup>
            )
        })
        const Equipment = this.state.equipment.map((v, i) =>{
            return(
                <InputGroup id={"equip" + i}>
                    <InputGroup.Text>{"Recommended Item " + (i + 1)}</InputGroup.Text>
                    <Form.Control readOnly type="text" value={v}></Form.Control>
                    <Button variant="danger" name={"equip" + i} onClick={(e)=>this.handleEquipDel(e)}><span style={{color: "white"}}><i className="fas fa-times-circle"></i></span></Button>
                </InputGroup>
            )
        })
        const Steps = this.state.steps.map((v, i) => {
            return(
                <InputGroup id={"step" + i}>
                    <InputGroup.Text>{"Step " + (i + 1)}</InputGroup.Text>
                    <Form.Control readOnly type="text" value={v}></Form.Control>
                    <Button variant="danger" name={"step" + i} onClick={(e)=>this.handleStepDel(e)}><span style={{color: "white"}}><i className="fas fa-times-circle"></i></span></Button>
                </InputGroup>
            )
            
        })
        Ingredients.push(
            <InputGroup id={"ing" + (this.state.ingredients.length + 1)}>
                <InputGroup.Text>(Quantity) (Unit) (Ingredient)</InputGroup.Text>
                <Form.Control type="text" placeholder="1"></Form.Control>
                <Form.Control type="text" placeholder="Cup"></Form.Control>
                <Form.Control type="text" placeholder="Spinach"></Form.Control>
                <Button name={"ing" + (this.state.ingredients.length + 1)} onClick={(e) => this.handleIngredient(e)}><span style={{color: "white"}}><i className="fal fa-plus-circle"></i></span></Button>
            </InputGroup>
        )
        Equipment.push(
            <InputGroup id={"equip" + (this.state.equipment.length + 1)}>
                <InputGroup.Text>{"Recommended Item " + (this.state.equipment.length + 1)}</InputGroup.Text>
                <Form.Control type="text" placeholder="Mixing Bowl"></Form.Control>
                <Button name={"equip" + (this.state.equipment.length + 1)} onClick={(e) => this.handleEquipment(e)}><span style={{color: "white"}}><i className="fal fa-plus-circle"></i></span></Button>
            </InputGroup>
        )
        Steps.push(
            <InputGroup id={"step" + (this.state.steps.length + 1)}>
                <InputGroup.Text>{"Step " + (this.state.steps.length + 1)}</InputGroup.Text>
                <Form.Control type="text" placeholder="Add flour to mixing bowl"></Form.Control>
                <Button name={"step" + (this.state.steps.length + 1)} onClick={(e) => this.handleSteps(e)}><span style={{color: "white"}}><i className="fal fa-plus-circle"></i></span></Button>
            </InputGroup>
        )
        return(
            <Container>
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                    <Row>
                        <Col>
                            <Form.Group>
                                <InputGroup>
                                    <InputGroup.Text>Post Title</InputGroup.Text>
                                    <Form.Control onChange={(e)=>this.handleTitle(e)} type="text"></Form.Control>
                                </InputGroup>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row lg={5}>
                        <Col>
                            <Form.Group>
                                <InputGroup>
                                    <InputGroup.Text>Prep Time (mins)</InputGroup.Text>
                                    <Form.Control onChange={(e)=>this.handlePrepTime(e)} type="number"></Form.Control>
                                </InputGroup>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <InputGroup>
                                    <InputGroup.Text>Cook Time (mins)</InputGroup.Text>
                                    <Form.Control onChange={(e)=>this.handleCookTime(e)} type="number"></Form.Control>
                                </InputGroup>
                            </Form.Group>
                        </Col>
                    
                    </Row>
                    
                    <Form.Group>
                        <Form.Label>Recommended Equipment</Form.Label>
                        {this.state.equipment.length > 0
                        ? Equipment
                        :<InputGroup id={"equip" + this.state.steps.length}>
                            <InputGroup.Text>{"Recommended Item " + (this.state.steps.length + 1)}</InputGroup.Text>
                            <Form.Control type="text" placeholder="Mixing Bowl"></Form.Control>
                            <Button name={"equip" + (this.state.equipment.length)} onClick={(e) => this.handleEquipment(e)}><span style={{color: "white"}}><i className="fal fa-plus-circle"></i></span></Button>
                        </InputGroup>
                        }
                        
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Ingredients</Form.Label>
                        {this.state.ingredients.length > 0 
                        ? Ingredients
                        :<InputGroup id={"ing" + this.state.ingredients.length}>
                            <InputGroup.Text>(Quantity) (Unit) (Ingredient)</InputGroup.Text>
                            <Form.Control type="text" placeholder="1"></Form.Control>
                            <Form.Control type="text" placeholder="Cup"></Form.Control>
                            <Form.Control type="text" placeholder="Spinach"></Form.Control>
                            <Button name={"ing" + this.state.ingredients.length} onClick={(e) => this.handleIngredient(e)}><span style={{color: "white"}}><i className="fal fa-plus-circle"></i></span></Button>
                        </InputGroup> 
                        }

                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Directions</Form.Label>
                        {this.state.steps.length > 0
                        ? Steps
                        :<InputGroup id={"step" + this.state.steps.length}>
                            <InputGroup.Text>{"Step " + (this.state.steps.length + 1)}</InputGroup.Text>
                            <Form.Control type="text" placeholder="Add flour to mixing bowl"></Form.Control>
                            <Button name={"step" + (this.state.steps.length)} onClick={(e) => this.handleSteps(e)}><span style={{color: "white"}}><i className="fal fa-plus-circle"></i></span></Button>
                        </InputGroup>
                        }
                        
                    </Form.Group>
                    
                    <Button className="maker-btn" as="input" type="submit" value="Submit"></Button>
                    

                </Form>

            </Container>
        )
    }
}

export default PostMaker;