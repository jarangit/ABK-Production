import React from 'react'
import JustWeb from './HomePage/just-web';
import ProductListHomePage from './Products/productListHomePage'
import BlogListHomepage from './ฺBlog/blogListHomePage'
import Promote from './HomePage/promote';


const HomePage = () =>  {
        return(
           <div>
                        <JustWeb/>
                        <ProductListHomePage/>
                        <Promote/>
                        <BlogListHomepage/>
           </div>
        )
}

export default HomePage;