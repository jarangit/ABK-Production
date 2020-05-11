import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'



const Img = styled.img`
max-width: 325px;
width: 100%;

`

const LinkItem = styled(Link)`
    text-decoration: none;
    color: black;
    
`

const BlogItem = styled.div`
    max-width: 325px;
    height: 150px;
    overflow: hidden;
`

const Block = styled.div`
    width:250px;
    margin: 30px 0;
    height: 300px;
    padding:5px;
    overflow: hidden;
    border-radius:10px;
    :hover{
        box-shadow: 0 10px 25px rgba(0,0,0,.2);
    }
`



const BlogItemHomePage = (props) => {

    const { title, excerpt, featuredImage, id, slug} = props.blogPosts  
    return (
            <Block>
                    <LinkItem to = {decodeURI(props.catData.slug + "/" + slug)} key = {id} >
                        <BlogItem>
                        <Img src= {featuredImage.mediaItemUrl} alt={featuredImage.altText} />
                        </BlogItem>
                        <h3 key={title} dangerouslySetInnerHTML = {{__html: title}} />
                        <div key={excerpt} dangerouslySetInnerHTML = {{__html: excerpt}} />
                    </LinkItem>
            </Block>
    )
}
export default BlogItemHomePage