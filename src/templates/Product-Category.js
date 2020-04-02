import React from 'react'
import Layout from '../components/Layout/layout'
import NavProCatPage from '../components/Navigation/NavProCatPage'
import styled from 'styled-components'
import {Link} from 'gatsby'


const LayoutWrapper = styled.div`
    max-width:1064px;
    margin: 0 auto;
    
`
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
    ${BlockItem}:hover&{
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

const BlockImg = styled.div`
    height: 500px;
    overflow: hidden;
`
const ImgBanner = styled.img`
    /* margin: 0 0 60px 0; */
    background-size: cover;
    background-position: center;
    width:100%;
    overflow: hidden;
 `

const ProductCatTemplate = (data) => {
    const { name, products,slug,image, description } = data.pageContext
    const ShowImg = () => {
        if(image === null){
           return ''
        }else{
            return(
                <BlockImg ><ImgBanner src ={image.mediaItemUrl} /></BlockImg>
                
            )
        }
    } 

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
    return(
        <Layout>
            <div> {ShowImg()} </div>
                <Div>
                    <NavProCatPage data = {data.pageContext} />
                     <p dangerouslySetInnerHTML={{__html: description}} />
                     <h1> {name} </h1>
                     <BlockCartItem>
                         {ShowProduct()}
                     </BlockCartItem>
                </Div>
        </Layout>
    )
}
export default ProductCatTemplate;