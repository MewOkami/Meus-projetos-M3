// import React, { useState } from 'react';
import { Header } from "../../Components/Admin/HeaderAdminPage";
import { NavButtons } from "../../Components/Admin/NavButtonsAdmin";
import { StyleAdmin } from "./style";
import { WelcomeMessage } from "../../Components/Admin/WelcomeAdmin";
import { Footer } from "../../Components/Footer";

export const AdminPage = () => {
  return (
    <>
      <StyleAdmin>
        <Header />
        <WelcomeMessage />
        <NavButtons />
      </StyleAdmin>
      <Footer />
    </>
  );
};
