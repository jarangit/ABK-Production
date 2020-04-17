import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import ProductItemProductPage from './Products/productItemProductPage'



//-------styled---------
const LayoutWrapper = styled.div`
    max-width:1064px;
    margin: 0 auto;
    
`
//-----------endStyled-----------


const AllProduct = () => {
    return(
        <StaticQuery query = { graphql`
            query MyQuery {
  wordPress {
    productCategories {
      nodes {
        name
        slug
        id
        products {
          nodes {
            image {
              mediaItemUrl
            }
            ... on WordPress_SimpleProduct {
              id
              name
              regularPrice
              slug
            }
          }
        }
      }
    }
  }
}
 ` } render = { props => {
     return(
          <div>
            <LayoutWrapper>
                    <ProductItemProductPage data = {props}/>
              </LayoutWrapper>
          </div>
        )
       }
     } />
    )
}

export default AllProduct;