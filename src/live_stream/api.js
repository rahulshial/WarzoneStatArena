import axios from "axios";
require('dotenv').config()
// getting auth for using Twitch API

let api = axios.create({
  headers:{
    "Client-ID": `${process.env.REACT_APP_ClIENT_ID}`,
    "Authorization": `Bearer ${process.env.REACT_APP_SECRET_TOKEN}`
  }
})


export default api;