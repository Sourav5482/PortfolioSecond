import { motion } from "framer-motion";

const ThnPage = () => {
    const text = "Thanks For visiting my Portfolio";
    const letters = Array.from(text);

    return (
        <section className="bg-black h-screen w-screen text-amber-50 flex items-center justify-center overflow-hidden px-6">
            <div className="flex flex-col items-center">
                <div
                    aria-label={text}
                    className="text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight"
                >
                    {letters.map((char, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.6 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 24, delay: i * 0.03 }}
                            className="inline-block align-top"
                        >
                            <motion.span
                                animate={{ y: [0, -4, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.06 }}
                                className="inline-block"
                                style={{ willChange: 'transform' }}
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </motion.span>
                        </motion.span>
                    ))}
                </div>

                <motion.svg
                    viewBox="0 0 100 2"
                    width="70%"
                    height="8"
                    className="mt-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.6 }}
                >
                    <motion.line
                        x1="0"
                        y1="1"
                        x2="100"
                        y2="1"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                        vectorEffect="non-scaling-stroke"
                    />
                </motion.svg>
            </div>
        </section>
    );
};
export default ThnPage;