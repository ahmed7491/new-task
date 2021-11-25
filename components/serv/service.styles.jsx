import styled from "styled-components";

export const ServiceContainer = styled.div`
margin-bottom: 72px;
margin-top: 100vh;
height: fit-content;

.row-container{
    max-width: 1200px;
    width: 100%;
    display: block;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    gap: 64px;
}

.headercon{
    justify-content: center;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
}

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
    align-items: center;
    padding: 10px;
}

.CardTitle{
    font-weight: 700;
    font-size: 20px;
    width: fit-content;
    color: rgb(55, 71, 79);
    line-height: 24px;
    transition: color 0.5s ease 0s;
}
.ant-col-8{
    height: 320px;
    width: 275px;
    padding: 24px;
}

.ant-space-vertical{
    align-items: center;
    justify-content: center;
}

@media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }

`;