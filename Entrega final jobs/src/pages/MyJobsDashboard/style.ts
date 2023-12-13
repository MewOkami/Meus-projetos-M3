import styled from "styled-components";

export const StyleMyJobs = styled.section`
 
height: 92.1vh;
padding: 10px 10%;
display: flex;
flex-direction: column;
gap: 10px;
.title__jobs{
    color: var(--blue, #8490FF);
    font-family: Montserrat;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 500,
  'GRAD' 0,
  'opsz' 0
}

.NewVagaBtn{
    cursor: pointer;
    width: 194px;
    height: 58px;
    border-radius: 255px;
    background: var(--blue, #8490FF);
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: var(--white, #FFF);
    font-family: Montserrat;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 0 25px;
}

.NewVagaBtn:hover{
    filter: brightness(85%);
}

.LineTitleAndButton{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

`;
