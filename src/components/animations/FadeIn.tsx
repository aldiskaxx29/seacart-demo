import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y:0, animationDuration:"500ms" }}
      transition={{type:"tween", duration:1}}
          exit={{ opacity: 0 }}>
      {children}
    </motion.div>
  );
};

export default FadeIn;
