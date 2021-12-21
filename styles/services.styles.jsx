import styled from "styled-components";

export const ServicesContainer = styled.div`
  direction: rtl;

  .intro-container {
    width: 100%;
    margin-top: 72px;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    padding-top: 32px;
  }
  .intro-header {
    font-weight: 500;
    font-size: 48px;
    width: fit-content;
    margin: 0px auto;
    padding-bottom: 10px;
    text-align: center;
    border-bottom: 4px solid rgb(44, 218, 157);
    color: #333333;
    margin-bottom: 32px;
    @media screen and (max-width: 768px) {
      font-size: 34px;
      line-height: 48px;
    }
    @media screen and (max-width: 576px) {
      line-height: 34px;
      font-size: 24px;
    }
    .feat-desc {
      justify-content: flex-start;
      max-width: "370px";
      display: "flex";
      align-items: "center";
      flex-direction: "column";
      text-align: "center";
    }
  }
  .intro-desc {
    margin: 0px auto;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    max-width: 885px;
    text-align: center;
    margin-bottom: 20px;
    color: #37474f;
    @media screen and (max-width: 768px) {
      max-width: 80%;
    }
  }

  .init-image {
    width: 100%;
    @media screen and (max-width: 425px) {
      width: 425px;
    }
    @media screen and (max-width: 375px) {
      width: 374px;
    }
    @media screen and (max-width: 320px) {
      width: 319px;
    }
  }

  .feature-title {
    margin: 130px auto 82px;
    font-size: 34px;
    text-align: center;
    color: rgb(55, 71, 79);
    width: fit-content;
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }

  .serv-title {
    font-weight: 700;
    font-size: 34px;
    line-height: 48px;
    color: rgb(55, 71, 79);
  }

  .btn-3 {
    background-color: rgb(44, 218, 157);
    width: 269px;
    height: 52px;
    border-radius: 36px;
    border-color: rgb(44, 218, 157);
    font-size: 16px;
    margin: 30px 0px;
  }
  .ask-serv {
    width: 100%;
    height: 269px;
    background: rgb(220, 241, 255);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    
  }

  .ask-serv-hd {
    font-weight: 700;
    font-size: 34px;
    line-height: 48px;
    color: rgb(255, 255, 255);
  }

  .blue {
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
  .bottom-sec {
    width: 100%;
    padding-top: 72px;
    padding-bottom: 118px;
  }

  .cards {
    width: 100%;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-top: 42px;
    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  }
  .ant-card-body {
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
  .btn-4 {
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

  .car-item {
    height: 260px;
    width: 320px;
    margin-bottom: 50px;
    padding: 0px 10px !important;
  }

  .feature-head {
    text-align: center;
    margin: 100px 0px 75px;
    font-size: 34px;
    font-weight: 700;
    color: rgb(55, 71, 79);
  }

  .ask-offer {
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

  .offer-titl {
    line-height: 75px;
    font-weight: 500;
    font-size: 20px;
    color: rgb(55, 71, 79);
    text-align: center;
  }
  .offer-stick {
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
    transform: rotate(45deg);
  }

  .row-container {
    max-width: 1200px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  .cont-hd {
    font-weight: bold;
    font-size: 34px;
    line-height: 48px;
    text-align: center;
    color: rgb(55, 71, 79);
    margin-bottom: 18px;
  }

  .cont-des {
    font-size: 22px;
    line-height: 32px;
    text-align: center;
    color: rgb(97, 113, 121);
  }

  .rw-cont {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;
  }

  .design-id {
    background: rgb(253, 253, 253);
    padding: 1px 0px;
    margin-top: 30px;
  }
  .designCont {
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

  .img-carsoul {
    max-height: 260px;
    width: 320px;
    padding: 0px 10px;
  }

  .header-mob {
    margin: 156px auto 0px;
    width: fit-content;
    color: rgb(55, 71, 79);
    font-size: 34px;
    line-height: 48px;
    font-weight: bold;
    @media screen and (max-width: 768px){
        font-size: 20px;
    }
  }

  .andorid-ios {
    width: 100%;
  height: 239px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  margin: 64px 0;
  margin-bottom: 140px;
  background: ${(props) =>
    props.color == "blue"
      ? "linear-gradient(321.69deg, #4481EB 0%, #04BEFE 100%)"
      : "linear-gradient(132.9deg, #63F7A1 1.3%, #27AE60 98.06%)"};
  @media screen and (max-width: 768px) {
    gap: 20px;
  }    
  }
  .card__title {
    font-weight: 600;
    font-size: 24px;
    color: #fff;
    @media screen and (max-width: 768px) {
      font-size: 14px;
      text-align: center;
    }
    @media screen and (max-width: 320px) {
      max-width: 120px;
    }
  }

  .green {
    background: linear-gradient(
      132.9deg,
      rgb(99, 247, 161) 1.3%,
      rgb(39, 174, 96) 98.06%
    );
  }
  .blue {
    background: linear-gradient(
      321.69deg,
      rgb(68, 129, 235) 0%,
      rgb(4, 190, 254) 100%
    );
  }

  .description {
    color: rgb(97, 113, 121);
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
  }

  .marketing-services {
    width: 100%;
    height: fit-content;
    background: rgb(251, 251, 251);
    text-align: center;
    padding-top: 154px;
    margin-top: 154px;
  }
  .ant-carousel{
    @media screen and (max-width: 1440px) {
      width: 1024px;
      height:261px ;
      overflow: hidden;
    }
    @media screen and (max-width: 768px) {
      width: 768px;
      height:261px ;
      overflow: hidden;
    }
    
  }


  // responsive: [
    //   {
    //     breakpoint: 1800,
    //     settings: {
    //       slidesToShow: 4,
    //     },
    //   },
    //   {
    //     breakpoint: 1440,
    //     settings: {
    //       slidesToShow: 4,
    //     },
    //   },
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       centerMode: true,
    //     },
    //   },
    //   {
    //     breakpoint: 760,
    //     settings: {
    //       slidesToShow: 3,
    //       centerMode: true,
    //     },
    //   },
    //   {
    //     breakpoint: 573,
    //     settings: {
    //       slidesToShow: 1,
    //       centerMode: true,
    //     },
    //   },
    // ],



`;

export const CarouselItem = styled.div`
  padding: 0 10px !important;
  margin-bottom: 50px;

  img {
    object-fit: contain;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      max-width: 260px;
    }
  }
`;