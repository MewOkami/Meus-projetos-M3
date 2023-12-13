import { StyleMyCandidatures } from "./style";
import { Header } from "../../Components/Admin/HeaderAdminPage";
import { NavButtons } from "../../Components/Admin/NavButtonsAdmin";
import { useEffect } from "react";
import { Footer } from "../../Components/Footer";
import { CandidaturesRender } from "../../Components/Admin/RenderLists/ListCandidaturesRender";
export const MyCandidaturesRender = () => {

  useEffect(() => {
    const MyJobsNameBtn = document.querySelector('.candidaturas--off') as HTMLElement;
    if (MyJobsNameBtn) {
      MyJobsNameBtn.style.color = 'var(--blue, #8490FF)';
    }
  });

  return (
    <>
    <StyleMyCandidatures>
          <Header />
          <NavButtons />
          <h1 className="titleCandidatures">Minhas Candidaturas</h1>
          <CandidaturesRender/>
        </StyleMyCandidatures>
        <Footer/>
    </>
  );
};
