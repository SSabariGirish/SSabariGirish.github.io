import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Wraps a button/link and gives it a subtle magnetic pull toward the
 * cursor on desktop. No-ops gracefully on touch devices.
 */
export default function Magnetic({ as: Tag = "button", className = "", children, strength = 0.35, ...props }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const MotionTag = motion(Tag);

  return (
    <MotionTag
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.96 }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
