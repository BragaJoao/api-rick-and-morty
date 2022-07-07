require('dotenv').config()
const express = require('express');
const cors = require('cors')
const connectDataBase = require('./database/database')

const port = 3001;
const app = express();

connectDataBase();
app.use(cors());
app.use(express.json());

/*app.use("characters", routes);*/

app.listen(port, () =>{
    console.log(`Server running at http://localhost:${port}`);
})