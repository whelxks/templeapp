import React, { Component } from 'react';
import { Button, Container, Row, Col, Modal } from "react-bootstrap";
import * as MdIcons from "react-icons/md";
import * as GrIcons from "react-icons/gr";
import * as AiIcons from "react-icons/ai";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ButtontoopenModal from "../components/ButtontoopenModal";
/**
 * first, chouqian, then throw shengBei
 * iff shengBei index gets 1 for 3 times consequtively, view qian
 * else, redo the whole process.
 */




class Chouqian extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: null,
           
       }
        this.playAnim = this.playAnim.bind(this);
       
    }


    playAnim() {
        console.log("test");
        //start the anim here

        
    }

    Randomfunc() {
        // throw shengBei, append to shengBeiResults the index
        //algo thingy to choose one in array => pass to Modal component
        //replace with <ButtontoopenModal props={{}} />
        const qianResults = ["good", "bad", "effing good", "effing bad", "your code sphagett"];

        function chouqian(){
            var qianIndex = Math.floor(Math.random()*(qianResults.length));
            console.log(qianResults[qianIndex]);
            return qianResults[qianIndex];
        }
        // 3 results only
        var shengBeiResults = [];
        
        function throwShengBei(){
            // shengBeiIndex = 0 / 1
            var shengBeiIndex = Math.floor(Math.random()*2);
            shengBeiResults.push(shengBeiIndex);

            console.log(shengBeiResults); // debug
        }

        function checkShengBei(){
            let isQianCorrect;
            for (var i = 0; i < shengBeiResults.length; i++){
                if (shengBeiResults[i] === 0){
                    isQianCorrect = false;
                    console.log("is Qian correct? : " + isQianCorrect);
                    break;
                }
            }

            if (shengBeiResults.length === 3){
                isQianCorrect = true;

                console.log("is Qian correct? : " + isQianCorrect);

                // clear
                shengBeiResults = [];
            }
            return isQianCorrect;
        }

        
    }

    

//test helper func
// chouqian();
// throwShengBei();
// throwShengBei();
// throwShengBei();
// checkShengBei();
// console.log(shengBeiResults);



    render() {
        
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

                       
                <div style={{ position: "absolute", top: 30, left: -100, width: "100%" }} >
                <Container>
                    <Row>
                        <Col>
                        <ButtontoopenModal />
                        </Col>
                        
                        <Col>
                        <Link to={{ pathname: "/payrespects"}}>
                        <Button variant="outline-dark" style={{ position: "absolute", width:"100%", fontFamily: "Sofia Pro", top:40 }}>
                        <MdIcons.MdDone size="17" style={{ marginRight: "5" }} />Done
                        </Button>
                        </Link>
                        </Col>
                    </Row>
                </Container>
                </div>
            

                
            </div>
        )

    }
}
 
export default Chouqian;