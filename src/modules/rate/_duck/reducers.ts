import actionTypes from "./action-types";
import {combineReducers} from 'redux'

const tempActionsTypes = actionTypes();

export const getAllRateReducer = (state: any = [], action: any) =>{
    if (action.type === tempActionsTypes.RATE_GET_ALL) {
        return action.payload;
    }
    return state;
}

export const rateViewDetailsReducer = (state:any={},action:any)=>{
        if(action.type===tempActionsTypes.RATE_SINGLE_RECORD_DETAILS){
            return action.payload
        }
        return state;
}



export const rateComponentReducer = combineReducers({
    RateDataList:getAllRateReducer,
    rateView:rateViewDetailsReducer
})