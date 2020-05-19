import React from 'react'
import Layout from '../components/Layout/layout'
import NavProCatPage from '../components/Navigation/navprocatpage'
import styled from 'styled-components'
import {Link} from 'gatsby'


const Img = styled.img`
    max-width: 150px;
    width: 100%;
`
const BlockItem = styled.div`
    border-radius: 10px;
    text-align:center;
    margin: 15px 15px;
    padding: 15px;
    border: 1px solid #D5D8DC ;
    :hover{
        box-shadow: 0 10px 25px rgba(0,0,0,.2);
        margin-top:-10px;
    }
    button{
        background-color: #17949b;
        border: none;
        padding: 10px;
        border-radius: 0.5rem;
        margin-top: 20px;
        color: white;
        font-weight: bold;
       :hover{
        background-color: #42D0D8;
        }
    }
`
// const Button = styled.button`
//     background-color: #17949b;
//     border: none;
//     padding: 10px;
//     border-radius: 0.5rem;
//     margin-top: 20px;
//     color: white;
//     font-weight: bold;
//     ${Button}:hover&{
//         background-color: #42D0D8;
//     }
// `

const BlockCartItem = styled.div`
    display:flex;
    flex-wrap:wrap; 
    margin: 10px 0;
    @media all and (max-width: 500px){
        justify-content:center;
    }
`
const Div = styled.div`
    margin: 40px 0;
`

const ProductCatTemplate = (data) => {
    const { name, products,slug, description, image } = data.pageContext
    console.log(data.pageContext)

    const ShowProduct = () => {
        return(
            products.nodes.map(product=>{
                return(
                    <Link to = {decodeURI('product/' + slug + '/' + product.slug)}>
                        <BlockItem>
                        <Img src={product.image.mediaItemUrl}  />
                            <div>{product.name} </div>
                            <div> {product.regularPrice} </div>
                            <button> รายละเอียดสินค้า </button>
                        </BlockItem>
                    </Link>
                )
            })
        )
    }

    const SentPropsBanner = () => {
        if(data.pageContext.image = null){
            return ''
        }else{
            return data.pageContext
        }
    }
    return(
        <Layout  dataImgProCatPage = {SentPropsBanner()}>
                <Div>
                    <NavProCatPage data = {data.pageContext} />
                     <p key={description} dangerouslySetInnerHTML={{__html: description}} />
                     <h1> {name} </h1>
                     <BlockCartItem>
                         {ShowProduct()}
                     </BlockCartItem>
                </Div>
        </Layout>
    )
}
export default ProductCatTemplate;
