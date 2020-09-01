import React from 'react';
//import Toolbar from './components/Toolbar/Toolbar';
//import SideDrawer from './components/SideDrawer/SideDrawer';
//import Backdrop from './components/Backdrop/Backdrop';
import { BrowserRouter as Router,Route } from "react-router-dom";
import Exam from './components/Exam/Exam';
import Home from './components/Home/Home';
import FirstPage from './components/FirstPage/FirstPage';
//import { Container, Row, Col, Input, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';
import Register from './components/Register/Register';
import MainPage from './components/MainPage/MainPage';
// import Home from './components/Exam/Home';
import './App.css';
import Setting from './components/Setting/Setting';
import Consequence from './components/Consequence/Consequence';

// import Form from 'muicss/lib/react/form';
// import Option from 'muicss/lib/react/option';
// import Select from 'muicss/lib/react/select';

class App extends React.Component {
  
  render(){

    return (
      <Router>
      <div className = "main">
      
      
          <Route exact path="/"component={FirstPage} />  
          <Route path="/forget_password" component={Email} />
          <Route path="/sign_up" component={Register} />
          <Route path="/home" component={Home} />
          <Route path="/main_page" component={MainPage} />
          <Route path="/exam" component={Exam} />
          <Route path="/consequence" component={Consequence} />
          <Route path="/setting" component={Setting} /> 
        
         
         </div>
         </Router>

         

         );
        }
      };
         class Email extends React.Component{
          render(){
            return(
              <div className="H">
             <p>forget password</p>
           </div>
            )
          }
          
          }
        
         
        // <Router>
        // <div>
        // {/* <FirstPage /> */}
        //  <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        //  <SideDrawer show={this.state.sideDrawerOpen} />
        //  <SideDrawer hide={this.backdropClickHandler} />
        //  {backdrop}
        //  <Route exact path="/"component={Home} />
        //  <Route path="/exam" component={Exam} />
        //  <Route path="/consequence" component={Consequence} />
        //  <Route path="/setting" component={Setting} />  
        //  </div>
        //  </Router>
        
    
        export default App;