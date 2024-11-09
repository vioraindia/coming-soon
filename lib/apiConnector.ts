import axios from "axios"

export const axiosInstance = axios.create({});
export const apiConnector = (method:string, url:string, bodyData?:unknown, headers?:unknown, params?:unknown)=>{
  return axiosInstance({
    method:`${method}`,
    url:`${url}`,
    data: bodyData ? bodyData : undefined,
    headers: headers ? headers : undefined,
    params : params ? params : undefined,
    withCredentials: true
  })
}