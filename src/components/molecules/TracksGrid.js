import React from "react";

import { TrackItem } from "../atoms/TrackItem";

import { disk } from "../../assets/icons/index";

// For playlist ---> playlis trackItemAdapter

export const TracksGrid = ({ tracks, itemsAdapter }) => {
    return (
        <div className="grid ml-4 gap-4 mt-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tracks?.map((track) => {
                // Para album
                // const { id, trackName, artistName } = trackItemAdapter({
                //     track,
                // });

                // Para playlist
                const { id, trackName, artistName, image } =
                    itemsAdapter(track);

                return (
                    <TrackItem
                        key={id}
                        trackName={trackName}
                        artistName={artistName}
                        urlImage={image ?? disk}
                    />
                );
            })}
        </div>
    );
};
