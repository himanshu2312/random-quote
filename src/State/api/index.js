import axios from "axios";

const API = axios.create({baseURL: "https://api.quotable.io"})

export const nextQuote = () => API.get("/quotes/random");