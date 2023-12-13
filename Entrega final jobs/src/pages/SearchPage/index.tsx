import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { Search } from "../../Components/Search";
import { JobsProvider } from "../../providers/jobsContext";
import { StyleSearchPage } from "./style";

export const SearchPage = () => {
  return (
    <>
      <JobsProvider>
        <StyleSearchPage>
          <Header />
          <Search />
          <Footer />
        </StyleSearchPage>
      </JobsProvider>
    </>
  );
};
