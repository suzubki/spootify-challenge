import React from "react";

import { TrackItem } from "../atoms/TrackItem";

import { trackItemAdapter } from "../../adapters";

export const TracksGrid = ({ tracks }) => {
    return (
        <div className="grid ml-4 gap-4 mt-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tracks?.map(({ track }) => {
                const { id, trackName, artistName, urlImage } =
                    trackItemAdapter(track);

                return (
                    <TrackItem
                        key={id}
                        trackName={trackName}
                        artistName={artistName}
                        urlImage={urlImage}
                    />
                );
            })}
        </div>
    );
};
