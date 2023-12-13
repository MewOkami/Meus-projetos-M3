import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { SearchPage } from "../pages/SearchPage";
import { RegisterPage } from "../pages/Register";
import { AdminPage } from "../pages/AdminPage";
import { LoginPage } from "../pages/Login";
import { MyJobs } from "../pages/MyJobsDashboard";
import { MyCandidaturesRender } from "../pages/MyCandidatures";
import { CreateVacancies } from "../pages/CreateVacancies";
import { EditVaga } from "../pages/EditVagaAdmin";
import { RouteProtection } from "../Components/RouteProtection";

export const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<RouteProtection />}>
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/my_jobs_dashboard" element={<MyJobs />} />
          <Route path="/my_candidatures" element={<MyCandidaturesRender />} />
          <Route path="/create_vacancies" element={<CreateVacancies />} />
          <Route path="/editing_vaga" element={<EditVaga />} />
        </Route>
      </Routes>
    </>
  );
};
