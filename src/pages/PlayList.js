import React from "react";
import { useParams } from "react-router-dom";
import { playlistAdapter } from "../adapters";
import { useFetchAndLoad } from "../hooks/useFetchAndLoad";

import { PlaylistTemplate } from "../components/templates/PlaylistTemplate";

export const PlayList = () => {
    const url = "https://api.spotify.com/v1/playlists";
    let params = useParams();
    const getPlaylist = useFetchAndLoad(url, params.id);

    const { name, description, image, type, tracks, followers } =
        playlistAdapter(getPlaylist);

    return (
        <div>
            {getPlaylist && (
                <PlaylistTemplate
                    name={name}
                    description={description}
                    image={image}
                    type={type}
                    amount={followers}
                    tracks={tracks}
                />
            )}
        </div>
    );
};
