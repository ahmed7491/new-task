import styled from "styled-components";

export const PortfileContainer = styled.div`
    padding-bottom: 64px;
    width: 100%;
    margin-top: 122px;
    direction: rtl;

    .ant-carousel .slick-dots-bottom{
    bottom: -50px
  }

  .ant-carousel .slick-dots li{
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: #C4C4C4;
    
  }
  
  .ant-carousel .slick-dots li button{
    background: #2CDA9D;
    height: 15px;
    width: 15px;
    border-radius: 50%
  }
  .cat-container{
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: 10px auto;
    cursor: pointer;
  }

`;

export const RowContainer = styled.div`
    max-width: 1200px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    .description{
        font-weight: 500;
    font-size: 20px;
    max-width: fit-content;
    max-height: max-content;
    line-height: 27px;
    text-align: right;
    color: rgb(55, 71, 79);
    word-break: normal;
    }
    .dateContainer{
        width: 1200px;
        display: flex;
    justify-content: space-between;
    }
    .date {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #617179
  }
  .other-projects{
    margin-top: 50px;
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
    color: rgb(55, 71, 79);
  }
`;

export const GoBack = styled.div`
    font-weight: 500;
    font-size: 20px;
    color: rgb(40, 84, 116);
    margin: 34px 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;

    .header{
        font-weight: 500;
    font-size: 34px;
    line-height: 48px;
    color: rgb(55, 71, 79);
    }

    .arr-right{
       font-size: 40px;
       cursor: pointer;
    }

    a.disabled {
  pointer-events: none;
  cursor: default;
}
    

`;