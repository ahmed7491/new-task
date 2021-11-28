import '../styles/globals.css'
import Layouts from '../layouts/layout'
import 'antd/dist/antd.css';
function MyApp({ Component, pageProps }) {
  return(
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  )
}

export default MyApp
