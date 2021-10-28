import express, { json } from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import dontenv from 'dotenv'
dontenv.config();


const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.json());
app.use(express.static("../my-web/build"));

aws.config.update({
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    accessKeyId: process.env.ACCESS_ID,
    region: process.env.REGION
});

const s3 = new aws.S3();

const uploadPic = (req, res, next) => {
    const upload = multer({
        storage: multerS3({
            s3: s3,
            bucket: 'webgraphic',
            key: function(req, file, cb) {
                console.log(file);
                cb(null, file.originalname); //use Date.now() for unique file keys
            }
        })
    });
    const uploadSingle = upload.single('file');
    uploadSingle(req, res, (err) => {
        if (err) {
            console.log(err)
            return res.status(400).json({ success: false, massage: err.massage })
        }
        console.log(req.file);
        res.status(200).json({ data: req.file });
    })
}

app.post('/loginServer', async(req, res) => {

    console.log(req.body.user)
    if (req.body.user === 'Riki' && req.body.pass === '1234')
        res.send(JSON.stringify({ res: 'Welcome Riki' }))
    else {
        res.send(JSON.stringify({ res: 'Not allowed' }))
    }
})

app.post('/upload', uploadPic);

app.listen(8020);