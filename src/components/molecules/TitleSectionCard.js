import React from "react";

import { next, previous } from "../../assets/icons";

export const TitleSectionCard = ({ title }) => {
    return (
        <div className="flex items-center">
            <span className="text-lg font-bold text-slate-600 mx-2">
                {title}
            </span>
            <span className="h-[2px] flex-1 bg-slate-300" />
            <div className="flex mx-2 ">
                <img
                    src={previous}
                    className="hover:bg-sky-700 rounded-xl "
                    alt={"Previous item"}
                />
                <img
                    src={next}
                    className="hover:bg-sky-700 rounded-xl "
                    alt={"Next item"}
                />
            </div>
        </div>
    );
};
