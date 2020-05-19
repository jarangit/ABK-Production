import React, { useEffect } from 'react'
import Layout from '../components/Layout/layout'
import styled from 'styled-components'
import BlogListHomepage from '../components/ฺBlog/blogListHomePage'
import BlogListCatPage from '../components/ฺBlog/BlogCat/blogListCatPage'
import AllProduct from '../components/product'
import NavPage from '../components/Navigation/navpage'
import SEO from '../components/seo'
import SlideHeader from '../components/Layout/slideHeader'


const Block = styled.div`
    margin: 40px;
`
const TextCenter = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`



const PageTemplate = (data) => {
                        const ShowImg = () => {
                            const urlTmg = data.pageContext.featuredImage
                            if(urlTmg === null){
                                return undefined
                            }else{
                                return data.pageContext
                }
            }
         
            const ShowBlogList = () => {
                const pageId = data.pageContext.id
                if(pageId === "cGFnZToxMDM="){
                    return(
                        <BlogListHomepage/>
                        )
                    }else if(pageId === "cGFnZToyNw=="){
                       
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
                            <Layout dataImg = {ShowImg()} titlePage = {data.pageContext.title} >
                                <SEO title = {data.pageContext.title} />
                                <Block>
                                <NavPage data = {data.pageContext}/>
                                    <h1> {data.pageContext.title} </h1>
                                    <div key={data.pageContext.content} dangerouslySetInnerHTML={{__html: data.pageContext.content}}/>
                                    <div> {ShowBlogList()} </div>
                                </Block>
                        </Layout>
   )
}

export default PageTemplate;




