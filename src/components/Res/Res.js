import React from 'react';
import './Res.css';

class Res extends React.Component{
    render(){
        return(
        <div>
             
            <p>نمره از صد = {this.props.mark}</p>
           <p>تعداد درست = {this.props.t}</p>
           <p>تعداد غلط ={this.props.f}</p>
            
        </div>
        );
    }

}
export default Res;
