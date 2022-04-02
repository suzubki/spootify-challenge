import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchAndLoad = (url, id) => {
    const [{ data, loading }, setData] = useState({
        data: [],
        loading: true,
    });

    const hasToken = typeof localStorage.getItem("token") === "string";

    useEffect(() => {
        const access_token = localStorage.getItem("token");
        const token_type = localStorage.getItem("token_type");

        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `${token_type} ${access_token}`,
        };

        if (typeof access_token === "string") {
            axios
                .get(`${url}/${id}`, {
                    headers,
                })
                .then((res) => {
                    setData({
                        data: res.data,
                        loading: false,
                    });
                });
        }
    }, [id, hasToken, url]);

    return { data, loading };
};
