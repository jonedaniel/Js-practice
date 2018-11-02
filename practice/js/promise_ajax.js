var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
const getJson = function (url) {
    return new Promise(function (resolve, reject) {
        const handler = function () {
            if (this.readyState !== 4) {
                return
            }
            if (this.status === 200) {
                resolve(this.responseText)
            } else {
                reject(this)
            }
        }
        const client = new XMLHttpRequest()
        client.open("GET", url)
        client.onreadystatechange = handler
        client.responseType = "json"
        client.setRequestHeader("Accept", "application/json")
        client.send()
    })
}
let url = "http://localhost:8314/house/type/14326"
getJson(url).then(function (result) {
    console.log(result)
},function (err) {
    console.log(err)
})