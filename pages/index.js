import { HeaderContainer } from "./styles";
import styles from '../styles/Home.module.css'
import { Layout, Breadcrumb } from 'antd';

const {  Content } = Layout;

export default function Home() {
  
  return (
    <div className={styles.container}>
      <HeaderContainer>
  <Layout className="layout">
    
    <Content className="site-layout-background" style={{ margin: '24px 16px', padding: 24, minHeight: 280}}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>شركة رائدة فى مجال البرمجيات بانوعها </Breadcrumb.Item>
        
      </Breadcrumb>
      <div className="site-layout-content">من خلال تعزيز خطة التواجد الرقمي بشكل احترافي ، نحن ندعم عملك منذ بدايته
          كفكرة.. وحتي بعد ان يصبح مشروع قائم بالفعل ، بواسطة مجموعة من ذوي
          الخبرة والمعرفة المحترفين من المصممين والمطورين</div>
    </Content>
  </Layout>
  </HeaderContainer>
    </div>
  )
}


