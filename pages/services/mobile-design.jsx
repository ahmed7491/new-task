import React from 'react'
import { ServicesContainer } from './services.styles'
import { Row, Col, Typography, Button, Space, Card, Carousel } from 'antd';


const { Title, Paragraph } = Typography;

const DesignMob = () => {
    return (
        <ServicesContainer>
            <div className='intro-container'>
                <Typography>
                    <Title className='intro-header'> تصميم تطبيقات الجوال</Title>
                    <Paragraph className='intro-desc'>انت صاحب شركة أو لديك فكرة نشاط تجاري؟ اذا ستحتاج إلي  تصميم وبرمجة تطبيقات الجوال كي تحصل علي تطبيق خاص بشركتك أو نشاطك التجاري يمكنك التطبيق  من التواصل مع العملاء بطريقة أسرع وأكثر احترافيه كذلك يساهم التطبيق الالكتروني في تسهيل  عملية التواصل مع عملائك لذلك فإن عملية تصميم تطبيقات الجوال هي عملية تهدف في الأساس إلي راحة العميل وزيادة المبيعات.</Paragraph>
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
                    <Title className='feature-title'>مميزات برمجة التطبيقات من جيزة أبس  </Title>
                    <Paragraph>
                        <Row justify='center' align='middle'>
                            <Col span={8} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center' style={{maxWidth:'435px',margin:'0px auto'}}><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature4.svg&w=96&q=75" alt="" />
                                <h5>ربط بوسائل التواصل الاجتماعى</h5>
                                </Space>
                            </Col>
                            <Col span={8} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center' style={{maxWidth:'435px',margin:'0px auto'}}><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature3.svg&w=96&q=75" alt="" />
                                <h5>لوحة تحكم سهلة</h5>
                                </Space>
                            </Col>
                            <Col span={8} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center' style={{maxWidth:'435px',margin:'0px auto'}}><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature2.svg&w=96&q=75" alt="" />
                                <h5>موقع باكثر من لغة</h5></Space>
                            </Col>
                            <Col span={8} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center' style={{maxWidth:'435px',margin:'0px auto'}}><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature1.svg&w=96&q=75" alt="" />
                                <h5>موقع متناسب مع نشاطك التجارى</h5></Space>
                            </Col>
                            <Col span={8} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center' style={{maxWidth:'435px',margin:'0px auto'}}><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature8.svg&w=96&q=75" alt="" />
                                <h5>تخطيط وتقسيم جيد لعلامات التبويت</h5></Space>
                            </Col>
                            <Col span={8} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center' style={{maxWidth:'435px',margin:'0px auto'}}><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature7.svg&w=96&q=75" alt="" />
                                <h5>يحتوى على معايير وشهادات الامان</h5></Space>
                            </Col>
                            <Col span={8} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center' style={{maxWidth:'435px',margin:'0px auto'}}><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature6.svg&w=96&q=75" alt="" />
                                <h5>متجاوب مع جميع الاجهزة</h5></Space>
                            </Col>
                            <Col span={8} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center' style={{maxWidth:'435px',margin:'0px auto'}}><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature5.svg&w=96&q=75" alt="" />
                                <h5>متوافق مع معايير السيو</h5></Space>
                            </Col>
                            <Col span={8} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center' style={{maxWidth:'435px',margin:'0px auto'}}><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature4.svg&w=96&q=75" alt="" />
                                <h5>ربط بوسائل التواصل الاجتماعى</h5>
                                </Space>
                            </Col>
                        </Row>
                    </Paragraph>
                </Typography>
            </div>

            <div className="row-container">
            <h1 className='header-mob'>خدمات تصميم تطبيقات الجوال  </h1>
            <Row gutter={[28,0]}>
                <Col >
                <div className='andorid-ios green'>
                    <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fmobile-design%2Fandroid%201.svg&w=96&q=75" alt="" />
                    <span className="ask-serv-hd">تصميم تطبيقات الاندرويد</span>
                </div>
                </Col>
                <Col>
                <div className='andorid-ios blue'>
                    <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fmobile-design%2Fapple%201.svg&w=96&q=75" alt="" />
                    <span className="ask-serv-hd">تصميم تطبيقات ios</span>
                </div>
                </Col>
            </Row>
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

export default DesignMob
