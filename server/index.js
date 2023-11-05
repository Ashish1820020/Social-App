import path from 'path'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import helmet from 'helmet'
import multer from 'multer'

const app = express();
export default app;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.json());
app.use(bodyParser.json(), bodyParser.urlencoded({extended: true}));
app.use(cors());
// app.use(helmet());
// app.use(helmet.crossOriginEmbedderPolicy({policy: "cross-origin"}));
app.use(cookieParser());
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));



const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public/assets");
    },
    filename: function (req, res, cb){
        cb(null, file.originalname);
    }
});

const upload = multer({storage});


