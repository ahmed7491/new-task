import styled from "styled-components";

export const ServiceContainer = styled.div`
margin: 20px;
display: flex;
flex-direction: column;
align-items: center;
gap: 64px;
height: 100vh;

.HeaderContainer{
    font-weight: 500;
    font-size: 48px;
    width: fit-content;
     margin: 0 auto;
    text-align: center;
    border-bottom: 4px  solid rgb(44, 218, 157);
    color: rgb(51, 51, 51);
    margin-bottom: 32px;
   
}

.contentDsec{
    text-align: center;
    color: black;
}

.CardContainer{
    width: 340;
    height: 200px;
    margin: 25;
    cursor: pointer;
    justify-content: center;
    :hover .CardTitle{
        color: #269dbb;
    }
}

.CardImg{
    justify-content: center;
    padding: 10px;
}

.CardTitle{
    font-weight: 700;
    font-size: 20px;
    color: rgb(55, 71, 79);
    line-height: 24px;
    transition: color 0.5s ease 0s;
}

`;