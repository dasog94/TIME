import mongoose from "mongoose";
import ArchieveModel from "./db/archieve.js";

const db = () => {
    function connect() {
        mongoose.connect(
            "mongodb://heroku_7qq017s1:qn7o7ubt2biskt9nv0kn1dicf6@ds253567.mlab.com:53567/heroku_7qq017s1/", { useUnifiedTopology: true, useNewUrlParser: true },
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