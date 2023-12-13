import axios from "axios";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

interface LoginProvider {
  children: React.ReactNode;
}

interface ILogin {
  email: string;
  password: string;
}

interface ILoginContext {
  sendingLogin: (data: ILogin) => Promise<void>;
}

export const LoginContext = createContext({} as ILoginContext);

export const LoginProvider = ({ children }: LoginProvider) => {
  const navigate = useNavigate();

  const sendingLogin = async (data: ILogin) => {
    try {
      const response = await api.post("/login", data);
      toast.success("Login Efetuado");
      localStorage.setItem("UserInfo", JSON.stringify(response.data));
      navigate("/adminpage");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data);
      }
    }
  };

  return (
    <LoginContext.Provider value={{ sendingLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
