import { StyleMyJobs } from "./style";
import { Header } from "../../Components/Admin/HeaderAdminPage";
import { NavButtons } from "../../Components/Admin/NavButtonsAdmin";
import circle from "../../assets/Circle+Admin.png";
import { JobsVagasRender } from "../../Components/Admin/RenderLists/ListVagasRender";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../Components/Footer";
import { useEffect } from "react";

export const MyJobs: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const MyJobsNameBtn = document.querySelector('.vagas--off') as HTMLElement;
    if (MyJobsNameBtn) {
      MyJobsNameBtn.style.color = 'var(--blue, #8490FF)';
    }
  });
  
  const toCreate = () => {
    navigate("/create_vacancies");
  };

  return (
    <>
    <StyleMyJobs>
      <Header />
      <NavButtons />
      <div className="LineTitleAndButton">
        <h1 className="title__jobs">Minhas Vagas</h1>
        <span
          className="NewVagaBtn"
          onClick={() => {
            toCreate();
          }}
        >
          <img className="ImgNewVaga" src={circle} alt="" />
          <span className="NameNewVaga">Criar vaga</span>
        </span>
      </div>
      <JobsVagasRender />
    </StyleMyJobs>
      <Footer/>
    </>
  );
};
