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
    const firstTwentyTracks = data?.tracks.items.slice(0, 20);

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

export const trackItemAdapter = (track) => {
    if (!track) return {};

    const { name: artistName } = track.artists[0];
    const urlImage = track.album.images[0].url;

    return (
        {
            urlImage: urlImage,
            id: track.id,
            artists: track.artists,
            trackName: track.name,
            artistName: artistName,
        } || null
    );
};

export const albumAdapter = (data) => {
    const firstTwentyTracks = data?.tracks.items.slice(0, 20);

    const popularity = data?.popularity.toString();

    return (
        {
            name: data?.name,
            label: data?.label,
            image: data?.images[0].url,
            type: data?.type,
            tracks: firstTwentyTracks,
            popularity: popularity,
        } || null
    );
};
