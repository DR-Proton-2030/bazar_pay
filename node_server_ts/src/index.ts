import http from "http";
import connectDb from "./config/db";
import app from "./app";
import { NODE_ENV } from "./config/config";

const httpServer = http.createServer(app);
const io = require("socket.io")(httpServer, {
	cors: {
		origin: "*",
		methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]
	}
});

connectDb();

const PORT =
	String(NODE_ENV) === "PROD" || String(NODE_ENV) === "LOCAL" ? 8989 : String(NODE_ENV) === "DEV" ? 8181 : "";

const server = httpServer.listen(PORT, () => {
	console.log("info", `\x1b[33m \x1b[1m Server is running in ${NODE_ENV} mode on port ${PORT} \x1b[0m`);

	// logger.info({ a: 123, v: 456 });
	io.on("connection", (socket: any) => {
		//console.log("info", "new socket user" + socket.id);
		socket.on("approval", (message: any) => {
			socket.broadcast.emit("messageSent", message);
			console.log(message);
		});
	});
});
