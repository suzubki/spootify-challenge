import React, { useContext } from "react";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { NewAudioContext } from "../../context/audioDetails";

export const Audio = () => {
    const { audio } = useContext(NewAudioContext);

    return <AudioPlayer className="bg-slate-900 fixed bottom-0" src={audio} />;
};
