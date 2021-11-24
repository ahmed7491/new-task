import React from 'react'

import { Row, Col, Space, Card } from 'antd';
import { ServiceContainer } from './service.styles';

const Service = () => {
    return (
        <ServiceContainer>
         
            <div>
                <h1 className='HeaderContainer'> خدماتنا</h1>
                <p className='contentDsec'>نقوم  بتقديم جميع الخدمات  التى تعزز  من تواجدك الرقمى  باحترافية بداية من برمجة المواقع وحتى التسويق</p>
            </div>
        
            <Space align='center' size='large'>
                <Row justify="center">
                    <Col span={4} offset={3}>
                        <Card bordered={false} size='' className='CardContainer'>
                            <Space direction="vertical" size='large' >
                                <img  src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservice1.svg&w=96&q=75" alt="shop" className='CardImg' />
                                <span className='CardTitle'>تصميم التطبيقات</span>
                            </Space>
                        </Card>
                     </Col>
                    <Col span={4} offset={3}>
                        <Card bordered={false} className='CardContainer'>
                            <Space direction="vertical" size='large' >
                                <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservice2.svg&w=96&q=75"  alt="shop" className='CardImg'/>
                                <span className='CardTitle'>تصميم المتاجر الالكترونية</span>
                            </Space>
                        </Card>
                      </Col>
                    <Col span={4} offset={3}>
                        <Card bordered={false} className='CardContainer'>
                            <Space direction="vertical" size='large' >
                                <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservice3.svg&w=96&q=75"  alt="shop" className='CardImg'/>
                                <span className='CardTitle'>تصميم المواقع الالكترونية</span>
                            </Space>
                        </Card>
                    </Col>
                    <Col span={2} offset={5} pull={2}>
                        <Card bordered={false} className='CardContainer'>
                            <Space direction="vertical" size='large' >
                                <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservice4.svg&w=96&q=75"  alt="shop" className='CardImg'/>
                                <span className='CardTitle'>التسويق الالكترونى</span>
                            </Space>
                        </Card>
                    </Col>
                    <Col span={2} offset={5} pull={2}>
                        <Card bordered={false} className='CardContainer'>
                            <Space direction="vertical" size='large' >
                                <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservice5.svg&w=96&q=75"  alt="shop" className='CardImg'/>
                                <span className='CardTitle'>تصميم الهوية التجارية الكاملة</span>
                            </Space>
                        </Card>
                    </Col>
                    </Row>
            </Space>
        
        </ServiceContainer>
    )
}

export default Service
