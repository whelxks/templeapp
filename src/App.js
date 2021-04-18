
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Calenderpage from "./pages/Calenderpage";
import Profilepage from "./pages/Profilepage"
import Informationpage from "./pages/Informationpage"

class App extends Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    return (
      
      <BrowserRouter>
      
        
          <Navbar />
          <Switch>
     
            <Route path="/" exact component={Profilepage} />
            <Route path="/homepage" component={Homepage} />
            <Route path="/calender" component={Calenderpage} />
            <Route path="/information" component={Informationpage} />
             

          </Switch>
       
      </BrowserRouter>
    );
  }
}

export default App;
