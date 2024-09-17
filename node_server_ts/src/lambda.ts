import serverless from "serverless-http"; // Import your Express app
import app from "./app";

const handler = serverless(app);

export { handler };
