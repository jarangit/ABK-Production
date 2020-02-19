import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import BlogItemCatPage from '../BlogCat/BlogItemCatPage'

const BlogGrid = styled.div`
max-width: 1064px;
display: grid;
grid-template-columns: 295px 295px 295px;
margin: 0 auto;
grid-gap: 35px;
overflow: hidden;
`
const Div = styled.div`
  margin: 80px 0;
  a{
    text-decoration: none;
    color: black;
    :hover{
        color:#17949b;
    }
  }
`

const BlogListCatPage = () => {
    return (
        <StaticQuery query =  {graphql `
        {
          wordPress {
            categories{
              nodes {
                id
                slug
                name
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
                    const catId = cat.id
                    if(catId === "Y2F0ZWdvcnk6MQ=="){
                        return ''
                    }else{
                        return(
                        <div>
                             <Link to={'blog/' + cat.slug}> <h1> {cat.name} </h1> </Link>
                             <BlogGrid>
                                    { cat.posts.nodes.map(posts =>(
                                    <BlogItemCatPage blogPosts = {posts}  catData = {cat} nameCat = {cat.name}/>
                                    ))}
                            </BlogGrid>
                        </div>
                        ) 
                    }
                      })
              )
            }
//--------display------------
            return(
              <Div>
                      {ShowBlog()}
              </Div>
            )
        }}
        />
    )
}
export default BlogListCatPage