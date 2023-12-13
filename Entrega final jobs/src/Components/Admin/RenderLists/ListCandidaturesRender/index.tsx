import axios from "axios";
import { toast } from "react-toastify";
import { api } from "../../../../services/api";
import { useEffect } from "react";

let UserId = ''
let token = ''
  export const CandidaturesRender = () => {
  
    const storedUserInfo = localStorage.getItem("UserInfo");
  if (storedUserInfo != null) {
    const  parsedUserInfo = JSON.parse(storedUserInfo) ;
    token = parsedUserInfo.acessToken
    UserId = parsedUserInfo.user.id
  }

  
  useEffect(() => {
    const fetchData = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await api.get(`/applications?userId=${UserId}&_expand=job`, config);
        console.log(response);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.response?.data);
          toast.error(error.response?.data);
        }
      }
    };
  
    fetchData();
  }, []);
    return (
       
        <>
            <ul>
            {/* {list.map((item, index)  => (
            <li key={index}>{item}</li>
      ))} */}
            </ul>
        </>
    )
}