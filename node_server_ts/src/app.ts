export {};
import express, { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, token");
	if (req.method === "OPTIONS") {
		res.header("Access-Control-Allow-Methods", "PUT, POST, GET, PATCH, DELETE");
		res.header(
			"Access-Control-Allow-Headers",
			"Origin, X-Requested-With, Content-Type, Accept, Authorization, token"
		);
		return res.status(StatusCodes.OK).json({});
	}
	next();
});

app.use(express.json({ limit: "100000kb" }));

// Middleware
app.use(bodyParser.json());

app.use("/api/v1", require("./api/v1/routes"));

app.get("/", (req, res) => {
	res.send(`<h1>App Connected Successful!</h1>`);
});

// const options: cors.CorsOptions = {
//   allowedHeaders: ["sessionId", "Content-Type"],
//   exposedHeaders: ["sessionId"],
//   origin: "*",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   preflightContinue: false,
// };

// app.use(cors(options));

// const port = process.env.PORT || 8989;

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

export default app;
