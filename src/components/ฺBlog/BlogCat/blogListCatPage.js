import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import BlogItemCatPage from './blogItemCatPage'

const BlogFlex = styled.div`
max-width: 1064px;
display: flex;
flex-wrap:wrap;
margin: 0 auto;
overflow: hidden;
`

const BlogListCatPage = (props) => {
    return (
        <BlogFlex>
         {props.catItemData.nodes.map(item =>(
            <BlogItemCatPage itemData = {item}/>
          ))}
        </BlogFlex>
    )
}
export default BlogListCatPage