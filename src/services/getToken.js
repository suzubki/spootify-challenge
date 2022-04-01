import axios from "axios";
import QueryString from "qs";
import { tokenAdapter } from "../adapters/tokenAdapter";

export const getToken = async () => {
    const headers = {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        auth: {
            username: process.env.REACT_APP_CLIENT_ID,
            password: process.env.REACT_APP_CLIENT_SECRET,
        },
    };

    const data = {
        grant_type: "client_credentials",
    };

    try {
        const response = await axios.post(
            "https://accounts.spotify.com/api/token",
            QueryString.stringify(data),
            headers
        );
        const { access_token, token_type } = tokenAdapter(response);
        return { access_token, token_type };
    } catch (error) {}
};
