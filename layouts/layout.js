import React from 'react';

import FooterComponent from '../components/foooter/footer.component';
import NavBar from '../components/navbar/navBar.component';
import StartPage from './home page/homePage';


import { LayoutContainer } from './layout.styles';

const Layout = ({ children }) => {
    return (
        <LayoutContainer>
            <NavBar/>
            
           <StartPage/> {children} 
            <FooterComponent/>
        </LayoutContainer>
    )
}

export default Layout
