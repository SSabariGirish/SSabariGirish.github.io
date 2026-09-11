import { motion } from "framer-motion";

/**
 * Fade-up scroll reveal. Wrap any block of content in <Reveal> to animate
 * it into view once when it crosses the viewport threshold.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.6,
  className = "",
  once = true,
  amount = 0.2,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
