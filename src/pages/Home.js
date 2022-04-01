import React from "react";

import { useFetchMultipleEndPoints } from "../hooks/useFetchMultipleEndPoints";

import { HomeTemplate } from "../components/templates/HomeTemplate";

import {
    newReleasesAdapter,
    featuredPlaylistAdapter,
    manyCategoriesAdapter,
} from "../adapters/index";

export const Home = React.memo(() => {
    const { newReleases, featuredPlaylist, manyCategories } =
        useFetchMultipleEndPoints();

    const itemsNewReleases = newReleasesAdapter(newReleases);
    const itemsFeaturedPlaylist = featuredPlaylistAdapter(featuredPlaylist);
    const itemsManyCategories = manyCategoriesAdapter(manyCategories);

    return (
        <div>
            <HomeTemplate
                itemsNewReleases={itemsNewReleases}
                itemsFeaturedPlaylist={itemsFeaturedPlaylist}
                itemsManyCategories={itemsManyCategories}
            />
        </div>
    );
});
