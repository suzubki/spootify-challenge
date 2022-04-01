import React from "react";
import { Card } from "../atoms/Card";

import { Link } from "react-router-dom";

export const SectionCardGroups = React.memo(({ data, section }) => {
    return (
        <div className="  xs:px-[3vw] sm:px-5 mt-2">
            <ul className="overflow-x-auto grid grid-flow-col auto-cols-auto xs:gap-[4vw] sm:gap-4 overscroll-x-auto snap-mandatory snap-x">
                {data &&
                    data.map(({ id, name, image }) => (
                        <Link to={`/${section}/${id}`} key={id}>
                            <Card name={name} image={image} />
                        </Link>
                    ))}
            </ul>
        </div>
    );
});
