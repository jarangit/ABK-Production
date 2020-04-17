import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BlogItemHomePage from './blogItemHomePage'

const BlogGrid = styled.div`
display:flex;
flex-wrap:wrap;
margin: 0 auto;
`
const Div = styled.div`
  margin: 80px 0;
  @media all and (max-width: 870px){
    div{
      justify-content:center;
    }
  }
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
                  <div>
                  <BlogGrid>
                      {ShowBlog()}
                  </BlogGrid>
                  </div>
              </Div>
            )
        }}
        />
    )
}
export default BlogListHomepage