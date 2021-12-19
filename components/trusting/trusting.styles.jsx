import styled from "styled-components";

export const TrustingContainer = styled.div`
    margin-top: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    direction: rtl;
    flex-direction: column;
    gap: 64px;
    padding-top: 72px;
    padding-bottom: 120px;
    background-color: #fcfcfc;
    @media screen and (max-width: 768px) {
        margin-top: 340vh;
    }
    .row-container{
    max-width: 1200px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    }

    .secHeader{

    }

    .HeaderContainer{
    font-weight: 500;
    font-size: 48px;
    width: fit-content;
     margin: 0 auto;
    text-align: center;
    color: #3386a7;
    margin-bottom: 32px;

    @media screen and (max-width: 768px){
        
    }
}

.contentDesc{
    max-width: 672px;
    text-align: center;
    color: #617179;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    @media screen and (max-width: 768px){
        font-size: 16px;
    }
}

.ReasonsContainer{
    
}

.reason{
    width: 585px;
    height: 160px;
        @media screen and (max-width: 1024px) {
            
        }
}

.reasonTitle{
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    text-align: right;
    text-transform: capitalize;
    color: rgb(40, 84, 116);
    margin-bottom: 12px;
}
.reason{
    width: 100%;
    display: flex;
    gap: 26px;
    margin-bottom: 52px;
}

.img-container{
    
}




  @media screen and (max-width: 768px) {
    max-width: 700px;
  }
`;
