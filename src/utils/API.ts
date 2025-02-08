import axios from "axios";
import { UserTaggle } from "@/types/Types";
// import { cookies } from "next/headers";
import { parseSetCookie } from "next/dist/compiled/@edge-runtime/cookies";
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
export const getFolders=async(token:string,userId:number)=>{
  try{
    
    const response =await api.get(`/documents/get/${userId}`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    )
    console.log(response.data);
    
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
    const response =await api.post("/login",
      {"username": username, "password":password},
      {withCredentials:true})
    console.log(response.data);
    // (await cookies()).set("jwt",response.data.token,{expires:Date.now()+300})
    return response.data
    // return response.data.
  }catch(error){
    alert(error)
  }
}