
import { api } from "./configs/axiosConfigs"
import { defineCancelApiObject } from "./configs/axiosUtils"

export const TenantAPI = {
 
  getAll: async function (cancel = false) {
    const response = await api.request({
      url: "/tenants",
      method: "GET",

    })
    console.log(response);
    return response;
  },

  }

// defining the cancel API object for TenantAPI
const cancelApiObject = defineCancelApiObject(TenantAPI)