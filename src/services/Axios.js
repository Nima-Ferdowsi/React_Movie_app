import axios from 'axios'

axios.defaults.headers.post["Content-Type"]='application/json'


/* axios.interceptors.response(null,(error)=>{

const expected=error.response && error.response.status>=400 && error.response.status<500

if(!expected){
    console.log(error);
}
return Promise.reject(error)
}) */

export default{
    get:axios.get
    ,post:axios.post
}
