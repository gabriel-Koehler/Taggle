import axios from "axios";
import { UserTaggle } from "@/types/Types";
const api=axios.create({
  baseURL:"http://localhost:9999/",
})
export const getAll =async()=>{
  try{
    const response =await api.get("/user")
    return response.data
  }catch(error){
    alert(error)
  }
}
export const getDocuments=async()=>{
  try{
    const response =await api.get("/documents")
    return response.data
  }catch(error){
    alert(error)
  }
}
export const register=async(username:string,password:string)=>{
  try{
    const response =await api.post("/signin",
      {"username": username, "password":password},
      {withCredentials:true})
    console.log(response);
    return response.data
  }catch(error){
    alert(error)
  }
}

export const login=async(username:string,password:string)=>{
  try{
    const response =await api.post("/signin",
      {"username": username, "password":password},
      {withCredentials:true})
    console.log(response);
    return response.data
  }catch(error){
    alert(error)
  }
}