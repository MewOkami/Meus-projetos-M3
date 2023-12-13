import styled from "styled-components";

export const StyleHomePage = styled.div`
  width: 100%;

  .homeContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    min-height: 100vh;
  }

  .homeContainer__Title {
    background-color: var(--color-primary);
    color: var(--color-white);

    width: 100%;

    padding: 70px 0px;
    margin-bottom: 40px;
  }

  .homeContainer__Title--text {
    padding: 0px 15px;
  }

  .homeContainer__section {
    display: flex;
    flex-direction: column;

    padding: 0px 15px;
  }

  .homeContainer__section--text {
    margin-top: 30px;
  }

  .portraitHome {
    width: 100%;

    margin-top: 30px;
  }

  .homeContainer__main {
    padding: 0px 15px;
    margin-bottom: 40px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .homeContainer__main--title {
    margin-bottom: 80px;

    width: 100%;

    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 768px) {
    .homeContainer__Title--text {
      padding: 0px 130px;
    }

    .homeContainer__section {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      padding: 0px 130px;
    }

    .homeContainer__main {
      display: flex;
      justify-content: center;
    }

    .homeContainer__section--divText {
      width: 700px;
    }

    .portraitHome {
      width: 90%;

      margin-left: 30px;
    }
  }
`;
