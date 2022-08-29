import { combineReducers } from 'redux';
import ProjectAppReducer from './reducersCollections/reducer';

const AppReducers = combineReducers({
    ProjectApp: ProjectAppReducer
})

export type AppState = ReturnType<typeof AppReducers>
export default AppReducers;
