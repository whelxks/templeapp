import React, { useState, animated } from 'react';
import { Button, Container, Row, Col } from "react-bootstrap";
// import { Modal } from "./Modal";
import * as AiIcons from "react-icons/ai";
import { GlobalStyle } from './globalStyles';
import qianTong from "../images/qianTong.png";
import LoopObject from '../components/Loop';


function ButtonToChouQian() {

    const [chouQian, startChouQian] = React.useState(false);
     
    return (
        <div> 
    
            {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
            <GlobalStyle />

            <Button variant="outline-dark" style={{ position: "absolute", width: "100%", fontFamily: "Sofia Pro", top: 40 }} onClick={() => startChouQian(true)} >
                <AiIcons.AiOutlineShake size="17" style={{ marginRight: "5" }} /> Start Chouqian
            </Button>

            {!chouQian ? (
                <img 
                    style={{
                        width: "10%",
                        
                        }}
                    src={qianTong}
                        
                />
                ) : (
                    <LoopObject />
                )}

            
        </div>
            
    );

    
}
 
export default ButtonToChouQian;