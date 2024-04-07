// libraries
const axios = require('axios');
const fs = require('fs');


// env
require('dotenv').config();
const apiKey = process.env.apiKey;

console.log(apiKey)


zen_url = "https://zenquotes.io/api/"

image_url = "https://zenquotes.io/api/image"

// returns 50 quotes
quotes = "https://zenquotes.io/api/quotes/"

// today's quote
today = "https://zenquotes.io/api/today/"

// random quote
random = "https://zenquotes.io/api/random/"

//axios.get(random)
 // .then(response => {
//    // console.log(response.status);
//    console.log('Response data:', response.data);
//  })
//  .catch(error => {
//    console.error('Error:', error);
//  });

// saves image to file
axios({
  method: 'get',
  url: image_url,
  responseType: 'arraybuffer'
})
.then(response => {
  fs.writeFileSync('assets/dailyimage.jpg', response.data);

  const image_res = response.data;

})
.catch(error => {
  console.error('Error:', error);
});



