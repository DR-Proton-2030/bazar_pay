export const NODE_ENV: "PROD" | "DEV" | "LOCAL" = "LOCAL";

export const MONGO_URI ={
    LOCAL: "mongodb://127.0.0.1:27017/find_my_house",
    DEV: "",
    PROD: ""
}

export const PYTHON_SERVER_URL =
NODE_ENV === "LOCAL" ? "http://127.0.0.1:5000" : 
NODE_ENV === "DEV" ? "http://127.0.0.1:5000" :
NODE_ENV === "PROD" ? "http://127.0.0.1:5000" : ""