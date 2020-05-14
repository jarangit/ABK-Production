import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'


const Div = styled.div`
  text-align:center;
  margin: 40px 0 ;
  h1{
    font-size: 140%;
  }
`


const JustWeb = () => {
    return(
        <StaticQuery query = { graphql `
        {
            wordPress {
              allSettings {
                generalSettingsDescription
                generalSettingsTitle
              }
            }
          }
        ` } render = { props => {
            const { generalSettingsDescription, generalSettingsTitle  } = props.wordPress.allSettings
            return(
              <Div>
                <h1> {generalSettingsTitle} </h1>
                <p> {generalSettingsDescription} </p>
              </Div>
            )
        }}

        />
    )
}

export default JustWeb