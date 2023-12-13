import styled from "styled-components";

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 500px;
  margin: 40px auto;

  input {
    margin-bottom: 20px;
  }
`;

export const BackButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 20px 15px;
  a {
    text-decoration: none;
    color: var(--color-primary);
    font-weight: 700;
  }

  @media (min-width: 768px) {
    padding: 20px 130px;
  }
`;

export const Title = styled.h2`
  width: 80vw;
  max-width: 500px;
  margin: 0 auto;
  color: var(--color-primary);
  font-size: 60px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const RegisterButton = styled.button`
  height: 50px;
  width: 30%;
  min-width: 100px;
  border-radius: 255px;
  background-color: var(--color-primary);
  color: white;

  transition: 0.5s ease;
  align-self: flex-end;
  :hover {
    border: 0.125rem solid var(--color-primary);
    background-color: var(--color-white);
    color: var(--color-primary);
  }
`;
