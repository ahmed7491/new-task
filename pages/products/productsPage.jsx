import React from "react";

import { useRouter } from "next/router";
import Image from "next/image";
import { ProductsContainer } from "./productsPage.styles";

import { Row, Col, Typography, Button, Space } from "antd";
import Link from "next/link";
let path = `https://www.b7r.store/`;

const { Title, Paragraph } = Typography;
// const history = useRouter();

const routeChange = () => {
  history.push(path);
};

const Products = () => {
  return (
    <ProductsContainer>
      <div className="row-container">
        <Row justify="center" style={{margin: "137px 0px"}} >
          <Col md={12} xs={24}>
            <Typography className='product-content'>
              <Title className="product-header">منتجاتنا</Title>
              <Paragraph className="product-desc">
                نؤمن بأن نجاحنا مرهون بنجاح عملائنا، ولذلك قمنا باستلهام
                منتجاتنا من طموحاتهم
              </Paragraph>
            </Typography>
          </Col>
          <Col md={12} xs={24}>
            <img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2FLeadership.svg&w=1920&q=75" className='img-peoduct' />
            
          </Col>
        </Row>
      </div>
      <div className='row-container'>
        <Typography className="upper-section ">
          <Title className="upper-header">بحر ستور</Title>
          <Paragraph className="product-desc">
            {" "}
            منصة متطورة متخصصه في صناعة المتاجر الالكترونيه في خلال ثوان معدودة
            .. يمكنك من خلالها الحصول علي متجر احترافي قوي لعرض منتجاتك وخدماتك
            وتحسين وزيادة نسب المبيعات والارباح{" "}
          </Paragraph>
        </Typography>
      
      <Row align="middle">
        <Col lg={12} xs={24}>
          <h3 className="targetHeader">هدفها:</h3>
          <p className="subText">
            مساعدة اصحاب الاعمال والتجار وذوي المشاريع علي تحقيق التحول الرقمي
            وزيادة نسب مبيعاتهم وارباحهم
          </p>
          <h3 className="targetHeader">يوفر بحر ستور للمستخدم:</h3>
          <ul className="targetList">
            <li className="subText">
              البدأ في التجارة الالكترونيه في الحال نظرا لسهولة عمل المتجر في
              خلال ثوان{" "}
            </li>
            <li className="subText">لوحة تحكم سهله ومرنه لا تحتاج الي تدريب</li>
            <li className="subText">سهولة تخصيص واجهة المتجر والألوان</li>
            <li className="subText">
              مدعم بأحدث تقنيات الذكاء الاصطناعي لتسهيل تجربة المستخدم
            </li>
            <li className="subText">مدعم بأحدث وسائل التسويق الاللكتروني</li>
            <li className="subText">نظام شحن متكامل</li>
            <li className="subText">نظام دفع الكتروني</li>
          </ul>
          <Button
            type="primary"
            shape="round"
            onClick={() => {}}
            className="btn-3"
          >
            ابدا تجربتك المجانية الان &#8592;
          </Button>
        </Col>
        <Col lg={12} xs={24}>
          <img
            src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fmacbook.jpg&w=750&q=75"
            alt="store"
            className='img-peoduct'
          />
        </Col>
      </Row>
      </div>

      <div className="bottom-section">
        <Space direction="vertical" size="middle">
          <p style={{ color: "#FFF", maxWidth: "723px" }} className="subText">
            امتلك مكانك في العالم الإلكتروني الآن واطلب خدمة تصميم متجر
            إلكتروني، فقط اضغط على اطلب الآن وتواصل معنا
          </p>

          <a href={path} target="_blank">
            <Button
              type="primary"
              shape="round"
              className="btn-3"
              style={{ width: "186px", height: "48px" }}
            >
              اطلب الخدمة الان
            </Button>
          </a>
        </Space>
      </div>
    </ProductsContainer>
  );
};

export default Products;
