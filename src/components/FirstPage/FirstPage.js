import React from 'react';
import './firstPage.css';
import { Link } from "react-router-dom";
import { Input, Button } from 'mdbreact';
import { Container, Row, Col } from 'reactstrap';
class FirstPage extends React.Component{
    constructor() {
        super();
        this.state = {
          username: '',
          password: '',
          error: '',
        };
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
      }
    
      dismissError() { 
        this.setState({ error: '' });
      }
    
      handleSubmit(evt) {
        evt.preventDefault();
    
        if (!this.state.username) {
          return this.setState({ error: 'Username is required' });
        }
        if (!this.state.password) {
            return this.setState({ error: 'Password is required' });
          }
      
          return this.setState({ error: '' });
        }
      
        handleUserChange(evt) {
          this.setState({
            username: evt.target.value,
          });
        };
      
        handlePassChange(evt) {
          this.setState({
            password: evt.target.value,
          });
        }
render(){
    return (
     <div className="allPage" >
       <Container>
        
           <Row > 
             <Col sm={{ size:6 }}     className="qbankBox">
               <div className ="qbankh4">
               {/* <h4> welcome</h4> */}
                 <h4> Qbank</h4>
                 <p> برای شروع لطفا وارد شوید </p>
               </div> 
             </Col>
             </Row>
             <Row>
             <div  sm={{ size: 6 }} className="smallBox">
           <Col  sm={{ size: 6 }} className="loginBox">
            <form >
              {/*<Col md="12" xs="12" sm="12" lg="12" >
                <img  className="responsive" src={require('../SideDrawer/images/steven-r-flanagan-square.jpg')}  />  
               
             </Col>*/}
                <div className="grey-text ">
                  <Input hint="ایمیل  "   icon="envelope" group type="email" validate error="wrong" success="right" validate value={this.state.username} onChange={this.handleUserChange}/>
                  <Input hint="کد گل واژه " icon="lock" group type="password" validate value={this.state.password} onChange={this.handlePassChange}/>
                </div>
              <div className="text-center">
               <Link to="/home" className="btn btn-pink btn-block btn-rounded z-depth-1" >ورود</Link>
                <Link to="/sign_up" className="signup">عضو نیستید؟ همین حالا عضو شوید</Link>
               
               
              </div>
            </form>
          </Col>
          </div>
        </Row>
       
     </Container>
        </div>
);}}
export default FirstPage;
