

import React, { Component } from 'react';



class Modal extends Component {


    render() {
        return (
            <div style={{
                position: "absolute",
                left: 20,
                top: 200,
              }}>
                <h1 className="header-style" >Modal</h1>
            </div>
        )

    }
}
 
export default Modal;