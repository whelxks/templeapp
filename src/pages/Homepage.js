import React, { Component } from 'react';
import { Image, Container, Row, Col} from "react-bootstrap";
import BTHEntrance from "../images/BTHEntrance.jpg";
import BTHMainHall from "../images/BTHMainHall.jpg";
import festival1 from "../images/festival1.jpeg";
import { Button, Carousel } from "react-bootstrap";
import "../index.css";
import { Link } from 'react-router-dom';


class Homepage extends Component {


    render() {
        return (
            <div style={{
                position: "absolute",
                left: 20,
                top: 70,
              }}>
                <h1 className="header-style" >Welcome to templeapp</h1>
           
        
                <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 80,
                    width: "100%",
                }}
                >
                <Carousel className="header-style">
                    <Carousel.Item>
                    <img width={"100%"} height={300} src={BTHEntrance} />
                    <Carousel.Caption>
                        <h1>Name of temple</h1>
                        <p>Location Address Stuffs</p>
                    </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                    <img width={"100%"} height={300} src={BTHMainHall} />
                    <Carousel.Caption>
                        <h1>Founded in 1898</h1>
                        <p>History of temple</p>
                    </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                    <img width={"100%"} height={300} src={festival1} />
                    <Carousel.Caption>
                        <h1>Upcoming festivals</h1>
                        <p>
                        Date and details
                        </p>
                    </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
                </div>

            </div>
        





              
        )

    }
}
 

export default Homepage;