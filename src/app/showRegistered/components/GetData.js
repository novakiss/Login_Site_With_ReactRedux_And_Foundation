import React, {Component} from 'react';


export default class GetData extends Component {
    getData = () => {
        this.props.fetchData();
    };

    render() {
        const {admin} = this.props;
        if (!admin) {
            return (<div className="grid-container">
                <div className="grid-x align-center">
                    Sie sind nicht Admin. Wenn Sie admin sind, loggen Sie bitten ein.
                </div>
            </div>)
        }
        const {data, isFetching} = this.props;
        return (
            <div className="grid-container">
                <div className="grid-x grid-y align-middle">
                    <button className="button" onClick={this.getData}>GetData</button>
                    {
                        isFetching && <div>Loading</div>
                    }
                    {
                        data.allId ? (
                            data.allId.map((id) =>
                                (<div key={id}>
                                    Username:{data.user[id].username}
                                </div>)
                            )
                        ) : null
                    }
                </div>
            </div>
        )
    }
}