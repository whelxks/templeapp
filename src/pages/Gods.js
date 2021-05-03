import React, { Component } from "react";
import { gods, getGods } from "../data/InfoGods";
import { Card, Button } from "react-bootstrap";
import { Image, Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class Gods extends Component {
  state = {
    gods: [],
  };

  componentDidMount() {
    this.setState({ gods: getGods() });
  }

  render() {
    const { gods: allGods } = this.state;
    return (
      <Container
        style={{
          position: "absolute",
          left: 10,
          top: 120,
          width: "100%",
        }}
        
      >
        <Row>
          {allGods.map((fes) => (
            <Col xs="4" className="grid"  key={fes.id}>
              <Card key={fes.id} style={{ width: "12rem", left:10}}>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + fes.image}
                />
                <Card.Body>
                  <Card.Title>{fes.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Origin: {fes.origin}
                  </Card.Subtitle>
                  <Card.Text>{fes.description}</Card.Text>
                  <Link to={{ pathname: "/tribute", image: fes.image, god:fes.name }}>
                    <Card.Link>Make Tribute</Card.Link>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Gods;
/*
 <button className="btn btn-warning">
                          <AiIcons.AiOutlineFolder/>
                        </button>
*/
