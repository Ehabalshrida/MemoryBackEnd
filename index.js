import express from "express";
import cors from "cors";
import bodyParser from"body-parser";
import mongoose from "mongoose";
import router from "./routes/rout.js"
const app=express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use('/posts',router)
const CONNECTION_URL = 'mongodb://Yaehabshridah9:Yaehabshridah9@cluster0-shard-00-00.0xjra.mongodb.net:27017,cluster0-shard-00-01.0xjra.mongodb.net:27017,cluster0-shard-00-02.0xjra.mongodb.net:27017/test?ssl=true&replicaSet=atlas-12rtd7-shard-0&authSource=admin&retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`did not connect`));

// mongoose.set('useFindAndModify', false);