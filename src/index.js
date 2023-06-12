const express = require('express');
const app = express();
const serialCar = require('./routes/serialCar')
const bodyParser = require('body-parser');



// Menambahkan middleware body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json())
app.use(express.static('img'))

app.use('/serialCar', serialCar)





const PORT = 4000; // or any other port number you prefer

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
