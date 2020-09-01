import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';
import { Link } from "react-router-dom";
import './Register.css';
class Register extends React.Component{
    render(){
      return(
        <div >
        <Container>
        <Row>
          <Col md="6" className="firstCol">
          <Col md="3" className="qbannkCol">
          <h2> <span>Q</span>bank</h2>
          </Col>
          <p className="h5 text-center mb-4"> ثبت نام </p>
          <Col md="10" className="formCol">
            <form >
             
              <div className="grey-text">
                <Input className="text" hint=" نام کاربری"  icon="user" group type="text" validate error="wrong" success="right" />
              
                <Input hint="ایمیل" icon="envelope" group type="email" validate error="wrong" success="right"/>
               
                <Input hint="کد گل واژه" icon="lock" group type="password" validate/>
              </div>
              <div className="text-center">
              <Link to="/" className="btn btn-pink btn-block btn-rounded z-depth-1" >ثبت نام</Link>
              </div>
            </form>
            </Col>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
};
export default Register;