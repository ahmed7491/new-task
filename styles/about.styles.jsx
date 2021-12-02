import styled from "styled-components";

export const AboutContainer = styled.div`
    direction: rtl;
    background-color: #ffff;
    min-height: 100vh;

    .intro{
        width: 100%;
        height: 450px;
        margin-top: 72px;
        background-image: url("https://www.gizaapps.com/static/images/aboutSvg.svg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }    

    .content{
    color: black;
    top: 50%;
    left: 50%;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    min-width: 280px;
    width: 100%;
    }

    .intro-header{
    color: rgb(55, 71, 79);
    width: fit-content;
    margin: 0px auto 20px;
    font-size: 34px;
    font-weight: 500;
    padding-bottom: 10px;
    border-bottom: 4px solid rgb(44, 218, 157);
    }

    .portHeader{
    font-weight: 700;
    font-size: 48px;
    color: rgb(55, 71, 79);
    padding-bottom: 10px;
    border-bottom: 4px solid rgb(44, 218, 157);
    width: fit-content;
    margin: 50px auto 32px;
    }

    .port-desc{
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    color: rgb(55, 71, 79);
    width: 100%;
    text-align: center;
    margin-bottom: 70px;
    }

    .portfiles{
    
    width: 100%;

    @media screen and (min-width: 800px) {
      width: 80%;
      margin: 0 auto;
    }
  
    }
    
    .port-img{
        width: 100%;
    text-align: center;
    padding: 10px;    }

    .jWwTOA .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{
        color:  #2cda9d;

    }

    .content-desc{
        max-width: 900px;
        margin: 0px auto;
    }

    .row-container{
    max-width: 1200px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    }
    

    .inex-sec{
        width: 100%;
    margin: 100px 0px;
    height: fit-content;
    }

    h2{
        font-size: 34px;
    color: rgb(55, 71, 79);
    }

    .content{   
    width: 100%;
    height: 100%;
    color: rgb(76, 92, 100);
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    }

    .feed-back{
    width: 100%;
    background-color: rgba(2, 112, 187, 0.13);
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 230px;
    margin-bottom: 100px;
    }

    .btn-5{
        background: rgb(44, 218, 157);
    border-radius: 36px;
    border-color: rgb(44, 218, 157);
    width: 132px;
    height: 48px;
    }
   
`;