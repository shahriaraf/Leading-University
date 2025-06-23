import { motion } from "framer-motion";

const pageVariants = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
};

const pageTransition = {
    type: "spring",       // more natural spring motion
    stiffness: 70,         // lower = smoother, higher = snappier
    damping: 20,           // higher = smoother stop
    mass: 0.6,
};

const PageWrapper = ({ children }) => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
            className="min-h-screen"
        >
            {children}
        </motion.div>
    );
};

export default PageWrapper;
