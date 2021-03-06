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

        {/*
        <CardColumns>
          <Card>
            <Card.Img variant="top" src={"holder.js/100px160"} />
            <Card.Body>
              <Card.Title>Maitreya</Card.Title>
              <Card.Text>
                Content about This Buddha
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="p-3">
            <blockquote className="blockquote mb-0 card-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                erat a ante.
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card bg="primary" text="white" className="text-center p-3">
            <blockquote className="blockquote mb-0 card-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                erat a ante.
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </Card>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
              <Card.Text>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img src="holder.js/100px160" />
          </Card>
          <Card className="text-right">
            <blockquote className="blockquote mb-0 card-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                erat a ante.
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
              <Card.Text>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardColumns>*/}
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
