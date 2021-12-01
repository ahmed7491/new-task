import React from 'react'

import Link from "next/link"
import { Row, Col, Button, Space,Menu, Dropdown } from 'antd';
import { HeaderContainer } from './header.styles';

const menu = (
    <Menu>
      <Menu.Item>
        <Link  href="services/design-web">
        تصميم موقع الكترونى
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="services/e-commerce">
        تصميم المتاجر الالكترونية
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="services/mobile-design">
        تصميم التطبيقات 
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="services/design-identity">
        تصميم الهوية التجارية الكاملة
        </Link>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        التسويق الالكترونى
        </a>
      </Menu.Item>
    </Menu>
  );

const HeaderComponent = () => {
    return (
        <HeaderContainer>
          <div className='row-container'>
            <Row justify='center' align='middle' >
            <Col xs={12} xl={4} >
                 <span className='LGCON'>GIZA APPS</span> 
                 <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2FfooterLogo.svg&w=32&q=75" alt="logo" />
             </Col>
             <Col xs={0} xl={16}>
             <Space>
                 <Link href="/"><span className='MenueContent' > الرئيسية</span></Link> 
                 <span className='MenueContent'>منتجاتنا</span>
                 <Dropdown overlay={menu} placement="bottomLeft" arrow>
                   <span className='MenueContent'>خدمتنا</span>
                 </Dropdown>
                 
                 <span className='MenueContent'>سابقة اعمالنا</span>
                  <span className='MenueContent'>عن الشركة</span>
                 <span className='MenueContent'>تواصل معنا</span>
             </Space>
            </Col>
            </Row> 
            </div>
        </HeaderContainer>
    )
}

export default HeaderComponent
