import React from "react";
import { trackItemGenresAdapter } from "../../adapters";
import { GenresTracksGrid } from "../molecules/GenresTracksGrid";
// import { About } from "../organisms/About";

export const GenresTemplate = ({ tracks }) => {
    return (
        <>
            {/* <About
                name={name}
                description={description}
                image={image}
                type={type}
                amount={amount}
            /> */}
            <div className="xl:text-lg ml-4 mt-3 text-yellow-300">Tracks:</div>
            <GenresTracksGrid
                tracks={tracks}
                itemsAdapter={trackItemGenresAdapter}
            />
        </>
    );
};
