import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #285474;
  padding: 33px 0;
  margin-top: auto !important;
  color:#fff;

  line-height: 24px;
  direction: rtl;

  .row-container {
    max-width: 1200px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  .footerCol {
    padding: 0 10px;
  }

  .headerContainer {
      height: 31px;
      font-weight: 400;
      font-size: 20px;
      color: #fff;
    direction: ltr;
    display: flex;
    flex-direction: row-reverse;
    justify-content: right;
    gap: 8px;
  }

  .description {
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    margin-top: 24px;
    max-width: 250px;

    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
    
  }
  .headerItems {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    color: #fff;
  }
  .footer-item {
    cursor: pointer;
  }
  .copRightItems {
    font-size: 12px;
    font-weight: 400;
  }
  .ant-divider-horizontal{
      background-color: #928888;
  }

  @media screen and (min-width: 1200px) and (max-width: 1600px) {
    .evmjyG .rowContainer {
      max-width: 1200px;
    }
  }
`;
