import axios from "axios";

export default function callApi(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `http://localhost:5000/api/${endpoint}`,
        data: body,
    })
        .catch(err => {
            console.error(err)
        })
}
