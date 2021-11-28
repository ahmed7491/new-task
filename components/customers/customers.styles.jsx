import styled from "styled-components";

export const CustomersContainer = styled.div`
height: 480px;
width: 100%;
margin-bottom: 120px;
display: flex;
flex-direction: column;
align-items: center;
gap: 64px;
direction: rtl;


.HeaderContainer{
    font-weight: 500;
    font-size: 48px;
    width: fit-content;
     margin: 0 auto;
    text-align: center;
    border-bottom: 4px  solid rgb(44, 218, 157);
    color: rgb(51, 51, 51);
    margin-bottom: 32px;
    @media screen and (max-width: 768px){
        max-width: 16%;
    }
   
}

.imgContainer{
    padding-left: 5px;
    padding-right: 5px;
    height: 110px;
    overflow: hidden;
}

.img-logo{
    height: 150px;
    width: 187px;
}


`;