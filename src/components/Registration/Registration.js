// var React         = require('react')
// var AccountFields = require('./AccountFields')
// var SurveyFields  = require('./SurveyFields')
// var Confirmation  = require('./Confirmation')
// var Success       = require('./Success')

// var Registration = React.createClass({
// 	getInitialState: function() {
// 		return {
// 			step: 1
// 		}
// 	},
//     saveValues: function(fields) {
//         return function() {
//           // Remember, `fieldValues` is set at the top of this file, we are simply appending
//           // to and overriding keys in `fieldValues` with the `fields` with Object.assign
//           // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
//           fieldValues = Object.assign({}, fieldValues, fields)
//         }()
//       },
      
//       nextStep: function() {
//         this.setState({
//           step : this.state.step + 1
//         })
//       },
      
//       // Same as nextStep, but decrementing
//       previousStep: function() {
//         this.setState({
//           step : this.state.step - 1
//         })
//       },
//       render: function() {
//         switch (this.state.step) {
//           case 1:
//             return <JavaScript fieldValues={fieldValues}
//                                   nextStep={this.nextStep}
//                                   saveValues={this.saveValues} />
//           case 2:
//             return <JavaScript fieldValues={fieldValues}
//                                  nextStep={this.nextStep}
//                                  previousStep={this.previousStep}
//                                  saveValues={this.saveValues} />
//           case 3:
//             return <JavaScript fieldValues={fieldValues}
//                                  previousStep={this.previousStep}
//                                  submitRegistration={this.submitRegistration} />
          
//         }
//       }
// // 	// render: function() {
// // 	// 	switch (this.state.step) {
// // 	// 		case 1:
// // 	// 			return <AccountFields />
// // 	// 		case 2:
// // 	// 			return <SurveyFields />
// // 	// 		case 3:
// // 	// 			return <Confirmation />
// // 	// 		case 4:
// // 	// 			return <Success />
// // 	// 	}
// // 	// }
// })
// // var fieldValues = {
// //     name     : null,
// //     email    : null,
// //     password : null,
// //     age      : null,
// //     colors   : []
// //   }

// module.exports = Registration

// var React = require('react')

// // var JavaScript = React.createClass({
// //   render: function() {
// //     return ( <div>
// //       <label>bnm,.bbhjj</label> 
// //       <input type="radio"
             

// //       <label>Password</label>
// //       <input type="password"
// //              ref="password"
// //              defaultValue={ this.props.fieldValues.password } />

// //       <label>Email</label>
// //       <input type="email"
// //              ref="email"
// //              defaultValue={ this.props.fieldValues.email } />

// //       <button onClick={ this.saveAndContinue }>Save and Continue</button></div>
// //     )
// //   },

// //   saveAndContinue: function(e) {
// //     e.preventDefault()

// //     // Get values via this.refs
// //     var data = {
// //       name     : this.refs.name.getDOMNode().value,
// //       password : this.refs.password.getDOMNode().value,
// //       email    : this.refs.email.getDOMNode().value,
// //     }

// //     this.props.saveValues(data)
// //     this.props.nextStep()
// //   }
// // })

// // module.exports = AccountFields
import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Step from '@material-ui/core/Step';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Stepper from '@material-ui/core/Stepper';
import StepLabel from '@material-ui/core/StepLabel';



const styles = {
    root: {
      maxWidth: 400,
      flexGrow: 1,
    },
}  

class HorizontalLinearStepper extends React.Component {
    static propTypes = {
      classes: PropTypes.object,
    };
  
    // Track the active step to know what content to show
    state = {
      activeStep: 0,
    };
  
    getNumberOfSteps() {
      return 5;
    }
  
    // Get content based on which step is active
    getStepContent(step) {
      switch (step) {
        case 0:
          return (
            <div>
              <FormControl component="fieldset" required>

                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={this.state.value}>
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                 
                </RadioGroup>
              </FormControl>
            </div>
          );
        case 1:
          return (
            <div>
              <FormControl component="fieldset" required>

<FormLabel component="legend">Gender</FormLabel>
<RadioGroup
  aria-label="gender"
  name="gender1"
  value={this.state.value}>
  <FormControlLabel value="female" control={<Radio />} label="Female" />
  <FormControlLabel value="male" control={<Radio />} label="Male" />
  <FormControlLabel value="other" control={<Radio />} label="Other" />
 
</RadioGroup>
</FormControl>
            </div>
          );
        default:
          return 'Unknown step';
      }
    }
  
    // Update the active state according to the next button press
    handleNext = () => {
      const { activeStep } = this.state;
      this.setState({
        activeStep: activeStep + 1
      });
    };
  
    // Similar for back and reset buttons
    handleBack = () => {
      const { activeStep } = this.state;
      this.setState({
        activeStep: activeStep - 1,
      });
    };
  
    handleReset = () => {
      this.setState({
        activeStep: 0,
      });
    };
  
    render() {
      const { classes } = this.props;
      const { activeStep } = this.state;
  
      // Notice that the content below isn't in the Stepper, it's in its own pane underneath
      return (
        <div>
          {/* <Stepper activeStep={activeStep}>
            <Step key={0}>
              <StepLabel>FOO</StepLabel>
            </Step>
            <Step key={1}>
              <StepLabel> bar </StepLabel>
            </Step>
          </Stepper> */}
          <div>
            {activeStep === this.getNumberOfSteps() ? (
              <div>
                <Typography className={classes.instructions}>
                  All steps completed - you&quot;re finished
                </Typography>
                <Button onClick={this.handleReset} >
                  Reset
                </Button>
              </div>
            ) : (
              <div>
                {
                  // Populate the content pane based on the active step
                  this.getStepContent(activeStep)
                }
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                
                  >
                    Back
                  </Button>
                  <Button
                    variant="raised"
                    color="primary"
                    onClick={this.handleNext}
                    className={classes.button}
                  >
                      {activeStep === this.getNumberOfSteps() - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }
  }
  export default withStyles(styles)(HorizontalLinearStepper);