import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './Exam.css';
import './w3.css';
import Javascript from '../Question/Javascript.js';
import Python from '../Question/Python.js';
import Java from '../Question/Java.js';
import CSharp from '../Question/CSharp.js';
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import MainPage from '../MainPage/MainPage';
import Registration from '../Registration/Registration';
import { Container, Row, Col } from 'reactstrap';

const styles = theme => ({
  // MuiSelectselectMenu27:{
  //   width :200,
  // },
  root: {
    // display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
     minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 3,
  },
});
class Exam extends React.Component {


  constructor(props) {
    super(props);
    // this.exampageHandle =  this.exampageHandle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // this.handleHidden = this.handleHidden.bind(this);
    this.state = {
      hide: false,
      tech: '',
      exam :'',
      visibility :true,
      
    };
  }

  // exampageHandle= () => {
  //   this.setState((prevState) => {
  //     return {exampage: !prevState.exampage};
  //   });
  // };
  // handleHidden (event){
  //   this.setState((prevState) => {
  //         return {shown: true};
  //        });
  // }

  handleChange = event => {
    this.setState({ tech: event.target.value });
  };



  onSubmit(event) {
    event.preventDefault();

    this.setState((prevState) => {
      
      if (this.state.tech === "جاوا اسکریپت") 
      
       return {
         exam :<Javascript />,
         hide: true
        
       }
      
      else if (this.state.tech === "پایتون") 
      return {
         exam : <Python />,
         hide: true
      }
      else if (this.state.tech === "جاوا") 
      return {
      exam : <Java />,
      hide: true
      }
      else if (this.state.tech === "سی شارپ") 
      return {
      exam : <CSharp />,
      hide: true
      }
      });

  }

  render() {
     const { classes } = this.props;
    
    

    return (


     <Container>
       <Row>
           <MainPage />
            <Col sm={{ size:3 }} className="examBox">
             <div  className ="exam" ><h4>آزمون</h4></div>
           </Col>
        </Row>
        <div className="All">
        <Row>
        <Col sm={{ size:12}}>
         <div className="row" hidden={this.state.hide} >
          <Col sm={{ size:6}} className="selectBox">
              <form className={classes.root} autoComplete="off" >
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="age-helper" className="examInput">امتحان</InputLabel> 
                  <Select
                    value={this.state.tech}
                    onChange={this.handleChange}
                    input={<Input name="age" id="age-helper" />}
                    inputProps={{
                      name: 'امتحان',

                    }}
                  >

                    <MenuItem value="">
                      <em className="examInput">انتخاب آزمون</em>
                    </MenuItem>
                    <MenuItem value="جاوا اسکریپت" className="examInput"> جاوا اسکریپت </MenuItem>
                    <MenuItem value="پایتون" className="examInput"> پایتون</MenuItem>
                    <MenuItem value="جاوا" className="examInput">جاوا</MenuItem>
                    <MenuItem value="سی شارپ" className="examInput">سی شارپ</MenuItem>
                  </Select>
                  <FormHelperText className="examInput">امتحان خود را انتخاب کنید!</FormHelperText>
                </FormControl>
               
              </form>
              {/* <hr/> */}

            </Col>

           <Col sm={{ size:6}} className="button" onClick={this.handleHidden}>
              <Button variant="contained" size="medium" color="primary" className={classes.button} onClick={this.onSubmit}>
                شروع آزمون
                    </Button>
                 
                   
                    </Col>
          
          </div>
  <div>
               {this.state.exam}
               </div>
         
   </Col>
      </Row>
      </div>
      </Container>



    );
  }

}
Exam.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Exam);