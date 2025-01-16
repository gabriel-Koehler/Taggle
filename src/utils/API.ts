import axios from "axios";

const api=axios.create({
  baseURL:"http://localhost:8080"
})
export const get =async()=>{
  return await api.get("/user")
  .then((response)=>{
    return JSON.stringify(response.data);
  })
  .catch((error)=>{
    console.log(error)
  });
}