import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";
import "./App.css";

function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div className="App">
            <motion.div className="progress-bar" style={{ scaleX }} />
        </div>
    );
}

export default App;
