import axios from 'axios'
import { print } from 'graphql'

const BASE_URL = 'http://127.0.0.1:9020/graphql'

export const gReq = (options) => {
	return new Promise((resolve, reject) => {
		axios.post(BASE_URL, {
				  query: print(options.query),
          variables: options.variables  
        })
				.then(res => {		
          let errors = res.data.errors
          
          if(errors) {
            reject(errors[0].i18n_message)
          } else {
            resolve(res.data)
          }
				}).catch(err => {
          reject(err.message)
				})
	})
}
 