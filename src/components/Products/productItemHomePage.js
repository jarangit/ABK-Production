import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'



const Img = styled.img`
    max-width: 200px;
    width: 100%;
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
const Block = styled.div`
    border-radius: 10px;
    text-align:center;
    padding:10px;
    margin: 10px;
    border: 1px solid #D5D8DC ;
    :hover{
        box-shadow: 0 10px 25px rgba(0,0,0,.2);
        margin-top:-10px;
    }
    a{
        text-decoration: none;
        color:red;
        font-weight:bold;
        button{
            background-color: #17949b;
            border: none;
            padding: 10px;
            border-radius: 0.5rem;
            margin-top: 20px;
            color: white;
            font-weight: bold;
            :hover {
            background-color: #42D0D8;
            }
        }
    }
`


const ProductItemHomePage = (props) => {
    const { name, regularPrice, slug, image, id, productCategories} = props.products
    const url = productCategories.nodes.map(catProduct=>{
        console.log(catProduct.slug)
        return(
            decodeURI('product/'+catProduct.slug + '/' + slug)
        )
    })

    return(
        <Block>
                    <Img src={image.mediaItemUrl} alt={image.altText}/>
                    <div> {name} </div>
                    <div> {regularPrice} </div>
                    <Link key={id} to = {url}>
                        <button> รายละเอียดสินค้า </button>
                    </Link>
        </Block>
    )
}
export default ProductItemHomePage;