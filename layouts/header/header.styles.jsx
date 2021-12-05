import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 72px;
  width: 100%;
  direction: rtl;
  padding: 20px;
  margin-bottom: 25px;
  position: relative;
  position: ${(props)=>(props.path !== "/"? "fixed" : null)};
  background-color: ${(props)=>(props.path !== "/"? "#fff" : null)};
  box-shadow: ${(props)=>(props.path !== "/"? "rgb(51 51 51 / 4%) 0px 4px 4px" : null)} ;    
  top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    -webkit-transform: translate3D(0, 0, 0);
    -ms-transform: translate3D(0, 0, 0);
    transform: translate3D(0, 0, 0);
    


.MenueContent{  
  margin: 20px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: 500;
  color:white;
  border: none;
  transition: color 1s;
  color: ${(props) => (props.path == "/" ? "#fff" : "#37474F")};
  :hover{
    color: #2cda9d;
  }
}

.row-container{
    max-width: 1200px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    }

.LGCON{
  font-size: 20px;
    font-weight: 500;
    color: #fff;
  align-items: center;
  cursor: pointer;
    line-height: 27px;
    height: 27px;
    margin-left: 8px;
    color: ${(props) => (props.path == "/" ? "#fff" : "#37474F")};
}
 `;
