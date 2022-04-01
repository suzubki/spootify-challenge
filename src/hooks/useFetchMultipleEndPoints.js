import axios from "axios";
import { useEffect, useState } from "react";

const endPoints = [
    "https://api.spotify.com/v1/browse/new-releases?limit=20",
    "https://api.spotify.com/v1/browse/featured-playlists?limit=20",
    "https://api.spotify.com/v1/browse/categories?limit=20",
];

export const useFetchMultipleEndPoints = () => {
    const [data, setData] = useState({});

    const hasToken = typeof localStorage.getItem("token") === "string";

    useEffect(() => {
        const access_token = localStorage.getItem("token");
        const token_type = localStorage.getItem("token_type");
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `${token_type} ${access_token}`,
        };
        if (hasToken) {
            axios
                .all(
                    endPoints.map((endpoint) =>
                        axios.get(endpoint, { headers })
                    )
                )
                .then(
                    axios.spread(
                        (
                            { data: newReleases },
                            { data: featuredPlaylist },
                            { data: manyCategories }
                        ) => {
                            setData({
                                newReleases,
                                featuredPlaylist,
                                manyCategories,
                            });
                        }
                    )
                );
        }
    }, [hasToken]);

    return data;
};
