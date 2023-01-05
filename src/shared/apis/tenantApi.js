import { api } from "./configs/axiosConfigs"
import { defineCancelApiObject } from "./configs/axiosUtils"

export const TenantAPI = {
 
  getAll: async function (cancel = false) {
    await api.request({
      url: "/test",
      method: "GET",

    }).then(
        response => {return response.data})
  },

  }

// defining the cancel API object for TenantAPI
const cancelApiObject = defineCancelApiObject(TenantAPI)