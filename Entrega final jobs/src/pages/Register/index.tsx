import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { Register } from "../../Components/FormRegister";
import { StyledRegisterPage } from "./style";

export const RegisterPage = () => {
  return (
    <>
      <StyledRegisterPage>
        <Header />
        <Register />
        <Footer />
      </StyledRegisterPage>
    </>
  );
};
