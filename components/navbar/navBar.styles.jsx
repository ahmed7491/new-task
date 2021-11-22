import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  direction: rtl;
  justify-content: center;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;