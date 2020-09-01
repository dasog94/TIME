const mongoose = require("mongoose");
require("mongoose-type-url");

const ArchieveSchema = new mongoose.Schema({
    updatedDate: { type: Date },
    fileURL: {
        type: mongoose.SchemaTypes.Url,
        required: "URL cannot be empty",
    },
    title: { type: String, required: "title cannot be empty" },
}, { timestamps: true });

ArchieveSchema.pre("save", function(next) {
    this.updated_at = Date.now();
    next();
});

// 현재 db의 archieve collection을 찾아 ArchieveModel 속에 넣는다.
const ArchieveModel = mongoose.model("Archieve", ArchieveSchema);
export default ArchieveModel;