import React, { useEffect, useRef, useState } from "react";
import "../node_modules/flag-icons-svg/css/flag-icons.css";
import { motion as m, useInView } from "framer-motion";

const Forecast = ({ response }) => {
    const country = response.country.toLowerCase();
    let delay = 0.1;

    // arrumar: não esta fazendo nada
    const ref = useRef();
    const isInView = useInView(ref);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        setVisible(false);
    }, [isInView]);

    return response.items.map((e) => {
        if (delay < 0.5) delay += 0.1;
        const countryClasses = "forecast flag-icon flag-icon-" + country;
        return (
            <m.span
                initial={{ opacity: 0, x: "-50%" }}
                whileInView={{ opacity: 1, x: "0%" }}
                transition={{
                    duration: 1.25,
                    ease: "easeOut",
                    delay: delay,
                    type: "spring",
                    damping: 8,
                }}
                viewport={{ once: true }}
                key={e.date}
                className={countryClasses}
            >
                <p>{e.date}</p>
                <p>
                    High: {e.temperaturaMax} {"\u2103"}
                </p>
                <p>
                    Low: {e.temperaturaMin} {"\u2103"}
                </p>
            </m.span>
        );
    });
};

export default Forecast;
