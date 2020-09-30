 import axios from "axios";

 export default async function convertWords(numberString) {

     let data = JSON.stringify({ "numbers": numberString });

     const url = 'http://2800b2a289c8.ngrok.io';

     let config = {
         method: 'post',
         url: `${url}/api/v1/words`,
         headers: {
             'Content-Type': 'application/json'
         },
         data: data
     };

     const response = await axios(config)
         .then((res) => {
             return res.data
         })
         .catch((error) => {
             console.log(error);
         });

     return response

 }