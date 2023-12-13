import imageLogoJobs from "../../assets/jobs.svg";
import { StyleFooter } from "./style";

export const Footer = () => {
  return (
    <StyleFooter>
      <div>
        <img src={imageLogoJobs} alt="" />
      </div>
      <div className="divText">
        <p className="text">
          Todos os direitos reservados - Kenzie Academy Brasil
        </p>
      </div>
    </StyleFooter>
  );
};
