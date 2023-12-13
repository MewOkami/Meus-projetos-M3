

import styled from "styled-components";

export const StyledList = styled.section`

    ul{
        display: flex;
        flex-direction: column;
        height: 60vh;
        gap: 10px;
    }

    li{
        display: flex;
        justify-content: space-between;
        height: 50px;
        background: var(--white, #FFF);
        align-items: center;
        padding: 0 10px;
    }

    .icons{
        display: flex;
        width: 80px;
        justify-content: space-between;
    }
    .Icon{
        cursor: pointer;
        transform:scale(0.8);
    }

    h1{
        color: var(--black, #101119);
        font-family: 'Montserrat', sans-serif;
        font-size: 19px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    
    .Icon:hover{
        filter: brightness(55%);
        transform:scale(0.75);
    }

    li:hover{
        background: var(--lightblue, #F9F9FF);
    }

    .noList{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

`