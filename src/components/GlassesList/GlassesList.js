import React, { useState, useEffect } from "react";
import dataGlasses from "./dataGlasses.json";
import v1 from "./glassesImage/v1.png";
import v2 from "./glassesImage/v2.png";
import v3 from "./glassesImage/v3.png";
import v4 from "./glassesImage/v4.png";
import v5 from "./glassesImage/v5.png";
import v6 from "./glassesImage/v6.png";
import v7 from "./glassesImage/v7.png";
import v8 from "./glassesImage/v8.png";
import v9 from "./glassesImage/v9.png";

const images = {
    1: v1,
    2: v2,
    3: v3,
    4: v4,
    5: v5,
    6: v6,
    7: v7,
    8: v8,
    9: v9,
};

function GlassesList() {
    const [glasses, setGlasses] = useState([]);

    useEffect(() => {
        setGlasses(dataGlasses);
    }, []);

    return (
        <div className="glasses-list">
            {glasses.map((item) => (
                <div key={item.id} className="glasses-item">
                    <img src={images[item.id]} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>Giá: ${item.price}</p>
                    <p>{item.desc}</p>
                </div>
            ))}
        </div>
    );
}

export default GlassesList;
