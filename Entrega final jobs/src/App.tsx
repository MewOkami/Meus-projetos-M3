import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes/RoutesMain";
import GlobalStyle from "./styles/GlobalStyles";

import "react-toastify/dist/ReactToastify.min.css";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <RoutesMain />

      <ToastContainer autoClose={1000} hideProgressBar={true} />
    </>
  );
};
