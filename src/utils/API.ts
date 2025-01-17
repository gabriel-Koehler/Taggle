import axios from "axios";

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
export const getDocuments