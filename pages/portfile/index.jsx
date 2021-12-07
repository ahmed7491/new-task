import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/router";

import { AboutContainer } from "../../styles/about.styles";
import { Row, Col, Tabs } from "antd";
import PortfileData from "./portfileData";

const { TabPane } = Tabs;

const selAll = {
  id: "1",
  tabName: "المواقع الالكترونية ",
  images: [
    {
      id: "1",
      src: "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fb7rstoreecommerce%2Fb7rstoreecommerce1.jpg&w=1920&q=75",
    },
    {
      id: "2",
      src: "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fjanetsainaa%2Fjanetsainaa1.jpg&w=1920&q=75",
    },
    {
      id: "3",
      src: "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Feishtany%2Feishtany1.jpg&w=1920&q=75",
    },
    {
      id: "4",
      src: "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Ftalacare%2Ftalacare1.jpg&w=1920&q=75",
    },
    {
      id: "5",
      src: "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fma7foul%2Fma7foul1.jpg&w=1920&q=75",
    },
    {
      id: "6",
      src: "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fjozorforcapabilities%2Fjozorforcapabilities1.jpg&w=1920&q=75",
    },
    {
      id: "7",
      src: "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fjanetsainaagraphic%2F1.jpg&w=1920&q=75",
    },
    {
      id: "8",
      src: "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fb7rstoregraphic%2F7.jpg&w=1920&q=75",
    },
    {
      id: "9",
      src: "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fsedratravelgraphic%2F1.jpg&w=1920&q=75",
    },
    {
      id: "10",
      src: "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fmrwolfgraphic%2F1.jpg&w=1920&q=75",
    },
    {
      id: "11",
      src: "https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftab%2Fglowgraphic%2F1.jpg&w=1920&q=75",
    },
  ],
};
const Portfile = () => {
  const router = useRouter();

  return (
    <AboutContainer>
      <div className="row-container">
        <div style={{ margin: "100px 0px 290px 0px" }}>
          <h1 className="portHeader">سابقة اعمالنا</h1>
          <p className="port-desc">
            سعدنا بتحويل العديد من أفكار عملاءنا الي مشاريع مميزة ...ويسعدنا
            اطلاعكم عليها
          </p>

          <Tabs defaultActiveKey="1" centered direction="rtl">
            <TabPane tab={selAll.tabName} key={selAll.id}>
              <div className="portfiles">
                <Row>
                  {selAll.images.map((idx, i) => (
                      <Col key={i} lg={6} md={8} sm={12} xs={24}>
                        <div className="port-img">
                          <Link href={`/portfile/${idx.id}`}>
                            <a className="picture__card">
                              <img
                                src={idx.src}
                                width={300}
                                height={300}
                              />
                            </a>
                          </Link>
                        </div>
                      </Col>
                    
                  ))}
                </Row>
              </div>
            </TabPane>
            {PortfileData.map((target) => (
              <TabPane tab={target.tabName} key={target.id}>
                <div className="portfiles">
                  <Row>
                    {target.categories.map((idx) => (
                        <Col key={idx.id} lg={6} md={8} sm={12} xs={24}>
                          <div className="port-img">
                            <Link href={`/portfile/${idx.id}`}>
                              <a className="picture__card">
                                <img
                                  src={idx.images[0].src}
                                  width={300}
                                  height={300}
                                />
                              </a>
                            </Link>
                          </div>
                        </Col>
                      
                    ))}
                  </Row>
                </div>
              </TabPane>
            ))}
          </Tabs>
        </div>
      </div>
    </AboutContainer>
  );
};

export default Portfile;
