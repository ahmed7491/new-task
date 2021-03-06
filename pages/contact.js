import { Col, Row, Form, Input, Button, Radio, Space  } from "antd";
import React from "react";

import { AboutContainer } from "../styles/about.styles";

const { TextArea } = Input;


const Contact = () => {
  return (
    <AboutContainer>
      <div className="row-container">
        
        <h1 className="portHeader" style={{marginTop:'80px'}}>
          <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fmap.svg&w=48&q=75" />
          فروعنا{" "}
        </h1>
        <div className="map-item">
          <div className='contact-container'>
            <div className="country">
              <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Flocation.svg&w=32&q=75" />
              <span>مصر</span>
            </div>
            <p>شارع قناة السويس. المنصورة. الدقهلية</p>
            <p>
              {" "}
              البريد الالكترونى :{" "}
              <a className="email" target="_blank" href="mailto:info@gizzaapps.com" rel="noreferrer">
                info@gizzaapps.com
              </a>
            </p>
            <p>
              {" "}
              الهاتف:{" "}
              <a
                className="phone"
                target="_blank"
                href="https://wa.me/+201026462262"
                rel="noreferrer"
              >
                +201026462262
              </a>
            </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13671.23123211915!2d31.388455949999997!3d31.0594495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1638689053243!5m2!1sar!2seg"
              width="100%"
              height="384"
              className='map'
              loading="lazy"
            ></iframe>
          
        </div>

        <div className="map-item">
          <div className='contact-container'>
            <div className="country">
              <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Flocation.svg&w=32&q=75" />
              <span>السعودية</span>
            </div>
            <p>شارع موسي بن النصير. عليا. الرياض</p>
            <p>
              {" "}
              البريد الالكترونى :{" "}
              <a className="email" target="_blank" href="mailto:info@gizzaapps.com" rel="noreferrer">
                info@gizzaapps.com
              </a>
            </p>
            <p>
              {" "}
              الهاتف:{" "}
              <a
                className="phone"
                target="_blank"
                href="https://wa.me/+201026462262"
                rel="noreferrer"
              >
                +201026462262
              </a>
            </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13671.23123211915!2d31.388455949999997!3d31.0594495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1638689053243!5m2!1sar!2seg"
              width="100%"
              height="384"
              className='map'
              loading="lazy"
            ></iframe>
          
        </div>

        <div style={{ paddingBottom: "100px" }}>
          <div className="row-container">
          <div className='form-container'>
            
              <Row justify='center' gutter={[0,50]}>
                <Col
                  style={{
                    fontWeight: "500",
                    fontSize: "24px",
                    color: "#333333",
                  }}
                  xs={{ span: 24 }}
                >
                    <Space direction='vertical'  style={{ textAlign: "center", width: "100%" }}
                  size={16}>

                  تواصل معنا
                    </Space>
                </Col>
                <Col xs={{ span: 24 }}>
                  <Form size="large" layout='horizontal'>
                      <Row >
                          <Col xs={{ span: 24 }}>
                              <Row gutter={[30, 0]}>
                                  <Col sm={{ span: 12 }} xs={{ span: 24 }}>
                    <Form.Item >
                      <Input placeholder="اسمك" type="text"/>
                    </Form.Item>
                    </Col>
                    <Col sm={{ span: 12 }} xs={{ span: 24 }}>
                    <Form.Item >
                      <Input placeholder="رقمك" type="text"/>
                    </Form.Item>
                    </Col>
                    </Row>
                    </Col>
                    <Col xs={{ span: 24 }}>
                    <Form.Item >
                      <Input placeholder="بريدك الالكترونى" type="email"/>
                    </Form.Item>
                    </Col>
                    <Col xs={{ span: 24 }}>
                    <Form.Item >
                      <TextArea placeholder="رسالتك" style={{height:"128px", resize:"none"}} />
                    </Form.Item>
                    </Col>
                    <Col xs={{ span: 24 }}>
                    <Form.Item >
                      <Button type='primary' shape='round' className='bt-container'>ارسل</Button>
                    </Form.Item>
                    </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </div>
          
          </div>
        </div>
       
      </div>
    </AboutContainer>
  );
};

export default Contact;
