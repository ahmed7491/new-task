import React from 'react';

import Image from 'next/image'
import { Row, Col, Divider, Card, Space } from 'antd';
import { FooterContainer } from './footer.styles';

const FooterComponent = () => {
    return (
        <FooterContainer>
            <Row className='rowContainer' >
                <Col flex={1} span={16} pull={3}  className='footerCol'>
                    <div className='headerContainer'> GIZA APPS 
                    <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2FfooterLogo.svg&w=32&q=75" alt="logo" /> </div>
                    <div className='description'>شركة تساهم في تعزيز التواجد الرقمي من خلال تقديم البرمجيات،نقوم بتقديم كل الخدمات بداية من لبرمجة وحتي تصميم وانتهاءا بالتسويق الالكتروني .</div>
                </Col>
                <Col flex={1.5} span={4} className='footerCol'>
                    <h5 className='headerItems'>عن الشركة</h5>
                    <Space direction='vertical'>
                        <span className="footeItem">منتجاتنا</span>
                        <span className="footeItem">خدماتنا</span>
                        <span className="footeItem">سابق اعمالنا</span>
                        <span className="footeItem">تواصل معنا </span>
                        <span className="footeItem">عن الشركة</span>
                    </Space>
                </Col>
                <Col flex={1} span={8} className='footerCol'>
                    <h5 className='headerItems'>تواصل معنا</h5>
                    <Space direction='vertical'>
                        <span className="footeItem">(+20)012345789</span>
                        <span className="footeItem">(+20)012345789</span>
                    </Space>
                    
                </Col>
                <Col flex={1.5} span={4} className='footerCol'>
                    <h5 className='headerItems'>تابعنا</h5>
                    <Space direction='horizontal'>
                        <img  src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2FgreenFacebook.svg&w=16&q=75" className="footeItem"/>
                        <img  src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2FgreenLinkedIn.svg&w=16&q=75" className="footeItem"/>
                        
                    </Space>
                </Col>
            </Row>
            <Row className='copRightContainer' >
                <Col span={2} offset={20} pull={2} className='copRightItems'>الشروط و الاحكام</Col>
                <Col span={2} > &#169; GIZA APPS</Col>
            </Row>    
        </FooterContainer>
    )
}

export default FooterComponent
