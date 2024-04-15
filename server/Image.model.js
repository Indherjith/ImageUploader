const mongoose = require("mongoose")

const ImageSchema = new mongoose.Schema({
    img : String
});
const ImageModel = mongoose.model("Image", ImageSchema);
module.exports = {ImageModel};