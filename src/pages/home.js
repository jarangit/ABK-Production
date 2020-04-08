import React, {Component} from 'react'
import JustWeb from '../components/HomePage/just-web';
import ProductListHomePage from '../components/Products/ProductListHomePage'
import BlogListHomepage from '../components/ฺBlog/BlogListHomePage'
import Promote from '../components/HomePage/Promote';
import Layout from '../components/Layout/layout';
import SEO from '../components/seo'


class HomePage extends Component {
    render(){
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
}

export default HomePage;