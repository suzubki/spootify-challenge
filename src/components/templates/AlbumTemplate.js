import React from "react";
import { trackItemAlbumAdapter } from "../../adapters";
import { TracksGrid } from "../molecules/TracksGrid";
import { About } from "../organisms/About";

export const AlbumTemplate = ({
    name,
    description,
    image,
    type,
    amount,
    tracks,
}) => {
    return (
        <>
            <About
                name={name}
                description={description}
                image={image}
                type={type}
                amount={amount}
            />
            <div className="xl:text-lg ml-4 mt-3 text-slate-700">Tracks:</div>
            <TracksGrid tracks={tracks} itemsAdapter={trackItemAlbumAdapter} />
        </>
    );
};
