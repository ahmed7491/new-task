import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 100vh;
  width: 100%;
  direction: rtl;
  padding: 20px;
  margin-bottom: 25px;
  background-image: linear-gradient(to right , #1890ff, rgb(72, 128, 72));

  
  
  .ContentContainer{
    position: absolute;
    text-align: center ;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-box-align: center;
      align-items: center;
      color: white;
  }

.MenueContent{  
  margin: 20px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: 500;
  color:white;
  background-color: transparent;
  border: none;
  transition: color 1s;
  :hover{
    color: #2cda9d;
  }
}


.LGCON{
  font-size: 20px;
    font-weight: 500;
    color: #fff;
  align-items: center;
  cursor: pointer;
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
    
}
.ContentDesc{
  font-weight: 400;
    font-size: 22px;
    width: 100%;
    text-align: center;
    line-height: 34px;
}


.btn-1{
  background-color: #285474;
  border: 1px solid #285474;
  border-radius: 36px;

}
.btn-2{
  background-color: #2cda9d;
  border: 1px solid #2cda9d;
  border-radius: 36px;
}


  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;




