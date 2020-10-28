import axios from "axios";

// url of api

const instance = axios.create({
    baseURL:
        "http://localhost:3000/challenge-5f5c1/us-central1/api",
});

export default instance;
