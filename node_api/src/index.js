import express from "express";
import cors from "cors";
import words from "./routes/wordSearch_route";

const app = express();

/** 
 * options for cors midddleware
 * Documentation: https://expressjs.com/en/resources/middleware/cors.html
 */
const options = {
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE"
};

var router = express.Router();

app.use(cors());
app.use(express.json());
app.use(router);

app.set("port", process.env.PORT || 8080);

app.options("*", cors(options)); //enable pre-flight

app.use(words);

// This root is needed if you want to run this in the cloud
router.get("/", (async(req, res) => { res.send('root'); }));

try {
    app.listen(app.get("port"), () => {
        console.log("the server is running on port",
            app.get("port")
        );
    });

} catch (error) {
    console.log(error);
}