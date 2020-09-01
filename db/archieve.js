const mongoose = require("mongoose");
const ArchieveSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: String,
});

const ArchieveModel = mongoose.model("Archieve", ArchieveSchema);
export default ArchieveModel;