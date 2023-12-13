import { useForm } from "react-hook-form";
import { RegisterButton, RegisterForm, Title } from "../styled";
import { zodResolver } from "@hookform/resolvers/zod";
import { register_form } from "../../Zod/Register/zodRegister";
import { RegisterContext } from "../../../providers/registerContext";
import { useContext } from "react";
import { StyledInput } from "../../Input/style";
import { StyleErrorsInputs } from "../../../styles/Typography";

export interface register_company {
  email: string;
  password: string;
  name: string;
  confirm_password: string;
}

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<register_company>({ resolver: zodResolver(register_form) });

  const { sendingCompany } = useContext(RegisterContext);

  const registercompany = (data: register_company) => {
    sendingCompany(data);
  };

  return (
    <>
      <RegisterForm onSubmit={handleSubmit(registercompany)}>
        <Title>Cadastre -se</Title>
        {errors.name && (
          <StyleErrorsInputs className="error-message">
            {errors.name.message}
          </StyleErrorsInputs>
        )}
        <StyledInput
          type="text"
          placeholder="Nome de empresa"
          {...register("name")}
        />

        {errors.email && (
          <StyleErrorsInputs className="error-message">
            {errors.email.message}
          </StyleErrorsInputs>
        )}
        <StyledInput type="text" placeholder="E-mail" {...register("email")} />

        {errors.password && (
          <StyleErrorsInputs className="error-message">
            {errors.password.message}
          </StyleErrorsInputs>
        )}
        <StyledInput
          type="password"
          placeholder="Senha"
          {...register("password")}
        />

        {errors.confirm_password && (
          <StyleErrorsInputs className="error-message">
            {errors.confirm_password.message}
          </StyleErrorsInputs>
        )}
        <StyledInput
          type="password"
          placeholder="Confirmar senha"
          {...register("confirm_password")}
        />

        <RegisterButton type="submit">Cadastrar-se</RegisterButton>
      </RegisterForm>
    </>
  );
};
