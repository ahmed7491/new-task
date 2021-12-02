import React from "react";
import Image from "next/image";

import { AboutContainer } from "../styles/about.styles";
import { Row, Col, Tabs, Button, Space, Card } from "antd";
const { TabPane } = Tabs;

const category = [
    {
        tabName: 'المواقع الالكترونية ',
        images: [
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fb7rstore%2Fb7rstore.jpg&w=384&q=75", alt: "pg"},
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fjanetsainaa%2Fjanetsainaa.jpg&w=384&q=75", alt: "pg"}, 
        ]
    },
    {
        tabName: 'تطبيقات الهاتف ',
        images: [
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Feishtany%2Feishtany.jpg&w=384&q=75", alt: "pg"},
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Ftalacare%2Ftalacare.jpg&w=384&q=75", alt: "pg"},
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fb7rstoreecommerce%2Fb7rstoreecommerce.jpg&w=384&q=75", alt: "pg"},
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fma7foul%2Fma7foul.jpg&w=384&q=75", alt: "pg"},
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fjozorforcapabilities%2Fjozorforcapabilities.jpg&w=384&q=75", alt: "pg"}, 
        ]
    },
    {
        tabName: 'جرافيك ديزاين ',
        images: [
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fjanetsainaagraphic%2Fjanetsainaa.jpg&w=384&q=75", alt: "pg"},
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fb7rstoregraphic%2Fb7rstore.jpg&w=384&q=75", alt: "pg"},
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fsedratravelgraphic%2Fsedratravel.jpg&w=384&q=75", alt: "pg"},
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fmrwolfgraphic%2Fmrwolf.jpg&w=384&q=75", alt: "pg"},
            {src:  "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fglowgraphic%2Fglow.jpg&w=384&q=75", alt: "pg"}, 
        ]
    }
];

const Portfile = () => {
  return (
    <AboutContainer>
      <div className="row-container">
        <h1 className="portHeader">سابقة اعمالنا</h1>
        <p className="port-desc">
          سعدنا بتحويل العديد من أفكار عملاءنا الي مشاريع مميزة ...ويسعدنا
          اطلاعكم عليها
        </p>

        <Tabs defaultActiveKey="1" centered direction="rtl">
            {category.map((target) => (

          <TabPane tab={target.tabName} key={target.tabName}>
            <div className="portfiles">
              <Row justify='center'>
                {target.images.map((image, i) => (
                  <Col key={i} lg={6} md={8} sm={12} xs={24}>
                    <div className="port-img">
                        <img src={image.src} alt={image.alt} width={270} height={270} />
                      </div>
                  </Col>
                ))}
              </Row>
            </div>
            {/* xs={24} sm={12} md={8} lg={6} */}
          </TabPane>
            ))}
          
        </Tabs>
      </div>
    </AboutContainer>
  );
};

export default Portfile;
