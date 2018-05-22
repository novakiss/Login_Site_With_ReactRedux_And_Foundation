import React,{Component} from 'react';

export default class Notification extends Component{
    componentDidMount(){
        setTimeout(()=>{
            this.props.hideNotification();
        },3000)
    }
    render(){
        return (<div>
            <p>{this.props.txt}</p>
        </div>)
    }
}