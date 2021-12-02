import React from 'react'

import { AboutContainer } from '../styles/about.styles'


const Contact = () => {
    return (
        <AboutContainer>
            <div className='row-container'>
            <h1 className='portHeader'><img src="https://www.gizaapps.com/_next/image?url=%2Fstatic%2Fimages%2Fmap.svg&w=48&q=75"/>فروعنا </h1>

            <div className='content'>
                <p>شارع قناة السويس. المنصورة. الدقهلية</p>
            </div>
            </div>
        </AboutContainer>
    )
}

export default Contact
