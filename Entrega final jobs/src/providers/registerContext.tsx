import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import axios from "axios";

interface RegisterProvider {
    children: React.ReactNode;
}

interface IRegister {
    name: string;
    email: string;
    password: string;
    confirm_password?: string;
}

interface IRegisterContext {
    sendingRegister: (data: IRegister) => Promise<void>;
    sendingCompany: (data: IRegister) => Promise<void>;
}

export const RegisterContext = createContext({} as IRegisterContext)

export const RegisterProvider = ({ children }: RegisterProvider) => {

    const navigate = useNavigate();

    const sendingCompany = async (data: IRegister) => {

        if (data.password == data.confirm_password) {
            delete data.confirm_password;

            if (data.password) {

                const { confirm_password, ...requestData } = data;
                sendingRegister(requestData);

            }

        } else {

            toast.error("Senha não coincidem");
        }
    };

    const sendingRegister = async (data: IRegister) => {

        try {

            await api.post("/users", data);
            toast.success("Empresa registrada com sucesso");
            navigate("/login")

        } catch (error) {

            if (axios.isAxiosError(error)) {

                toast.error("Ops! Algo deu errado");
            }
        }
    }


    return (
        <RegisterContext.Provider value={{ sendingRegister , sendingCompany }}>
            {children}
        </RegisterContext.Provider>
    )
}