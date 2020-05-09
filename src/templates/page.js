import React from 'react'
import Layout from '../components/Layout/layout'
import styled from 'styled-components'
import BlogListHomepage from '../components/ฺBlog/blogListHomePage'
import BlogListCatPage from '../components/ฺBlog/BlogCat/blogListCatPage'
import AllProduct from '../components/product'
import NavPage from '../components/Navigation/navpage'
import SEO from '../components/seo'



const Block = styled.div`
    margin: 40px;
`




const PageTemplate = (data) => {
        // const test = <MainMenu testprops = "jararn"/>
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
        // const ShowImg = () => {
        //     const urlTmg = data.pageContext.featuredImage
        //     console.log(urlTmg)
        //     if(urlTmg === null){
        //         return ''
        //      }else{
        //          return(
        //              <div>
        //                  <SlideHeader testProps = "jaran1"/>
        //              </div>
        //             )
        //      }
        // }
        // useEffect(() => {
        //     ShowImg()
        // },[])
        // console.log(ShowImg())
    
   

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
    <Layout>
            <SEO title = {data.pageContext.title} />
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




