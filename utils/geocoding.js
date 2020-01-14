const request = require('request')

const geocoding = (place, callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+place+'.json?access_token=pk.eyJ1IjoiYXJnYXdpcmF3YW4xMjM0IiwiYSI6ImNrNTh2MjY3ZzBpbmszbHAzMWVjYmQwc24ifQ.HWoIQn-LA0oWzfbEO82gsQ'
    request({url, json : true}, (err, res)=>{
        if(err){
            callback("We are sory, error occured while geocoding", undefined)
        }else if(res.body.message){
            callback("We are sory, geocoding data not available", undefined)
        }else{
            callback(undefined, res.body.features[0])
            // const lat = res.body.features[0].center[1]
            // const lng = res.body.features[0].center[0]
            // console.log("Lat is : "+lat)
            // console.log("Lng is : "+lng)
        }
    })
}

module.exports = geocoding