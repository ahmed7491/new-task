import React from 'react';

import { Layout } from 'antd';


import FooterComponent from '../components/foooter/footer.component';
import HeaderComponent from './header/header.component';
import { LayoutContainer } from './layout.styles'

const { Header, Footer, Content } = Layout;

const Layouts = ({ children }) => {
    return (
        <LayoutContainer>
        <head>
        <title>Giza Apps</title>
        </head>
            <HeaderComponent/> 
            
            <Content>{children} </Content> 
             <FooterComponent/> 
            </LayoutContainer>
        
    )
}

export default Layouts
