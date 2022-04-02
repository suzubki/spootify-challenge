import React from "react";
import { useParams } from "react-router-dom";
import { albumAdapter } from "../adapters";
import { AlbumTemplate } from "../components/templates/AlbumTemplate";
import { useFetchAndLoad } from "../hooks/useFetchAndLoad";

export const Album = () => {
    const url = "https://api.spotify.com/v1/albums";
    let params = useParams();
    const { data, loading } = useFetchAndLoad(url, params.id);
    const { name, label, image, type, tracks, popularity } = albumAdapter(data);

    return (
        <div>
            {!loading && (
                <AlbumTemplate
                    name={name}
                    description={label}
                    image={image}
                    type={type}
                    amount={popularity}
                    tracks={tracks}
                />
            )}
        </div>
    );
};
