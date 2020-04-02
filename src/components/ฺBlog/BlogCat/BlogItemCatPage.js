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
    width: 300px;
    margin: 15px 5px;
    height: 300px;
    /* padding:20px; */
    overflow: hidden;
    border-radius:10px;
    ${Block}:hover&{
        box-shadow: 5px 5px 5px 5px rgba(0,0,0,.2);
    }
    
    a{
    text-decoration: none;
    color: black;
    margin:5px;
    :hover{
        color:#17949b;
    }
    div{
        padding:5px;
    }
  }
`



const BlogItemCatPage = (props) => {

    const { title, excerpt, featuredImage, id, slug} = props.blogPosts  
    return (
                <Block>
                    <Link to = {decodeURI(props.catData.slug + "/" + slug)} key = {id} >
                        <BlogItem>
                        <Img src= {featuredImage.mediaItemUrl} alt={featuredImage.altText} />
                        </BlogItem>
                        <div>
                        <h3 dangerouslySetInnerHTML = {{__html: title}} />
                        <div dangerouslySetInnerHTML = {{__html: excerpt}} />
                        </div>
                    </Link>
                </Block>
    )
}
export default BlogItemCatPage