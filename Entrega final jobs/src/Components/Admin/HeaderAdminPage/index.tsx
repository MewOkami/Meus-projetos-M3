import { useNavigate } from "react-router-dom"
import { HeaderStyled }  from "./style"
import logo from "../../../assets/logoHeaderAdmin.svg"
export const Header = ()=>{

    const navigate = useNavigate()

    const ExitedAccout = ()=>{
        localStorage.clear()
        navigate('/login')
    }

    return (
    <HeaderStyled>
        <img className="Logo" src={logo} alt=""/>
        <div className="Buttons">
            <span className="SpanKE">KE</span>
            <button className="ExitedBTN" onClick={() =>ExitedAccout()}>sair</button>
        </div>
    </HeaderStyled>
    )}