const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors'); 

const port = 5000;

app.get('/react', (req, res) => {
    axios
            .get("https://demo.mabiloft.com/react")
            .then( response => {
                res.json(response.data);
            });
})

app.listen(port, () => console.log(`server started on port ${port}`));