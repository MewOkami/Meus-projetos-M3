import { Link, useNavigate } from "react-router-dom";

import imageSearch from "../../assets/search_icon.svg";
import imageLogoJobjs from "../../assets/jobs.svg";
import { StyleHeader } from "./style";

export const Header = () => {
  const navigate = useNavigate();

  const toSearchPage = () => {
    navigate("/search");
  };
  const toHomePage = () => {
    navigate("/");
  };

  return (
    <StyleHeader>
      <div className="headerContainer">
        <div className="headerLogo">
          <img
            src={imageLogoJobjs}
            alt="imagem do nome do site escrito jobjs em azul "
            onClick={() => {
              toHomePage();
            }}
          />
        </div>
        <div className="headerContainer__link">
          <div className="hideInMobile">
            <Link to={"/login"} className="link">
              acesso empresa
            </Link>
          </div>

          <div className="hideInMobile">
            <Link to={"/"} className="linkVacancies">
              Confira nossas vagas
            </Link>
          </div>

          <img
            src={imageSearch}
            onClick={() => toSearchPage()}
            alt="imagem da lupa de pesquisa na cor azul"
            className="headerContainer__link--Search"
          />
        </div>
      </div>

      <div className="hideInDesktop">
        <Link to={"/login"} className="link">
          acesso empresa
        </Link>
      </div>
    </StyleHeader>
  );
};
