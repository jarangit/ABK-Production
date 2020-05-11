import React from 'react'
import JustWeb from './HomePage/just-web';
import ProductListHomePage from './Products/productListHomePage'
import BlogListHomepage from './ฺBlog/blogListHomePage'
import Promote from './HomePage/promote';
import SEO from './seo'


const HomePage = () =>  {
        return(
           <div>
                        <SEO title = 'ABK'/>
                        <JustWeb/>
                        <ProductListHomePage/>
                        <Promote/>
                        <BlogListHomepage/>
           </div>
        )
}

export default HomePage;