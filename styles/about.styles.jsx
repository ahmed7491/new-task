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

    @media screen and (max-width: 768px) {
      font-size: 18px;
    }

    @media screen and (max-width: 576px) {
      font-size: 16px;
    }
    @media screen and (max-width: 320px) {
      font-size: 14px;
    }
  }
        

    .intro-header{
    color: rgb(55, 71, 79);
    width: fit-content;
    margin: 0px auto 20px;
    font-size: 34px;
    font-weight: 500;
    padding-bottom: 10px;
    border-bottom: 4px solid rgb(44, 218, 157);
    @media screen and (max-width: 768px) {
      font-size: 24px;
    }

    @media screen and (max-width: 576px) {
      font-size: 20px;
    }
    }

    .portHeader{
    font-weight: 700;
    font-size: 48px;
    color: rgb(55, 71, 79);
    padding-bottom: 10px;
    border-bottom: 4px solid rgb(44, 218, 157);
    width: fit-content;
    margin: 50px auto 32px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }
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
    padding: 10px;    
    overflow: hidden;
    cursor: pointer;
}

    .jWwTOA .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{
        color:  #2cda9d;

    }

    .content-desc{
        max-width: 900px;
        margin: 0px auto;
        @media screen and (min-width: 992px) {
      max-width: 90%;
    }
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
    color: #4c5c64;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (min-width: 992px) {
      text-align: start;
    }
    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
    @media screen and (max-width: 576px) {
      font-size: 14px;
    }
  }

.contact-container{
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
}

  .heade-con{
    font-size: 34px;
    color: #37474f;
    @media screen and (max-width: 768px) {
      font-size: 24px;
    }
  }

  .img-container {
    width: 100%;
    height: 400px;

    @media screen and (min-width: 992px) {
      height: 500px;
      width: 500px;
    }

    @media screen and (max-width: 576px) {
      height: 280px;
    }
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
   .map-item{
       margin-bottom: 70px;
       line-height: 34px;
    color: rgb(78, 78, 78);
     font-weight : 500; 
     font-size: 24px; 
   }

   .map {
    height: 384px;
    @media (max-width: 768px) {
      height: 226px;
    }
  }

   .country{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 15px;
    font-weight: 700;
    font-size: 34px;
    height: 48px;
    margin-bottom: 16px;
    color: rgb(55, 71, 79);
    @media screen and (max-width: 768px) {
      font-size: 22px;
    }
   }

   .ant-input:placeholder-shown{
    height: 48px;
    border-radius: 24px;
    border: 1px solid rgba(40, 84, 116, 0.16);
    padding: 0px 20px;
   }
   .ant-form-item-control-input-content{
       padding: 0px 15px;
   }
   .ant-btn-round.ant-btn-lg{
    width: 104px;
    height: 48px;
    background-color: rgb(40, 84, 116);
    border-radius: 36px;
    margin: 22px 0px;
    border-color: rgb(40, 84, 116);
   }

   .form-container {
    width: 770px;
    margin: 0 auto;
    @media (max-width: 768px) {
      width: auto;
    }
  }
  .bt-container {
    @media screen and (max-width: 575px) {
      text-align: center;
    }
  }
  .term-header{
    font-size: 24px;
    font-weight: 400;
    white-space: pre-line;
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }

    @media screen and (max-width: 576px) {
      font-size: 20px;
    }
  }
  .term-detail-header{
    font-weight: bold;
    font-size: 24px;
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }

    @media screen and (max-width: 576px) {
      font-size: 20px;
    }
  }
`;