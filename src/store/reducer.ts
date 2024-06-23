// third-party
import { combineReducers } from 'redux';

// project imports
import authReducer from './slices/auth'
// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    authReducer
});

export default reducer;
