import styled from "styled-components";

export const ContainerSearch = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 100px auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  .search__jobs{
    width: 70%;
    max-width: 530px;
    margin-bottom: 60px;

    h1 {
    font-size: 64px;
    color: var(--color-primary);
    width: 100%;
    align-self: center;
  }
  }
  

  p {
    font-size: 16px;
    font-weight: 700;
  }

  div {
    height: 60px;
    display: flex;
    align-items: center;
    gap: 20px;

    input {
      padding-left: 40px;
      width: 600px;
      max-width: 50vw;
      height: 100%;
      border: 2px solid var(--color-primary);
      border-radius: 255px;
    }

    img {
      height: 100%;
      cursor: pointer;
    }
  }
`;
