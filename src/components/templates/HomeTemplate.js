import React from "react";
import { SectionCard } from "../organisms/SectionCard";

export const HomeTemplate = ({
    itemsNewReleases,
    itemsFeaturedPlaylist,
    itemsManyCategories,
}) => {
    return (
        <div className="App min-h-screen font-Arimo mb-24">
            {itemsNewReleases && (
                <SectionCard
                    name="newReleases"
                    data={itemsNewReleases}
                    title="Released this week"
                    section="albums"
                />
            )}
            {itemsFeaturedPlaylist && (
                <SectionCard
                    name="featuredPlaylist"
                    data={itemsFeaturedPlaylist}
                    title="Featured Playlist"
                    section="playlist"
                />
            )}
            {itemsManyCategories && (
                <SectionCard
                    name="featuredPlaylist"
                    data={itemsManyCategories}
                    title="Browser Genres"
                    section="genres"
                />
            )}
        </div>
    );
};
