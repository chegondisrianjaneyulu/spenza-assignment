const express = require('express');

const router = express.Router();

const data = [
    { id: 1, region: "DE", data: 290 },
    { id: 2, region: "US", data: 490 },
    { id: 3, region: "AT", data: 790 },
    { id: 4, region: "SE", data: 590 },
    { id: 5, region: "AT", data: 290 },
    { id: 6, region: "IN", data: 400 }
];
  
const regionCoordinates = {
    "US": [37.0902, -95.7129], 
    "AT": [47.5162, 14.5501], 
    "SE": [60.1282, 18.6435], 
    "DE": [51.1657, 10.4515], 
    "FR": [46.6034, 1.8883],
    "GB": [55.3781, -3.4360],  
    "IN": [20.5937, 78.9629],  
    "AU": [-25.2744, 133.7751],
    "BR": [-14.2350, -51.9253],
    "CN": [35.8617, 104.1954],  
    "JP": [36.2048, 138.2529], 
    "ZA": [-30.5595, 22.9375], 
    "RU": [61.5240, 105.3188], 
    "CA": [56.1304, -106.3468], 
    "MX": [23.6345, -102.5528],
    "IT": [41.8719, 12.5674],  
    "ES": [40.4637, -3.7492],   
    "NL": [52.1326, 5.2913],  
    "NO": [60.4720, 8.4689],    
};

router.get('/', async (req, res) => {
    try {
        const result = {data, regionCoordinates}
        res.status(200).send(result);
    }
    catch (e) {
        console.log('e',e)
        res.status(500).send({error:true, message:e?.message})
    }
})

module.exports  = router