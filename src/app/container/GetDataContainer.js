import {connect} from 'react-redux';

import GetData from "../components/GetData";
import {fetchData} from '../action';

const mapStateToProps = state => {
    const {username} = state;
    const {data, dataFetched, isFetching, error} = state.data;
    return {username,data, dataFetched, isFetching, error}
};
const mapDisPatchToProps = {
    fetchData: fetchData
};
export default connect(mapStateToProps, mapDisPatchToProps)(GetData);