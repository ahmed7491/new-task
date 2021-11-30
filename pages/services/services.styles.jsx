import styled from "styled-components";

export const ServicesContainer = styled.div`
direction: rtl;


.intro-container{
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction: column;
    margin-top: 80px;
    margin-bottom: 0px;
    padding-top: 32px;
}
.intro-header{
    font-weight: 500;
    font-size: 48px;
    width: fit-content;
    border-bottom: 4px  solid rgb(44, 218, 157);
    color: #333333;
    margin-bottom: 32px;
}
.intro-desc{
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    max-width: 885px;
    text-align: center;
    margin-bottom: 20px;
    color: #37474f;
}

feature{
    max-width: 1200px;
    padding: 0 15px;
    margin: 0 160px;
    height: fit-content;
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction: column;
}

.feature-title{
    margin: 0px auto 82px;
    font-size: 34px;
    color: rgb(55, 71, 79);
    width: fit-content;
}

.btn-3{
    background-color: rgb(44, 218, 157);
    width: 269px;
    height: 52px;
    border-radius: 36px;
    border-color: rgb(44, 218, 157);
    font-size: 16px;
    margin: 30px 0px;
}
.ask-serv{
    width: 100%;
    height: 269px;
    background: rgb(220, 241, 255);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.ask-serv-hd{
    font-weight: 700;
    font-size: 34px;
    line-height: 48px;
    color: rgb(255, 255, 255);
}

.blue{
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
.bottom-sec{
    width: 100%;
    padding-top: 72px;
    padding-bottom: 118px;
}

.cards{
    width: 100%;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-top: 42px;
}
.ant-card-body{
    width: 325px;
    height: 282px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    -webkit-box-align: center;
    align-items: center;
    border: 1px solid rgba(45, 105, 118, 0.3);
    border-radius: 16px;
}
.btn-4{
    font-weight: bold;
    font-size: 16px;
    color: rgb(44, 218, 157);
    line-height: 20px;
    height: 47px;
    width: 150px;
    border-radius: 25px;
    background: rgb(255, 255, 255);
    border-color: rgb(44, 218, 157);
}

.car-item{
    height: 260px;
    width: 320px;
    margin-bottom: 50px;
    padding: 0px 10px !important;
}

.feature-head{
    text-align: center;
    margin: 100px 0px 75px;
    font-size: 34px;
    font-weight: 700;
    color: rgb(55, 71, 79);
}

.ask-offer{
    max-width: 1200px;
    width: 100%;
    height: 75px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    background: rgb(229, 250, 255);
    border-radius: 6px;
    margin-bottom: 95px;
    position: relative;
    overflow: hidden;
}

.offer-titl{
    line-height: 75px;
    font-weight: 500;
    font-size: 20px;
    color: rgb(55, 71, 79);
    text-align: center;
}
.offer-stick{
    font-size: 9px;
    position: absolute;
    width: 113px;
    height: 25px;
    line-height: 25px;
    top: 11px;
    right: -31px;
    color: white;
    text-align: center;
    background: rgb(44, 218, 157);
    transform: rotate(
45deg);
}

.row-container{
    max-width: 1200px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    }

    .cont-hd{
        font-weight: bold;
    font-size: 34px;
    line-height: 48px;
    text-align: center;
    color: rgb(55, 71, 79);
    margin-bottom: 18px;
    }

 .cont-des{
    font-size: 22px;
    line-height: 32px;
    text-align: center;
    color: rgb(97, 113, 121);
 }

.rw-cont{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;
}

.design-id{
    background: rgb(253, 253, 253);
    padding: 1px 0px;
    margin-top: 30px;
}
.designCont{
    font-weight: 600;
    font-size: 20px;
    color: rgb(79, 79, 79);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    gap: 28px;
    margin-bottom: 68px;
}
`;