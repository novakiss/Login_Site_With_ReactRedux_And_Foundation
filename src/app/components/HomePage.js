import React,{Component} from 'react';
import axios from 'axios';

export default class HomePage extends Component{
    componentDidMount(){
        axios.get('http://localhost:3000/ping')
            .then(res=>{
                console.log(res.data)
            })
            .catch(err=>console.log(err))
    }
    pong(){
        axios.get('http://localhost:3000/pong')
            .then(res=>{
                console.log(res.data)
            })
            .catch(err=>console.log(err))
    };
    render(){
        return (<div>
            <h1>This is HomePage</h1>
            <button onClick={this.pong.bind(this)}>Ping</button>


        </div>)
    }
}