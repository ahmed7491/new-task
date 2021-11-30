import React from 'react';

import Link from 'next/link'
import { HeaderContainer} from './navBar.styles';
import { Row, Col, Button, Space,Menu, Dropdown } from 'antd';
import HeaderComponent from '../../layouts/header/header.component';

 
const NavBar = () => {
    return (
        <HeaderContainer>

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
              <Button type="primary" size='large' onClick={()=>{history.pushState('')}} className='btn-1'>سابقة اعمالنا </Button>
              <Button type="primary" size='large' className='btn-2'>تواصل معنا </Button>
            </Space>
            </div>

        </HeaderContainer>

    )
}

export default NavBar
 