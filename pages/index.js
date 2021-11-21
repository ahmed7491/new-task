import { HeaderContainer } from "./styles";
import styles from '../styles/Home.module.css'
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

export default function Home() {
  
  return (
    <div className={styles.container}>
      <HeaderContainer>
  <Layout className="layout">
    <Header >
      <div className="logo" />
      <Menu mode="horizontal" style={{justifyContent:'center', direction: 'rtl'}}>
      <Menu.Item > الرئيسة</Menu.Item>
      <Menu.Item > منتجاتنا</Menu.Item>
      <Menu.Item> خدماتنا</Menu.Item>
      <Menu.Item> سابقى اعمالنا</Menu.Item>
      <Menu.Item> عن الشؤكة</Menu.Item>
      <Menu.Item> تواصل معنا</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>شركة رائدة فى مجال البرمجيات بانوعها </Breadcrumb.Item>
        
      </Breadcrumb>
      <div className="site-layout-content">من خلال تعزيز خطة التواجد الرقمي بشكل احترافي ، نحن ندعم عملك منذ بدايته
          كفكرة.. وحتي بعد ان يصبح مشروع قائم بالفعل ، بواسطة مجموعة من ذوي
          الخبرة والمعرفة المحترفين من المصممين والمطورين</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}></Footer>
  </Layout>
  </HeaderContainer>
    </div>
  )
}


