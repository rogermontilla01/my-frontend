import axiosIns from "../Config/axios";

export async function UserSingup(values) {
    await axiosIns.post('users/signin', values);
}

export async function UserSales(data) {
    await axiosIns.post('sales/createsale', data);
}

export function UserById(id){
    return axiosIns.get('users/by-id/'+id, {
        timeout: 5000,
    })
}

export function getUserSales(id){
    return axiosIns.get('sales/by-user/'+id, {
        timeout: 5000,
    })
}