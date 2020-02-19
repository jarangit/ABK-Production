import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import ProductItemHomePage from './ProductItemHomePage'



const ProductGrid = styled.div`
max-width: 1064px;
display: grid;
grid-template-columns: auto auto auto;
margin: 20px auto;
grid-gap: 35px;
`
const Div = styled.div`
    margin: 40px 0;
`


const ProductListHomePage = () => {
    return(
        <StaticQuery query = { graphql `
        {
            wordPress {
              products {
                nodes {
                  ... on WordPress_SimpleProduct {
                    id
                    name
                    regularPrice
                    slug
                    sku
                    image {
                        mediaItemUrl
                        altText
                      }
                      productCategories {
                        nodes {
                          slug
                        }
                      }
                  }
                }
              }
            }
          }
        ` } render = { props => {

//-------------functions----------------
            const ShowProduct = () => {
              return (
                 props.wordPress.products.nodes.map(products => (
                  <ProductItemHomePage products =  {products} />
                  )
                )
              )
            }


//-------------display----------------
            return(
               <Div>
                 <h1> Products </h1>
                 <ProductGrid> {ShowProduct()} </ProductGrid>
               </Div>
            )
        }}
        />
    )
}

export default ProductListHomePage;