const mongoose = require("mongoose");
require("mongoose-type-url");

const ArchieveSchema = new mongoose.Schema({
    updatedDate: String,
    fileURL: {
        type: mongoose.SchemaTypes.Url,
        required: "URL cannot be empty",
    },
    title: { type: String, required: "title cannot be empty" },
}, { timestamps: true });

ArchieveSchema.pre("save", function(next) {
    this.updated_at = Date.now();
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const dt = date.getDate();
    this.updatedDate = year + "/" + month + "/" + dt;
    next();
});

// 현재 db의 archieve collection을 찾아 ArchieveModel 속에 넣는다.
const ArchieveModel = mongoose.model("Archieve", ArchieveSchema);
export default ArchieveModel;