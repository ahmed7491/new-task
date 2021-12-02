import React from 'react';

import FooterComponent from '../components/foooter/footer.component';
import HeaderComponent from './header/header.component';
import { LayoutContainer } from './layout.styles'


const Layouts = ({ children }) => {
    return (
        <LayoutContainer>
         <HeaderComponent/>
        {children}
        <FooterComponent/>  
        </LayoutContainer>
    )
}

export default Layouts
