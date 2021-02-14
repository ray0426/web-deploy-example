import { gql } from 'apollo-boost'

export const SUBMIT_NAME= gql`
  mutation submitName(
    $name: String!
  ){
    submitName(
      name: $name
    )
  }
`
