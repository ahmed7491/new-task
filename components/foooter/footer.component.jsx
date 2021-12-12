import React from 'react';

import Image from 'next/image'
import { Row, Col, Divider, Card, Space } from 'antd';
import { FooterContainer } from './footer.styles';

const FooterComponent = () => {
    return (
        <FooterContainer>
            <div className='row-container' >
            <Row gutter={[20, 40]}>
                <Col  md={{ span: 10, order: 1 }}
            sm={{ span: 11, order: 1 }}
            xs={{ span: 24, order: 1 }} >
                    <div className='headerContainer'> GIZA APPS 
                    <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2FfooterLogo.svg&w=32&q=75" alt="logo" /> </div>
                    <div className='description'>شركة تساهم في تعزيز التواجد الرقمي من خلال تقديم البرمجيات،نقوم بتقديم كل الخدمات بداية من لبرمجة وحتي تصميم وانتهاءا بالتسويق الالكتروني .</div>
                </Col>
                <Col md={{ span: 4, order: 2 }}
            sm={{ span: 5, order: 2 }}
            xs={{ span: 10, order: 1 }}>
                    <h5 className='headerItems'>عن الشركة</h5>
                    <Space direction='vertical'>
                        <span className="footeItem">منتجاتنا</span>
                        <span className="footeItem">خدماتنا</span>
                        <span className="footeItem">سابق اعمالنا</span>
                        <span className="footeItem">تواصل معنا </span>
                        <span className="footeItem">عن الشركة</span>
                    </Space>
                </Col>
                <Col md={{ span: 6, order: 3 }}
            sm={{ span: 8, order: 3 }}
            xs={{ span: 14, order: 2 }}>
                    <h5 className='headerItems'>تواصل معنا</h5>
                    <Space direction='vertical'>
                        <span className="footeItem">(+20)012345789</span>
                        <span className="footeItem">(+20)012345789</span>
                    </Space>
                    
                </Col>
                <Col order={4} md={{ span: 4 }} sm={{ span: 0 }} xs={{ span: 0 }}>
                    <h5 className='headerItems'>تابعنا</h5>
                    <Space direction='horizontal' size={20}>
                        <img  src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2FgreenFacebook.svg&w=16&q=75" className="footeItem"/>
                        <img  src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2FgreenLinkedIn.svg&w=16&q=75" className="footeItem"/>
                        
                    </Space>
                </Col>
            </Row>
            <Divider/>
            <Row justify='space-between'>
                <Col > الشروط و الاحكام</Col>
                <Col > &#169; GIZA APPS</Col>
            </Row>    
            </div>
        </FooterContainer>
    )
}

export default FooterComponent
