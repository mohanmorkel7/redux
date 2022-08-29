import { ENDPOINT } from "./api-enums";
import { axiosInstance } from "./axiosClient";

export const AppAPI = {
  getProjectDetails: async () => {
    try {
      // const config = { headers: { "content-type": "application/json" } };
      // const response = await axiosInstance.get(ENDPOINT.GET_USER_DETAILS, config);
      let result = {
        "version": "0.1.0.0",
        "responseCode": "PROJECTLIST-READ-ALL",
        "message": "Successfully read All Project",
        "data": [
          {
            "projectId": 1,
            "projectName": "Smart Wind Power",
            "marketPrice": "0.5",
          },
          {
            "projectId": 2,
            "projectName": "Telengana Wind power",
            "marketPrice": "1.5",
          }, {
            "projectId": 3,
            "projectName": "Kerala Wind Power",
            "marketPrice": "2.5",
          },
        ]
      }

      return result;
    } catch (e) {
      console.info(e)
    }
  },

  // ==================================  Rate  API  =================================
  get_All_Rate: async () => {
    try {
      const config = { headers: { "content-type": "application/json" } };
      const response = await axiosInstance.get(ENDPOINT.RATE_GET_ALL, config);
      return response.data;
    } catch (e) {
      console.info(e)
    }
  },
  getRateView: async (Id: any) => {
    try {
      const config = { headers: { "content-type": "application/json", } };
      const response = await axiosInstance.get(`${ENDPOINT.RATE_SINGLE_RECORD_DETAILS}${Id}`, config);
      return response.data
    }
    catch (e) {
      console.info(e)
    }
  },
  addRate: async (params: any) => {
    try {
      const config = { headers: { "content-type": "application/json", } };
      const req_body = params;
      const response = await axiosInstance.post(ENDPOINT.ADD_RATE, req_body, config);
      return response.data;
    } catch (e) {
      console.info(e);
    }
  },
  rateDelete: async (Id: any) => {
    try {
      const config = { headers: { "content-type": "application/json", } };
      const response = await axiosInstance.get(`${ENDPOINT.RATE_SINGLE_RECORD_DETAILS}${Id}`, config);
      return response.data
    }
    catch (e) {
      console.info(e)
    }
  },

}