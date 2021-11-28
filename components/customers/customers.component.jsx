import React from 'react';

import { Row, Col } from 'antd';
import { CustomersContainer } from './customers.styles';

const Customers = () => {
    return (
        <CustomersContainer>
            <div>
                <h1 className='HeaderContainer'> عملائنا</h1>
            </div>
            <Row justify='center'>
                <Col xs={8} md={4} lg={4} className='imgContainer'> <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fs5.svg&w=3840&q=75" alt="com" className='img-logo'/> </Col>
                <Col xs={8} md={4} lg={4} className='imgContainer'> <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fs4.svg&w=3840&q=75" alt="com" className='img-logo'/> </Col>
                <Col xs={8} md={4} lg={4} className='imgContainer'> <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fs3.svg&w=3840&q=75" alt="com" className='img-logo'/> </Col>
                <Col xs={8} md={4} lg={4} className='imgContainer'> <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fs2.svg&w=3840&q=75" alt="com" className='img-logo'/> </Col>
                <Col xs={8} md={4} lg={4} className='imgContainer'> <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fs1.svg&w=3840&q=75" alt="com" className='img-logo'/> </Col>

            </Row>
        </CustomersContainer>
    )
}

export default Customers
