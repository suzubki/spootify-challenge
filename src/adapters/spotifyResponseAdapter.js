export const newReleasesAdapter = (newReleases) => {
    return (
        newReleases?.albums.items.map(({ id, name, images }) => {
            const image = images[0].url;
            return { id, name, image };
        }) || null
    );
};

export const featuredPlaylistAdapter = (featuredPlaylist) => {
    return (
        featuredPlaylist?.playlists.items.map(({ id, name, images }) => {
            const image = images[0].url;
            return { id, name, image };
        }) || null
    );
};

export const manyCategoriesAdapter = (manyCategories) => {
    return (
        manyCategories?.categories.items.map(({ id, name, icons }) => {
            const image = icons[0].url;
            return { id, name, image };
        }) || null
    );
};

export const playlistAdapter = (data) => {
    const initialState = {
        name: "",
        description: "",
        image: "",
        type: "",
        tracks: [],
        followers: 0,
    };

    if (data.length === 0) return initialState;
    const firstTwentyTracks = data.tracks.items.slice(0, 20);

    const description = data?.description
        .split(">")
        .filter((el) => !el.startsWith("<"))
        .map((el) => {
            return el.replace("</a", "");
        })
        .join("");

    return (
        {
            name: data?.name,
            description: description,
            image: data?.images[0].url,
            type: data?.type,
            tracks: firstTwentyTracks,
            followers: data?.followers.total,
        } || null
    );
};

export const albumAdapter = (data) => {
    const initialState = {
        name: "",
        label: "",
        image: "",
        type: "",
        tracks: null,
        popularity: 0,
    };
    if (data.length === 0) return initialState;

    const firstTwentyTracks = data.tracks.items.slice(0, 20);
    const popularity = data.popularity.toString();

    return (
        {
            name: data.name,
            label: data.label,
            image: data.images[0].url,
            type: data.type,
            tracks: firstTwentyTracks,
            popularity: popularity,
        } || null
    );
};

export const genresAdapter = (data) => {
    const initialState = {
        tracks: [],
    };
    if (data.length === 0) return initialState;

    const {
        playlists: { items: tracks },
    } = data;
    return tracks;
};

// Items from Album
export const trackItemAlbumAdapter = (track) => {
    const initialState = {
        id: 0,
        trackName: "",
        artistName: "",
        image: "",
    };

    if (!track) return initialState;
    const { name } = track?.artists[0];
    const music = track?.preview_url;
    return {
        id: track.id,
        trackName: track.name,
        artistName: name,
        music: music,
    };
};

// Items from Playlist
export const trackItemPlaylistAdapter = (dataItems) => {
    const track = dataItems.track;

    const initialState = {
        id: 0,
        trackName: "",
        artistName: "",
    };

    if (!track) return initialState;
    const image = track.album.images[0].url;
    const { name } = track?.artists[0];
    const music = track?.preview_url;
    return {
        id: track.id,
        trackName: track.name,
        artistName: name,
        image: image,
        music: music,
    };
};

export const trackItemGenresAdapter = (track) => {
    const initialState = {
        id: 0,
        trackName: "",
        artistName: "",
        image: "",
    };

    if (!track) return initialState;
    // const description = track.description
    //     .split(">")
    //     .filter((el) => !el.startsWith("<"))
    //     .map((el) => {
    //         return el.replace("</a", "");
    //     })
    //     .join("");

    const newdescription = track.description
        .split("<")
        .map((el) => {
            if (el.startsWith("a href")) {
                const u = el
                    .split(">")
                    .filter((el) => !el.startsWith("a href"));
                return u.join("");
            } else return el;
        })
        .filter((el) => !el.startsWith("/a"))
        .join("");

    const image = track.images[0].url;

    return {
        id: track.id,
        description: newdescription,
        name: track.name,
        image: image,
    };
};
