import React from "react";

import Link from "next/link";
import { menuUrl } from "../../layouts/header/header.component";
import { Row, Col, Divider, Card, Space } from "antd";
import { FooterContainer } from "./footer.styles";



const FooterComponent = () => {
  return (
    <FooterContainer>
      <div className="row-container">
        <Row gutter={[20, 40]}>
          <Col
            md={{ span: 10, order: 1 }}
            sm={{ span: 11, order: 1 }}
            xs={{ span: 24, order: 1 }}
          >
            <div className="headerContainer">
              {" "}
              GIZA APPS
              <img
                src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2FfooterLogo.svg&w=32&q=75"
                alt="logo"
              />{" "}
            </div>
            <div className="description" style={{ color: "#B9BEC0" }}>
              شركة تساهم في تعزيز التواجد الرقمي من خلال تقديم البرمجيات،نقوم
              بتقديم كل الخدمات بداية من لبرمجة وحتي تصميم وانتهاءا بالتسويق
              الالكتروني .
            </div>
          </Col>
          <Col
            md={{ span: 4, order: 2 }}
            sm={{ span: 5, order: 2 }}
            xs={{ span: 10, order: 1 }}
          >
            <h5 className="headerItems">الشركة</h5>
            <Space direction="vertical">
              <Link href={menuUrl.ourProducts} passHref>
                <span className="description footer-item">منتجاتنا</span>
              </Link>
              <Link href={menuUrl.designWeb} passHref>
                <span className="description footer-item">خدماتنا</span>
              </Link>
              <Link href={menuUrl.portfile} passHref>
                <span className="description footer-item">سابق اعمالنا</span>
              </Link>
              <Link href={menuUrl.contact} passHref>
                <span className="description footer-item">تواصل معنا </span>
              </Link>
              <Link href={menuUrl.about} passHref>
                <span className="description footer-item">عن الشركة</span>
              </Link>
            </Space>
          </Col>
          <Col
            md={{ span: 6, order: 3 }}
            sm={{ span: 8, order: 3 }}
            xs={{ span: 14, order: 2 }}
          >
            <h5 className="headerItems">تواصل معنا</h5>
            <Space direction="vertical">
              <div>
                <img src="/static/Logos/Frame.svg" alt="" />
                <span className="description footer-item">+20 1026462262</span>
              </div>
              <div>
                <img src="/static/Logos/Frame.svg" alt="" />
                <span className="description footer-item">
                  +966 54 438 5270
                </span>
              </div>
            </Space>
          </Col>
          <Col order={4} md={{ span: 4 }} sm={{ span: 0 }} xs={{ span: 0 }}>
            <h5 className="headerItems">تابعنا</h5>
            <Space
              direction="horizontal"
              size={20}
              style={{ direction: "ltr" }}
            >
              <a
                href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fwww.gizaapps.com%252Fportfolio%252F1&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/static/Logos/Vector.svg" alt="" />
              </a>
              <a
                href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fwww.gizaapps.com%2Fportfolio%2F1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/static/Logos/Vector (2).svg" alt="" />
              </a>
              <a
                href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fwww.gizaapps.com%252Fportfolio%252F1&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2FgreenFacebook.svg&w=16&q=75"
                  alt=""
                />
              </a>

              <a
                href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fwww.gizaapps.com%2Fportfolio%2F1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2FgreenLinkedIn.svg&w=16&q=75"
                  alt=""
                />
              </a>
            </Space>
          </Col>
        </Row>
        <Divider />
        <Row justify="space-between">
          <Col>
            <Space size={"large"}>
              <Link href={menuUrl.home} passHref>
                <span
                  className="footer-item description"
                  style={{ direction: "ltr" }}
                >
                  {" "}
                  2021 GIZA APPS &#169;
                </span>
              </Link>
              <Link href="/terms" passHref>
                <span className="footer-item description">
                  سياسة الخصوصية الشروط و الاحكام
                </span>
              </Link>
            </Space>
          </Col>
          <Col className="footer-item ">
            <span>English</span>
            <img
              src="/static/Logos/globe.svg"
              alt=""
              style={{ marginRight: "4px" }}
            />
          </Col>
        </Row>
      </div>
    </FooterContainer>
  );
};

export default FooterComponent;
