import React, { Component } from "react";
import { Button, Container, Row, Col, Modal } from "react-bootstrap";
import * as MdIcons from "react-icons/md";
import * as GrIcons from "react-icons/gr";
import * as AiIcons from "react-icons/ai";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ButtontoopenModal from "../components/ButtontoopenModal";

import ButtontoChouQian from "../components/ButtonToChouQian";
import qianTong from "../images/qianTong.png";
import { useSpring, animated } from "react-spring";
import shengBei from "../images/shengbei.png";
import xiaoBei from "../images/xiaobei.png";
import yinBei from "../images/yinbei.png";

import LoopObject from "../components/Loop";

class Chouqian extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chouQian: false,
            shengBei: false,
        };
        this.playAnim = this.playAnim.bind(this);
    }

  
    Randomfunc() {
        //not working now
        // throw shengBei, append to shengBeiResults the index
        //algo thingy to choose one in array => pass to Modal component
        //replace with <ButtontoopenModal props={{}} />
        const qianResults = [
            "good",
            "bad",
            "effing good",
            "effing bad",
            "your code sphagett",
        ];

        function chouqian() {
            var qianIndex = Math.floor(Math.random() * qianResults.length);
            console.log(qianResults[qianIndex]);
            return qianResults[qianIndex];
        }


        // 3 results only
        var shengBeiResults = [];

        function throwShengBei() {
            // shengBeiIndex = 0 / 1
            var shengBeiIndex = Math.floor(Math.random() * 2);
            shengBeiResults.push(shengBeiIndex);
        }


   

        function checkShengBei() {
            let isQianCorrect;
            for (var i = 0; i < shengBeiResults.length; i++) {
                if (shengBeiResults[i] === 0) {
                    isQianCorrect = false;
                    console.log("is Qian correct? : " + isQianCorrect);
                    break;
                }
            }

            if (shengBeiResults.length === 3) {
                isQianCorrect = true;

                console.log("is Qian correct? : " + isQianCorrect);

                // clear
                shengBeiResults = [];
            }
            return isQianCorrect;
        }
    }
        
    playAnim() {
        console.log("test");
        this.setState({ chouQian: 1 });
        setTimeout(() => { this.setState({ chouQian: 2 }) }, 3000);
            
    }

    render() {
        console.log(this.props);
        console.log(this.state);

        return (
            <div
                style={{
                    position: "absolute",
                    left: 40,
                    top: 70,
                    width: "100%",
                }}
            >
                <h1 className="header-style">Chou Qian</h1>

 
                <div
                    style={{ position: "absolute", top: 30, left: "-10%", width: "100%" }}
                >
                    <Container>
                        <Row>
                            {/* <LoopObject /> */}
                            <Col>
                                <Button
                                    variant="outline-dark"
                                    style={{
                                        position: "absolute",
                                        width: "100%",
                                        fontFamily: "Sofia Pro",
                                        top: 40,
                                    }}
                                    onClick={this.startAnim}
                                >
                                    <AiIcons.AiOutlineShake
                                        size="17"
                                        style={{ marginRight: "5" }}
                                    />{" "}
                                    Start Chouqian
                                </Button>

                                <ButtontoopenModal />
                            </Col>

                            <Col>
                                <Link to={{ pathname: "/payrespects" }}>
                                    <Button
                                        variant="outline-dark"
                                        style={{
                                            position: "relative",
                                            width: "100%",
                                            fontFamily: "Sofia Pro",
                                            top: 40,
                                        }}
                                    >
                                        <MdIcons.MdDone size="17" style={{ marginRight: "5" }} />
                                        Done
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
         
                {this.state.chouQian == true ? (
                    <LoopObject />
                ) : (
                    <img style={{ position: "absolute", width: "20%", top: 160, left: "30%" }} src={qianTong} />
                )}

        
            </div>
        );
    }
}





{/*
    
        const renderChouQian = () => {
        if (this.state.chouQian === 0) {
            return (<img 
                style={{
                    width: "10%",
                    }}
                src={qianTong}
                alt="qianTong"
                />);
                
        } 
        else if (this.state.chouQian === 1 ){
            return (
                <div>
                    <LoopObject />       
                </div>);
            }
        }
        
        console.log(this.props);
        console.log(this.state);
        
        return (
            <div style={{
                position: "absolute",
                left: 40,
                top: 70,
                width: "100%",
            }}>
            
                
                <h1 className="header-style" >Chou Qian</h1>

               
                <div> 
                    {this.state.chouQian === 1 ? (
                        <div>
                          <LoopObject />       
                        </div>
                        
                        
                        ): (
                    <img 
                    style={{
                        width: "10%",
                        }}
                    src={qianTong}
                    alt="qianTong"
                    />)} 
                    {renderChouQian()}
*/}


export default Chouqian;
