import React from 'react';

import { HeaderContainer } from './navBar.styles';
import { Row, Col } from 'antd';
import { Layout, Breadcrumb } from 'antd';

const {  Content } = Layout;

const NavBar = () => {
    return (
        <HeaderContainer>
            <Row justify="center" >
             <Col span={2}>
                 الرئيسية
             </Col>
             <Col span={2}>
                 منتاجتنا
             </Col>
             <Col span={2}>
                 خدمتنا
             </Col>
             <Col span={2}>
                 سابقة اعمالنا
             </Col>
             <Col span={2}>
                 عن الشركة
             </Col>
             <Col span={2}>
                 تواصل معنا 
             </Col>
            </Row>
            <Layout className="layout">
    
            <Content className="site-layout-background" style={{ margin: '24px 16px', padding: 24, minHeight: 280}}>
             <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>شركة رائدة فى مجال البرمجيات بانوعها </Breadcrumb.Item>
        
           </Breadcrumb>
              <div className="site-layout-content">من خلال تعزيز خطة التواجد الرقمي بشكل احترافي ، نحن ندعم عملك منذ بدايته
                 كفكرة.. وحتي بعد ان يصبح مشروع قائم بالفعل ، بواسطة مجموعة من ذوي
                  الخبرة والمعرفة المحترفين من المصممين والمطورين</div>
              </Content>
             </Layout>
        </HeaderContainer>
    )
}

export default NavBar
