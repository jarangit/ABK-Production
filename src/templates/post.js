import React from 'react'
import Layout from '../components/Layout/layout'
import styled from 'styled-components'
import NavPost from '../components/Navigation/NavPost'

const Img = styled.img`
    background-size: cover;
    background-position: center;
    width:100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
 `
const LayoutWrapper = styled.div`
    max-width:1064px;
    margin: 0 auto;
    
`
const Div = styled.div`
    margin: 40px 0;
`
const BlockImg = styled.div`
    height: 500px;
    overflow: hidden;
`

export default ({pageContext}) => {
    const urlTmg = pageContext.featuredImage
    const ShowImg = () => {
        if(urlTmg === null){
           return ''
        }else{
            return(
                <BlockImg><Img src ={pageContext.featuredImage.mediaItemUrl} /></BlockImg>
                
            )
        }
    } 
    return (
     <div>
        <Layout>
    {/* <Img src ={data.pageContext.featuredImage.mediaItemUrl} /> */}
                    <div> {ShowImg()} </div>
            <LayoutWrapper>
                <NavPost data = {pageContext} />
                <Div>
                    <h2 dangerouslySetInnerHTML= {{__html: pageContext.title}} />
                    <div dangerouslySetInnerHTML={{__html: pageContext.content}}/>
                </Div>
             </LayoutWrapper>
        </Layout>
     </div>
    )
}





