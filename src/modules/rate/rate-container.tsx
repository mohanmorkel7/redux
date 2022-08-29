import React from 'react';
import { connect } from "react-redux";
import Rate from './rate';
import { rateProps } from './rate-interface';
import { getAllRate, rateViewDetails } from './_duck/actions';


class RateContainer extends React.Component<rateProps>{
    render() {
        return (
            <>
                <Rate {...this.props}></Rate>
            </>
        )
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    const uGauageApplication = state.app.uGaugeApp;
    console.log('rate State', state);
    return {
         rateDataList: uGauageApplication.rateDetails.RateDataList
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        getAllRateAction:() => dispatch(getAllRate()),
        rateViewDetailsAction:(id:any)=>dispatch(rateViewDetails(id))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RateContainer)


