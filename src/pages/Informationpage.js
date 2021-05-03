import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Festivals from "./Festivals";
import "../index.css";
import Temple from "./Temple";

class Informationpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          key: 1
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    
    handleSelect(key) {
    console.log('selected' + key);
    this.setState({ key: key });
    }

    render() {
        return (
            <div style={{
                position: "absolute",
                left: 20,
                top: 70,
                width: "90%",
              }}>
        
                <h1 className="header-style" >Find Information</h1>

                <Tabs key={this.state.key} onSelect={this.handleSelect} >
        
                    <TabList>
                        <Tab style={{ minWidth: "50%" }} title="Festivals" >Festivals</Tab>
                        <Tab style={{ minWidth: "50%" }} title="Gods">Rituals</Tab>
                    </TabList>
                    

                    <TabPanel>
                        <Festivals />
                    </TabPanel>
                    <TabPanel>
                        <Temple />
                    </TabPanel>
                </Tabs>
      
            </div>
        )

    }
}
 
export default Informationpage;