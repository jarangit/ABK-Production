import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'


const Block = styled.div`
    width:250px;
    margin: 30px 0;
    height: 300px;
    padding:5px;
    overflow: hidden;
    border-radius:10px;
    :hover{
        a{
            color:#17949b;
        }
    }
    a{
        text-decoration: none;
        color: black;
    }
    div{
        max-width: 325px;
        height: 150px;
        overflow: hidden;
        img{
            max-width: 325px;
            width: 100%;
        }
    }
    p{
        margin: 0;
    }
    
`



const BlogItemHomePage = (props) => {

    const { title, excerpt, featuredImage, id, slug} = props.blogPosts  
    return (
            <Block>
                    <Link to = {decodeURI(props.catData.slug + "/" + slug)} key = {id} >
                        <div>
                            <img src= {featuredImage.mediaItemUrl} alt={featuredImage.altText} />
                        </div>
                        <h4 key={title} dangerouslySetInnerHTML = {{__html: title}} />
                        <div key={excerpt} dangerouslySetInnerHTML = {{__html: excerpt}} />
                    </Link>
            </Block>
    )
}
export default BlogItemHomePage