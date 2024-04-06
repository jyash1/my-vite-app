import axios from "axios";
import { isEmpty } from "lodash";

import { toast } from "react-toastify";

import { baseName } from "components/common/constant";

import { REACT_APP_API_END_POINT } from "../../components/commmon/constant";
import { clearSession, getSession } from "../../service/services";

const AxiosDefault = async ({ method, data, url, contentType }) => {
    const APIENDPOINT = REACT_APP_API_END_POINT;

  const AxiosDefault = axios.create({
    baseURL: APIENDPOINT,
    headers: {
      "Content-Type": isEmpty(contentType) ? "application/json" : contentType,
      Accept: "application/json",
    },
  });

  AxiosDefault.interceptors.request.use(
    async function (config) {
      try {
        const { Authorization } = getSession() ?? "";
        config.headers.authorization = `Bearer ${Authorization}`;
      } catch (err) {
        console.log("config error ======>", err);
      }
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  AxiosDefault.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      if (error.response.status === 401) {
        try {
          clearSession();
          localStorage.clear();
          toast.error("You are unauthorized user");
          window.location.replace(baseName);
          window.location = baseName;
        } catch (e) {
          return e;
        }
      }
      return Promise.reject(error);
    }
  );
  return await AxiosDefault({
    method,
    data,
    url,
    contentType,
  });
};

export default AxiosDefault;
