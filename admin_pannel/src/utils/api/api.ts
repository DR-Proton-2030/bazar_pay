import axios from "axios";
import { Endpoint, Headers, Params, Payload } from "../../@types/api/api.types";
import { API_GATEWAY_URL, LAMBDA_URL, url, version } from "../../configs/config";

const get = async (
  endpoint: Endpoint,
  headers: Headers,
  params: Params = {},
  type: "API_GATEWAY" | "LAMBDA" = "LAMBDA"
) => {
  try {
    const response = await axios.get(
      `${
        type === "API_GATEWAY" ? API_GATEWAY_URL : LAMBDA_URL 
      }/api/${version}/${endpoint}`,
      {
        headers,
        params,
      }
    );
    const { status } = response;
    if (status === 200) {
      return response;
    }
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

const post = async (
  endpoint: Endpoint,
  payload: Payload,
  headers: Headers,
  type: "API_GATEWAY" | "LAMBDA" = "LAMBDA"
) => {
  try {
    const response = await axios.post(
      `${
        type === "API_GATEWAY" ? API_GATEWAY_URL : LAMBDA_URL
      }/api/${version}/${endpoint}`,
      payload,
      {
        headers,
      }
    );
    const { status } = response;
    if (status === 200) {
      return response;
    }
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

const put = async (
  endpoint: Endpoint,
  payload: Payload,
  headers: Headers,
  type: "API_GATEWAY" | "LAMBDA" = "LAMBDA"
) => {
  try {
    const response = await axios.put(
      `${
        type === "API_GATEWAY" ? API_GATEWAY_URL : LAMBDA_URL
      }/api/${version}/${endpoint}`,
      payload,
      {
        headers,
      }
    );
    const { status } = response;
    if (status === 200) {
      return response;
    }
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

const patch = async (
  endpoint: Endpoint,
  payload: Payload,
  headers: Headers,
  type: "API_GATEWAY" | "LAMBDA" = "LAMBDA"
) => {
  try {
    const response = await axios.patch(
      `${
        type === "API_GATEWAY" ? API_GATEWAY_URL : LAMBDA_URL
      }/api/${version}/${endpoint}`,
      payload,
      {
        headers,
      }
    );
    const { status } = response;
    if (status === 200) {
      return response;
    }
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

const del = async (
  endpoint: Endpoint,
  headers: Headers,
  type: "API_GATEWAY" | "LAMBDA" | "LOCAL"= "LOCAL"
) => {
  try {
    const response = await axios.delete(
      `${
       type === "LOCAL" ? url : LAMBDA_URL
      }/api/${version}/${endpoint}`,
      {
        headers,
      }
    );
    const { status } = response;
    if (status === 200) {
      return response;
    }
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export const request = {
  fetch,
  get,
  post,
  put,
  patch,
  del,
};
