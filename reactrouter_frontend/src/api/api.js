import axios from 'axios';

const url_task = 'http://localhost:8000/users';;

export const getdata = async(id)=>{
        id=id || " "
        return axios.get(`${url_task}/${id}`);
}
export const adddata = async(fname,lname,email,phone_no)=>{
        return axios.post(`${url_task}`,fname,lname,email,phone_no);
}
export const deletedata = async(id)=>{
        return axios.delete(`${url_task}/${id}`);
}
export const editdata = async(id,fname,lname,email,phone_no)=>{
        return axios.patch(`${url_task}/${id}`,fname,lname,email,phone_no);
}