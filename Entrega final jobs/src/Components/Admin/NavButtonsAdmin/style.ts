import styled from "styled-components";

export const StyledNavButtons = styled.section`
    width: 380px;
    justify-content: space-between;
    display: flex;
    margin-top: 10px;
    .vagas--off{
        cursor: pointer;
        color: var(--black, #101119);
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .candidaturas--off{
        cursor: pointer;
        color: var(--black, #101119);
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .vagas--on{
        color: var(--blue, #8490FF);
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .candidaturas--on{
        color: var(--blue, #8490FF);
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

`