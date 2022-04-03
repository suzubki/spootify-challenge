import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { PlayList } from "./pages/PlayList";
import { Album } from "./pages/Album";
import { Genres } from "./pages/Genres";
import { Error } from "./pages/Error";
import { getToken } from "./services/getToken";

import { Audio } from "./components/organisms/Audio";
import { AudioProvider } from "./context/audioDetails";
import { Welcome } from "./pages/Welcome";

const App = () => {
    const [hasToken, setHasToken] = useState(false);

    useEffect(() => {
        if (!hasToken) {
            getToken().then((res) => {
                localStorage.setItem("token", res.access_token);
                localStorage.setItem("token_type", res.token_type);
                setHasToken(true);
            });
        }
    }, [hasToken]);

    return (
        <AudioProvider>
            <BrowserRouter>
                <Link to="/home">
                    <aside className="p-2 lg:p-4 fixed top-0 right-0 lg:top-16 font-bold text-white bg-sky-600 z-10 rounded-l-md">
                        {" "}
                        Home
                    </aside>
                </Link>
                <Routes>
                    <Route index element={<Welcome />} />
                    <Route path="/" element={<Welcome />} />
                    <Route path="home" element={<Home />} />
                    <Route path="playlist" element={<PlayList />}>
                        <Route path=":id" element={<PlayList />} />
                    </Route>
                    <Route path="albums" element={<Album />}>
                        <Route path=":id" element={<Album />} />
                    </Route>
                    <Route path="genres" element={<Genres />}>
                        <Route path=":id" element={<Genres />} />
                    </Route>
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
            <Audio />
        </AudioProvider>
    );
};

export default App;
