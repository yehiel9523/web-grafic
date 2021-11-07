import mongoose from 'mongoose';

const DB_URI = process.env.DB_URI;
export const connect = () => {
    mongoose.connect(DB_URI).then(() => console.log('mongoDB is connected'))
        .catch((err) => console.log(err));
};
const imagesSchema = new mongoose.Schema({
    location: { type: String, required: true },
    fileName: { type: String, required: true }

})
export const Image = mongoose.model("images", imagesSchema);
export async function isExists(module, object) {
    return await module.exists(object);
}

export async function addImage(image) {
    const newImage = new Image(image)
    return newImage.save();
}
export async function getImages() {
    const imagesList = Image.find();
    return imagesList
}