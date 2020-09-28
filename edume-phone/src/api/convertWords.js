import axios from "axios";

export async function convertWords(numberString) {

    let data = JSON.stringify({ "numbers": numberString });

    let config = {
        method: 'post',
        url: 'http://localhost:8080/api/v1/words',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    const response = await axios(config)
        .then((res) => {
            console.log(JSON.stringify(res.data));
            
        })
        .catch((error) => {
            console.log(error);
        });

}