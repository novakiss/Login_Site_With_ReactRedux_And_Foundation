import React, {Component} from 'react';
import SignInContainer from "../container/SignInContainer";
import AccountInfoContainer from "../container/AccountInfoContainer";

export default class Account extends Component {
    render() {
        const {username} = this.props;
        const xhtml = username === null ? <SignInContainer/> : <AccountInfoContainer/>;
        return (
            <div className="grid-container">
                {xhtml}
            </div>
        )

    }
}