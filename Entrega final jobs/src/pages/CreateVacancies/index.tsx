import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../Components/Admin/HeaderAdminPage";
import { Footer } from "../../Components/Footer";
import imagemBackPage from "../../assets/back_to_login.svg";
import imagePlusButton from "../../assets/Circle+Admin.png";
import { StyleDivVacancies } from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyleErrorsInputs, StyleTitles } from "../../styles/Typography";
import { StyledInput } from "../../Components/Input/style";

export const CreateVacancies = () => {
  const navigate = useNavigate();

  interface UserInfo {
    accessToken: string;
    user: {
      email: string;
      id: number;
      name: string;
    };
  }

  interface inputVacancies {
    position: string;
    sallary: number;
    description: string;
  }

  let userId = {};
  let token = {};

  const storedUserInfo = localStorage.getItem("UserInfo");
  let parsedUserInfo: UserInfo | null = null;
  if (storedUserInfo) {
    parsedUserInfo = JSON.parse(storedUserInfo) as UserInfo;

    userId = parsedUserInfo.user.id;
    token = parsedUserInfo.accessToken;
  }

  const vacancieSchema = z.object({
    position: z.string().nonempty("Campo obrigatorio"),
    description: z.string().nonempty("Campo obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<inputVacancies>({
    resolver: zodResolver(vacancieSchema),
  });

  const createVacancie: SubmitHandler<inputVacancies> = (data) => {
    const postVacancie = {
      userId: userId,
      position: data.position,
      sallary: data.sallary,
      description: data.description,
    };

    const requestVacancie = async () => {
      try {
        const { data } = await api.post("/jobs/", postVacancie, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        toast.success("Vaga criada com sucesso");
        data;
        reset();
        navigate("/my_jobs_dashboard");
      } catch (error) {
        toast.error("Ops! algo deu errado");
      }
    };
    requestVacancie();
  };

  return (
    <>
      <StyleDivVacancies>
        <Header />

        <main className="vocanciesMain">
          <div className="vocanciesMain__back">
            <img src={imagemBackPage} alt="" />
            <Link
              className="vocanciesMain__back--link"
              to={"/my_jobs_dashboard"}
            >
              voltar
            </Link>
          </div>

          <div className="vocanciesMain__div">
            <form
              onSubmit={handleSubmit(createVacancie)}
              className="vocanciesMain__form"
            >
              <div className="vocanciesMain__form--Title">
                <StyleTitles>Criar vaga</StyleTitles>
              </div>
              <StyleErrorsInputs>{errors.position?.message}</StyleErrorsInputs>
              <StyledInput
                type="text"
                placeholder="Cargo"
                {...register("position")}
              />
              <StyledInput
                type="number"
                className="vocanciesMain__form--inputSallary"
                placeholder="Salário (opcional)"
                {...register("sallary")}
              />
              <StyleErrorsInputs>
                {errors.description?.message}
              </StyleErrorsInputs>
              <textarea
                className="InputDescription"
                placeholder="Descrição"
                {...register("description")}
              />
              <div className="vocanciesMain__form--buttonCreate">
                <button className="vocanciesMain__form--button">
                  <img src={imagePlusButton} alt="" />
                  Criar vagas
                </button>
              </div>
            </form>
          </div>
        </main>

      </StyleDivVacancies>
        <Footer />
    </>
  );
};
