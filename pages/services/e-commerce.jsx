import React from 'react'
import { ServicesContainer } from './services.styles'
import { Row, Col, Typography, Button, Space, Card, Carousel } from 'antd';


const { Title, Paragraph } = Typography;


const ShopCom = () => {
    return (
        <ServicesContainer>
            <div className='intro-container'>
                <Typography>
                    <Title className='intro-header'> تصميم المتاجر الالكترونية</Title>
                    <Paragraph className='intro-desc'>الآن يمكنك إدارة تجارتك الإلكترونية سواء كنت صاحب نشاط تجاري كبير مثل شركة أو مؤسسة أو كنت صاحب محل صغير أو متوسط مثل محلات العطور أو مستحضرات التجميل يمكنك الان وبكل سهولة تطوير مشروعك من صفحة فيسبوك الي متجر متكامل تعد شركة جيزة أبس أفضل شركة تصميم وإنشاء المتاجر الإلكترونية حيث نقدم لك متجر متكامل إحترافى يوفر لك حلول فريدة ومبتكرة تجعلك تدير عملية البيع بسهولة تامة والتي تساعد على زيادة حركة البيع ..</Paragraph>
                </Typography>
                <Carousel autoplay slidesToShow={5} centerPadding>
                   <img src="https://www.gizaapps.com/static/images/services-images/ecommerce/slider/2.jpg" alt="" className='img-carsoul' />
                    <img src="https://www.gizaapps.com/static/images/services-images/ecommerce/slider/2.jpg" alt="" className='img-carsoul' />
                    
  
                    <img src="https://www.gizaapps.com/static/images/services-images/ecommerce/slider/3.jpg" alt=""  className='img-carsoul'/>
 
                    <img src="https://www.gizaapps.com/static/images/services-images/ecommerce/slider/2.jpg" alt="" className='img-carsoul' />
    
                    <img src="https://www.gizaapps.com/static/images/services-images/ecommerce/slider/2.jpg" alt="" className='img-carsoul' />
                    
                </Carousel>
                
            </div>
            <div className="row-container">
                <Typography>
                    <Title className='feature-title'>مميزات الاموقع الالكترونى من جيزة ابس </Title>
                    <Paragraph>
                        <Row justify='center' >
                            <Col span={6} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center'style={{maxWidth:'435px',margin:'0px auto'}}><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature4.svg&w=96&q=75" alt="" />
                                <h5>ربط بوسائل التواصل الاجتماعى</h5>
                                </Space>
                            </Col>
                            <Col span={6} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center' style={{maxWidth:'435px',margin:'0px auto'}}><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature3.svg&w=96&q=75" alt="" />
                                <h5>لوحة تحكم سهلة</h5>
                                </Space>
                            </Col>
                            <Col span={6} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center' style={{maxWidth:'435px',margin:'0px auto'}}><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature2.svg&w=96&q=75" alt="" />
                                <h5>موقع باكثر من لغة</h5></Space>
                            </Col>
                            <Col span={6} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center' style={{maxWidth:'435px',margin:'0px auto'}}><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature1.svg&w=96&q=75" alt="" />
                                <h5>موقع متناسب مع نشاطك التجارى</h5></Space>
                            </Col>
                            <Col span={6} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center' style={{maxWidth:'435px',margin:'0px auto'}}><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature8.svg&w=96&q=75" alt="" />
                                <h5>تخطيط وتقسيم جيد لعلامات التبويت</h5></Space>
                            </Col>
                            <Col span={6} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center' style={{maxWidth:'435px',margin:'0px auto'}}><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature7.svg&w=96&q=75" alt="" />
                                <h5>يحتوى على معايير وشهادات الامان</h5></Space>
                            </Col>
                            <Col span={6} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center' style={{maxWidth:'435px',margin:'0px auto'}}><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature6.svg&w=96&q=75" alt="" />
                                <h5>متجاوب مع جميع الاجهزة</h5></Space>
                            </Col>
                            <Col span={6} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center' style={{maxWidth:'435px',margin:'0px auto'}}><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature5.svg&w=96&q=75" alt="" />
                                <h5>متوافق مع معايير السيو</h5></Space>
                            </Col>
                            <Col span={6} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center' style={{maxWidth:'435px',margin:'0px auto'}}><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature4.svg&w=96&q=75" alt="" />
                                <h5>ربط بوسائل التواصل الاجتماعى</h5>
                                </Space>
                            </Col>
                            <Col span={6} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center' style={{maxWidth:'435px',margin:'0px auto'}}><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature3.svg&w=96&q=75" alt="" />
                                <h5>لوحة تحكم سهلة</h5>
                                </Space>
                            </Col>
                            <Col span={6} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center' style={{maxWidth:'435px',margin:'0px auto'}}><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature2.svg&w=96&q=75" alt="" />
                                <h5>موقع باكثر من لغة</h5></Space>
                            </Col>
                            <Col span={6} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center' style={{maxWidth:'435px',margin:'0px auto'}}><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature1.svg&w=96&q=75" alt="" />
                                <h5>موقع متناسب مع نشاطك التجارى</h5></Space>
                            </Col>
                            <Col span={6} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center' style={{maxWidth:'435px',margin:'0px auto'}}><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature8.svg&w=96&q=75" alt="" />
                                <h5>تخطيط وتقسيم جيد لعلامات التبويت</h5></Space>
                            </Col>
                            <Col span={6} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center' style={{maxWidth:'435px',margin:'0px auto'}}><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature7.svg&w=96&q=75" alt="" />
                                <h5>يحتوى على معايير وشهادات الامان</h5></Space>
                            </Col>
                            <Col span={6} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center' style={{maxWidth:'435px',margin:'0px auto'}}><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature6.svg&w=96&q=75" alt="" />
                                <h5>متجاوب مع جميع الاجهزة</h5></Space>
                            </Col>
                            <Col span={6} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center' style={{maxWidth:'435px',margin:'0px auto'}}><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature5.svg&w=96&q=75" alt="" />
                                <h5>متوافق مع معايير السيو</h5></Space>
                            </Col>
                        </Row>
                    </Paragraph>
                </Typography>
            </div>
            <div className="ask-serv">
                <h2 className="serv-title">اطلب متجرك الان</h2>
                <Button type="primary" shape="round" className='btn-3'>اطلب الخدمة الان</Button>
            </div>
            <div className="bottom-sec">
            <h2 className="feature-title">تواصل معنا </h2>
            <p className='cont-des'>نسعد ياستقبال استفساراتكم واتصالاتكم عبر</p>
            <div className='cards'>
            <Card className="card-cont">
                <img src="https://www.gizaapps.com/static/images/whatsapp5.svg" alt="" />
                <span>الواتس اب</span>
                <span>0123456789</span>
                <Button type='primary' shape='round' className='btn-4'>تواصل معنا</Button>
            </Card>
            <Card className="card-cont">
                <img src="https://www.gizaapps.com/static/images/phone5.svg" alt="" />
                <span>الهاتف</span>
                <span>0123456789</span>
                <Button type='primary' shape='round' className='btn-4'>اتصل بنا</Button>
            </Card>
            </div>

            </div>
        </ServicesContainer>
    )
}

export default ShopCom
