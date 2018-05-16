import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
export default class Nav extends Component{
    render(){
        return (<div>
            <ul>
                <li><NavLink exact to="/" activeClassName="selected">HomePage</NavLink></li>
                <li><NavLink exact to="/account" activeClassName="selected">Account</NavLink></li>
                <li><NavLink exact to="/transaction" activeClassName="selected">Transaction</NavLink></li>
            </ul>
        </div>)
    }
}