//import axios from 'axios';
const axios = require('axios')

axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDLIbsePkhuAvtm-PXZu4ubgVHYU898yM8' ,{
    email:'rahulrs@rauh',
    password:'11111111',
    returnSecureToken:true

}).then( res=>{
    console.log(res.data)
}).catch(err =>{
    console.log(err)
})