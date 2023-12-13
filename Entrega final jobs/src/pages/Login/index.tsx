import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { Login } from "../../Components/FormLogin";
import { StyledLoginPage } from "./styles";

export const LoginPage = () => {
  return (
    <>
      <StyledLoginPage>
        <Header />
        <Login />
        <Footer />
      </StyledLoginPage>
    </>
  );
};
