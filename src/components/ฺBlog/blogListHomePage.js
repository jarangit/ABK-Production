import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BlogItemHomePage from './blogItemHomePage'

const BlogGrid = styled.div`
display:flex;
flex-wrap:wrap;
margin: 0 auto;
`
const BlogListHomepage = () => {
    return (
        <StaticQuery query =  {graphql `
        {
          wordPress {
            categories(where: {slug: "custommer"}) {
              nodes {
                slug
                posts {
                  nodes {
                    id
                    slug
                    title
                    excerpt
                    uri
                    featuredImage {
                      altText
                      mediaItemUrl
                    }
                  }
                }
              }
            }
          }
        }
                 
        `} render = { props => {
//--------functions------------
            const ShowBlog = () => {
                return (
             
                  props.wordPress.categories.nodes.map(cat=> {
                        return(
                          cat.posts.nodes.map(posts =>(
                            <BlogItemHomePage blogPosts = {posts}  catData = {cat}/>
                          ))
                        )
                      })
              )
            }
//--------display------------
            return(
              <div>
                <h1> ประวัติการจัดส่ง </h1>
                  <BlogGrid>
                      {ShowBlog()}
                  </BlogGrid>
              </div>
            )
        }}
        />
    )
}
export default BlogListHomepage