import styled from "styled-components";

export const ProductsContainer = styled.div`
min-height: calc(200vh - 72px);
width: 100%;
direction: rtl;


.row-container{

    max-width: 1200px;
    padding-right: 15px;
    padding-left: 15px;
    margin-top: 96px;
    margin-bottom: 80px;
    margin-right: auto;
    margin-left: auto;
    
}

.product-header{
    font-weight: 500;
    font-size: 48px;
    width: fit-content;
    border-bottom: 4px  solid rgb(44, 218, 157);
    color: #333333;
    margin-bottom: 32px;

    @media screen and (max-width: 767px) {
      margin-left: auto;
      margin-right: auto;
      font-size: 34px;

    }
    

}

.product-desc{
    font-size: 20px;
    line-height: 27px;
    font-weight: 500;
    color: rgb(55, 71, 79);
    @media screen and (max-width: 768px) {
      margin-left: auto;
      margin-right: auto;
      font-size: 18px;
    }
}

.product-content{
    max-width: 500px;
    @media screen and (min-width: 768px){
        width: 90%;
    }
}

.upper-section{
    max-width: 700px;
    margin: 0px auto 64px;
    text-align: center;
}
.upper-header{
    font-size: 34px;
    text-align: center;
    line-height: 48px;
    color: rgb(40, 84, 116);

    @media screen and (max-width: 768px){
        font-size: 24px;
    }
    
}

.subText{
    color: #617179;
    font-size: 22px;
    font-weight: 400;
    line-height: 32px;
    margin-bottom: 24px;
    max-width: 450px;
    
    @media screen and (max-width: 768px){
        font-size: 18px;

    }
}
.targetHeader{
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
    color: rgb(76, 92, 100);
    margin-bottom: 24px;

    @media screen and (max-width: 768px){
        font-size: 20px;
    margin-bottom: 10px;
    }
}
.btn-3{
    background-color: rgb(44, 218, 157);
    width: 269px;
    height: 52px;
    border-radius: 36px;
    border-color: rgb(44, 218, 157);
    font-size: 16px;
    margin: 30px 0px;
    @media screen and (max-width: 576px){
        font-size: 14px;
    width: 156px;

    }
}
.bottom-section{
    width: 100%;
    height: 269px;
    background: rgb(2, 112, 187);
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;

    
}

.img-peoduct{
  width: 585px;

    @media screen and (max-width: 768px){
        width: 670px;
    }
    @media screen and (max-width: 426px) {
      width: 425px;
    }
    @media screen and (max-width: 376px) {
      width: 344px;
    }
    @media screen and (max-width: 320px) {
      width: 319px;
    }
}

`;
