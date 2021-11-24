import React from 'react';
import Customers from '../components/customers/customers.component';
import FooterComponent from '../components/foooter/footer.component';
import NavBar from '../components/navbar/navBar.component';
import Service from '../components/services/service.component';
import Trusting from '../components/trusting/trusting.component';

import { LayoutContainer } from './layout.styles';

const Layout = ({ children }) => {
    return (
        <LayoutContainer>
            <NavBar/>
            <Service/>
            <Trusting/>
            <Customers/>
            {children}
            <FooterComponent/>
        </LayoutContainer>
    )
}

export default Layout
