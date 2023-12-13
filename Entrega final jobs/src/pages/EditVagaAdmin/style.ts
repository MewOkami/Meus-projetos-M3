import styled from "styled-components";

export const StyleEditVaga = styled.section`
 
/* background-color: gray; */
height: 93.1vh;
padding: 10px 10%;

.backBTN{
    margin-top: 50px;
    display: flex;
    width: 100px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
}

.titleBack{
    color: var(--blue, #8490FF);
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.TitleEditing{
    color: var(--blue, #8490FF);
    font-family: Montserrat;
    font-size: 44px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

textarea{
    display: flex;
    padding: 25px;
    resize: none;
    width: 40vw;
    height: 236px; 
    border-radius: 30px;
    border: 1px solid var(--blue, #8490FF);
    background: var(--white, #FFF);
}
section{
    display: flex;
    margin-top: 20px;
}

.inputs{
    display: flex;
    flex-direction: column;
    margin:10px 10px 10px 0;
    gap: 30px;
}

.InputEntry{
    display: flex;
    width: 40vw;
    height: 66px;
    padding: 0 20px;

    border-radius: 255px;
    border: 1px solid var(--blue, #8490FF);
    background: var(--white, #FFF);
}

.error {
  position: absolute;
  color: red;
  margin-left: 10px;
  margin-top: 5px;
}

.SaveEditing{

    color: #FFF;
    width: 13vw;
    height: 58px;
    border-radius: 255px;
    background: var(--blue, #8490FF);
}

.ButonSaveDiv{
    margin-top: 25px;
    display: flex;
    width: 100%;
    justify-content: center;
}

`;
