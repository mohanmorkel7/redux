import actionTypes from "./action-types";
import {combineReducers} from 'redux'

const tempActionsTypes = actionTypes();


export const getProjectDetailReducer = (state: any = [], action: any) => {
    if (action.type === tempActionsTypes.GET_USER_DETAILS_DATA) {
        return action.payload;
    }
    return state;
}


export const projectDetailsComponentReducer = combineReducers({
    getProjectDetail :getProjectDetailReducer
})