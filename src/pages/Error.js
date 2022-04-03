import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
    return (
        <div className="text-center">
            <span className="text-2xl font-bold">
                Route not found, please go to{" "}
                <Link className=" underline text-blue-500" to="/home">
                    Home
                </Link>
            </span>
        </div>
    );
};
