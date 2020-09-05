import mongoose from "mongoose";
import ArchieveModel from "../db/archieve";

module.exports = () => {
    function connect() {
        mongoose.connect(
            "mongodb://127.0.0.1:27017/", { useUnifiedTopology: true, useNewUrlParser: true },
            function(err) {
                if (err) {
                    console.error("mongodb connection error\n", err);
                }
                console.log("mongodb connected!");
            }
        );
    }
    connect();
    mongoose.connection.on("disconnected", connect);
};