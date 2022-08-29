import { combineReducers } from 'redux';
import { rateComponentReducer } from '../../modules/rate/_duck/reducers';
import { projectDetailsComponentReducer } from '../../modules/projectDetails/_duck/reducers';


const ProjectAppReducer = combineReducers({
    projectDetails: projectDetailsComponentReducer,
    rateDetails:rateComponentReducer
})

export default ProjectAppReducer;