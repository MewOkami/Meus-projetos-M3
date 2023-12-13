import imgback from "../../assets/back_to_login.svg";
import { Link } from "react-router-dom";

import { BackButton } from "../FormRegister/styled";
import { RegisterProvider } from "../../providers/registerContext";
import { FormRegister } from "./Form";

export const Register = () => {
  return (
    <>
      <BackButton>
        <img src={imgback} alt="back" />
        <Link className="ReturnLink" to="/login">
          voltar
        </Link>
      </BackButton>
      <RegisterProvider>
        <FormRegister />
      </RegisterProvider>
    </>
  );
};
