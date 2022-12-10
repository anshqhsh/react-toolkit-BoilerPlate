import axios from "axios";
// config
import { HOST_API } from "../config";

// ----------------------------------------------------------------------

export const basePath =
  process.env.NODE_ENV === "production" ? HOST_API.production : HOST_API.dev;

const $axios = axios.create({
  baseURL: basePath,
  withCredentials: true,
});

export default $axios;

// axios instance header
