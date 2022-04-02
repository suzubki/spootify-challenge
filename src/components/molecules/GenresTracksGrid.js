import React from "react";

import { disk } from "../../assets/icons/index";
import { Link } from "react-router-dom";

const ItemGenres = ({ id, description, name, image }) => {
    return (
        <div key={id} className="flex flex-row gap-2 xs:gap-4 lg:my-3 xl:ml-4">
            <img
                className="w-20 cursor-pointer rounded-md object-cover lg:mr-2 xl:mr-2"
                src={image ?? disk}
                alt={name + "-" + description}
            />

            <div className="flex flex-col justify-center">
                <span className="text-md capitalize">{name}</span>
                <span className="text-sm capitalize">{description}</span>
            </div>
        </div>
    );
};

export const GenresTracksGrid = ({ tracks, itemsAdapter }) => {
    return (
        <div className="grid ml-4 gap-4 mt-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tracks?.map((track) => {
                const { id, description, name, image } = itemsAdapter(track);

                return (
                    <Link to={`/playlist/${id}`} key={id}>
                        <ItemGenres
                            description={description}
                            name={name}
                            image={image}
                        />
                    </Link>
                );
            })}
        </div>
    );
};
