"use client";

/**
 * ContainerScroll — integrated from
 * https://21st.dev/@manuarora700/components/container-scroll-animation
 * (Aceternity) Title shrinks as a 3D-tilted container rotates upright on scroll.
 */
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ContainerScroll({
  titleComponent,
  children,
  className = "",
  titleClassName = "",
  frameClassName = "",
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
  /** Optional overrides — defaults preserve the original look. */
  className?: string;
  titleClassName?: string;
  frameClassName?: string;
}) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const scaleDimensions = [1050, 640];
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.05, isMobile ? scaleDimensions[0] / 1050 : 1.08]
  );
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className={`relative flex min-h-[80rem] flex-col items-center justify-center overflow-hidden bg-[#fdfdfc] px-4 py-24 ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(circle, #d4d4d833 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
      ref={container}
    >
      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          style={{ y: translate }}
          className={`text-4xl font-bold tracking-tight text-[#0a0a0a] sm:text-6xl lg:text-7xl ${titleClassName}`}
        >
          {titleComponent}
        </motion.div>
      </div>

      <div className="relative mt-16 w-full">
        <motion.div
          style={{ rotateX: rotate, scale, boxShadow: "0 40px 90px -20px rgba(0,0,0,0.35)" }}
          className={`mx-auto w-full max-w-[66rem] rounded-[2rem] border-4 border-[#6c6c6c] bg-[#1a1a1a] p-2 md:p-6 ${frameClassName}`}
        >
          <div className="overflow-hidden rounded-[1.6rem] bg-[#0f0f12]">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function TitleComponent({
  title,
  highlight,
}: {
  title: string;
  highlight?: string;
}) {
  return (
    <>
      {title}{" "}
      {highlight ? (
        <span className="block bg-gradient-to-b from-[#18181b] to-[#52525b] bg-clip-text text-transparent">
          {highlight}
        </span>
      ) : null}
    </>
  );
}

export default ContainerScroll;
