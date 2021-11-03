import express, { json } from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import { Image, connect, addImage, isExists, getImages } from "./db.mjs";
import dontenv from 'dotenv';
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

// const addToDB = (req, res, next) => {
//     addImage({
//         location: req.file.location,
//         fileName: req.file.originalname,
//     });
// }
const uploadPic = async(req, res, next) => {
    const fileFilter = async(req, file, cb) => {
        console.log(file)
        if (!await isExists(Image, { fileName: file.originalname })) {

            cb(null, true)
        } else {
            console.log('fall')
            cb(null, false)

        }
    }
    const upload = multer({
        storage: multerS3({
            s3: s3,
            bucket: 'webgraphic',
            key: function(req, file, cb) {
                console.log("1--- ", file);
                cb(null, file.originalname); //use Date.now() for unique file keys
            }
        }),
        fileFilter: fileFilter
    });
    const uploadSingle = upload.single('file');
    uploadSingle(req, res,
        (err) => {
            if (err) {
                console.log(err)
                return res.status(400).json({ success: false, massage: err.massage })
            } else {
                addImage({
                    location: req.file.location,
                    fileName: req.file.originalname,
                });
                console.log("ok")
                res.status(200).json({ data: req.file });
            }
        })

    // } else {

    //     console.log(`${File.originalname} item already exists!`)
    //     res.send(`${File.originalname} item already exists!`);
    // }
}

app.post('/loginServer', async(req, res) => {

    console.log(req.body.user)
    if (req.body.user === 'Riki' && req.body.pass === '1234')
        res.send(JSON.stringify({ res: 'Welcome Riki' }))
    else {
        res.send(JSON.stringify({ res: 'Not allowed' }))
    }
})
app.get('/getImages', async(req, res) => {
    res.send(await getImages())
})

app.post('/upload', uploadPic);

app.listen(8020, () => {
    connect()
});