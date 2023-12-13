import styled from "styled-components";

export const HeaderStyled = styled.header`

    width: 100%;
    display: flex;
    height: 58px;
    justify-content: space-between;


    .Logo{
        color: var(--blue, #8490FF);
        font-size: 17px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .ExitedBTN{
        width: 103px;
        border-radius: 255px;
        border: 1px solid var(--blue, #8490FF);
        color: var(--blue, #8490FF);
        font-size: 17px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .SpanKE{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 60px;
            border-radius: 50%;
            background: var(--blue, #8490FF);
            color: var(--white, #FFF);
            font-size: 17px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
    }
    
    .Buttons{
        display: flex;
        width: 200px;
        justify-content: space-between;
    }
`;