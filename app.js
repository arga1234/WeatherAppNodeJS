const request = require('request')
const forecast = require('./utils/forecast')
const geocoding = require('./utils/geocoding')
geocoding(process.argv[2], (err, res)=>{
    if(err){
        return console.log(err)
    }
    forecast( res.center[1], res.center[0], (err, forecastData)=>{
        if(err){
            return console.log(err)
        }
        const temperature = forecastData.currently.temperature 
        const percent = forecastData.currently.precipProbability
        console.log('Temperature : '+ temperature +' And chance to rain : '+ percent + '% ')    
    })
})