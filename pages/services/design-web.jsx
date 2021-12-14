import React from 'react'
import { ServicesContainer } from './services.styles'
import { Row, Col, Typography, Button, Space, Card } from 'antd';


const { Title, Paragraph } = Typography;

const designWebsite = () => {
    return (
        <ServicesContainer>
            <div className='intro-container'>
                <Typography>
                    <Title className='intro-header'> تصميم المواقع الالكترونية</Title>
                    <Paragraph className='intro-desc'>ﻣﻮﻗﻌﻚ اﻟﺎﻟﻜﺘﺮوﻧﻲ ﺳﻴﺘﻴﺢ ﻟﻚ اﻟﺘﻮاﺻﻞ ﻣﻊ ﻋﻤﻠﺎﺋﻚ ﻓﻲ أي ﻣﻜﺎن وأي وﻗﺖ وﺗﺤﻘﻴﻖ أﻓﻀﻞ ﻋﺎﺋﺪ وﺃﻓﻀﻞ ﻣﺒﻴﻌﺎت ﻣﻤﻜﻨﺔ ﺳﻴﻤﻨﺤﻚ ﻣﻮﻗﻌﻚ اﻟﺎﻟﻜﺘﺮوﻧﻲ اﻣﻜﺎﻧﻴﺔ اﻟﻮﺻﻮل ﻟﻌﻤﻠﺎﺋﻚ ﻓﻲ أي ﻣﻜﺎن ﻓﻲ اﻟﻌﺎﻟﻢ ﻣﻦ ﺧﻠﺎل ﻋﺮض ﻛﺎﻓﺔ ﻣﻨﺘﺠﺎﺗﻚ وﺧﺪﻣﺎﺗﻚ ﺑﺸﻜﻞ ﻣﺤﺘﺮف وجذاب ، ﻟﺘﺤﻘﻖ ﺑﺬﻟﻚ أﻋﻠﻰ ﻧﺴﺐ ﺗﺤﻮﻳﻞ ﻟﻠﻤﺒﻴﻌﺎت وﺍﻟﻮﺻﻮل&nbsp;اﻟﻲ ﻋﻤﻠﺎء ﺟﺪد،
                                ﻓﻲ ﺟﻴﺰة اﺑﺲ ﻧﻀﻤﻦ ﻟﻚ ﺗﺼﻤﻴﻢ ﻣﻮﻗﻌﻚ اﻟﺈﻟﻜﺘﺮوﻧﻲ ﺑﺄﻋﻠﻰ جودة وﺃﺩﺍء وﺷﻜﻞ ﻟﻨﺠﻌﻞ ﺻﻮرة ﺷﺮﻛﺘﻚ أﻭ ﻧﺸﺎﻃﻚ اﻟﺘﺠﺎري ﻓﻲ أﻋﻴﻦ ﻋﻤﻠﺎﺋﻜﻢ ﺣﻮل اﻟﻌﺎﻟﻢ ﺑﺄﻓﻀﻞ ﺷﻜﻞ اﺣﺘﺮاﻓﻲ</Paragraph>
                </Typography>
                <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2FWeb-Development.svg&w=640&q=75" alt="" width={549} height={224} className='init-image'/>
            </div>
            <div className="feature">
                <Typography className='row-container'>
                    <Title className='feature-title'>مميزات الاموقع الالكترونى من جيزة ابس </Title>
                    <Paragraph>
                        <Row  >
                            <Col xs={24} md={12} xl={6} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center'><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature4.svg&w=96&q=75" width={72} height={72} />
                                <div className='feat-desc'><h5>ربط بوسائل التواصل الاجتماعى</h5></div>
                                </Space>
                            </Col>
                            <Col xs={24} md={12} xl={6} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center'><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature3.svg&w=96&q=75" width={72} height={72} />
                                <div className='feat-desc'><h5>لوحة تحكم سهلة</h5></div>
                                </Space>
                            </Col>
                            <Col xs={24} md={12} xl={6} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center'><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature2.svg&w=96&q=75" width={72} height={72} />
                                <div className='feat-desc'><h5>موقع باكثر من لغة</h5></div></Space>
                            </Col>
                            <Col xs={24} md={12} xl={6} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center'><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature1.svg&w=96&q=75" width={72} height={72} />
                                <div className='feat-desc'><h5>موقع متناسب مع نشاطك التجارى</h5></div></Space>
                            </Col>
                            <Col xs={24} md={12} xl={6} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center'><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature8.svg&w=96&q=75" width={72} height={72} />
                                <div className='feat-desc'><h5>تخطيط وتقسيم جيد لعلامات التبويت</h5></div></Space>
                            </Col>
                            <Col xs={24} md={12} xl={6} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center'><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature7.svg&w=96&q=75" width={72} height={72} />
                                <div className='feat-desc'><h5>يحتوى على معايير وشهادات الامان</h5></div></Space>
                            </Col>
                            <Col xs={24} md={12} xl={6} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center'><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature6.svg&w=96&q=75" width={72} height={72} />
                                <div className='feat-desc'><h5>متجاوب مع جميع الاجهزة</h5></div></Space>
                            </Col>
                            <Col xs={24} md={12} xl={6} style={{marginBottom:'73px'}}>
                                <Space direction='vertical' size='large' align='center'><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2Fweb-development%2FwebsiteDesignFeature5.svg&w=96&q=75" width={72} height={72} />
                                <div className='feat-desc'><h5>متوافق مع معايير السيو</h5></div></Space>
                            </Col>
                        </Row>
                    </Paragraph>
                </Typography>
            </div>
            <div className="ask-serv">
                <h2 className="serv-title">صمم موقعك الان</h2>
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

export default designWebsite
