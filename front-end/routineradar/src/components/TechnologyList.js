import React, { useEffect, useState } from "react";
import { getTechnologies } from "../services/api";

const TechnologyList = () => {
    const [technologies, setTechnologies ] = useState([]);

    useEffect(() => {
        getTechnologies().then(setTechnologies);
    }, []);


    return(
        <div>
            <h2>Technologies</h2>
            <ul>
                {technologies.map((tech) => (
                    <li key={tech.id}>{tech.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default TechnologyList;