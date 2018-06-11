import React, {Component} from 'react';

export default class Transactions extends Component {
    render() {
        if (this.props.username === null) {
            return (<div className="grid-container">
                <div className="grid-x align-center">
                    Sie müssen einloggen!
                </div>
            </div>)
        }
        return (<div className="grid-container">
            <div className="grid-x align-center">
                <h1 className="success">This is Transaction</h1>
            </div>
        </div>)
    }
}