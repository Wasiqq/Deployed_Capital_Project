import axios from 'axios'
import PrefHandler from '../local/PrefHandler'

const prefs = new PrefHandler()

export default class WebHandler {
    /////////////////////////////// Post Method ///////////////////////////
    sendPostDataRequest(url, bodyParams, onSuccess, onFailure) {
        prefs.getSession((result) => {
            console.log("------------API POST REQUEST--------------")
            console.log("URL==>", url)
            console.log("BODYPARAMS==>", JSON.stringify(bodyParams)),
            console.log("result token==>", result.token)


            axios.post(url, bodyParams, {
                "headers": {
                    "content-type": "application/json",
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + result.token
                },
            })
                .then(async (response) => {

                    const respJson = response.data
                    console.log("RESPONSE==>", JSON.stringify(respJson))
                    if (respJson.status == true) {
                        onSuccess(respJson)
                    } else {
                        onFailure(respJson)
                    }
                }).catch((error) => {
                    console.log("RESPOSNE==>", error);
                    onFailure(error)
                })
        })
    }

    //////////////////////////////////// Get Method //////////////////////////////////////
    async sendGetDataRequest(url, params, onSuccess, onFailure) {

        let headers = { 'Content-Type': 'application/x-www-form-urlencoded', }

        console.log("---------------API GET REQUEST--------------")
        console.log("URL==>", url)
        console.log("HEADER==>", headers)
        console.log("PARAMS==>", params)

        axios.get(url, {
            headers: headers,
            params: params,
        }).then((response) => {
            const respJson = response.data
            if (respJson.status == true) {
                onSuccess(respJson)
            } else {
                onFailure(respJson.message)
            }
        }).catch((error) => {
            console.log("RESPOSNE==>", error);

            onFailure(error.message)
        })
    }

    ////////// Logout Post Method ////////////////////////
    sendPostLogoutRequest(url, onSuccess, onFailure) {
        prefs.getSession((result) => {

            console.log("------------API POST REQUEST--------------")
            console.log("URL==>", url)
            console.log("result token==>", result.token)

            axios.post(url, "", {
                "headers": {
                    "content-type": "application/json",
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + result.token
                },
            })
                .then(async (response) => {
                    const respJson = response.data
                    console.log("RESPOSNE==>", JSON.stringify(respJson))
                    if (respJson.status == true) {
                        onSuccess(respJson)
                    } else {
                        onFailure(respJson)
                    }
                }).catch((error) => {
                    console.log("RESPOSNE==>", error.message);
                    onFailure(error)
                })

        })
    }

    ///////////////////////////////////// Simple Get //////////////////////////////////////////////
    sendGetRequest(url, onSuccess, onFailure) {
        console.log("Url", url)
        axios.get(url)
            .then((resp) => {
                const respJson = resp.data
                onSuccess(respJson)
            })
            .catch((error) => {
                console.log(error)
                onFailure(error)
            })
    }

}


