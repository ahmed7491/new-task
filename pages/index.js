import Customers from '../components/customers/customers.component'
import NavBar from '../components/navbar/navBar.component'
import Service from '../components/serv/service.component'
import Trusting from '../components/trusting/trusting.component'
import styles from '../styles/Home.module.css'


export default function Home() {
  
  return (
    <div className={styles.container}>
      <NavBar/>
      <Service/>
      <Trusting/>
      <Customers/>
    </div>
  )
}


