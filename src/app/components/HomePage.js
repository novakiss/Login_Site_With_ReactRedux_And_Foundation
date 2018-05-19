import React,{Component} from 'react';
import axios from 'axios';
export default class HomePage extends Component{
    getRequest=()=>{
        /*axios.get('http://localhost:8080/try')
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err))*/
        axios.post('http://localhost:8080/trypost',{username:'KHOAPHAM'})
            .then(res=>console.log(res.data))
            .catch(err=>{
                console.log("Fehler");
                console.log(err)
            })

    };
    render(){
        return (<div>
            <h1>This is HomePage</h1>
            <button onClick={this.getRequest}>request</button>
        </div>)
    }
}