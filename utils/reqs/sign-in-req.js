import { gReq } from '@/utils/greq.js'
import gql from 'graphql-tag'
import { changeUrl } from '@/utils/change-url.js'

export const signInReq = (username, passwd) => {
  let query = gql`
    mutation signIn($sign_in_input: Users_SignInInput!) {
      usersSignIn(input: $sign_in_input) {
        user {
          id
          email
          nickname
          token
        }
      }
    }
  `
  
  gReq({
    query: query,
    variables: {
      "sign_in_input": {
        "email": username,
        "password": passwd,
      },
    }
  })
  .then(res => {
    uni.setStorage({
      key: 'token',
      data: res.data.usersSignIn.user.token,
    })
    
    let redirctUrl = '/' 
    uni.getStorage({ 
      key: 'redirct',
      success (res) {
        redirctUrl = res.data
      }
    }) 
    
    changeUrl(redirctUrl)
  })
  .catch(err => {
    console.log(err)
  })
}
      