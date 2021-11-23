import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  direction: rtl;
  padding: 20px;
  margin-bottom: 25px;

  .site-layout-background{ 
  margin: 24px 16px; 
  padding: 24;
  font-weight: 400;
  font-size: 22px;
  min-height: 380;
  position: absolute;
  top: 50%; 
  left: 50%;
  transform: translate(-50%, -50%);
}

.ant-layout-header{
  box-sizing: border-box;
} 

.ant-breadcrumb-link {
    font-weight: 700;
    font-size: 46px;
    width: 100%;
    text-align: center;
    white-space: nowrap;
    margin-bottom: 16px;
    line-height: 48px;
    min-width: 310px;
    user-select: none;
}



.ant-layout-content {
    text-align: center;
} 

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;