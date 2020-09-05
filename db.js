import mongoose from "mongoose";
import ArchieveModel from "./db/archieve.js";

const db = () => {
    function connect() {
        mongoose.connect(
            process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true },
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

export default db;