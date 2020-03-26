import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BlogItemHomePage from './BlogItemHomePage'

const BlogGrid = styled.div`
max-width: 1064px;
display:flex;
flex-wrap:wrap;
margin: 0 auto;
grid-gap: 35px;
overflow: hidden;
`
const Div = styled.div`
  margin: 80px 0;
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
              <Div>
                <h1> My Custommer </h1>
                  <BlogGrid>
                      {ShowBlog()}
                  </BlogGrid>
              </Div>
            )
        }}
        />
    )
}
export default BlogListHomepage