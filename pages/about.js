import React from 'react'
import { AboutContainer } from '../styles/about.styles'
import { Row, Col, Typography, Button, Space, Card } from 'antd';


const about = () => {
    return (
        <AboutContainer>

            <div className='intro'>
                <div className='content'>
            <h1 className='intro-header'>عن الشركة</h1>
            <p className='content-desc'> تعد شركة جيزة ابس احدي الشركات الرائدة في مجال تطوير البرمجيات وتطبيقات الجوال والمواقع الالكترونية 
                نقوم بانتاج حلول تقنية لقطاعات اعمال مختلفة تتميز تلك الحلول بالمرونة وسهولة الاستخدام. 
                كما نقدم ايضا لعملائنا تصميمات أنيقة للمواقع الالكترونية تكمن احترافية جيزة ابس في 
                تقديم حلول تقنية بسيطة وفعالة لعملائها مما اتاح لنا توسيع نشاطاتنا 
                وتحسين جودة منتجاتنا خلال فترة زمنية قصيرة</p>
                </div> 
            </div>

            <div className='row-container'>
                <Row justify='center' className='index-sec'>
                    <Col className='content' lg={{ span: 12, order: 1 }} xs={{ span: 24, order: 2 }}>
                    <div >
                        <h2 className='heade-con' >رؤيتنا</h2>
                        <p>ان نكون المؤسسة الأولي الرائدة في مجال تفنية المعلومات وبرمجة المواقع والتطبيقات</p>
                    </div>

                    <div>
                        <h2 className='heade-con'>رؤيتنا</h2>
                        <p>ان نكون المؤسسة الأولي الرائدة في مجال تفنية المعلومات وبرمجة المواقع والتطبيقات</p>
                    </div>

                    </Col>
                    <Col lg={{ span: 12, order: 2 }} xs={{ span: 24, order: 1 }}>
                    <div><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2FSolvingProblem.svg&w=1920&q=75" className='img-container'></img></div>
                    </Col>
                </Row>
            </div>

            <div className='row-container'>
                <div className='feed-back'>
                    <h2>ابق على تواصل</h2>
                    <Button type='primary' shape='round' className='btn-5'>تواصل معنا </Button>
                </div>
            </div>
        </AboutContainer>
    )
}

export default about
