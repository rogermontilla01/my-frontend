import axiosIns from "../Config/axios";

export async function UserSingup(values) {
    await axiosIns.post('users/signin', values);
}

export async function UserSales(data) {
    await axiosIns.post('sales/createsale', data);
}