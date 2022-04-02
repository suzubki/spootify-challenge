import React from "react";

export const Card = ({ name, image, handleClick }) => {
    return (
        <li
            className="cursor-pointer snap-center flex flex-col items-center w-screen xs:w-[45vw] sm:w-36 md:w-40 lg:w-44 xl:w-48"
            key={name}
            onClick={handleClick}
        >
            <img
                src={image}
                className="object-cover w-56 sm:w-full"
                alt={name && "Image card spootify"}
            />
            <span className="text-center my-1 p-1 text-xs font-bold sm:p-0 sm:text-sm leading-4">
                {name}
            </span>
        </li>
    );
};
