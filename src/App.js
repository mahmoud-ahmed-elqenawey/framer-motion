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
            <motion.div
                className="box"
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1,
                }}
            />
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="hi"
            >
                Hi !
            </motion.h1>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                button
            </motion.button>
            <motion.span
                className="span"
                animate={{
                    scale: [1, 1.3, 1.6, 1.3, 1],
                    rotate: [0, 180, 360, 180, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                Span
            </motion.span>
        </div>
    );
}

export default App;
