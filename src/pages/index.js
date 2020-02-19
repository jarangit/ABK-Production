import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import HomePage from "./home"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePage/>
  </Layout>
)

export default IndexPage
