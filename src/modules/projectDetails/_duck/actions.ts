import actionTypes from "./action-types";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from 'redux';
import { AppAPI } from '../../../utility/services';

const tempActionsTypes = actionTypes();


const getProjectDetailsData = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getSate: any) => {
    // dispatch({
    //     type: tempActionsTypes.ERROR_USER_DETAILS_DATA,
    //     payload: false
    // })

    return await AppAPI.getProjectDetails().then((res: any) => {
      dispatch({
        type: tempActionsTypes.GET_USER_DETAILS_DATA,
        payload: res.data
    })
    }).catch((error: any) => {
        dispatch({
            type: tempActionsTypes.ERROR_USER_DETAILS_DATA,
            payload: false
        })
    })

}

export { getProjectDetailsData }