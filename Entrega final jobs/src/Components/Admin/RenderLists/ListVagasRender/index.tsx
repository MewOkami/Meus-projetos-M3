import {  useEffect, useState } from "react";
import { StyledList } from "./style";
import axios from "axios";
import { api } from "../../../../services/api";
import { toast } from "react-toastify";
import Trash from "../../../../assets/Trash.svg"
import Edit from "../../../../assets/Edit.svg"
import { useNavigate } from "react-router-dom";

interface UserInfo {
  accessToken: string;
  user: {
    email:string,
    id:number,
    name:string,
  };
}

interface MeuObjeto {
  prop1: string;
  prop2: number;
  id:string;
  position:string;
}



let IdInterprise = 0


export const JobsVagasRender = () => {
  const [token, setToken] = useState<string | null>(null);
  const [listVagas, setListVagas] = useState<[] | null>([]);

  const VagaDelete = (target: EventTarget) => {
    const element = target as HTMLElement;
    if (element && element.id) {
      const id = parseInt(element.id, 10); // Converter a string para um número
      if (element.style.border === '1px solid red') {
        requestDeleteApi(id);
        element.style.border = 'none';
        return;
      }
      toast.error("Clique Novamente Para Excluir");
      element.style.border = '1px solid red';
      setTimeout(() => {
        element.style.border = 'none';
      }, 3000);
    }
  };
  
  

  const requestDeleteApi = async (Id:number)=>{
    console.log(Id)
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await api.delete(`/jobs/${Id}`, config);
      console.log(response)
      toast.success("Vaga Excluida")
      setTimeout(() => {
       reloadPage()
      }, 1000);
    } 
    catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data)
      }
    }
  }
  const navigate = useNavigate()

  const reloadPage = ()=>{
    location.reload();
  }

  const VagaEdit = (target: EventTarget) => {
    const element = (target as HTMLElement).parentNode;
    const parentText = element?.parentElement?.textContent;
    if (parentText && element && element instanceof HTMLElement) {
      const editingId = { id: element.id }; 
      const editingIDJSON = JSON.stringify(editingId);
      localStorage.setItem('idEditing', editingIDJSON);

      const editingData = { text: parentText }; 
      const editingDataJSON = JSON.stringify(editingData);
      localStorage.setItem('Editing', editingDataJSON);
      navigate('/editing_vaga');
    }
  };

useEffect(()=>{

  const storedUserInfo = localStorage.getItem("UserInfo");
  let parsedUserInfo: UserInfo | null = null;
  if (storedUserInfo != null) {
    parsedUserInfo = JSON.parse(storedUserInfo) as UserInfo;
    IdInterprise = parsedUserInfo.user.id
    setToken(parsedUserInfo.accessToken)
  }
  


  const requestVagas = async () => {
    const tokenInfo = token; 
    const config = {
      headers: {
        Authorization: `Bearer ${tokenInfo}`,
      },
    };
    try {
      const response = await api.get(`users/${IdInterprise}/jobs`, config);
      setListVagas(response.data)
    } 
    catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        // adicionar toast de error
      }
    }
  };
  requestVagas()
},[token])


  return (
    <StyledList>
      <ul>
        {listVagas && listVagas.length > 0 ? listVagas.map((item:MeuObjeto, index:number) => (
          <li key={index} id={item.id}>
            <h1>{item.position}</h1>
            <span className="icons" id={item.id}>
              <img className="Icon" id={item.id} onClick={(event) => VagaEdit(event.target)} src={Edit} alt="" />
              <img className="Icon" id={item.id} onClick={(event) => VagaDelete(event.target)} src={Trash} alt="" />
            </span>
          </li>
        )) 
        :<div className="noList"><h1>Nenhuma Vaga Listada</h1></div>}
      </ul>
    </StyledList>
  );
};
