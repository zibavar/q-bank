import React from 'react';

import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import { Container, Row, Col } from 'reactstrap';
// import { BrowserRouter as Router,Route } from "react-router-dom";
import   './Home.css';
class Home extends React.Component{
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
        <Container>
          <Row>
           <Col sm={{ size:3 }} className="mainPageBox">
             <div  className ="mainPage" ><h4> صفحه اصلی</h4></div>
           </Col>

       <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
       <SideDrawer show={this.state.sideDrawerOpen} />
       <SideDrawer hide={this.backdropClickHandler} />
       {backdrop}
       </Row>
       </Container>
       </div>
        );
      }
    }

    
      
    export default Home;