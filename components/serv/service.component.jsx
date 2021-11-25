import React from 'react'

import { Row, Col, Space, Card } from 'antd';
import { ServiceContainer } from './service.styles';

const Service = () => {
    return (
        <ServiceContainer>
              <Space direction='vertical' size='large' align='center' className='row-container'>
                  <div className='headercon'>
                        <h1 className='HeaderContainer'> خدماتنا</h1>
                        <p className='contentDsec'>نقوم  بتقديم جميع الخدمات  التى تعزز  من تواجدك الرقمى  باحترافية بداية من برمجة المواقع وحتى التسويق</p>
                  </div>
                  <Row justify='center'>
                      <Col span={8}>
                      <Space direction="vertical" size='large' >
                            <img  src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservice1.svg&w=96&q=75" alt="shop" className='CardImg' />
                            <span className='CardTitle'>تصميم التطبيقات</span>
                      </Space>
                      </Col>
                      <Col span={8}>
                      <Space direction="vertical" size='large' >
                        <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservice2.svg&w=96&q=75"  alt="shop" className='CardImg'/>
                        <span className='CardTitle'>تصميم المتاجر الالكترونية</span>
                      </Space>
                      </Col>
                      <Col span={8}>
                      <Space direction="vertical" size='large' >
                        <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservice3.svg&w=96&q=75"  alt="shop" className='CardImg'/>
                        <span className='CardTitle'>تصميم المواقع الالكترونية</span>
                      </Space>
                      </Col>
                      <Col span={8}>
                      <Space direction="vertical" size='large' >
                        <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservice4.svg&w=96&q=75"  alt="shop" className='CardImg'/>
                        <span className='CardTitle'>التسويق الالكترونى</span>
                      </Space>
                      </Col>
                      <Col span={8}>
                      <Space direction="vertical" size='large' >
                        <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fservice5.svg&w=96&q=75"  alt="shop" className='CardImg'/>
                        <span className='CardTitle'>تصميم الهوية التجارية الكاملة</span>
                      </Space>
                      </Col>
                  </Row>
              </Space>
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