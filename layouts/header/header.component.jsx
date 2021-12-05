import React from 'react'

import Link from "next/link"
import { Row, Col, Button, Space,Menu, Dropdown } from 'antd';
import { HeaderContainer } from './header.styles';
import { useRouter } from 'next/router';

const menuUrl = {
  home: "/",
  designWeb: "/services/design-web",
  E_Commerce: "/services/e-commerce",
  mobilDesign: "/services/mobile-design",
  sedignId: "/services/design-identity",
  marketing: "/services/marketing",
  about: "/about",
  ourProducts: "/products/productsPage",
  portfile: "/portfile",
  contact: "/contact"
}
const menu = (
    <Menu>
      <Menu.Item>
        <Link  href={menuUrl.designWeb}>
        تصميم موقع الكترونى
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={menuUrl.E_Commerce}>
        تصميم المتاجر الالكترونية
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={menuUrl.mobilDesign}>
        تصميم التطبيقات 
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={menuUrl.sedignId}>
        تصميم الهوية التجارية الكاملة
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={menuUrl.marketing}>
        التسويق الالكترونى
        </Link>
      </Menu.Item>
    </Menu>
  );


const HeaderComponent = () => {
  const {pathname}=useRouter()
    return (
        <HeaderContainer path={pathname}>
          <div className='row-container'>
            <Row justify='center' align='middle' >
              <Link href='/'>
            <Col xs={12} xl={4} className='LGCON'>
                 <span className='LGCON'>GIZA APPS</span>
                 {
                 pathname == "/" ?
                    <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2FfooterLogo.svg&w=32&q=75" alt="logo" />:
                    <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2FnewLogoGiza.svg&w=32&q=75" alt="logo" />

                 
                 } 
             </Col>
             </Link>
             <Col xs={0} xl={16}>
             <Space>
                 <Link href="/"><span className='MenueContent' > الرئيسية</span></Link> 
                 <Link href={menuUrl.ourProducts}><span className='MenueContent'>منتجاتنا</span></Link> 
                 <Dropdown overlay={menu} placement="bottomLeft" arrow>
                   <span className='MenueContent'> خدمتنا&#709;</span>
                 </Dropdown>
                 
                 <Link href={menuUrl.portfile}><span className='MenueContent'>سابقة اعمالنا</span></Link>
                 <Link href={menuUrl.about}><span className='MenueContent'>عن الشركة</span></Link> 
                 <Link href={menuUrl.contact}><span className='MenueContent'>تواصل معنا</span></Link>
             </Space>
            </Col>
            </Row> 
            </div>
        </HeaderContainer>
    )
}

export default HeaderComponent
