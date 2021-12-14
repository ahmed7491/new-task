import React,{ useState } from "react";

import Link from "next/link";
import { Row, Col, Button, Space, Menu, Dropdown, Drawer } from "antd";
import { HeaderContainer } from "./header.styles";
import { useRouter } from "next/router";


const { SubMenu } = Menu;

export const menuUrl = {
  home: "/",
  designWeb: "/services/design-web",
  E_Commerce: "/services/e-commerce",
  mobilDesign: "/services/mobile-design",
  sedignId: "/services/design-identity",
  marketing: "/services/marketing",
  about: "/about",
  ourProducts: "/products/productsPage",
  portfile: "/portfile",
  contact: "/contact",
};
const menu = (
  <Menu>
    <Menu.Item>
      <Link href={menuUrl.designWeb} >تصميم موقع الكترونى</Link>
    </Menu.Item>
    <Menu.Item>
      <Link href={menuUrl.E_Commerce}>تصميم المتاجر الالكترونية</Link>
    </Menu.Item>
    <Menu.Item>
      <Link href={menuUrl.mobilDesign}>تصميم التطبيقات</Link>
    </Menu.Item>
    <Menu.Item>
      <Link href={menuUrl.sedignId}>تصميم الهوية التجارية الكاملة</Link>
    </Menu.Item>
    <Menu.Item>
      <Link href={menuUrl.marketing}>التسويق الالكترونى</Link>
    </Menu.Item>
  </Menu>
);

const HeaderComponent = () => {
  const { pathname } = useRouter();
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };


  return (
    <HeaderContainer path={pathname}>
      <div className="row-container">
        <Row  >
          <Col xl={0} xs={8} >
          <div className="showDropdown" onClick={showDrawer}>
        <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Falign-right-black.svg&w=32&q=75" alt=""  className="showDropdown" />
      </div>
            <Drawer
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
              width={300}
            ><ul className="dropDown-styl" style={{listStyle: 'none', direction:'rtl', color: 'rgb(55, 71, 79)',fontWeight:'500', fontSize:'20px', lineHeight:'20px'}}>
              <li onClick={onClose}>
              <Link href="/">
                <p> الرئيسية</p>
              </Link>
              </li>
              <li onClick={onClose}>
              <Link href={menuUrl.ourProducts}>
                <p>منتجاتنا</p>
              </Link>
              </li>
              <li>
              {/* <SubMenu key="sub"  title="خدمتنا&#709;">
              <Menu.Item key='1'>
      <Link href={menuUrl.designWeb} >تصميم موقع الكترونى</Link>
    </Menu.Item>
    <Menu.Item key='2'>
      <Link href={menuUrl.E_Commerce}>تصميم المتاجر الالكترونية</Link>
    </Menu.Item>
    <Menu.Item key='3'>
      <Link href={menuUrl.mobilDesign}>تصميم التطبيقات</Link>
    </Menu.Item>
    <Menu.Item key='4'>
      <Link href={menuUrl.sedignId}>تصميم الهوية التجارية الكاملة</Link>
    </Menu.Item>
    <Menu.Item key='5'>
      <Link href={menuUrl.marketing}>التسويق الالكترونى</Link>
    </Menu.Item>
              </SubMenu> */}
              <Dropdown overlay={menu} placement="bottomLeft" arrow>
                <p> خدمتنا&#709;</p>
              </Dropdown>
              </li>
              <li onClick={onClose}>
              <Link href={menuUrl.portfile}>
                <p>سابقة اعمالنا</p>
              </Link>
              </li>
              <li onClick={onClose}>
              <Link href={menuUrl.about}>
                <p>عن الشركة</p>
              </Link>
              </li>
              <li onClick={onClose}>
              <Link href={menuUrl.contact}>
                <p>تواصل معنا</p>
              </Link>
              </li>
              </ul>
            </Drawer>
          </Col>
          <Link href="/">
            <Col xs={13} xl={6} className="LGCON">
              <span className="LGCON">GIZA APPS</span>
              {pathname == "/" ? (
                <img
                  src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2FfooterLogo.svg&w=32&q=75"
                  alt="logo"
                />
              ) : (
                <img
                  src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2FnewLogoGiza.svg&w=32&q=75"
                  alt="logo"
                />
              )}
            </Col>
          </Link>
          <Col xs={0} xl={16}>
            <Space>
              <Link href="/">
                <span className="MenueContent"> الرئيسية</span>
              </Link>
              <Link href={menuUrl.ourProducts}>
                <span className="MenueContent">منتجاتنا</span>
              </Link>
              <Dropdown overlay={menu} placement="bottomLeft" arrow>
                <span className="MenueContent"> خدمتنا&#709;</span>
              </Dropdown>

              <Link href={menuUrl.portfile}>
                <span className="MenueContent">سابقة اعمالنا</span>
              </Link>
              <Link href={menuUrl.about}>
                <span className="MenueContent">عن الشركة</span>
              </Link>
              <Link href={menuUrl.contact}>
                <span className="MenueContent">تواصل معنا</span>
              </Link>
            </Space>
          </Col>
        </Row>
      </div>
    </HeaderContainer>
  );
};

export default HeaderComponent;
