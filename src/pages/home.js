import React, {Component} from 'react'
import styled from 'styled-components'
import SlideHeader from '../components/Layout/slideHeader';
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
  /* position: absolute; */
  /* top: 65%; */
  /* left: 50%; */
  transform: translate(-50%, -50%);
  color: white;
    h1{
        font-size: 3rem;
    }
    h2{
        font-size: 2rem;

    }
    div{
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
    }
  @media all and (max-width: 900px) {
          top: 30%;
          h1{
              font-size: 1rem;
          }
          h2{
              font-size: 1rem;
          }
          div{
                a{
                padding: 0 10px;
                font-size: 15px;
                }
    }
  }
  /* @media all and (max-width: 1024px) {
          top: 30%;
          
    } */
`

// const DivLink = styled.div`
//     margin: 20px;
//     a{
//         color: white;
//     text-decoration:none;
//     border: 1px solid white;
//     padding: .5rem 1rem;
//     border-radius: .3rem;
//     font-size: 1.25rem;
//     :hover{
//         background: white;
//         color: black;
//         }
//     }
// `
class HomePage extends Component {
    render(){
        
        return(
           <Layout>
                        <JustWeb/>
                        <ProductListHomePage/>
                        <Promote/>
                        <BlogListHomepage/>
           </Layout>
        )
    }
}

export default HomePage;