import React,{Component} from 'react';
import{connect} from 'react-redux';
import{logout} from'../action';

class AccountInfo extends Component{
    logout=()=>{
      const{dispatch}=this.props;
      dispatch(logout())
    };
    render(){
        return(<div>
            <h1>This is a Account</h1>
            Username: {this.props.username}
            <a href="/#" onClick={this.logout}>Log out</a>
            </div>)

    }
}

const mapStateToProps= state=>({
        username: state.username
    }
);

export default connect(mapStateToProps)(AccountInfo);