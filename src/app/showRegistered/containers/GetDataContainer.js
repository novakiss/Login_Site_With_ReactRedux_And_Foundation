import {connect} from 'react-redux';

import GetData from "../components/GetData";
import {fetchData} from '../actions';

const mapStateToProps = state => {
    const {username} = state.login;
    const {data, dataFetched, isFetching, error} = state.data;
    return {data, dataFetched, isFetching, error,username}
};
const mapDisPatchToProps = {
    fetchData: fetchData
};
export default connect(mapStateToProps, mapDisPatchToProps)(GetData);