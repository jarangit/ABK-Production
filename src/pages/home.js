import React, {Component} from 'react'
import JustWeb from '../components/HomePage/just-web';
import ProductListHomePage from '../components/Products/productListHomePage'
import BlogListHomepage from '../components/ฺBlog/blogListHomePage'
import Promote from '../components/HomePage/promote';
import Layout from '../components/Layout/layout';
import SEO from '../components/seo'


const HomePage = () =>  {
        return(
           <Layout>
                        <SEO title = 'home'/>
                        <JustWeb/>
                        <ProductListHomePage/>
                        <Promote/>
                        <BlogListHomepage/>
           </Layout>
        )
}

export default HomePage;