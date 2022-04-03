import React, { useContext } from "react";
import { NewAudioContext } from "../../context/audioDetails";

export const TrackItem = ({ artistName, trackName, urlImage, music }) => {
    const { setAudio } = useContext(NewAudioContext);

    return (
        <div className="flex flex-row gap-2 xs:gap-4 p-4 hover:bg-slate-800">
            <img
                className="w-20 cursor-pointer rounded-md object-cover lg:mr-2 xl:mr-2"
                src={urlImage}
                alt={artistName + "-" + trackName}
                onClick={() => setAudio(music)}
            />

            <div className="flex flex-col justify-center">
                <span className="text-md font-bold text-slate-200 leading-4 capitalize">
                    {trackName}
                </span>
                <span className="text-sm text-slate-500  capitalize">
                    {artistName}
                </span>
            </div>
        </div>
    );
};
