import React from 'react';

import { HeaderContainer} from './navBar.styles';
import { Row, Col, Button, Space,Menu, Dropdown } from 'antd';

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        تصميم موقع الكترونى
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        تصميم المتاجر الالكترونية
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        تصميم التطبيقات 
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        تصميم الهوية التجارية الكاملة
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        التسويق الالكترونى
        </a>
      </Menu.Item>
    </Menu>
  );
const NavBar = () => {
    return (
        <HeaderContainer>
       
            <Row justify="center" align='middle'>
            <Col flex="1 2 200px" pull='3' className='LGCON'>
                 GIZA APPS
                 <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2FfooterLogo.svg&w=32&q=75" alt="logo" />
             </Col>
             <Col flex="2 3 300px" push='1'>
             <Space>
                 <span className="MenueContent"> الرئيسية</span>
                 <span className="MenueContent">منتجاتنا</span>
                 <Dropdown overlay={menu} placement="bottomLeft" arrow>
                   <span className="MenueContent">خدمتنا</span>
                 </Dropdown>
                 
                 <span className="MenueContent">سابقة اعمالنا</span>
                 <span className="MenueContent">عن الشركة</span>
                 <span className="MenueContent">تواصل معنا</span>
             </Space>
            </Col>
            </Row> 
            <div className='ContentContainer'>
                <h1 className='ContentTitle'>
                شركة رائدة فى مجال البرمجيات بانوعها
                </h1>
                <p className='ContentDesc'>
                من خلال تعزيز خطة التواجد الرقمي بشكل احترافي ، نحن ندعم عملك منذ بدايته
                 كفكرة.. وحتي بعد ان يصبح مشروع قائم بالفعل ، بواسطة مجموعة من ذوي
                  الخبرة والمعرفة المحترفين من المصممين والمطورين 
                </p>
                <Space size='small'  >
              <Button type="primary" size='large' className='btn-1'>سابقة اعمالنا </Button>
              <Button type="primary" size='large' className='btn-2'>تواصل معنا </Button>
            </Space>
            </div>

        </HeaderContainer>

    )
}

export default NavBar
 