import React, { useState } from 'react';
import { Button, Container, Row, Col } from "react-bootstrap";
import { Modal } from "./Modal";
import * as AiIcons from "react-icons/ai";
import { GlobalStyle } from './globalStyles';


function ButtontoopenModal() {
    
    const [showModal, setShowModal] = useState(false);

    //this timeout is the duration of the animation!!
    const openModal = () => {
        setTimeout(() =>
            setShowModal(prev => !prev), 5000)
    }
       
    

    /*
const openModal = setTimeout(() => {
        setShowModal(prev => !prev)
    }, 2000);

    */


   
    return (
        <div>
    
            <Modal showModal={showModal} setShowModal={setShowModal} />
            <GlobalStyle />

            <Button variant="outline-dark" style={{ position: "absolute", width: "100%", fontFamily: "Sofia Pro", top: 40 }} onClick={openModal}>
                <AiIcons.AiOutlineShake size="17" style={{ marginRight: "5" }} />Shake de Cup
            </Button>
        </div>
    );

    
}
 
export default ButtontoopenModal;