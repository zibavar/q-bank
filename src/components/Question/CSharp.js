import React from 'react';
import './Javascript.css';

class CSharp extends React.Component{

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
	
        1 -  برای سربارگذاری یک عملگر، در نام متد  Staticو Public باید از چه کلمه کلیدی استفاده کرد؟
        <table id="ContentPlaceHolder1_q_list">
		<tbody><tr>
			<td><input id="ContentPlaceHolder1_q_list_0" type="radio" name="radio1" value="0" 
                      onChange={this.handleOptionChangeOne} /><label htmlFor="ContentPlaceHolder1_q_list_0">&nbsp; Complex &nbsp;</label></td>
		</tr><tr>
			<td><input id="ContentPlaceHolder1_q_list_1" type="radio" name="radio1" value="20"  
                      onChange={this.handleOptionChangeOne} /><label htmlFor="ContentPlaceHolder1_q_list_1">&nbsp; Operator &nbsp;</label></td>
		</tr><tr>
			<td><input id="ContentPlaceHolder1_q_list_2" type="radio" name="radio1" value="0" 
                      onChange={this.handleOptionChangeOne} /><label htmlFor="ContentPlaceHolder1_q_list_2">&nbsp; Override &nbsp;</label></td>
		</tr><tr>
			<td><input id="ContentPlaceHolder1_q_list_3" type="radio" name="radio1" value="0" 
                      onChange={this.handleOptionChangeOne} /><label htmlFor="ContentPlaceHolder1_q_list_3">&nbsp; Abstract &nbsp;</label></td>
		</tr>
	</tbody></table>
      
    
</div>
              </div>
        
         </div> 
         <hr/>
         


         
            <div className="row">
           
              <div className="col-md-12">
              <div id="ContentPlaceHolder1_Panel1">
	
        2 - کلاس‌هایی که نمی‌توان هیچ شیئ را از آنها نمونه‌سازی کرد و حتما باید به عنوان کلاس پایه برای دیگر کلاس‌ها مورد استفاده قرار گیرند.
               <table id="ContentPlaceHolder1_q_list">
		<tbody><tr>
			<td><input id="ContentPlaceHolder1_q_list_0" type="radio" name="radio2" value="0" 
                      onChange={this.handleOptionChangeTwo} /><label htmlFor="ContentPlaceHolder1_q_list_0">&nbsp; Solution &nbsp;</label></td>
		</tr><tr>
			<td><input id="ContentPlaceHolder1_q_list_1" type="radio" name="radio2" value="0"
                      onChange={this.handleOptionChangeTwo} /><label htmlFor="ContentPlaceHolder1_q_list_1">&nbsp; Console &nbsp;</label></td>
		</tr><tr>
			<td><input id="ContentPlaceHolder1_q_list_2" type="radio" name="radio2" value="0" 
                      onChange={this.handleOptionChangeTwo} /><label htmlFor="ContentPlaceHolder1_q_list_2">&nbsp; Class &nbsp;</label></td>
		</tr><tr>
			<td><input id="ContentPlaceHolder1_q_list_3" type="radio" name="radio2" value="20"  
                      onChange={this.handleOptionChangeTwo} /><label htmlFor="ContentPlaceHolder1_q_list_3">&nbsp; Abstract &nbsp;</label></td>
		</tr>
	</tbody></table>
     

</div>
</div>
         
         </div> 
         <hr/>

         
            <div className="row">
           
              <div className="col-md-12">
              <div id="ContentPlaceHolder1_Panel1">
	
  3 - مفهوم كپسولي بودن چيست ؟<table id="ContentPlaceHolder1_q_list">
<tbody><tr>
<td><input id="ContentPlaceHolder1_q_list_0" type="radio" name="radio3" value="0" 
                      onChange={this.handleOptionChangeThree} /><label htmlFor="ContentPlaceHolder1_q_list_0">رفتار شي در معرض ديد كاربران باشد</label></td>
</tr><tr>
<td><input id="ContentPlaceHolder1_q_list_1" type="radio" name="radio3" value="20" 
                      onChange={this.handleOptionChangeThree} /><label htmlFor="ContentPlaceHolder1_q_list_1">رفتار شي در معرض ديد كاربران نباشد</label></td>
</tr><tr>
<td><input id="ContentPlaceHolder1_q_list_2" type="radio" name="radio3" value="0" 
                      onChange={this.handleOptionChangeThree} /><label htmlFor="ContentPlaceHolder1_q_list_2">شي در مورد نحوه نمايش دادن خود اطلاعاتي در اختيار كاربر قرار دهد</label></td>
</tr><tr>
<td><input id="ContentPlaceHolder1_q_list_3" type="radio" name="radio3" value="0" 
                      onChange={this.handleOptionChangeThree} /><label htmlFor="ContentPlaceHolder1_q_list_3">شي بتواند به صورت پويا تغيير كند</label></td>
</tr>
</tbody></table>
  

</div>
         </div> 
        
         </div> 
          <hr/>

         
            <div className="row">
           
              <div className="col-md-12">
              <div id="ContentPlaceHolder1_Panel1">
	
  4 -  پارامتر object  درخاصیت Data Bindings بیانگر چیست؟
  <table id="ContentPlaceHolder1_q_list">
<tbody><tr>
<td><input id="ContentPlaceHolder1_q_list_0" type="radio" name="radio4" value="0"  
                      onChange={this.handleOptionChangeFour} /><label htmlFor="ContentPlaceHolder1_q_list_0">مکان منبع داده ها</label></td>
</tr><tr>
<td><input id="ContentPlaceHolder1_q_list_1" type="radio" name="radio4" value="20" 
                      onChange={this.handleOptionChangeFour} /><label htmlFor="ContentPlaceHolder1_q_list_1">کنترل متصل به منبع داده ها</label></td>
</tr><tr>
<td><input id="ContentPlaceHolder1_q_list_2" type="radio" name="radio4" value="0" 
                      onChange={this.handleOptionChangeFour} /><label htmlFor="ContentPlaceHolder1_q_list_2">نام منبع داده ها</label></td>
</tr><tr>
<td><input id="ContentPlaceHolder1_q_list_3" type="radio" name="radio4" value="0" 
                      onChange={this.handleOptionChangeFour} /><label htmlFor="ContentPlaceHolder1_q_list_3">نام فیلد از منبع داده ها </label></td>
</tr>
</tbody></table>
</div>
         </div> 
         
         </div> 
         <hr/>
        

         
            <div className="row">
            
              <div className="col-md-12">
              <div id="ContentPlaceHolder1_Panel1">
	
  5 - استیل هر سلول  Data Grid View  به وسیله شی ای از نوع .......... تعیین می شود.
  <table id="ContentPlaceHolder1_q_list">
<tbody><tr>
<td><input id="ContentPlaceHolder1_q_list_0" type="radio" name="radio5" value="0" 
                      onChange={this.handleOptionChangeFive} /><label htmlFor="ContentPlaceHolder1_q_list_0">&nbsp; AlignCellStyle &nbsp;</label></td>
</tr><tr>
<td><input id="ContentPlaceHolder1_q_list_1" type="radio" name="radio5" value="0"
                      onChange={this.handleOptionChangeFive} /><label htmlFor="ContentPlaceHolder1_q_list_1">&nbsp; DataCellStyle &nbsp;</label></td>
</tr><tr>
<td><input id="ContentPlaceHolder1_q_list_2" type="radio" name="radio5" value="20" 
                      onChange={this.handleOptionChangeFive} /><label htmlFor="ContentPlaceHolder1_q_list_2">&nbsp; DataGridViewCellStyle &nbsp;</label></td>
</tr><tr>
<td><input id="ContentPlaceHolder1_q_list_3" type="radio" name="radio5" value="0" 
                      onChange={this.handleOptionChangeFive} /><label htmlFor="ContentPlaceHolder1_q_list_3">&nbsp; DataGridViewStyle &nbsp;</label></td>
</tr>
</tbody></table>
 

</div>
         </div> 
         
         </div> 
        <hr/>
         
           
              <div className="row">
           
        
            <div className="col-md-12">
            <button type="button" onClick={this.handleSubmit} className="btn btn-success">دیدن نتیجه</button>
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
    export default CSharp;