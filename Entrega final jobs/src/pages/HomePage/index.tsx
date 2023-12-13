import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { StyleHomePage } from "./style";

import portrait from "../../assets/portrait.svg";
import { HomeList } from "../../Components/HomeList";
import { JobsProvider } from "../../providers/jobsContext";
import { StyleTexts, StyleTitles } from "../../styles/Typography";

export const HomePage = () => {
  return (
    <StyleHomePage>
      <div className="homeContainer">
        <Header />

        <div className="homeContainer__Title">
          <h1 className="homeContainer__Title--text">Trabalho é na jobs</h1>
        </div>

        <section className="homeContainer__section">
          <div className="homeContainer__section--divText">
            <StyleTitles>Sobre a jobs</StyleTitles>
            <StyleTexts className="homeContainer__section--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur itaque commodi repudiandae qui autem beatae ullam
              ducimus asperiores rem eius, distinctio fugit? Fugit, a quia
              adipisci aliquam voluptatem accusantium quam.
            </StyleTexts>
          </div>
          <div>
            <img src={portrait} alt="" className="portraitHome" />
          </div>
        </section>

        <main className="homeContainer__main">
          <div className="homeContainer__main--title">
            <StyleTitles>Confira nossa vagas</StyleTitles>
          </div>
          <div>
            <JobsProvider>
              <HomeList />
            </JobsProvider>
          </div>
        </main>

        <Footer />
      </div>
    </StyleHomePage>
  );
};
