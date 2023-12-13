import styled from "styled-components";

export const ContainerJobsHome = styled.ul`
  /* width: 100%; */
  width: 70vw;
  max-width: 70vw;

  margin: 0 auto;
  cursor: pointer;

  li {
    list-style: none;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    position: relative;

    img {
      padding: 0px 20px;
      align-self: flex-start;
      cursor: pointer;
    }

    .divHeaderListHome {
      display: flex;
      flex-direction: row;
    }

    .job__positionHome {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 20px;

      width: 100%;

      div {
        font-weight: 700;
      }

      .buttonApplyHome {
        height: 50px;
        padding: 10px;
        width: 170px;
        border: 2px solid var(--color-primary);
        color: var(--color-primary);
        background-color: transparent;
        border-radius: 255px;
        :hover {
          border:solid var(--color-primary);
          background-color: var(--color-primary);
          color: var(--color-white);
          transition: 0.5s;}
      }
    }

    .job__position--header {
      display: flex;
      flex-direction: column;

      gap: 17px;

      margin-bottom: 20px;
    }

    summary {
      list-style-type: none;
      position: absolute;
      left: -50px;
      top: 0;
    }
    summary:after {
      content: "+";
      color: var(--color-primary);
      padding: 0;
      text-align: center;
      width: 20px;
      left: 20px;
      margin-right: 10px;
      font-size: 40px;
    }
    details[open] summary:after {
      content: "-";
    }

    div {
      font-weight: 400;
    }

    @media (min-width: 768px) {
      width: 70vw;
      max-width: 70vw;
      display: flex;

      .job__position--header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        width: 100%;

        margin-bottom: 25px;
      }

      .job__positionHome {
        width: 100%;

        summary {
          list-style-type: none;
          position: absolute;
          top: 0;
        }
        summary:after {
          content: "+";
          color: var(--color-primary);
          padding: 0;
          text-align: center;
          width: 20px;
          left: 20px;
          margin-right: 10px;
          font-size: 40px;
        }
        details[open] summary:after {
          content: "-";
        }
      }
    }
  }
`;
