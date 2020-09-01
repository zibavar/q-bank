import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
// import { BrowserRouter as Router,Route } from "react-router-dom";

class Consequence extends React.Component{
  constructor (props) {
    super(props);
    this.drawerToggleClickHandler =  this.drawerToggleClickHandler.bind(this);
    this.backdropClickHandler =  this.backdropClickHandler.bind(this);
    this.state = {
    sideDrawerOpen: false,
    
    
  };
  }
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
  
    

    return (
         
      <div>
      <h2 className="h2">دیدن نتایج</h2>
       <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
       <SideDrawer show={this.state.sideDrawerOpen} />
       <SideDrawer hide={this.backdropClickHandler} />
       {backdrop}
        
       </div>
 
       
       
       
        );
      }
    }

    
    export default Consequence;