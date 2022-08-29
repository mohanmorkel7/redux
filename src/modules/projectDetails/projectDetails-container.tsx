import React from 'react';
import { connect } from "react-redux";
import { getProjectDetailsData } from "./_duck/actions";
import ProjectDetailComponent from './projectDetails';
import { projectDetailsProps } from './projectDetails-interface';

class ProjectDetailsContainer extends React.Component<projectDetailsProps, any> {
    render() {
        return (<div className="card-content">
            <ProjectDetailComponent  {...this.props}></ProjectDetailComponent>
        </div>)
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    const projectApplication = state.app;
    return {
        projectApp: projectApplication,
        projectList: projectApplication.ProjectApp.projectDetails.getProjectDetail
    };

};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getProjectDetailsData: () => dispatch(getProjectDetailsData())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectDetailsContainer);