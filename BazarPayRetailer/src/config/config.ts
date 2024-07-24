
export const url = "http://192.168.155.155:8989";
// export const local_url = "http://192.168.1.33:4009";
export const port = "4009";

export const ADMIN_ENV: "PROD" | "DEV" | "LOCAL" = "LOCAL";

export const version = "v1";

export const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};


export const LINK = `${url}:${port}/api/v1`;
