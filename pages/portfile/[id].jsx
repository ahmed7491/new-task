import React from 'react'
import Link from "next/link"

import { Space, Typography, Divider } from 'antd';

import { GoBack, HeaderContainer, PortfileContainer, RowContainer } from './portfile.styles'
import { Projects } from "./index";




// const getPostData = async (id) {
//     const fullPath = path.join(postsDirectory, `${id}.md`)
//   const fileContents = fs.readFileSync(fullPath, 'utf8')

//   const matterResult = matter(fileContents)

//   return {
//     id,
//     ...matterResult.data
//   }
// }

// const getStaticProps = async (Projects)=>{
//     const postData = getPostData(params.id)
//   return {
//     props: {
//       postData
//     }
//   }
// }

const PortfilePage = () => {
    return (
        <PortfileContainer>
            <RowContainer>
                <GoBack>
                    <Link href='/portfile'><span>&#707;</span></Link>
                    <span>سابقة اعمالنا</span>
                </GoBack>
                {Projects.map((target)=>
                <Space direction="vertical" size={46} key={target.id}>
                    <HeaderContainer>
                        {Projects.map((title, i)=>
                        
                        <Typography key={i}>{title.proName}</Typography>)
                    }
                    </HeaderContainer>
                </Space> 
                )}
            </RowContainer>
        </PortfileContainer>
    )
}

export default PortfilePage
