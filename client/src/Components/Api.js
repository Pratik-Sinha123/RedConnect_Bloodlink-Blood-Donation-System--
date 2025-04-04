import axios from "axios";

const baseURL = "https://redconnect-bloodlink-blood-donation-isku.onrender.com";

export default axios.create({ baseURL: baseURL });
