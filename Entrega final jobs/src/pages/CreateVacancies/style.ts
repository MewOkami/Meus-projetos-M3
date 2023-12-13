import styled from "styled-components";

export const StyleDivVacancies = styled.div`
  width: 80vw;
  height: 92.2vh;
  padding: 10px 10%;
  header {
    img {
      width: 70px;
    }
  }

  textarea {
    border: 1px solid var(--color-primary);
    height: 200px;
    resize: none;
    padding: 30px;
    border-radius: 30px;
  }

  .vocanciesMain {
    min-height: 100vh;
  }

  .vocanciesMain__div {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }

  .vocanciesMain__back {
    padding-top: 50px;
    font-weight: 700;

    display: flex;
    align-items: center;
    gap: 10px;
  }

  .vocanciesMain__back--link {
    text-decoration: none;

    color: var(--color-primary);
  }

  .vocanciesMain__form {
    display: flex;
    flex-direction: column;

    gap: 5px;
  }

  .vocanciesMain__form--Title {
    display: flex;
    justify-content: center;

    margin-bottom: 17px;
  }

  .vocanciesMain__form--inputSallary {
    margin-top: 4px;
  }

  .vocanciesMain__form--buttonCreate {
    display: flex;
    justify-content: flex-end;

    margin-top: 6px;
  }

  .vocanciesMain__form--button {
    background-color: var(--color-primary);
    color: var(--color-white);

    border-radius: 50px;

    padding: 3px 18px;

    display: flex;
    align-items: center;
  }
`;
