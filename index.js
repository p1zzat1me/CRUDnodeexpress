import express from "express";
import mongoose from 'mongoose';
import router from "./router.js";
import fileUploader from 'express-fileupload';
import cors from 'cors';

const PORT = 3000;
const DB_URL = 'mongodb+srv://user:user@cluster0.afxzbrp.mongodb.net/?retryWrites=true&w=majority'
const app = express()
app.use(cors())

app.use(express.json())
app.use('/api', router)
app.use(fileUploader({}))


async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () =>console.log('Server on port ' + PORT));
    } catch (e) {
        console.log(e);
    }
}


startApp();


