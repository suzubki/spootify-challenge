import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { PlayList } from "./pages/PlayList";
import { Album } from "./pages/Album";
import { getToken } from "./services/getToken";

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
        <BrowserRouter>
            <nav>
                <Link to="/home">Home </Link>
            </nav>
            <Routes>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="playlist" element={<PlayList />}>
                    <Route path=":id" element={<PlayList />} />
                </Route>
                <Route path="albums">
                    <Route path=":id" element={<Album />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
