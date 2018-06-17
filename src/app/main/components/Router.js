import React from 'react';
import {Route, Switch} from 'react-router-dom';

import AccountContainer from "../../signIn/container/AccountContainer";
import TransactionContainer from "../../transaction/containers/TransactionContainer";
import GetDataContainer from "../../showRegistered/containers/GetDataContainer";
import RegisterContainer from "../../register/containers/RegisterContainer";

import HomePage from "./HomePage";
import NotFound from "./NotFound";

const AppRoute =()=>(
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/account/register" component={RegisterContainer}/>
        <Route exact path="/account" component={AccountContainer}/>
        <Route exact path="/transaction" component={TransactionContainer}/>
        <Route exact path="/getData" component={GetDataContainer}/>
        <Route component={NotFound}/>
    </Switch>
);

export default AppRoute