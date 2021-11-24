import styled from "styled-components";

export const TrustingContainer = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    direction: rtl;
    flex-direction: column;
    gap: 64px;
    padding-top: 72px;
    padding-bottom: 120px;
    background-color: #fcfcfc;

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
}

.contentDesc{
    max-width: 672px;
    text-align: center;
    color: #617179;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
}

.ReasonsContainer{
    max-width: 1200px;
}

.reason{
    width: 585px;
    height: 160px;
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

.img-container{
    margin: 27px;
}
`;

export const ImageContainer = styled.div`
    
`;