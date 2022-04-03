import React from "react";

import { TrackItem } from "../atoms/TrackItem";

import { disk } from "../../assets/icons/index";

export const TracksGrid = ({ tracks, itemsAdapter }) => {
    return (
        <div className="grid ml-4 gap-4 mt-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-auto-cols mb-20">
            {tracks?.map((track) => {
                const { id, trackName, artistName, image, music } =
                    itemsAdapter(track);

                return (
                    <TrackItem
                        key={id}
                        trackName={trackName}
                        artistName={artistName}
                        urlImage={image ?? disk}
                        music={music}
                    />
                );
            })}
        </div>
    );
};
