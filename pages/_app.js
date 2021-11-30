import '../styles/globals.css'
import Layouts from '../layouts/layout'
import 'antd/dist/antd.css';
import HeaderComponent from '../layouts/header/header.component';
import FooterComponent from '../components/foooter/footer.component';
function MyApp({ Component, pageProps }) {
  return(
    <Layouts>
      <Component {...pageProps} />

    </Layouts>
  )
}

export default MyApp
