"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
}

function SkillDataProvider({ src, width, height, index }: Props) {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: index * 0.3,
            }
        }
    };
    const animatationDelay = 0.3;
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: index* animatationDelay }}
        >
            <img src={src} width={width} height={height} alt='skill image' />
        </motion.div>
    );
}

export default SkillDataProvider;
