import styled from "styled-components";

export const FooterContainer = styled.footer`
   background-color: #285474;
  padding: 24px 0;
  margin-top: auto !important;
    color: rgb(185, 190, 192);
    
    line-height: 20px;
    direction: rtl;

    .row-container{
    max-width: 1200px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    }

    .footerCol{
        padding: 0 10px;
    }

    .headerContainer{
        display: flex;
        flex-direction: row-reverse;
        justify-content: right;
    }

    .description{
        font-weight: normal;
        font-size: 14px;
        margin-top: 24px;
        max-width: 250px;
    }    
    .headerItems{
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: 600;
        color: rgb(185, 190, 192);

    }
    .copRightContainer{
        cursor: pointer;
    }
    .copRightItems{
        font-size: 12px;
        font-weight: 400;
    }

    

@media screen and (min-width: 1200px) and (max-width: 1600px){

    .evmjyG .rowContainer {
        max-width: 1200px;
    }
}

    
`