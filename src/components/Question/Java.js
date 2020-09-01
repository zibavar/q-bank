import React from 'react';
import './Javascript.css';

class Java extends React.Component{

  constructor (props) {
    super(props);

   
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleOptionChangeOne=this.handleOptionChangeOne.bind(this);
    this.handleOptionChangeTwo=this.handleOptionChangeTwo.bind(this);
    this.handleOptionChangeThree=this.handleOptionChangeThree.bind(this);
    this.handleOptionChangeFour=this.handleOptionChangeFour.bind(this);
    this.handleOptionChangeFive=this.handleOptionChangeFive.bind(this);

    this.state = {
      selectedOptionOne :'',
      selectedOptionTwo :'',
      selectedOptionThree :'',
      selectedOptionFour :'',
      selectedOptionFive :'',
      mark :'',
      grade :''
      
    };
    }

   

    handleSubmit(event) {
      event.preventDefault();
  
     
     this.setState((prevState) =>{
      return{
  
        item1 :this.state.selectedOptionOne,
        item2 :this.state.selectedOptionTwo,
        item3 :this.state.selectedOptionThree,
        item4 :this.state.selectedOptionFour,
        item5 :this.state.selectedOptionFive,
        selectedOptionOne :"",
        selectedOptionTwo :"",
        selectedOptionThree:"",
        selectedOptionFour:"",
        selectedOptionFive:"",
        mark : parseInt(this.state.selectedOptionOne,10) + parseInt(this.state.selectedOptionTwo,10) +
        parseInt(this.state.selectedOptionThree,10) + parseInt(this.state.selectedOptionFour,10) + parseInt(this.state.selectedOptionFive,10) ,
        
    
  } 
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
    render(){
      

       
      return(

        <div>
          <div className="container">
          
            <div className="row">
            
              <div className="col-md-12">
              <div id="ContentPlaceHolder1_Panel1">
	
        1 - در کدام تگ HTML ، دستورات جاوا اسکریپت قرار داده می شوند ؟
        <table id="ContentPlaceHolder1_q_list">
		<tbody><tr>
			<td><input id="ContentPlaceHolder1_q_list_0" type="radio" name="radio1" value="0" 
                      onChange={this.handleOptionChangeOne} /><label htmlFor="ContentPlaceHolder1_q_list_0">&lt; js &gt;</label></td>
		</tr><tr>
			<td><input id="ContentPlaceHolder1_q_list_1" type="radio" name="radio1" value="0"  
                      onChange={this.handleOptionChangeOne} /><label htmlFor="ContentPlaceHolder1_q_list_1">&lt; javascript &gt;</label></td>
		</tr><tr>
			<td><input id="ContentPlaceHolder1_q_list_2" type="radio" name="radio1" value="0" 
                      onChange={this.handleOptionChangeOne} /><label htmlFor="ContentPlaceHolder1_q_list_2">&lt; scripting &gt;</label></td>
		</tr><tr>
			<td><input id="ContentPlaceHolder1_q_list_3" type="radio" name="radio1" value="20" 
                      onChange={this.handleOptionChangeOne} /><label htmlFor="ContentPlaceHolder1_q_list_3">&lt; script &gt;</label></td>
		</tr>
	</tbody></table>
      
    
</div>
              </div>
        
         </div> 
         <hr/>
         


         
            <div className="row">
           
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
         
           
              <div className="row">
            <div className="col-md-5">
            </div>
            
        
            <div className="col-md-2">
            <button type="button" onClick={this.handleSubmit} className="btn btn-success">دیدن نتیجه</button>
            </div>

<div className="col-md-5">
</div>
</div>

</div>
<div>
<h2> {this.state.mark}</h2>
</div>
          
</div>
          
      );
    }
    
    }
    export default Java;