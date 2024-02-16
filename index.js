const express = require('express'); 
const { PORT = 3333 } = process.env;

const baseUrl = 'https://newsapi.org/v2/everything?';
const key = '5e7d4c6c6454426ca37b45750e0a36b2';
const q = 'gatos';

const app = express();

app.use(express.json()); // para parsear application/json
app.use(express.urlencoded({ extended: true })); // para parsear application/x-www-form-urlencoded, el formato de datos tradicional GET form



app.get('/news/v2/top-headlines', (req, res) => {
    const u = new URLSearchParams(req.query).toString();
   // res.send({query: req.query, u});
    const url = `${baseUrl}${u}`;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(json => {
        res.send(json);
    }).catch(error => {
        res.status(403).send(error);
    });
    
})


app.listen(PORT, () => {
    // si todo funciona bien, la consola mostrará qué puerto está detectando la aplicación
    console.log(`App listening at port ${PORT}`);
})
  