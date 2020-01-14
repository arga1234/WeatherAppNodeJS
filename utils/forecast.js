const request = require('request')

const forecast = (lat, lng, callback) =>{
    const url = 'https://api.darksky.net/forecast/d4ea211f2accde0acb2a4ba0e0d09efa/'+lng
    request({url, json :true}, (err, res)=>{
        if(err){
            callback('We are sory, error occured while forecasting', undefined)
        }else if(res.body.error){
            callback('We are sory, data not found for this place', undefined)
        }else{
            callback(undefined, res.body)
        }
    })

    // return forecast
}

module.exports = forecast