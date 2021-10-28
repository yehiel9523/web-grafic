import express, { json } from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import aws from 'aws-sdk';
// bodyParser = require('body-parser'),
import multer from 'multer';
import multerS3 from 'multer-s3';


const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.json());
app.use(express.static("../my-web/build"));

aws.config.update({
    secretAccessKey: 'DiXpaZHQYEfXSU17RPOu0q3wc5Ip9lSm5OTjtIW0',
    accessKeyId: 'AKIA2XB463DFBEOCWDQZ',
    region: 'eu-central-1'
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