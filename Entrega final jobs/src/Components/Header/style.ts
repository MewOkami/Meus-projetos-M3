import styled from "styled-components";

export const StyleHeader = styled.header`
  padding: 20px 15px;

  overflow-x: hidden;

  display: flex;
  flex-direction: column;

  .headerLogo {
    cursor: pointer;
  }
  .headerContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .hideInMobile {
    display: none;
  }

  .hideInDesktop {
    display: flex;
    justify-content: center;

    margin-top: 20px;
  }

  .link {
    color: var(--color-black);

    font-weight: 700;
    font-size: 16px;
    line-height: 19.5px;

    text-decoration: none;
    :hover {
    background-color: var(--color-white);
    color: var(--color-primary);
    transition: 0.5s;}
  }

  .linkVacancies {
    background-color: var(--color-primary);
    color: var(--color-white);

    padding: 15px 20px;

    border-radius: 40px;

    font-weight: 700;
    font-size: 16px;
    line-height: 19.5px;

    text-decoration: none;
    border: 0.125rem solid var(--color-primary);
    
    :hover {
    border: 0.125rem solid var(--color-primary);
    background-color: var(--color-white);
    color: var(--color-primary);
    transition: 0.5s;}
  }

  .headerContainer__link--Search {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    padding: 20px 130px;

    .hideInMobile {
      display: block;

      display: flex;
      align-items: center;
    }

    .hideInDesktop {
      display: none;
    }

    .headerContainer__link {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      gap: 20px;

      width: 100%;
    }
  }
`;
