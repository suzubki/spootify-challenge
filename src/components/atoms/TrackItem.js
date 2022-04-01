import React from "react";

export const TrackItem = ({ artistName, trackName, urlImage }) => {
    return (
        <div className="flex flex-row gap-2 xs:gap-4 lg:my-3 xl:ml-4 ">
            <img
                className="w-20 cursor-pointer rounded-md object-cover lg:mr-2 xl:mr-2"
                src={urlImage}
                alt={artistName + "-" + trackName}
            />

            <div className="flex flex-col justify-center">
                <span className="text-md capitalize">{trackName}</span>
                <span className="text-sm capitalize">{artistName}</span>
            </div>
        </div>
    );
};
