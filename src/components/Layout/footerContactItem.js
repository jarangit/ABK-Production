import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery, Link } from 'gatsby'

//----------styled---------

const Blog = styled.div`
    align-content: center;
    a{
        text-decoration:none;
        color: #20cbd4;
        :hover{
            color:white;
        }
    }
`
const FooterContactItem  =() => {
    return(
        <StaticQuery  query={ graphql`
        {
    wordPress {
    menus(where: {slug: "footercontact"}) {
      nodes {
        name
        menuItems {
          nodes {
            url
            label
          }
        }
      }
    }
  }
  }

    `} render = {props => {
        const ShowItem = () => {
            return(
                <div>
                    {props.wordPress.menus.nodes.map(edges => {
                        return(
                            edges.menuItems.nodes.map(items=> {
                                console.log(items.url)
                                return(
                                    <Blog>
                                        <a href ={items.url} target="_blank"> {items.label} </a>
                                    </Blog>
                                )
                            })
                        )
                    })}
                </div>
            )
        }

        return(
                <div> {ShowItem()} </div>
            )
        }} />
    )
}
export default FooterContactItem



