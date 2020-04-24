import React from 'react'
import Layout from '../components/Layout/layout'
import styled from 'styled-components'
import { Link } from 'gatsby'
import NavProSingPage from '../components/Navigation/navprosingpage'

//-------------styled----------
const LayoutWrapper = styled.div`
    max-width:1064px;
    margin: 0 auto;
`
const Img = styled.img`
    max-width: 325px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`
const Div = styled.div`
    width: 100%;
    display: flex;
    flex-wrap:wrap;
    justify-content:space-around;
    margin: 40px 0;
    border: 2px solid #D5D8DC;
    border-radius: 10px;
    div{
        margin: 5px;
        max-width:500px;
    }

`
const BlockImg = styled.div`
    margin: 0 auto;
`

const BlockButton = styled.div`
    border-style:solid none none none;
    border-color: #D5D8DC;
    border-width:100%;
    padding-top: 10px;
    margin-top: 15px;
    button{
            width: 150px;
            background-color: #17949b;
            border: none;
            color: white;
            :hover{
            background-color: #42D0D8;
        }
    }
`
//----------endstyle----------
const ProductSingleTemplate = (data) =>{

    const { name, regularPrice,description,image, productCategories } = data.pageContext
    const ShowProduct = () => {
        return(
            <Div>
                <BlockImg>
                    <Img src={image.mediaItemUrl} alt={image.altText}/>
                </BlockImg>
                <div>
                     <h1> {name} </h1>
                    <p dangerouslySetInnerHTML={{__html: description}} />

                    <BlockButton>

                        <div> 
                                <h4> 
                                หมวดหมู่สินค้า :
                                 {productCategories.nodes.map(item =>(
                                    <Link to={decodeURI('product/' + item.slug)}> 
                                        {' '+item.name+' '} 
                                    </Link>
                                ))} 
                                </h4>
                            <h4> ราคา {regularPrice} บาท </h4>
                        </div>

                        <button > <h4>ติดต่อสั้งซื้อสินค้า</h4> </button>
                    </BlockButton>

                </div>
                
            </Div>
        )
    }
    return(
        <Layout>
            <LayoutWrapper>
                <NavProSingPage data = {data.pageContext} />
                <div>
                    {ShowProduct()}
                </div>
            </LayoutWrapper>
        </Layout>
    )
}
export default ProductSingleTemplate;