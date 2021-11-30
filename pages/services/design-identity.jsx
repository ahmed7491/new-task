import React from 'react'

import { ServicesContainer } from './services.styles'
import { Row, Col, Typography, Button, Space, Card } from 'antd';


const { Title, Paragraph } = Typography;

const IdentityPage = () => {
    return (
        <ServicesContainer>
            <div className='intro-container'>
                <Typography>
                    <Title className='intro-header'> تصميم الهوية التجارية الكاملة</Title>
                    <Paragraph className='intro-desc'>الهوية التجاريه ليست مجرد شعار الشركة وانما هي اي  شئ مرئي يتم استخدامه لتسويق علامتك التجارية</Paragraph>
                </Typography>
                <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservices-images%2FCreative-Process.svg&w=640&q=75" alt="ban" />
            </div>
            <h1 className="feature-head">اهمية تصميم الهوية التجارية</h1>
            <div className="row-container">
                <Row>
                    <Col style={{height:'353px', width:'580px'}}>
                    <div className='rw-cont'>
                        <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fright.svg&w=32&q=75" alt="mark" />
                        <span>اظهار منتجك او شركتك وتمييزها بين باقي الشركات</span>
                    </div>
                    <div className='rw-cont'>
                        <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fright.svg&w=32&q=75" alt="mark" />
                        <span>زيادة ولاء المستهلكين</span>
                    </div>
                    <div className='rw-cont'>
                        <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fright.svg&w=32&q=75" alt="mark" />
                        <span>جذي الانتباه </span>
                    </div>
                    <div className='rw-cont'>
                        <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fright.svg&w=32&q=75" alt="mark" />
                        <span>تعزيز وجودك فى السوق</span>
                    </div>
                    <div className='rw-cont'>
                        <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fright.svg&w=32&q=75" alt="mark" />
                        <span>زيادة ثقة العملاء بالخدمات والمنتجات التي تقدمها</span>
                    </div>
                    </Col >
                    <Col style={{height:'353px', width:'580px'}}><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2FrelaxedWoman.svg&w=1920&q=75" alt="" /></Col>
                </Row>
            </div>
            <div className='design-id'>
                <div className="row-container">
                <h1 className="feature-head">ما الذى نقدمه لك فى تصميم  الهوية التجارية؟</h1>
                <Row>
                    <Col span={8}><div className='designCont'>
                        <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2FlogoDesign.svg&w=48&q=75" alt="lg" />
                        <span>تصميم شعار اللوجو</span>
                        </div>
                        </Col>
                    <Col span={8}><div className='designCont'>
                        <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2FemployeesDesign.svg&w=48&q=75" alt="lg" />
                        <span>تصميم شعار اللوجو</span>
                        </div>
                        </Col>
                    <Col span={8}><div className='designCont'>
                        <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2FlogoDesign.svg&w=48&q=75" alt="lg" />
                        <span>تصميم شعار اللوجو</span>
                        </div>
                        </Col>
                    <Col span={8}><div className='designCont'>
                        <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2FprintsDesign.svg&w=48&q=75" alt="lg" />
                        <span>تصميم شعار اللوجو</span>
                        </div>
                        </Col>
                    <Col span={8}><div className='designCont'>
                        <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2FprintsDesign.svg&w=48&q=75" alt="lg" />
                        <span>تصميم شعار اللوجو</span>
                        </div>
                        </Col>
                    <Col span={8}><div className='designCont'>
                        <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2FlogoDesign.svg&w=48&q=75" alt="lg" />
                        <span>تصميم شعار اللوجو</span>
                        </div>
                        </Col>
                </Row>

                </div>
            </div>
            <div className="row-container">
                <h1 className="feature-head">مراحل تصميم الهوية التجاريه في جيزة أبس</h1>
                <Row>
                    <Col span={6}><div className='designCont'>
                        <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2FdesignSteps1.svg&w=96&q=75" alt="lg" />
                        <span>تصميم شعار اللوجو</span>
                        </div>
                        </Col>
                    <Col span={6}><div className='designCont'>
                        <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2FdesignSteps2.svg&w=96&q=75" alt="lg" />
                        <span>تصميم شعار اللوجو</span>
                        </div>
                        </Col>
                    <Col span={6}><div className='designCont'>
                        <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2FdesignSteps3.svg&w=96&q=75" alt="lg" />
                        <span>تصميم شعار اللوجو</span>
                        </div>
                        </Col>
                    <Col span={6}><div className='designCont'>
                        <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2FdesignSteps4.svg&w=96&q=75" alt="lg" />
                        <span>تصميم شعار اللوجو</span>
                        </div>
                        </Col>
                </Row>

                </div>

                <div className='ask-offer'>
                    <p className='offer-titl'>عرض لفترة محدودة لوجو + تهيئة واجهة المتجر (بنرات الموقع) 1000 جنيه</p>
                    <span className='offer-stick'>لفترة محدودة</span>
                </div>

                <div className=" blue" >
                    <Space direction='vertical' size='middle'>
                    <span className="ask-serv-hd">اطلب الخدمة الان</span>
                    <Button type="primary" shape="round" className='btn-3'>اطلب الخدمة الان</Button>
                    </Space>
                
                
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

export default IdentityPage
