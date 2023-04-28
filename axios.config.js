import axios from "axios";
import https from "https";

const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  httpsAgent: new https.Agent({ keepAlive: true }),
});

export default instance;
