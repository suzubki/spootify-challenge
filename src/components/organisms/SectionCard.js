import React from "react";

import { SectionCardGroups } from "../molecules/SectionCardGroups";
import { TitleSectionCard } from "../molecules/TitleSectionCard";

export const SectionCard = ({ title, data, section }) => {
    return (
        <div className="mt-4 pl-2 py-2 hover:bg-slate-800 ">
            <TitleSectionCard title={title} />
            <SectionCardGroups data={data} section={section} />
        </div>
    );
};
