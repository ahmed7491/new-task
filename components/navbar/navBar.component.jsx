import React from 'react';

import { HeaderContainer } from './navBar.styles';
import { Row, Col } from 'antd';

const NavBar = () => {
    return (
        <HeaderContainer>
            <Row>
             <Col lg={{ span: 2, offset: 3 }} lg={{ span: 1, offset: 3 }}>
                 الرئيسية
             </Col>
             <Col lg={{ span: 2, offset: 3 }} lg={{ span: 1, offset: 3 }}>
                 منتاجتنا
             </Col>
             <Col lg={{ span: 2, offset: 1 }} lg={{ span: 1, offset: 3 }}>
                 خدمتنا
             </Col>
             <Col lg={{ span: 2, offset: 1 }} lg={{ span: 1, offset: 2 }}>
                 سابقة اعمالنا
             </Col>
             <Col lg={{ span: 2, offset: 1 }} lg={{ span: 1, offset: 2 }}>
                 عن الشركة
             </Col>
             <Col lg={{ span: 2, offset: 1 }} lg={{ span: 1, offset: 2 }}>
                 تواصل معنا 
             </Col>
            </Row>
        </HeaderContainer>
    )
}

export default NavBar
