import React from "react";
import { Link } from "react-router-dom";

export const Welcome = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <span className="text-sky-200 font-bold text-3xl lg:text-5xl">
                Welcome to Spootify
            </span>
            <Link to="/home">
                <button className="mt-8 text-base lg:text-xl text-sky-200 bg-slate-700 py-2 px-6 rounded-lg">
                    Start
                </button>
            </Link>
        </div>
    );
};
