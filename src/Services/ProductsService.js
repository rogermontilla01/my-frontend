import axiosIns from "../Config/axios";

export function getProds() {
  return axiosIns.get("products/", {
    timeout: 5000
  });
}
