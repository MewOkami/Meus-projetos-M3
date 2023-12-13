import { useForm, SubmitHandler } from 'react-hook-form';
import { Header } from "../../Components/Admin/HeaderAdminPage";
import { StyleEditVaga } from "./style";
import { Footer } from "../../Components/Footer";
import arrow from "../../assets/Arrow.svg"
import { useNavigate } from "react-router-dom";
import { api } from '../../services/api';
import axios from 'axios';
import { toast } from 'react-toastify';

type FormData = {
  position: string;
  sallary: number;
  description: string;
};

let NameInterprise = '';
let IdEditing = '';
let token = ''
export const EditVaga = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const navigate = useNavigate();
  const userinfo = localStorage.getItem('UserInfo');
  const IdEdit = localStorage.getItem('idEditing');

  if (IdEdit) {
    const parsed = JSON.parse(IdEdit);
    IdEditing = parsed.id
  }

  if (userinfo) {
    const parsed = JSON.parse(userinfo);
    token = parsed.accessToken
  }
  const User = localStorage.getItem('Editing');
    
  if (User) {
    const parsed = JSON.parse(User);
    NameInterprise = parsed.text;
  }

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await api.put(`/jobs/${IdEditing}`, data, config);
      console.log(response)
      toast.success('Vaga Salva')
      navigate('/my_jobs_dashboard')
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        toast.error(error.response?.data)
      }
    }
  };
  

  return (
    <>
      <StyleEditVaga>
        <Header />
        <span onClick={() => navigate("/my_jobs_dashboard")} className="backBTN">
          <img src={arrow} alt="" />
          <h1 className="titleBack">Voltar</h1>
        </span>
        <span className="TitleEditing">Editando: {NameInterprise}</span>

        <form className="InputsEditing" onSubmit={handleSubmit(onSubmit)}>
          <section>
            <div className="inputs">
             <div>
             <input className="InputEntry" type="text" placeholder="Cargo" {...register('position', { required: true })} />
              {errors.position && <span className="error">Preencha o campo Cargo</span>}
             </div>
             <div>
             <input className="InputEntry" type="number" placeholder="Salario" {...register('sallary', { required: true })} />
              {errors.sallary && <span className="error">Preencha o campo Salário</span>}
             </div>
            </div>
            <div>
            <textarea placeholder="Descrição" {...register('description', { required: true })}></textarea>
            {errors.description && <span className="error">Preencha o campo Descrição</span>}
            </div>
          </section>
          <div className="ButonSaveDiv">
            <button className="SaveEditing" type="submit">Editar Vaga</button>
          </div>
        </form>
      </StyleEditVaga>
      <Footer/>
    </>
  );
};
