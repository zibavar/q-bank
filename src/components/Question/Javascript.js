import React from 'react';
import './Javascript.css';
import Res from'../Res/Res';
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
import { Container, Row, Col } from 'reactstrap';


// const styles = {
//   root: {
//     maxWidth: 400,
//     flexGrow: 1,
//   },

//   header: {
//     display: 'flex',
//     alignItems: 'center',
//     height: 50,
//     // paddingLeft: theme.spacing.unit * 4,
//     // backgroundColor: theme.palette.background.default,
//   },

// body: {
//   height: 255,
//   maxWidth: 400,
//   overflow: 'hidden',
//   display: 'block',
//   width: '100%',
// },
// };
const styles = {
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
}  

class Javascript extends React.Component{
  static propTypes = {
    classes: PropTypes.object,
  };

  constructor (props) {
    super(props);

   
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleOptionChangeOne=this.handleOptionChangeOne.bind(this);
    this.handleOptionChangeTwo=this.handleOptionChangeTwo.bind(this);
    this.handleOptionChangeThree=this.handleOptionChangeThree.bind(this);
    this.handleOptionChangeFour=this.handleOptionChangeFour.bind(this);
    this.handleOptionChangeFive=this.handleOptionChangeFive.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handlesum =this.handlesum.bind(this);
    //this.handle=this.handle.bind(this);
  


    this.state = {
      selectedOptionOne :0,
      selectedOptionTwo :0,
      selectedOptionThree :0,
      selectedOptionFour :0,
      selectedOptionFive :0,
      mark :'',
      tru :'',
      fals :'',
      grade :'',
      activeStep: 0,
      hide:false,
      item1:'',
      item2:'',
      visibility:false,
      
    };
  }
  getNumberOfSteps() {
    return 5;
  }


  getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <div>
            <FormControl component="fieldset">

              <FormLabel className="QuestionBox" >1 - در کدام تگ HTML ، دستورات جاوا اسکریپت قرار داده می شوند ؟</FormLabel>
              <RadioGroup value={this.state.selectedOptionOne} onChange={this.handleOptionChangeOne}>
                <FormControlLabel checked={this.state.selectedOptionOne==="0"} value="0" control={<Radio />}  label="<js>"  />
                <FormControlLabel checked={this.state.selectedOptionOne==="+0"} value="+0" control={<Radio />} label="<javascript>"  />
                <FormControlLabel checked={this.state.selectedOptionOne==="-0"} value="-0" control={<Radio />} label="<scripting>" />
                <FormControlLabel checked={this.state.selectedOptionOne==="20"} value="20" control={<Radio />} label="<script>" />
               
              </RadioGroup>
            </FormControl>
          </div>
        );
      case 1:
        return (
          <div>
            <FormControl component="fieldset">

<FormLabel className="QuestionBox">2 - syntax صحیح برای چا عبارت " Hello World " در خروجی در جاوا اسکریپت ، کدام است  ؟'</FormLabel>
<RadioGroup value={this.state.selectedOptionTwo} onChange={this.handleOptionChangeTwo}>
<FormControlLabel checked={this.state.selectedOptionOne==="0"} value='0' control={<Radio />} label='("response.write("Hello World'/>
<FormControlLabel checked={this.state.selectedOptionOne==="20"} value="20" control={<Radio />} label='("document.write("Hello World'/>
<FormControlLabel checked={this.state.selectedOptionOne==="0"} value="-0" control={<Radio />} label='("document.writeLn("Hello World' />
<FormControlLabel checked={this.state.selectedOptionOne==="0"} value="+0" control={<Radio />} label='("print("Hello World'/>

</RadioGroup>
</FormControl>
          </div>
        );
        case 2:
        return (
          <div>
            <FormControl>

<FormLabel className="QuestionBox"> 3 - مکان صحیح قرار دادن اسکریپت های ، جاوا اسکریپت در کجای صفحه است ؟
</FormLabel>
<RadioGroup value={this.state.selectedOptionThree} onChange={this.handleOptionChangeThree}>
<FormControlLabel checked={this.state.selectedOptionOne==="0"} value='0' control={<Radio />} label='در قسمت head صفحه' />
<FormControlLabel checked={this.state.selectedOptionOne==="0"} value='+0' control={<Radio />} label='در قسمت body صفحه' />
<FormControlLabel checked={this.state.selectedOptionOne==="0"} value='-0' control={<Radio />} label='هم در قسمت head و هم قسمت body' />
<FormControlLabel checked={this.state.selectedOptionOne==="20"} value='20' control={<Radio />} label='فقط در یک فایل خارجی js' />


</RadioGroup>
</FormControl>
          </div>
        );
        case 3:
        return (
          <div>
            <FormControl>

<FormLabel className="QuestionBox">4 - طریقه صحیح تعریف یک تابع در جاوا اسکریپت چگونه است ؟
</FormLabel>
<RadioGroup value={this.state.selectedOptionFour} onChange={this.handleOptionChangeFour}>
<FormControlLabel checked={this.state.selectedOptionOne==="0"} value="0" control={<Radio />} label='()function=myFunction' />
<FormControlLabel checked={this.state.selectedOptionOne==="20"} value="20" control={<Radio />} label='()function myFunction' />
<FormControlLabel checked={this.state.selectedOptionOne==="0"} value="-0" control={<Radio />} label='()function:myFunction' />
<FormControlLabel checked={this.state.selectedOptionOne==="0"} value="+0" control={<Radio />} label='()func myFunction' />


</RadioGroup>
</FormControl>
          </div>
        );
        case 4:
        return (
          <div>
            <FormControl>

<FormLabel className="QuestionBox">5 - ساختار صحیح نوشتن یک دستور if برای اجرای کد مورد نظر ، در هنگامی که مقدار متغیر i برابر 5 است ، کدام است ؟
</FormLabel>
<RadioGroup value={this.state.selectedOptionFive} onChange={this.handleOptionChangeFive}>
<FormControlLabel checked={this.state.selectedOptionOne==="0"} value="0" control={<Radio />} label='if i=5 code' />
<FormControlLabel checked={this.state.selectedOptionOne==="0"} value="+0" control={<Radio />} label='if i=5 then code' />
<FormControlLabel checked={this.state.selectedOptionOne==="0"} value="-0" control={<Radio />} label='if i==5 then code' />
<FormControlLabel checked={this.state.selectedOptionOne==="20"} value="20" control={<Radio />} label='if (i==5) code' />


</RadioGroup>
</FormControl>
          </div>
        );
      default:
        return 'Unknown step';
    }
  }

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));

      
 
  };  
    

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };
  
    handleSubmit(event) {
      event.preventDefault();
      
    
      
        //this.setState((prevState) =>{
         
         
          // if(this.state.selectedOptionOne === '0'){
           
          //   return{
          //   fals :prevState.fals +1,
            
          // }}
          //  if(this.state.selectedOptionTwo === '0'){
          //   return{
          //    fals :prevState.fals +1
          //  }}
          //  if(this.state.selectedOptionThree === '0'){
          //   return{
          //   fals :prevState.fals +1
          //  }}
          //  if(this.state.selectedOptionFour === '0'){
          //   return{
          //    fals :prevState.fals +1
          //  }}
          //  if(this.state.selectedOptionFive === '0'){
          //   return{
          //    fals :prevState.fals +1
          //  }}
          // if(this.state.mark === 20){
          
          //   // document.write('#');
          //  return{
          //     tru :1,
          //     fals :4
              
          // }}
          // if(this.state.mark === 40){
          
          //   // document.write('#');
          //  return{
          //     tru :2,
          //     fals :3
              
          // }}
          // if(this.state.mark === 60){
          
          //   // document.write('#');
          //  return{
          //     tru :3,
          //     fals :2
              
          // }}
          // if(this.state.mark === 80){
          
          //   // document.write('#');
          //  return{
          //     tru :4,
          //     fals :1
              
          // }}
          // if(this.state.mark === 100){
          
          //   // document.write('#');
          //  return{
          //     tru :5,
          //     fals :0
              
          // }}
          // if(this.state.mark === 0){
          
          //   // document.write('#');
          //  return{
          //     tru :0,
          //     fals :5
              
          // }}
          // if(this.state.selectedOptionTwo === '20'){
          //   return{
          //   tru :this.state.tru +1
          // }}
          // if(this.state.selectedOptionThree === '20'){
          //  return{
          //   tru :this.state.tru +1
          // }}
          // if(this.state.selectedOptionFour === '20'){
          //   return{
          //   tru :this.state.tru +1
          // }}
          // if(this.state.selectedOptionFive === '20'){
          //   return{
          //   tru :this.state.tru +1
          // }}
        
        // })
    
          
      
      this.setState((prevState) =>{
        
       
  
      return{
  
        // item1 :this.state.selectedOptionOne,
        // item2 :this.state.selectedOptionTwo,
        // item3 :this.state.selectedOptionThree,
        // item4 :this.state.selectedOptionFour,
        // item5 :this.state.selectedOptionFive,
        // selectedOptionOne :"",
        // selectedOptionTwo :"",
        // selectedOptionThree:"",
        // selectedOptionFour:"",
        // selectedOptionFive:"",
        mark : parseInt(this.state.selectedOptionOne,10) + parseInt(this.state.selectedOptionTwo,10) +
        parseInt(this.state.selectedOptionThree,10) + parseInt(this.state.selectedOptionFour,10) + parseInt(this.state.selectedOptionFive,10) ,
        visibility: !prevState.visibility,
        //item1 : this.state.fals,
        //item2 :this.state.tru,
        //grade:<Res mark={this.state.mark} tru={this.state.tru} fals={this.state.fals} />,
        hide:true,   
    
  } 
      })
    }
 handlesum = () => {
  this.setState(() =>{
         
  if(this.state.mark === 20){
          
    // document.write('#');
   return{
      tru :1,
      fals :4,
      visibility:true,
      
  }}
  else if(this.state.mark === 40){
  
    // document.write('#');
   return{
      tru :2,
      fals :3,
    
      
  }}
  else if(this.state.mark === 60){
  
    // document.write('#');
   return{
     
      tru :3,
      fals :2, 
     
      
  }}
  else if(this.state.mark === 80){
  
    // document.write('#');
   return(
     <div>
      tru :4,
      fals :1,
      </div>
   
   );}
  else if(this.state.mark === 100){
  
    // document.write('#');
   return{
      tru :5,
      fals :0,
    
      
  }}
  else if(this.state.mark === 0){
  
    // document.write('#');
   return{
      tru :0,
      fals :5,
      
      
  }}
})

    }
    handleOptionChangeOne  (event) {
      this.setState({
        selectedOptionOne : event.target.value
      });
    }
  
  
    handleOptionChangeTwo  (event) {
      this.setState({
        selectedOptionTwo: event.target.value
      });
    }
  
    handleOptionChangeThree (event) {
      this.setState({
        selectedOptionThree: event.target.value
      });
    }
  
    handleOptionChangeFour (event) {
      this.setState({
        selectedOptionFour: event.target.value
      });
    }

    handleOptionChangeFive (event) {
      this.setState({
        selectedOptionFive: event.target.value
      });
    }
    // handleReset = () => {
    //   this.setState({
    //     activeStep: 0,
    //   });
    // };
   
        render(){
          var weight=20;
          const { classes } = this.props;
          const { activeStep } = this.state;
//       const tutorialSteps = [
//         {
//           label: '1 - در کدام تگ HTML ، دستورات جاوا اسکریپت قرار داده می شوند ؟',
//           option1:<input id="ContentPlaceHolder1_q_list_0" type="radio" name="radio1" value="0"
//           onChange={this.handleOptionChangeOne} />,
//           option2:<input id="ContentPlaceHolder1_q_list_1" type="radio" name="radio1" value="0"  
//           onChange={this.handleOptionChangeOne} />,label2:'<javascript>',
//           option3:<input id="ContentPlaceHolder1_q_list_2" type="radio" name="radio1" value="0" 
//           onChange={this.handleOptionChangeOne}   />,label3:'<scripting>',
//           option4:<input id="ContentPlaceHolder1_q_list_3" type="radio" name="radio1" value={weight}
//           onChange={this.handleOptionChangeOne}   />,label4:'<script>,'
//         },
//         {
//           label: '2 - syntax صحیح برای چا عبارت " Hello World " در خروجی در جاوا اسکریپت ، کدام است  ؟',
//           option1:'("response.write("Hello World',
//           option2:'("document.write("Hello World',
//           option3:'("document.writeLn("Hello World',
//           option4:'("print("Hello World',
//         },
//         {
//           label: '3 - مکان صحیح قرار دادن اسکریپت های ، جاوا اسکریپت در کجای صفحه است ؟',
//           option1:'در قسمت head صفحه',
//           option2:'در قسمت body صفحه',
//           option3:'هم در قسمت head و هم قسمت body',
//           option4:'فقط در یک فایل خارجی js',
//         },
//         {
//           label: '4 - طریقه صحیح تعریف یک تابع در جاوا اسکریپت چگونه است ؟',
//           option1:'<radio>()function=myFunction</radio>',
//           option2:'()function myFunction',
//           option3:'()function:myFunction',
//           option4:'()func myFunction',
//         },
//         {
//           label: '5 - ساختار صحیح نوشتن یک دستور if برای اجرای کد مورد نظر ، در هنگامی که مقدار متغیر i برابر 5 است ، کدام است ؟',
//           option1:'if i=5 code',
//           option2:'if i=5 then code',
//           option3:'if i==5 then code',
//           option4:'if (i==5) code',
//         },
//       ];
//       var weight=20;
//       const { classes, theme } = this.props;
      
//       const { activeStep } = this.state;
//     const maxSteps = tutorialSteps.length;
// var button;
//     if (this.state.activeStep ===tutorialSteps.length-1 ){
//       button = <Res onClick={this.handleSubmit} />;
//     }
    
       
      return(
        
        <div>
          <div hidden={this.state.hide}>
<Container>
       <Row>
          <Col sm={{ size:12 }} className="QuestionBox">
 {activeStep === this.getNumberOfSteps() ? (
              <div>
                <Typography className="QuestionBox">
                  آزمون تمام شده
                </Typography>
                <Button  className="QuestionBox" onClick={this.handleSubmit} >
                  دیدن نتایج
                </Button>
              </div>
            ) : (
              <div>
                {
                  // Populate the content pane based on the active step
                  this.getStepContent(activeStep)
                }
                <div className="QuestionBox">

                   <Button className="QuestionBox"
                    variant="raised"
                    color="primary"
                    onClick={this.handleNext}
                    // className={classes.button}
                  >
                      {activeStep === this.getNumberOfSteps() - 1 ? 'تمام' : 'بعدی'}
                  </Button>

                  <Button 
                   variant="raised" className="QuestionBox1"
                  color="secondary"
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                
                  >
                    قبلی
                  </Button>
                 
                </div>
              </div>
             

            )}
             </Col>
              </Row>
            
           
          </Container>
          </div>
          <div>
          <Container>
           <Row>
            <Col sm={{ size:12 }} className="QuestionBox">
              {this.state.visibility && ( <Button   className="QuestionBox" onClick={this.handlesum}> نتیجه </Button> )}
              
            <p>  {this.state.mark} </p>
            <p>{this.state.tru}</p>
            <p>{this.state.fals}</p>
           
        
          
          </Col>
              </Row>
            
           
          </Container>
          </div>
          
          </div>
        
            );
          }
          
          }
          Javascript.propTypes = {
            classes: PropTypes.object.isRequired,
            theme: PropTypes.object.isRequired,
          };
          
          export default withStyles(styles)(Javascript);
           /* <hr/>
          <div className="container">
          
            <div className="row">
            <div className = "center">
              <div className="col-md-12">
             
              <div id="ContentPlaceHolder1_Panel1">
             
        1 - در کدام تگ HTML ، دستورات جاوا اسکریپت قرار داده می شوند ؟
        <table id="ContentPlaceHolder1_q_list">
		<tbody><tr>
      
			<td><input id="ContentPlaceHolder1_q_list_0" type="radio" name="radio1" value="0"
                      onChange={this.handleOptionChangeOne}   /><label htmlFor="ContentPlaceHolder1_q_list_0">&lt; js &gt;</label></td>
		</tr><tr>
			<td><input id="ContentPlaceHolder1_q_list_1" type="radio" name="radio1" value="0"  
                      onChange={this.handleOptionChangeOne}    /><label htmlFor="ContentPlaceHolder1_q_list_1">&lt; javascript &gt;</label></td>
		</tr><tr>
			<td><input id="ContentPlaceHolder1_q_list_2" type="radio" name="radio1" value="0" 
                      onChange={this.handleOptionChangeOne}   /><label htmlFor="ContentPlaceHolder1_q_list_2">&lt; scripting &gt;</label></td>
		</tr><tr>
			<td><input id="ContentPlaceHolder1_q_list_3" type="radio" name="radio1" value={weight}
                      onChange={this.handleOptionChangeOne}   /><label htmlFor="ContentPlaceHolder1_q_list_3">&lt; script &gt;</label></td>
		</tr>
	</tbody></table>
      
    
</div>
              </div>
        
         </div> 
         </div>
         <hr/> */
        {/* <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
        </Paper>
        <Paper square elevation={0} className={classes.body}>
          
          <Typography>{tutorialSteps[activeStep].option1+tutorialSteps[activeStep].label1}</Typography>
          <Typography>{tutorialSteps[activeStep].option2+tutorialSteps[activeStep].option2}</Typography>
          <Typography>{tutorialSteps[activeStep].option3}</Typography>
          <Typography>{tutorialSteps[activeStep].option4}</Typography>
        </Paper>
         
         <MobileStepper
       steps={maxSteps}
       variant="progress"
       position="static"
       activeStep={activeStep}
       className={classes.root}
        nextButton={
          <Button size="small" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
            قبلی

            {theme.direction === 'rtl' ?   <KeyboardArrowRight />  : <KeyboardArrowLeft />}

          </Button>
        }
        backButton={
          <Button size="small" onClick={this.handleNext} disabled={this.state.activeStep ===tutorialSteps.length - 1}>
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            بعدی
           
          </Button>
        }
     />
     {button}
     </div> */}
    {/* );
  }
} */}

         


         
            {/* <div className="row">
           
              <div className="col-md-12">
              <div id="ContentPlaceHolder1_Panel1">
	
        2 - syntax صحیح برای چا عبارت " Hello World " در خروجی در جاوا اسکریپت
        ، کدام است&nbsp; ؟
        <table id="ContentPlaceHolder1_q_list">
		<tbody><tr>
			<td><input id="ContentPlaceHolder1_q_list_0" type="radio" name="radio2" value="0" 
                      onChange={this.handleOptionChangeTwo} /><label htmlFor="ContentPlaceHolder1_q_list_0">("response.write("Hello World</label></td>
		</tr><tr>
			<td><input id="ContentPlaceHolder1_q_list_1" type="radio" name="radio2" value="20"
                      onChange={this.handleOptionChangeTwo} /><label htmlFor="ContentPlaceHolder1_q_list_1">("document.write("Hello World</label></td>
		</tr><tr>
			<td><input id="ContentPlaceHolder1_q_list_2" type="radio" name="radio2" value="0" 
                      onChange={this.handleOptionChangeTwo} /><label htmlFor="ContentPlaceHolder1_q_list_2">("document.writeLn("Hello World</label></td>
		</tr><tr>
			<td><input id="ContentPlaceHolder1_q_list_3" type="radio" name="radio2" value="0"  
                      onChange={this.handleOptionChangeTwo} /><label htmlFor="ContentPlaceHolder1_q_list_3">("print("Hello World</label></td>
		</tr>
	</tbody></table>
     

</div>
</div>
         
         </div> 
         <hr/>

         
            <div className="row">
           
              <div className="col-md-12">
              <div id="ContentPlaceHolder1_Panel1">
	
  3 - مکان صحیح قرار دادن اسکریپت های ، جاوا اسکریپت در کجای صفحه است ؟<table id="ContentPlaceHolder1_q_list">
<tbody><tr>
<td><input id="ContentPlaceHolder1_q_list_0" type="radio" name="radio3" value="0" 
                      onChange={this.handleOptionChangeThree} /><label htmlFor="ContentPlaceHolder1_q_list_0">در قسمت head صفحه</label></td>
</tr><tr>
<td><input id="ContentPlaceHolder1_q_list_1" type="radio" name="radio3" value="0" 
                      onChange={this.handleOptionChangeThree} /><label htmlFor="ContentPlaceHolder1_q_list_1">در قسمت body صفحه</label></td>
</tr><tr>
<td><input id="ContentPlaceHolder1_q_list_2" type="radio" name="radio3" value="0" 
                      onChange={this.handleOptionChangeThree} /><label htmlFor="ContentPlaceHolder1_q_list_2">هم در قسمت head و هم قسمت body</label></td>
</tr><tr>
<td><input id="ContentPlaceHolder1_q_list_3" type="radio" name="radio3" value="20" 
                      onChange={this.handleOptionChangeThree} /><label htmlFor="ContentPlaceHolder1_q_list_3">فقط در یک فایل خارجی js.</label></td>
</tr>
</tbody></table>
  

</div>
         </div> 
        
         </div> 
          <hr/>

         
            <div className="row">
           
              <div className="col-md-12">
              <div id="ContentPlaceHolder1_Panel1">
	
  4 - طریقه صحیح تعریف یک تابع در جاوا اسکریپت چگونه است ؟
  <table id="ContentPlaceHolder1_q_list">
<tbody><tr>
<td><input id="ContentPlaceHolder1_q_list_0" type="radio" name="radio4" value="0"  
                      onChange={this.handleOptionChangeFour} /><label htmlFor="ContentPlaceHolder1_q_list_0">()function=myFunction</label></td>
</tr><tr>
<td><input id="ContentPlaceHolder1_q_list_1" type="radio" name="radio4" value="20" 
                      onChange={this.handleOptionChangeFour} /><label htmlFor="ContentPlaceHolder1_q_list_1">()function myFunction</label></td>
</tr><tr>
<td><input id="ContentPlaceHolder1_q_list_2" type="radio" name="radio4" value="0" 
                      onChange={this.handleOptionChangeFour} /><label htmlFor="ContentPlaceHolder1_q_list_2">()function:myFunction</label></td>
</tr><tr>
<td><input id="ContentPlaceHolder1_q_list_3" type="radio" name="radio4" value="0" 
                      onChange={this.handleOptionChangeFour} /><label htmlFor="ContentPlaceHolder1_q_list_3">()func myFunction</label></td>
</tr>
</tbody></table>
</div>
         </div> 
         
         </div> 
         <hr/>
        

         
            <div className="row">
            
              <div className="col-md-12">
              <div id="ContentPlaceHolder1_Panel1">
	
  5 - ساختار صحیح نوشتن یک دستور if برای اجرای کد مورد نظر ، در هنگامی که مقدار متغیر
  i برابر 5 است ، کدام است ؟
  <table id="ContentPlaceHolder1_q_list">
<tbody><tr>
<td><input id="ContentPlaceHolder1_q_list_0" type="radio" name="radio5" value="0" 
                      onChange={this.handleOptionChangeFive} /><label htmlFor="ContentPlaceHolder1_q_list_0">if i=5 code</label></td>
</tr><tr>
<td><input id="ContentPlaceHolder1_q_list_1" type="radio" name="radio5" value="0"
                      onChange={this.handleOptionChangeFive} /><label htmlFor="ContentPlaceHolder1_q_list_1">if i=5 then code</label></td>
</tr><tr>
<td><input id="ContentPlaceHolder1_q_list_2" type="radio" name="radio5" value="0" 
                      onChange={this.handleOptionChangeFive} /><label htmlFor="ContentPlaceHolder1_q_list_2">if i==5 then code</label></td>
</tr><tr>
<td><input id="ContentPlaceHolder1_q_list_3" type="radio" name="radio5" value="20" 
                      onChange={this.handleOptionChangeFive} /><label htmlFor="ContentPlaceHolder1_q_list_3">if (i==5) code</label></td>
</tr>
</tbody></table>
 

</div>
         </div> 
         
         </div> 
        <hr/>

        
         
            */}
{/* <div className="dc">
         <div className="row">
           <div className="col-md-12 ">
           <input  className=" btn waves-effect waves-light " type="submit" disabled={!this.state.selectedOptionOne}onClick={this.handleSubmit} value="دیدن نتایج" />
         </div>
         
</div>

</div> */}

{/* </div> */}
 
       
         {/* <div>
         {this.state.visibility && (
       <Res mark={this.state.mark} tru={this.state.tru} fals={this.state.fals} />
         )}
        </div> */}


    
  
              
        
          

          
    