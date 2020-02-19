import React, {useState} from 'react'
import Layout from '../components/Layout/layout'
import styled from 'styled-components'
import { Link } from 'gatsby'
import NavProSingPage from '../components/Navigation/NavProSingPage'

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
    display: grid;
    grid-template-columns: 532px 532px;
    margin: 40px 0;
    padding: 15px;
    border: 2px solid #D5D8DC;
    border-radius: 10px;

`
// const Button = styled.button`
//     width: 150px;
//     background-color: #17949b;
//     border: none;
//     /* padding: 10px; */
//     color: white;
//     ${Button}:hover&{
//         background-color: #42D0D8;
//     }
// `
const BlockImg = styled.div`
    margin: 0 auto;
`

const BlockButton = styled.div`
    /* background: red; */
    /* display: grid; */
    /* grid-template-columns: 50% auto; */
    /* justify-content: space-between; */
    border-style:solid none none none;
    border-color: #D5D8DC;
    padding-top: 10px;
    margin-top: 15px;
    button{
            width: 150px;
            background-color: #17949b;
            border: none;
            /* padding: 10px; */
            color: white;
            :hover{
            background-color: #42D0D8;
        }
    }
`
//----------endstyle----------
const ProductSingleTemplate = (data) =>{

    const [show, setShow] = useState(false)
    
    // const ShowModal = () =>{
    //   return(
    //       <div>jaran</div>
    //   )
    // }
    const { name, regularPrice,description,image, productCategories } = data.pageContext
    const ShowProduct = () => {
        return(
            <Div>
                <div>
                    <div> <h1> {name} </h1> </div>
                    <p dangerouslySetInnerHTML={{__html: description}} />

                    <BlockButton>

                        <div> 
                            <div> 
                                <h4> 
                                หมวดหมู่สินค้า :
                                 {productCategories.nodes.map(item =>(
                                    <Link to={decodeURI('product/' + item.slug)}> 
                                        {' '+item.name+' '} 
                                    </Link>
                                ))} 
                                </h4>
                            </div>
                            <h4> ราคา {regularPrice} บาท </h4>
                        </div>

                        <button > <h4>ติดต่อสั้งซื้อสินค้า</h4> </button>
                    </BlockButton>

                </div>
                <BlockImg>
                    <Img src={image.mediaItemUrl} alt={image.altText}/>
                </BlockImg>
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