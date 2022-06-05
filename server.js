const express = require("express");
const app = express();
const PORT = 8000;

const rappers = {
   '21 Savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, UK'
},
'Chance the Rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennet',
        'birthLocation': 'Illinois'
},
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }

}
app.get('/', (request, response) => {
response.sendFile(__dirname + "/index.html")
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase;
    if (rappers[rapperName]) {
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['unknown'])
    } 
})

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}, you better go catch it!`)
})

