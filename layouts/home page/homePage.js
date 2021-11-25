import React from 'react'
import Customers from '../../components/customers/customers.component';

import Service from '../../components/serv/service.component';
import Trusting from '../../components/trusting/trusting.component';

const StartPage = () => {
    return (
        <div style={{display:'block'}}>
            <Service/>
            <Trusting/>
            <Customers/>
            
        </div>
    )
}

export default StartPage
