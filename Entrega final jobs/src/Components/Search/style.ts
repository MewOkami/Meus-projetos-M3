import styled from "styled-components";

export const ContainerJobs = styled.ul`
  width: 70%;
  max-width: 1200px;
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

    .divHeaderList {
      display: flex;
      flex-direction: row;
    }

    .job__position {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 20px;

      width: 100%;

      div {
        font-weight: 700;
      }

      .buttonApply {
        height: 50px;
        padding: 10px;
        width: 170px;
        border: 2px solid var(--color-primary);
        color: var(--color-primary);
        background-color: transparent;
        border-radius: 255px;
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
      .job__position--header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        width: 100%;

        margin-bottom: 25px;
      }
    }
  }
`;
