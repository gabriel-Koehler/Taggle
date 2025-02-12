import axios from "axios";
import { setCookie, getCookie } from 'cookies-next';
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
  }finally{
    refreshToken()
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
    setCookie("token",response.data.token);
    return response.data
    // return response.data.
  }catch(error){
    alert(error)
  }
}
const getCurrentToken = () => getCookie("token");

// Função para atualizar o token
const refreshToken = async () => {
  const token = getCurrentToken();

  if (!token) {
    throw new Error("No token found");
  }

  try {
    // Envia o token atual para a API de refresh
    console.log(token);
    
    const response = await api.post(
      "/refresh",
      token, 
      { headers: { Authorization: `Bearer ${token}` } }
    );

    // Atualiza o cookie com o novo token
    setCookie("token", response.data.token);
    console.log(response.data.token);
    return response.data.token; // Retorna o novo token
  } catch (error) {
    console.error("Error refreshing token", error);
    throw new Error("Unable to refresh token");
  }
};