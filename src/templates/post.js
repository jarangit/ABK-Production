import React from 'react'
import Layout from '../components/Layout/layout'
import styled from 'styled-components'
import NavPost from '../components/Navigation/NavPost'
import SEO from '../components/seo'

const Img = styled.img`
    background-size: cover;
    background-position: center;
    width:100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
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
                    {/* <div> {ShowImg()} </div> */}
                    <SEO title = {pageContext.title}/>
                <NavPost data = {pageContext} />
                <Div>
                    <h2 dangerouslySetInnerHTML= {{__html: pageContext.title}} />
                    <div dangerouslySetInnerHTML={{__html: pageContext.content}}/>
                </Div>
        </Layout>
     </div>
    )
}





