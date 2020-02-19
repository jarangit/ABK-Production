import React from 'react'
import Layout from '../components/Layout/layout'
import styled from 'styled-components'
import BlogListHomepage from '../components/ฺBlog/BlogListHomePage'
import BlogListCatPage from '../components/ฺBlog/BlogCat/BlogListCatPage'
import AllProduct from '../components/product'
import NavPage from '../components/Navigation/NavPage'

const Img = styled.img`
    /* margin: 0 0 60px 0; */
    background-size: cover;
    background-position: center;
    width:100%;
    overflow: hidden;
 `
const LayoutWrapper = styled.div`
    max-width:1064px;
    margin: 0 auto;
    
`
const Block = styled.div`
    margin: 40px;
`
const BlockImg = styled.div`
    height: 500px;
    overflow: hidden;
`


const PageTemplate = (data) => {
  
    const urlTmg = data.pageContext.featuredImage
    const ShowImg = () => {
        if(urlTmg === null){
           return ''
        }else{
            return(
                <BlockImg ><Img src ={data.pageContext.featuredImage.mediaItemUrl} /></BlockImg>
                
            )
        }
    } 

    const ShowBlogList = () => {
        const pageId = data.pageContext.id
        if(pageId === "cGFnZToxMDM="){
            return(
                <BlogListHomepage/>
            )
        }else if(pageId === "cGFnZTo5MA=="){
            return (
                <AllProduct/>
            )
        }else if(pageId === "cGFnZToxMjk="){
            return (
                <BlogListCatPage/>
            )
        }else{
            return''
        }
    }
   return(
    
    <Layout>
        <div> {ShowImg()} </div>
        <LayoutWrapper>
            <Block>
            <NavPage data = {data.pageContext}/>
                <h1> {data.pageContext.title} </h1>
                <div dangerouslySetInnerHTML={{__html: data.pageContext.content}}/>
                <div> {ShowBlogList()} </div>
            </Block>
        </LayoutWrapper>
    </Layout>
   )
}

export default PageTemplate;




