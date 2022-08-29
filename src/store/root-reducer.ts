import { combineReducers } from 'redux'
import AppReducers from '../allReducers/reducer';

const rootReducer = () => combineReducers({
    app: AppReducers
})

export default rootReducer;