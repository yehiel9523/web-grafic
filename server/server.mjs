import express, { json } from "express";
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.json());
app.use(express.static("../my-web/build"));

app.post('/loginServer', async(req, res) => {

    console.log(req.body.user)
    if (req.body.user === 'Riki' && req.body.pass === '1234')
        res.send(JSON.stringify({ res: 'Welcome Riki' }))
    else {
        res.send(JSON.stringify({ res: 'Not allowed' }))
    }
})

app.listen(8020);