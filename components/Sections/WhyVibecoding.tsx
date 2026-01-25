import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export const WhyVibecoding: React.FC = () => {
    return (
        <section id="why-vibecoding" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-0">
            <motion.div
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-2xl"
            >
                <div className="flex items-center gap-3 mb-8 sm:mb-10 text-secondary/70">
                    <Zap size={12} className="sm:hidden" />
                    <Zap size={14} className="hidden sm:block" />
                    <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase">
                        04 / Why Vibecoding
                    </span>
                </div>

                <div className="space-y-6 sm:space-y-8 text-secondary font-light leading-relaxed">
                    <p className="text-sm sm:text-base">
                        Vibecoding allows me to move from intent to execution faster than traditional full-stack workflows.
                    </p>

                    <p className="text-sm sm:text-base">
                        By steering models instead of writing everything from scratch, I can design, build, and ship interactive products in days that would typically take weeks — without sacrificing interaction quality or taste.
                    </p>

                    <div className="pt-4 sm:pt-6 border-t border-white/5">
                        <p className="text-white/90 text-sm sm:text-base">
                            Speed is not about cutting corners.
                        </p>
                        <p className="text-white/90 text-sm sm:text-base">
                            It's about reducing friction.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
