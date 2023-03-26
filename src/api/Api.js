import axios from "axios";
import config from "../reduxsaga/config/config";

const baseURL = config.domain; // ubah dengan URL yang benar

const api = axios.create({
  baseURL,
});

api.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return Promise.resolve(response);
    }
    return Promise.reject(response);
  },
  (error) => {
    const { response } = error;
    if (response) {
      return Promise.reject(response);
    }
    return Promise.reject(error);
  }
);

export default api;
