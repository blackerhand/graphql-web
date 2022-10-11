import { gReq } from '@/utils/greq.js'
import gql from 'graphql-tag'

export const postDetailReq = (id) => {
  let query = gql`
    query($id: ID!) {
      postsDetail(nodeId: $id){
        id
        title
        desc
        subTitle
        likeUsersCount
        isLike
        
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
              score 
              
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
    }
  `
      
  return gReq({
    query: query,
    variables: { id: id }
  })
}
      