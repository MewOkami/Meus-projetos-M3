import { FormLogin } from "./Form";
import { LoginProvider } from "../../providers/loginContext";

export const Login = () => {
  return (
    <LoginProvider>
        <FormLogin />
    </LoginProvider>
  );
};
