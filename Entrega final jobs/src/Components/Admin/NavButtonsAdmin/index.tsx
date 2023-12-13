import { useNavigate } from "react-router-dom"
import { StyledNavButtons } from "./style"

export const NavButtons = ()=>{

    const navigate = useNavigate()

    const forMyJobs = ()=>{
        navigate("/my_jobs_dashboard")
    }

    const forMyCandidatures = ()=>{
        // a.style.color = 'var(--blue, #8490FF)'
        navigate("/my_candidatures")
    }


    return (
        <StyledNavButtons>
          <span className="vagas--off" onClick={() => forMyJobs()}>Minhas Vagas</span>
            <span className="candidaturas--off" onClick={()=>(forMyCandidatures())}>Minhas Candidaturas</span>
        </StyledNavButtons>
    )
}