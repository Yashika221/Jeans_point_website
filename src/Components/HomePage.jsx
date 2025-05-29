import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import Items from "../pages/Items";
import Contact from "../pages/Contact";
import Footer from "./Footer";

function HomePage() {
    const navigate = useNavigate();
    const sectionRefs = useRef([]);
    const [autoScroll, setAutoScroll] = useState(true);
    const intervalRef = useRef(null);

    useEffect(() => {
        let index = 0;
        if (autoScroll) {
            intervalRef.current = setInterval(() => {
                if (sectionRefs.current[index]) {
                    sectionRefs.current[index].scrollIntoView({ behavior: "smooth" });
                    index = (index + 1) % sectionRefs.current.length;
                }
            }, 4000);
        }
        return () => clearInterval(intervalRef.current);
    }, [autoScroll]);

    return (
        <div>
            {/* Home Section */}
            <div ref={(el) => (sectionRefs.current[0] = el)}>
                <Home />
            </div>

            {/* Clickable Items Section */}
            <div
                ref={(el) => (sectionRefs.current[1] = el)}
                onClick={() => navigate("/items")}
                style={{ cursor: "pointer" }}
            >
                <Items />
            </div>

            {/* Clickable Contact Section */}
            <div
                ref={(el) => (sectionRefs.current[2] = el)}
                onClick={() => navigate("/contact")}
                style={{ cursor: "pointer" }}
            >
                <Contact />
            </div>

            {/* Footer – not navigable */}
            <div ref={(el) => (sectionRefs.current[3] = el)}>
                <Footer />
            </div>
        </div>
    );
}

export default HomePage;
