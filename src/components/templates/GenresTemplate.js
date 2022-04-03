import React from "react";
import { trackItemGenresAdapter } from "../../adapters";
import { GenresTracksGrid } from "../molecules/GenresTracksGrid";

export const GenresTemplate = ({ tracks }) => {
    return (
        <>
            <div className="xl:text-lg ml-4 mt-3 text-slate-700">
                Playlists:
            </div>
            <GenresTracksGrid
                tracks={tracks}
                itemsAdapter={trackItemGenresAdapter}
            />
        </>
    );
};
