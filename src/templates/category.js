import React from 'react'
import Layout from '../components/Layout/layout'
import styled from 'styled-components'
import { Link } from 'gatsby'


//---------Style
const Img = styled.img`
    width:100%;
 `
const LayoutWrapper = styled.div`
    max-width:1064px;
    margin: 0 auto;
`

const BlockItem = styled.div`
    max-width: 350px;
    border-radius: 10px;
    padding: 15px;
    ${BlockItem}:hover&{
        box-shadow: 5px 5px 5px 5px rgba(0,0,0,.2);
    }
`
const BlockImgItem = styled.div`
    max-width: 350px;
    height: 170px;
    overflow: hidden;
    
`

const GridBlock = styled.div`
    margin: 40px 0; 
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 15px;
    padding-top: 30px;
    a{
            text-decoration: none;
            margin: 10px;
            font-size: 1.2em;
            color: #333333;
            :hover{
            color:#17949b;
            }

    }

`

// const LinkTitle = styled(Link)`
//     text-decoration: none;
//     margin: 10px;
//     font-size: 1.2em;
//     color: #333333;
//     ${LinkTitle}:hover&{
//         color:#17949b;
//     }


// `


export default ({pageContext}) => {
    const {name, slug, posts,description} = pageContext
    return (
     <Layout>
         <LayoutWrapper>
         <h1>{name}</h1>
         <p dangerouslySetInnerHTML={{__html: description}} />
         <GridBlock>
             {posts.nodes.map(catItem => (
                        <Link key={catItem.id} to = {decodeURI(slug+'/'+catItem.slug)}> 
                 <BlockItem>
                        <BlockImgItem>
                            <Img src =  {catItem.featuredImage.mediaItemUrl} />
                        </BlockImgItem>
                        <h4 className="entry-title" dangerouslySetInnerHTML= {{__html: catItem.title}}/>
                        <p dangerouslySetInnerHTML= {{__html: catItem.excerpt}} />
                 </BlockItem>
                        </Link>
             ))}
         </GridBlock>
         </LayoutWrapper>
     </Layout>
    )
}


// export default CatTemplate;





