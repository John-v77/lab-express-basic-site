const { request, response } = require('express');
const express = require('express')

const app = express();


app.get('/home', (request, response, next) =>{
    // console.log(request);
    response.send('<h1>Welcom Ironhacker ;) <h1>')
})


// app.get('/about', (request, response, next) => {
//     response.send('<h1>About</h1>')
// })

app.listen(3000, () => console.log('My fist app listening on port 3000!'))


