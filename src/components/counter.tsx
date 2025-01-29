"use client"

import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

export default function Counter() {
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, 200, { duration: 4 })
        return () => controls.stop()
    }, [])

    return <motion.pre style={text}>{rounded}</motion.pre>
}

/**
 * ==============   Styles   ================
 */

const text = {
    fontSize: 64,
    color: "#4ff0b7",
}
