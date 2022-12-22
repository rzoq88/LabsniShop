const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const AuthRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const paymentRoute = require('./routes/stripe')
const cors = require('cors')

const app = express();

mongoose.set('strictQuery', true);

//mongoose connect 
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("db connection is successfull"))
  .catch((err) => {console.log(`connection is failed because ${err}`)});

//server start
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
//routes
app.use('/api/users',userRoute)
app.use('/api/auth',AuthRoute)
app.use('/api/products',productRoute)
app.use('/api/carts',cartRoute)
app.use('/api/orders',orderRoute)
app.use('/api/checkout',paymentRoute)

app.listen(port, () => console.log(`server run on port ${port}`));
