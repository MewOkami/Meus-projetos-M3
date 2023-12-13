import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
`;

export const ColumnImage = styled.div`
  max-width: 600px;
  margin-right: 30px;
  img {
    width: 100%;
    display: none;
  }

  @media (min-width: 800px) {
    img {
      display: block;
    }
  }
`;

export const ColumnLogin = styled.div`
  max-width: 90vw;
  padding: 0 auto;

  form {
    width: 100%;
    max-width: 350px;
    margin-right: 50px;
  }

  input {
    padding-left: 40px;
    min-width: 100%;
    height: 50px;
    border: 1px solid var(--color-primary);
    border-radius: 255px;
    margin-bottom: 20px;
  }

  p {
    color: red;
    font-weight: 300;
    font-size: 14px;
    margin-left: 15px;
  }

  .containerButton {
    display: flex;
    justify-content: flex-end;
  }
  button {
    background-color: #8490ff;
    border-color: #8490ff;
    height: 50px;
    border-radius: 255px;
    font-size: 16px;
    width: 120px;
    color: white;
    font-weight: 700;
    align-self: flex-end;
    transition: 0.5s ease-in-out;
  }

  button:hover {
    border: 1px solid var(--color-primary);
    background-color: var(--color-white);
    color: var(--color-primary);
  }

  .toRegister {
    display: flex;
    justify-content: center;
    margin: 20px;
    gap: 10px;

    a {
      text-decoration: none;
      font-weight: 700;
      color: var(--color-primary);
    }
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 64px;
  color: var(--color-primary);
  margin-bottom: 20px;
`;
