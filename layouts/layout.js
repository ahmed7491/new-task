import React from 'react';
import NavBar from '../components/navbar/navBar.component';

const Layout = ({ children }) => {
    return (
        <div>
            <NavBar/>
            {children}
        </div>
    )
}

export default Layout
