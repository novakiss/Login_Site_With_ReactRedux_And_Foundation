import React, {Component} from 'react';


export default class GetData extends Component {
    getData = () => {
        this.props.fetchData();
    };

    render() {
        const{username}=this.props;
        if(username ===null){
            return (<div>Sie müssen einloggen. Try username:'khoapham' va password: '123'</div>)
        }
        return (
            <div className="grid-container">
                <div className="grid-x grid-y align-middle">
                    <button className="button" onClick={this.getData}>GetData</button>
                    {
                        this.props.isFetching && <div>Loading</div>
                    }
                    {
                        this.props.data.length ? (
                            this.props.data.map((person, i) => {
                                return <div key={i}>
                                    <div>Name: {person.name}</div>
                                    <div>Age: {person.age}</div>
                                </div>
                            })
                        ) : null
                    }
                </div>
            </div>
        )
    }
}