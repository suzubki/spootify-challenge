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
            <div className="text-center p-6 lg:p-16">
                <span className="text-sky-200 font-bold text-3xl lg:text-5xl">
                    Spootify{" "}
                </span>
            </div>
            <HomeTemplate
                itemsNewReleases={itemsNewReleases}
                itemsFeaturedPlaylist={itemsFeaturedPlaylist}
                itemsManyCategories={itemsManyCategories}
            />
        </div>
    );
});
