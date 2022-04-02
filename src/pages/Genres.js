import React from "react";
import { useParams } from "react-router-dom";
import { genresAdapter } from "../adapters";
import { GenresTemplate } from "../components/templates/GenresTemplate";
import { useFetchAndLoad } from "../hooks/useFetchAndLoad";

export const Genres = () => {
    const url = "https://api.spotify.com/v1/browse/categories";
    let params = useParams();
    const { data, loading } = useFetchAndLoad(
        url,
        `${params.id}/playlists?country=SE&offset=5&limit=20`
    );
    const tracks = genresAdapter(data);

    return <div>{!loading && <GenresTemplate tracks={tracks} />}</div>;
};
