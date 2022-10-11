import { gReq } from '@/utils/greq.js'
import gql from 'graphql-tag'

export const postListReq = (after, per = 20) => {
  let query = gql`
    query($per: Int = 20, $after: String) {
      postsList(first: $per, after: $after) {
        nodes {
          id
          title
          desc
    
          __typename
          
          owner {
            id
          }
          
          collection {
            name
          }
          elements {
            nodes {
              id
              desc
              line {
                id
                name
              }

              marks {
                nodes {
                  id 
                  score
                  desc
                }
              }
            }
          }
          
          modifier{
            id
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `
      
  return gReq({
    query: query,
    variables: { per: per, after: after }
  })
}
      