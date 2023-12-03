// FadeInUp component

import { Variants, motion } from "framer-motion";
import React, { ReactNode } from "react";

interface FadeInUpProps {
  children: ReactNode;
}

const fadeInUpVariant: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
};

export const FadeInUp: React.FC<FadeInUpProps> = ({ children }) => {
  return (
    <motion.div variants={fadeInUpVariant} className="m-0 p-0 ">
      {children}
    </motion.div>
  );
};

// ====================================

const fadeInVariant: Variants = {
  hidden: { opacity: 0,},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
};

export const FadeIn: React.FC<FadeInUpProps> = ({ children }) => {
  return <motion.div variants={fadeInVariant} className="m-0 p-0 ">{children}</motion.div>;
};

// ====================================

const fadeRightVariant: Variants = {
  hidden: { opacity: 0, x:50},
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
};

export const FadeInRight: React.FC<FadeInUpProps> = ({ children }) => {
  return <motion.div variants={fadeRightVariant} className="m-0 p-0 ">{children}</motion.div>;
};

// ====================================

const fadeDownVariant: Variants = {
  hidden: { opacity: 0, y:50},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
};

export const FadeInDown: React.FC<FadeInUpProps> = ({ children }) => {
  return <motion.div variants={fadeDownVariant} className="m-0 p-0 ">{children}</motion.div>;
};

// ====================================

const Rotate: Variants = {
  hidden: { opacity: 0, x: -200, rotate: -180 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    x: 200, // Move in the opposite direction when exiting
    rotate: 180, // Rotate in the opposite direction when exiting
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
};

export const MoveRotate: React.FC<FadeInUpProps> = ({ children }) => {
  return <motion.div variants={Rotate} className="m-0 p-0 ">{children}</motion.div>;
};

// ====================================
