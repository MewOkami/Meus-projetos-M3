import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgb(0, 0, 0, 0.1);

  z-index: 2;
`;

export const ModalStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;

  width: 90%;

  transform: translate(-50%, -50%);

  background-color: var(--color-lightblue);

  .modalButtonClose {
    display: flex;
    justify-content: flex-end;

    margin-top: 15px;
    margin-right: 17px;

    cursor: pointer;
  }

  .modalButtonClose__button {
    width: 20px;
  }

  .modalMin__Title {
    margin-bottom: 20px;
    margin-top: 5px;
  }

  .modalMain {
    display: flex;
    flex-direction: column;

    padding: 0px 25px;

    gap: 20px;
  }

  .modalMain__form {
    display: flex;
    flex-direction: column;

    gap: 10px;
  }

  .modalMain__form--divButton {
    display: flex;
    justify-content: flex-end;
  }

  .modalMain__form--button {
    background-color: var(--color-primary);
    color: var(--color-white);

    padding: 13px 30px;
    border-radius: 40px;

    border: 0.125rem solid var(--color-primary);
    margin-bottom: 30px;

    :hover {
    border: 0.125rem solid var(--color-primary);
    background-color: var(--color-white);
    color: var(--color-primary);
    transition: 0.5s;
  }
  }

  @media (min-width: 768px) {
    position: fixed;
    top: 50%;
    left: 50%;

    width: 540px;

    transform: translate(-50%, -50%);

    .modalMain__form--button {
      background-color: var(--color-primary);
      color: var(--color-white);

      padding: 13px 30px;
      border-radius: 40px;
    }
  }
`;
