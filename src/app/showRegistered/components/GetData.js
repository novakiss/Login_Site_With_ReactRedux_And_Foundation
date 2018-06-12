import React, {Component} from 'react';


export default class GetData extends Component {
    getData = () => {
        this.props.fetchData();
    };

    render() {
        const {username} = this.props;
        const {data, isFetching} = this.props;
        if (username !== 'admin') {
            return (<div className="grid-container">
                <div className="grid-x align-center">
                    Sie sind nicht Admin. Wenn Sie admin sind, loggen Sie bitten ein.
                </div>
            </div>)
        }
        return (
            <div className="grid-container">
                <div className="grid-x grid-y align-middle">
                    <button className="button" onClick={this.getData}>GetData</button>
                    {
                        isFetching && <div>Loading</div>
                    }
                    {
                        data.allId ? (<table>
                            <thead>
                            <tr>
                                <th width="200">Vorname</th>
                                <th width="150">Nachname</th>
                                <th width="150">Username</th>
                            </tr>
                            </thead>
                            <tbody>
                                {data.allId.map((id) =>
                                    (<tr key={id}>
                                        <td>{data.user[id].firstName}</td>
                                        <td>{data.user[id].lastName}</td>
                                        <td>{data.user[id].username}</td>
                                    </tr>)
                                )}
                            </tbody>
                        </table>) : null
                    }
                </div>
            </div>
        )
    }
}