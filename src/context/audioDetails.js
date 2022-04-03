import { useState, createContext, useMemo } from "react";

const NewAudioContext = createContext();

const AudioProvider = (props) => {
    const [audio, setAudio] = useState("");

    const value = useMemo(() => ({ audio, setAudio }), [audio]);

    return (
        <NewAudioContext.Provider value={value}>
            {props.children}
        </NewAudioContext.Provider>
    );
};

export { NewAudioContext, AudioProvider };
