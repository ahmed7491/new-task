import React from 'react'
import Link from 'next/link';
import { Row, Col, Space, Card } from 'antd';
import { ServiceContainer } from './service.styles';
import { menuUrl } from '../../layouts/header/header.component';

const Service = () => {
    return (
        <ServiceContainer>
          <div  className='row-container'>
              <Row gutter={[0,64]} justify='center' >
                  <Col className='headercon'>
                        <h1 className='HeaderContainer'> خدماتنا</h1>
                        <p className='contentDsec'>نقوم  بتقديم جميع الخدمات  التى تعزز  من تواجدك الرقمى  باحترافية بداية من برمجة المواقع وحتى التسويق</p>
                  </Col>
                  <Col>
                  <Row justify='center'  align='middle'>
                      <Col xs={24} lg={8} >
                        <Link href={menuUrl.mobilDesign}>
                          <Card bordered={false}>
                      <Space direction="vertical" size={[48]} >
                            <img  src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservice1.svg&w=96&q=75" alt="shop" className='CardImg' />
                            <span className='CardTitle'>تصميم التطبيقات</span>
                      </Space>
                      </Card>
                      </Link>
                      </Col>
                      <Col xs={24} lg={8} >
                        <Link href={menuUrl.E_Commerce}>
                          <Card bordered={false}>
                      <Space direction="vertical" size={[48]} >
                        <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservice2.svg&w=96&q=75"  alt="shop" className='CardImg'/>
                        <span className='CardTitle'>تصميم المتاجر الالكترونية</span>
                      </Space>
                      </Card>
                      </Link>
                      </Col>
                      <Col xs={24} lg={8} >
                        <Link href={menuUrl.designWeb}>
                          <Card bordered={false}>
                      <Space direction="vertical" size={[48]} >
                        <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservice3.svg&w=96&q=75"  alt="shop" className='CardImg'/>
                        <span className='CardTitle'>تصميم المواقع الالكترونية</span>
                      </Space>
                      </Card>
                      </Link>
                      </Col>
                      <Col xs={24} lg={8} >
                        <Link href={menuUrl.marketing}>
                          <Card bordered={false}>
                      <Space direction="vertical" size={[48]} >
                        <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservice4.svg&w=96&q=75"  alt="shop" className='CardImg'/>
                        <span className='CardTitle'>التسويق الالكترونى</span>
                      </Space>
                      </Card>
                      </Link>
                      </Col>
                      <Col xs={24} lg={8} >
                        <Link href={menuUrl.sedignId}>
                          <Card bordered={false}>
                      <Space direction="vertical" size={[48]} >
                        <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservice5.svg&w=96&q=75"  alt="shop" className='CardImg'/>
                        <span className='CardTitle'>تصميم الهوية التجارية الكاملة</span>
                      </Space>
                      </Card>
                      </Link>
                      </Col>
                  </Row>
                  </Col>
              </Row>
              </div>
        </ServiceContainer>
    )
}

export default Service

{/* <Row  className='row-container' align='middle' gutter={[0,64]} >
   <Col span={12} offset={6} className>
           <div>
           <h1 className='HeaderContainer'> خدماتنا</h1>
           <p className='contentDsec'>نقوم  بتقديم جميع الخدمات  التى تعزز  من تواجدك الرقمى  باحترافية بداية من برمجة المواقع وحتى التسويق</p>
           </div>
       </Col>
       <Col span={12} offset={6}>
           
           <Row justify="center" style={{maxWidth:'1200px'}}>
       <Col span={4} offset={3}>
           <div  className='CardContainer'>
               
           </div>
        </Col>
       <Col span={4} offset={3}>
           <div className='CardContainer'>
               
           </div>
         </Col>
       <Col span={4} offset={3}>
           <div className='CardContainer'>
               
           </div>
       </Col>
       <Col span={2} offset={5} pull={2}>
           <div className='CardContainer'>
               
           </div>
       </Col>
       <Col span={2} offset={5} pull={2}>
           <div className='CardContainer'>
               
           </div>
       </Col>
       </Row>
           
       </Col>
   </Row> */}