import axios from "axios";
const axiosIns = axios.create({
  baseURL: "http://localhost:3001/"
});

axiosIns.defaults.headers.common["x-access-token"] = localStorage.getItem("token");
axiosIns.defaults.headers.post["Content-Type"] = "application/json";

export default axiosIns;
