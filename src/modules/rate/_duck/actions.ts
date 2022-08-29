import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppAPI } from "../../../utility/services";
import actionTypes from "./action-types";

const tempActionsTypes = actionTypes();

const getAllRate = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getSate: any) => {
    return await AppAPI.get_All_Rate().then((res) => {
        console.log('res', res);
        dispatch({
            type: tempActionsTypes.RATE_GET_ALL,
            payload: res.data
        })
    }).catch((error: any) => {
        dispatch({
            type: tempActionsTypes.ERROR_RATE,
            payload: false
        })
    })
}


const rateViewDetails = (Id:any) => async (dispatch:ThunkDispatch<{},{},AnyAction>,getSate:any) =>{
    return await AppAPI.getRateView(Id).then((res)=>{
         dispatch({
             type:tempActionsTypes.RATE_SINGLE_RECORD_DETAILS,
             payload:false
         })
    })
}

export { getAllRate,rateViewDetails }