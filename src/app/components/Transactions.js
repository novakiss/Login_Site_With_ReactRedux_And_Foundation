import React,{Component} from 'react';


export default class Transactions extends Component{
    render(){
        if(this.props.username===null){
            return (<div>Sie müssen einloggen</div>)
        }
        return (<div>
            <h1>This is Transaction</h1>
        </div>)
    }
}