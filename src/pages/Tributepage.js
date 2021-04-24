import React, { Component } from 'react';



class Tributepage extends Component {


    render() {
        //console.log(this.props);
        console.log(this.props.location.image);
        return (
            <div style={{
                position: "absolute",
                left: 20,
                top: 70,
              }}>
                <h1 className="header-style" >god pic jossstick and stuff</h1>
                
            </div>
        )

    }
}
 
export default Tributepage;