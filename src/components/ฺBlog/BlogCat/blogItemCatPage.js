import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'



const Img = styled.img`
max-width: 325px;
width: 100%;
`

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



const BlogItemCatPage = (props) => {
    const {id, slug, featuredImage, title, excerpt,categories} = props.itemData
    console.log(categories.nodes[0].slug)
    return (
            <Block>
                <Link key={id} to = {decodeURI(categories.nodes[0].slug + '/' + slug)}> 
                        <div>
                            <Img src =  {featuredImage.mediaItemUrl} />
                        </div>
                        <h4 key={title} className="entry-title" dangerouslySetInnerHTML= {{__html: title}}/>
                        <div key={excerpt} dangerouslySetInnerHTML= {{__html: excerpt}} />
                </Link>
            </Block>
    )
}
export default BlogItemCatPage