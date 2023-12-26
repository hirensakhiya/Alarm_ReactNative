import axios from "axios";

export async function makeRequest({ url, method = 'get', accessToken, header = {}, data = {} }) {
    accessToken;

    let headers = {
        Authorization: 'Bearer ' + accessToken,
        'Content-Type': 'application/json',
        header
    }

    console.log(method + " API : " + url);

    //Make API request based on method
    console.log(header, url);
    if (method === "get") {
        return axios({
            method: 'get',
            url: url,
            headers: headers
        })
            .then((response) => {
                return Promise.resolve(response)
            }).catch((err) => {
                return Promise.reject(err)
            })
    }
    // else if (method === "post") {
    //     return axios.post(url, data, { headers: headers })
    //         .then((response) => {
    //             return Promise.resolve(response)
    //         }).catch((err) => {
    //             return Promise.reject(err)
    //         })
    // }
    // else if (method == "delete") {
    //     return axios.delete(url, { headers: headers })
    //         .then((response) => {
    //             return Promise.resolve(response)
    //         }).catch((err) => {
    //             return Promise.reject(err)
    //         })
    // }
    /* else if (method == "patch") {
        return axios.patch(url, data, { headers: defaultHeader, withCredentials: true })
            .then((response) => {
                return Promise.resolve(response)
            }).catch((err) => {
                return Promise.reject(err)
            })
    } */
}