import React, {Component} from 'react'
import styled from 'styled-components'
import SlideHeader from '../components/Layout/slideHeader'
import { Link } from 'gatsby';
import JustWeb from '../components/HomePage/just-web';
import ProductListHomePage from '../components/Products/ProductListHomePage'
import BlogListHomepage from '../components/ฺBlog/BlogListHomePage'
import Promote from '../components/HomePage/Promote';
import Layout from '../components/Layout/layout';



const LayoutWrapper = styled.div`
    max-width:1064px;
    margin: 0 auto;
    
`
const Text = styled.div`
  text-align: center;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`
// const LinkSlide = styled(Link)`
//     color: white;
//     text-decoration:none;
//     border: 1px solid white;
//     padding: .5rem 1rem;
//     border-radius: .3rem;
//     font-size: 1.25rem;
//     ${LinkSlide}:hover&{
//         background: white;
//         color: black;
//     }
// `   

const H1 = styled.h1`
    font-size: 3rem;
`

const DivLink = styled.div`
    margin: 20px;
    a{
        color: white;
    text-decoration:none;
    border: 1px solid white;
    padding: .5rem 1rem;
    border-radius: .3rem;
    font-size: 1.25rem;
    :hover{
        background: white;
        color: black;
    }
    }
`
class HomePage extends Component {
    render(){
        
        return(
           <Layout>
               <SlideHeader/>
                    <Text>
                        <H1 >WELCOME</H1>
						<h2>ABK ENGINEERING AND MACHINE</h2>
						<DivLink><Link to = 'product' >Product</Link></DivLink>
                    </Text>
                    <LayoutWrapper>
                        <JustWeb/>
                        <ProductListHomePage/>
                        <Promote/>
                        <BlogListHomepage/>
                    </LayoutWrapper>
           </Layout>
        )
    }
}

export default HomePage;