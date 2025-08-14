import Axios, { AxiosInstance } from "axios";
import { config } from "./config";

export const axiosMaker: AxiosInstance = Axios.create({
  baseURL: config.github_api,
  maxRedirects: 5,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export const axiosBaseUrlConfig = (baseURL: string) => {
  axiosMaker.defaults.baseURL = baseURL;
  axiosMaker.defaults.withCredentials = true;
};

export default axiosMaker;
