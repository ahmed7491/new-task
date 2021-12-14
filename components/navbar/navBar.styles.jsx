import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 100vh;
  width: 100%;
  direction: rtl;
  padding: 20px;
  margin-bottom: 25px;
  position: absolute;
  top: 0px;
  left: 0px;
   
  background-image: linear-gradient(to right , #1890ff, rgb(72, 128, 72));

  .row-container{
    max-width: 1200px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    }
  
  .ContentContainer{
    position: absolute;
    max-width: 794px;
    text-align: center ;
    width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-box-align: center;
      align-items: center;
      color: white;
  }



.CartDrop{
  background-color: transparent;
  direction: rtl;
  float: left;
}
.CartProp{
  position: absolute;
  color: black;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: transparent;  
}

.ContentTitle{
  font-weight: 700;
    font-size: 46px;
    color: white;
    width: 100%;
    text-align: center;
    white-space: nowrap;
    margin-bottom: 16px;
    line-height: 48px;
    min-width: 310px;
    user-select: none;
    @media screen and (max-width: 768px) {
    font-size: 34px;
  }
  @media screen and (max-width: 576px){
    white-space: normal;
  }
    
}
.contet{
  
}
.ContentDesc{
  font-weight: 400;
    font-size: 22px;
    width: 100%;
    text-align: center;
    line-height: 34px;

@media screen and (max-width: 768px) {
    font-size: 18px;
    
  }
  @media screen and (max-width: 576px){
    line-height: 24px;
  }
}
.btn-1{
    width: 148px;
    height: 48px;
    font-size: 16px;
    font-weight: 700;
  background-color: #285474;
  border: 1px solid #285474;
  border-radius: 36px;

}
.btn-2{
  background-color: #2cda9d;
  border: 1px solid #2cda9d;
  border-radius: 36px;
    width: 148px;
    height: 48px;
    font-size: 16px;
    font-weight: 700;
}


  @media screen and (max-width: 768px) {
    .ContentContainer{
      
    }
    
  }



`;




