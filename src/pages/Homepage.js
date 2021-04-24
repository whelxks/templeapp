import React, { Component } from 'react';
import { Image, Container, Row, Col} from "react-bootstrap";
import BTHEntrance from "../images/BTHEntrance.jpg";



class Homepage extends Component {


    render() {
        return (
            <div style={{
                position: "absolute",
                left: 20,
                top: 70,
              }}>
                <h1 className="header-style" >Welcome to Buddha Temple</h1>
           
        
            <Row>
                <Col xs={6} md={4}>
                    <Image src={BTHEntrance} rounded />
                </Col>

                {/* <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" rounded />
                </Col>

                <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" rounded />
                </Col>  */}

            </Row>
            </div>
        





              
        )

    }
}
 
export default Homepage;