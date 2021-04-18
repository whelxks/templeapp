import React, { Component } from 'react';
import { festivals, getFestivals } from "../data/InfoFestivals";
import { Card, Button } from 'react-bootstrap';
import { Image, Container, Row, Col} from "react-bootstrap";


class Festivals extends Component {
    state= {
        festivals:[],
    };

    componentDidMount() {
    
        this.setState({ festivals: getFestivals() });
    }

    render() {
        const { festivals: allFestivals} = this.state;
        return (
            <Container style={{
                position: "absolute",
                left: 0,
                top: 120,
        
              }} className="grid" >
        
            <Row>
                
                
                {allFestivals.map((fes) => (
                    <Col sm>
                    <Card key={fes.id} style={{ width: '12rem' }}>
                        <Card.Img variant="top" src={fes.image} />
                        <Card.Body>
                        <Card.Title>{fes.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Origin: {fes.origin}</Card.Subtitle>
                        <Card.Text>{fes.description}</Card.Text>
                        <Card.Link href="#">View in VR</Card.Link>
                        </Card.Body>
                    </Card>
                    </Col>
                  
                ))}
              
            </Row>
            </Container>
        )

    }
}
 
export default Festivals;

/*
 <Col xs="4" key={fes.id}>
 <Card.Img variant="top" src="holder.js/100px180" />

*/