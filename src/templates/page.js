import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout/layout'
import styled from 'styled-components'
import BlogListHomepage from '../components/ฺBlog/BlogListHomePage'
import BlogListCatPage from '../components/ฺBlog/BlogCat/BlogListCatPage'
import AllProduct from '../components/product'
import NavPage from '../components/Navigation/NavPage'
import SlideHeader from '../components/Layout/slideHeader'
import MainMenu from '../components/Layout/memus'

const Img = styled.img`
    background-size: cover;
    background-position: center;
    width:100%;
    overflow: hidden;
 `

const Block = styled.div`
    margin: 40px;
`

const BlockImg = styled.div`
    height: 500px;
    overflow: hidden;
`


const PageTemplate = (data) => {
        const test = <MainMenu testprops = "jararn"/>
        // useEffect(() =>{
        //     // const urlTmg = data.pageContext.featuredImage
        //     // const showImg = () => {
        //         // const {urlTmg} = useState(0)
        //         if(1 === null){
        //            return ''
        //         }else{
        //             return(
        //                 // <MainMenu headerImgPage = {data.pageContext.featuredImage.mediaItemUrl}/>
        //                 // <MainMenu headerImgPage = "jaran"/>
        //                 // <BlockImg>
        //                 //     <Img src ={data.pageContext.featuredImage.mediaItemUrl} />
        //                 // </BlockImg>
        //                 <div>jaran</div>
        //             )
        //         }
        //         return(
        //             <div>jaran</div>
        //         )
            
        // }, [])
    
   

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
            <Block>
            <NavPage data = {data.pageContext}/>
                <h1> {data.pageContext.title} </h1>
                <div dangerouslySetInnerHTML={{__html: data.pageContext.content}}/>
                <div> {ShowBlogList()} </div>
            </Block>
    </Layout>
   )
}

export default PageTemplate;




