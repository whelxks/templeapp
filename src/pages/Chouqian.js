import React, { Component } from 'react';
import { Button, Container, Row, Col, Modal } from "react-bootstrap";
import * as MdIcons from "react-icons/md";
import * as GrIcons from "react-icons/gr";
import * as AiIcons from "react-icons/ai";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";



class Chouqian extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            
                
        }
        this.playAnim = this.playAnim.bind(this);
       
    }

    playAnim() {
        console.log("test");
        //start the anim here



        //algo thingy to choose one in array => pass to Modal component

        //after anim finish, showModal
        /*setTimeout(() => {
            this.setState({ showModal: true });
        }, 2000);*/
        this.setState({ showModal: true });
    }

    


    render() {
        const { showModal } = this.state;
        let model = null;
        console.log(this.props);
        console.log(this.state);
        return (
            <div style={{
                position: "absolute",
                left: 40,
                top: 70,
                width: "100%",
            }}>
                
                <h1 className="header-style" >See your luck for today!</h1>


                
            
                  {/*{this.state.showModal == true ?(
                
                  <Modal >
                       
                            <h3>Are you interested in any other Additions?</h3>
                         
                            <p>Hit “notify concierge” and we’ll be in touch shortly.</p>
                        
                    
                    </Modal>):null }*/}
                

                       
                <div style={{ position: "absolute", top: 330, left: -100, width: "100%" }} >
                <Container>
                    <Row>
                        <Col>
                        <Button variant="outline-dark" style={{ position: "absolute", width:"100%", fontFamily: "Sofia Pro", top:40}} onClick={this.playAnim}>
                        <AiIcons.AiOutlineShake size="17" style={{ marginRight: "5" }} />Shake de Cup
                        </Button>
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