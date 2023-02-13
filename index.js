import express  from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import router from "./router.js";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import fileUpload from 'express-fileupload';
import multer from 'multer';

const PORT = 7255;
const DB_URL = process.env.MONGO_URI;


const app = express();

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, 'static')
    },
    filename: (_, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

app.use('/static', express.static('static'));

app.use(cors())
app.use(express.json())

app.use(fileUpload({}))
app.use(express.static('static'))
app.use('/api', router)

router.post('/static', upload.single('image'), (req, res) => {
    res.json({
        url: `/static/${req.file.originalname}`,
    });
})

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
};

startApp()

