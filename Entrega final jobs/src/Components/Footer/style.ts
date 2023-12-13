import  styled  from "styled-components";

export const StyleFooter = styled.footer`
  background-color: var(--color-black);

  padding: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;

  .divText {
    display: flex;
  }

  .text {
    color: var(--color-white);

    text-align: center;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

    padding: 20px 130px;
  }
`;
