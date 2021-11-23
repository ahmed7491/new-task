import React from 'react';
import NavBar from '../components/navbar/navBar.component';
import Service from '../components/services/service.component';

const Layout = ({ children }) => {
    return (
        <div>
            <NavBar/>
            <Service/>
            {children}
        </div>
    )
}

export default Layout
