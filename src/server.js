import express from 'express';

import routes from './routes/movieRoutes.js';

const app = express();
const port = 5001;


app.get('/', (req, res) => {
    res.json({message: 'yash sharma'})
})

app.use('/movies', routes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})