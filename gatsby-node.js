const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  // createRedirect({ fromPath: '/', toPath: '', redirectInBrowser: true, inPermanent: true })

    const result =  await graphql(
      `
      {
        wordPress {
          pages (first: 100){
            nodes {
              id
              title
              id
              slug
              content
              featuredImage{
                mediaItemUrl
              }
            }
          }
        } 
        wordPress {
          posts (first: 100){
            nodes {
              id
              title
              slug
              uri
              content
              featuredImage {
                altText
                mediaItemUrl
              }
              categories{
                nodes{
                  id
                 name
                  slug
                }
              }
            }
          }
        }
        wordPress {
          categories(first: 100) {
            nodes {  
              id
              slug
              name
              link
              count
              description
              posts (first: 100) {
                nodes {
                  uri
                  title
                  slug
                  id
                  excerpt
                  categories {
                    nodes {
                      slug
                    }
                  }
                  featuredImage {
                    mediaItemUrl
                  }
                }
              }
            }
          }
        }
        wordPress {
          productCategories(first: 500) {
            nodes {
              name
              slug
              description
              id
              image {
                altText
                mediaItemUrl
              }
              products(first: 500) {
                nodes {
                  ... on WordPress_SimpleProduct {
                    id
                    name
                    slug
                    regularPrice
                    productCategories {
                      nodes {
                        slug
                      }
                    }
                  }
                  image {
                    altText
                    mediaItemUrl
                  }
                }
              }
              children(first: 20) {
                nodes {
                  id
                  name
                  slug
                  description
                  image {
                    altText
                    mediaItemUrl
                  }
                  parent {
                    name
                    id
                    slug
                  }
                }
              }
            }
          }
        }
        wordPress {
          products(first: 500) {
            nodes {
              ... on WordPress_SimpleProduct {
                id
                name
                regularPrice
                description
                link
                slug
                stockStatus
                productCategories {
                  nodes {
                    slug
                    name
                    id
                  }
                }
                image {
                  altText
                  mediaItemUrl
                }
              }
            }
          }
        }
      }
        
      `)
      if (result.errors) {
        throw new Error(result.errors)
      }
        //page
        const PageTemplate = path.resolve(`src/templates/page.js`)
        result.data.wordPress.pages.nodes.forEach(edge => {
          const deCode = decodeURI(edge.slug);
          createPage({
            path: deCode,
            component: PageTemplate,
            context: edge,
          })
        })

        //post
        const PostTemplate = path.resolve(`src/templates/post.js`)
        result.data.wordPress.posts.nodes.forEach(edge => {
          edge.categories.nodes.map(cat => {
            const deCode = decodeURI(cat.slug + "/" + edge.uri);
            // cat.slug +'/'+
            createPage({
              path: deCode,
              component: PostTemplate,
              context: edge,
            })
          })
          })

          //PostCategory
          const CatTemplate = path.resolve(`src/templates/category.js`)
          result.data.wordPress.categories.nodes.forEach(edge => {

            const deCode = decodeURI(edge.slug);
            createPage({
              path: '/category/'+deCode,
              component: CatTemplate,
              context: edge,
            })
          })


          //ProductCategory
          const ProducCatTemplate = path.resolve(`src/templates/product-Category.js`)
          result.data.wordPress.productCategories.nodes.forEach(edge => {

            const deCodeMain = decodeURI(edge.slug);
            createPage({
              path: '/product/'+deCodeMain,
              component: ProducCatTemplate,
              context: edge,
            })
          })

      
          // SingleProduct
          const ProductSingleTemplate = path.resolve(`src/templates/product-Single.js`)
          result.data.wordPress.products.nodes.forEach(edge => {
            edge.productCategories.nodes.map(catProduct=> {
              const deCode = decodeURI("/product/" + catProduct.slug + '/' + edge.slug);
              createPage({
                path: deCode,
                component: ProductSingleTemplate,
                context: edge,
              })
            }) 
          })
      
}