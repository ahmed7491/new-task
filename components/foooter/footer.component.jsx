import React from 'react';

import { Row, Col, Divider, Card } from 'antd';
import { FooterContainer } from './footer.styles';

const FooterComponent = () => {
    return (
        <FooterContainer>
            <Row>
                <Col flex={1}>
                    <Card title="Card title" bordered={false} style={{ width: 300 }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Col>
                <Col flex={1.5}>
                    <Card title="Card title" bordered={false} style={{ width: 300 }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Col>
                <Col flex={1}>
                    <Card title="Card title" bordered={false} style={{ width: 300 }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Col>
                <Col flex={1.5}>
                    <Card title="Card title" bordered={false} style={{ width: 300 }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Col>
            </Row>
            <Divider/>
            <Row  justify='' >
                <Col span={12}>ttt</Col>
                <Col span={12}>tttt</Col>
            </Row>    
        </FooterContainer>
    )
}

export default FooterComponent
