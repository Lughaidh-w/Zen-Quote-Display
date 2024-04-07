// libraries
const axios = require('axios');
const fs = require('fs');
require('dotenv').config();


// image_url = process.env.image_url
image_url = "https://zenquotes.io/api/image"


// gets an image from zenquotes and saves it
axios({
  method: 'get',
  url: image_url,
  responseType: 'arraybuffer'
})
.then(response => {
  fs.writeFileSync('assets/dailyimage.jpg', response.data);

  // nothing is done with the image atm
  // const image_res = response.data;

})
.catch(error => {
  console.error('Error:', error);
});