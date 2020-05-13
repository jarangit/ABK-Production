import React from 'react'
import Layout from '../components/Layout/layout'
import styled from 'styled-components'
import { Link } from 'gatsby'


//---------Style
const Img = styled.img`
    width:100%;
 `

const BlockItem = styled.div`
    width:250px;
    margin: 30px 0;
    height: 300px;
    padding:5px;
    overflow: hidden;
    border-radius:10px;
    :hover{
        box-shadow: 5px 5px 5px 5px rgba(0,0,0,.2);
    }
`
const BlockImgItem = styled.div`
    max-width: 350px;
    height: 170px;
    overflow: hidden;
`

const Block = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin: 0 auto;
    div{
        width:250px;
        margin: 30px 0;
        height: 300px;
        padding:5px;
        overflow: hidden;
        :hover{
        a{
            color:#17949b;
        }
        }
    }
`


export default (data) => {
    const {name, slug, posts,description,} = data.pageContext
    return (
     <Layout>
         <h1>{name}</h1>
         <p key={description} dangerouslySetInnerHTML={{__html: description}} />
         <Block>
            {posts.nodes.map(catItem => (
                        <Link key={catItem.id} to = {decodeURI(slug+'/'+catItem.slug)}> 
                                    <div>
                                        <Img src =  {catItem.featuredImage.mediaItemUrl} />
                                    </div>
                                    <h4 key={catItem.title} className="entry-title" dangerouslySetInnerHTML= {{__html: catItem.title}}/>
                                    <div key={catItem.excerpt} dangerouslySetInnerHTML= {{__html: catItem.excerpt}} />
                        </Link>
             ))}
         </Block>
     </Layout>
    )
}


// export default CatTemplate;





