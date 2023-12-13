import imglogin from "../../../assets/imagem_login.svg";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ColumnImage, ColumnLogin, ContainerLogin, Title } from "./styled";
import { login_form } from "../../Zod/Login/zodLogin";
import { LoginContext } from "../../../providers/loginContext";
import { useContext } from "react";

export interface login_company {
  email: string;
  password: string;
}

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<login_company>({ resolver: zodResolver(login_form) });

  const { sendingLogin } = useContext(LoginContext);

  const login = (data: login_company) => {
    sendingLogin(data);
  };
  return (
    <>
      <ContainerLogin>
        <ColumnImage>
          <img src={imglogin} alt="imagem_login" />
        </ColumnImage>

        <ColumnLogin>
          <form onSubmit={handleSubmit(login)}>
            <Title>Faça login</Title>
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
            <input type="email" placeholder="E-mail" {...register("email")} />

            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}
            <input
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
            <div className="containerButton">
              <button>Entrar</button>
            </div>
          </form>
          <div className="toRegister">
            <span>Não possui cadastro?</span>
            <Link to="/register"> Cadastre-se</Link>
          </div>
        </ColumnLogin>
      </ContainerLogin>
    </>
  );
};
