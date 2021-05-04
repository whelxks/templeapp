import React, { Component } from 'react';
import { Button, Container, Row, Col } from "react-bootstrap";
import * as GrIcons from "react-icons/gr";
import * as FaIcons from "react-icons/fa";
import "../index.css";
import offeringcup from "../images/offeringcup.png";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
//import { ImageOverlay } from 'react-image-overlay-effect'
import { useSpring, animated } from 'react-spring'
import joss1 from "../images/joss1.png";
import joss2 from "../images/joss2.png";
import joss3 from "../images/joss3.png";
import FadeIn from 'react-fade-in';

class Tributepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:null,
                //localStorage.removeItem(this.props.location.god + "_loading"),
        }
        this.onClick = this.onClick.bind(this);
        
    }

     //componentDidMount is only called once
    componentDidMount() {
        const current = (new Date()).getDate();

        //alr next day, jossstick should not be there
        if ((JSON.parse(localStorage.getItem(this.props.location.god + "_ttl"))) && (current >= JSON.parse(localStorage.getItem(this.props.location.god + "_ttl")) + 1)) {
            localStorage.removeItem(this.props.location.god + "_loading");
            localStorage.removeItem(this.props.location.god + "_ttl");
        }

        else {
            //if press offering once alr, the josstick will stay
            if (localStorage.getItem(this.props.location.god + "_loading")) {
                this.setState({
                    loading: true,
                });
            } else {
                //never press before, jossstick not there
                this.setState({
                    loading: false
                });
            }
        }
        
    }

    onClick() {
        const now = (new Date()).getDate();
        localStorage.setItem(this.props.location.god + "_loading", true);
        localStorage.setItem(this.props.location.god + "_ttl", JSON.stringify(now));
        //console.log(JSON.parse(localStorage.getItem(this.props.location.god + "_ttl")));
        this.setState({loading: true});
        console.log("here");
        
    }



    render() {
        //console.log(this.props);
        //if loading is true then render the josssticks
        //use Spring to delay 2nd and 3rd josssticks
        //console.log(this.props);
        
        console.log(localStorage);
        console.log(this.state)
       
        return (
            <div style={{
                position: "absolute",
                left: 40,
                top: 70,
                
              }}>
                <h1 className="header-style" >Worship God: {this.props.location.god}</h1>

                <div className="mydiv">
                    <img style={{ position: "absolute", width:"50%"}}
                        src={process.env.PUBLIC_URL + this.props.location.image}
                        
                    />

                    <img style={{ position: "absolute", width:"50%"}}
                        src={offeringcup}
                        
                    />

       
                    {this.state.loading == true ? (
         
                    <FadeIn>
                      <img style={{ position: "absolute", width:"50%", left:90}}
                            src={joss1} />
                      <img style={{ position: "absolute", width:"50%", left:97}}
                      src={joss2} />
                      <img style={{ position: "absolute", width:"50%", left:105}}
                      src={joss3} />
                    </FadeIn>
                    
                  
                    ) : null}
     

                    
                </div>

                

               
                <div style={{ position: "absolute",top:330, width:"100%"}} >
                <Container>
                    <Row>
                        <Col>
                        <Button variant="outline-dark" style={{ position: "absolute", width:"100%", fontFamily: "Sofia Pro", top:40}} onClick={this.onClick}>
                        <GrIcons.GrMoney size="17" style={{ marginRight: "5" }} />Make Offering
                        </Button>
                        </Col>
                        
                        <Col>
                        <Link to={{ pathname: "/chouqian", god: this.props.location.god, }}>
                        <Button variant="outline-dark" style={{ position: "absolute", width:"100%", fontFamily: "Sofia Pro", top:40 }}>
                        <FaIcons.FaHandPaper size="17" style={{ marginRight: "5" }} />See Ur luck
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
 
export default Tributepage;
//make diff on click link to diff tribute page wif diff god image
//on click make offering button add jossstick one by one => in animation??
//make jossstick animate/bounce/ maybe a hand???
//localStorage whether the offering has been made


//link 2nd button to chouqian page

/*
                      <Spring from={{opacity:0}} to=>


*/