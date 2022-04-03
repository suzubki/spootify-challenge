import React from "react";

export const About = ({ name, type, description, amount, image }) => {
    const nameAmount = amount <= 100 ? "Popularity" : "Followers";

    return (
        <div className="flex flex-col gap-4 sm:flex-row items-center justify-center py-4 bg-gradient-to-r from-slate-900 to-slate-800">
            <div className="w-3/4 xs:w-2/3 sm:w-1/4 xl:w-1/4 leading-3">
                <h1 className="text-slate-200 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ">
                    {name}
                </h1>
                <span className="capitalize text-slate-700 text-xs sm:text-xs lg:text-xs xl:text-sm">
                    {type}
                </span>
                <br />
                <span className="text-slate-500 text-sm md:text-base lg:text-lg xl:text-lg">
                    {description}
                </span>
                <br />
                <span className="text-sm text-slate-600">
                    {nameAmount} : {amount}
                </span>
            </div>
            <div className="w-3/4 xs:w-72 sm:w-64 md:w-80">
                <img
                    className="w-full rounded-lg"
                    src={image}
                    alt={name + description}
                />
            </div>
        </div>
    );
};
