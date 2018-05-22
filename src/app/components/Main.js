import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import HomePage from "./HomePage";
import AccountContainer from "../container/AccountContainer";
import TransactionContainer from "../container/TransactionContainer";
import Nav from "./Nav";
import NotFound from "./NotFound";


class Main extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        axios.get('/getInfo')
            .then(res => {
                console.log(res.data);
                if (res.data !== 'CHUA_DANG_NHAP') {
                    dispatch({type: 'LOG_IN', username: res.data});
                    console.log(res.data);
                }

            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <h1>This is Main</h1>
                    <Nav/>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/account" component={AccountContainer}/>
                        <Route exact path="/transaction" component={TransactionContainer}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default connect()(Main);