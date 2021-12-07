import React from "react";
import Link from "next/link";

import { Space, Typography, Divider, Carousel, Row, Col } from "antd";

import {
  GoBack,
  HeaderContainer,
  PortfileContainer,
  RowContainer,
} from "./portfile.styles";
import PortfileData from "./portfileData";
import { useRouter } from "next/router";

const { Text } = Typography;

const projects = PortfileData.reduce((prev, idx) => {
  return [...prev, ...idx.categories];
}, []);

const PortfilePage = () => {
  // const currentProject = projects.filter(ct => ct.id == query.id);
  const { pathname } = useRouter();
  const { query } = useRouter();
  const category=PortfileData.find(({categories})=> categories.some(({id})=>id==query.id) )
  console.log("🚀 ~ file: [id].jsx ~ line 26 ~ PortfilePage ~ category", category)

  const project = projects.find(({ id }) => id == query.id);
  const nexProject = category?.categories.find(({ id }) =>  id == (Number (query.id)+1));

  const followPage = () => {
    project.id = +1;
  };
  console.log("gggg", followPage);
  if (!project) return "not found";
  return (
    <PortfileContainer query={query}>
      <RowContainer>
        <GoBack>
          <Link href="/portfile">
            <span> &#707;سابقة اعمالنا</span>
          </Link>
        </GoBack>

        <Space direction="vertical" size={46}>
          <HeaderContainer>
            <Typography className="header">{project.proName}</Typography>
            <div>
              <Link  href={`/portfile/${nexProject?.id}`}>
                <a  disabled={!nexProject} className="arr-right">&#60;</a>
              </Link>
              <span className="arr-left">&#62;</span>
            </div>
          </HeaderContainer>
          <Text className="description">{project.proDescription}</Text>

          <div className="dateContainer">
            <span className="date">
              <img
                src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fcalendar.svg&w=32&q=75"
                alt=""
              />{" "}
              20 اغسطس 2021
            </span>
            <span className="date">
              مشاركة مع :
              <a
                href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fwww.gizaapps.com%2Fportfolio%2F1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Flinked.svg&w=16&q=75"
                  alt=""
                />
              </a>
              <a
                href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fwww.gizaapps.com%252Fportfolio%252F1&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ffacebook.svg&w=16&q=75"
                  alt=""
                />
              </a>
              <a
                href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fwww.gizaapps.com%2Fportfolio%2F1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Ftwitter.svg&w=16&q=75"
                  alt=""
                />
              </a>
            </span>
          </div>
        </Space>

        <div style={{ marginTop: "30px" }}>
          <Carousel autoplay>
            {project.images.map((target, i) => (
              <img src={target.src} key={i} height={920} width={1560} alt="" />
            ))}
          </Carousel>
        </div>

        <p className="other-projects"> مشاريع ذات صلة</p>

        <div>
          {PortfileData.map((target) => (
            <Row key={target.id} gutter={26}>
              {target.categories.map((idx) => (
                <Col key={idx.id}>
                  <Link href={`/portfile/${idx.id}`}>
                    <Space
                      direction="vertical"
                      size="middle"
                      className="cat-container"
                    >
                      <img src={idx.images[0].src} width={270} height={270} />
                      <span className="date">{idx.proName}</span>
                    </Space>
                  </Link>
                </Col>
              ))}
            </Row>
          ))}
        </div>
      </RowContainer>
    </PortfileContainer>
  );
};

export default PortfilePage;
