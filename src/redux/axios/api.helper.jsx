import axios from "axios";
import { NotificationManager } from "react-notifications";
import { REACT_APP_API_END_POINT } from "../../components/commmon/constant";

const instance = axios.create({
  baseURL: REACT_APP_API_END_POINT,

  // baseURL: "http://107.23.249.46/kaptureILA/api/",
  // baseURL: "https://mmfinfotech.co/kaptureILA/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((request) => {
  try {
    let token = sessionStorage.getItem("token");
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  } catch (error) {
    console.error("Error fetching token:", error);
    return Promise.reject(error);
  }
});

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log("error", error);

    if (error.response && error.response.status === 401) {
      console.error("Unauthorized access:", error);
    } else {
      NotificationManager.error("Something went wrong !");
    }

    return Promise.reject(error);
  }
);

export default instance;
