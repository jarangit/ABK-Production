import React, {useState} from 'react'
import Layout from '../components/Layout/layout'
import styled from 'styled-components'
import { Link } from 'gatsby'
import NavProSingPage from '../components/Navigation/navprosingpage'
import ModalOnClickSale from '../components/Modal/ModalOncClickSale'

//-------------styled----------
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
const ProductSingleTemplate =  (data) =>{

    const { name, regularPrice,description,image, productCategories, id } =  data.pageContext
    //useStae for modal 
    const [openModal, SetOpenModal] = useState(true)    
    //Func onClick opemModal
    const FuncOpenModal = () => {SetOpenModal(!openModal)}
    console.log(description)
    const ShowProduct  =   () => {
         return(
            <Div>
                <BlockImg>
                    <Img src={image.mediaItemUrl} alt={image.altText}/>
                </BlockImg>
                <div>
                     <h1> {name} </h1>
                    <div key={id} dangerouslySetInnerHTML={{__html: description}} />
                    {/* <p> {description} </p> */}

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

                        <button onClick = {FuncOpenModal} > <h4>ติดต่อสั้งซื้อสินค้า</h4> </button>
                    </BlockButton>

                </div>
                
            </Div>
        )
    }
    return (
        <Layout>
                <NavProSingPage data = {data.pageContext} />
                <ModalOnClickSale valueClick = {openModal} onClose={FuncOpenModal}/>
                <div>
                    {ShowProduct()}
                </div>
        </Layout>
    )
}
export default ProductSingleTemplate;
