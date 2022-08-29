import React from 'react';
import { Routes, Route } from "react-router-dom"
import Dashboard from "../modules/dashboard/dashboard";
import ProjectDetailsContainer from '../modules/projectDetails/projectDetails-container';
import RateContainer from "../modules/rate/rate-container";
// const RouterConfig = () => {
export default ( props: any ) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/projectDetails"  element={<ProjectDetailsContainer   {...props} />}  />
                <Route path="/rate"  element={<RateContainer   {...props} />}  />
            </Routes>
        </>
    )
}

// export default RouterConfig;