"use client";

/**
 * ProjectCard — editorial work card: image with internal parallax + hover
 * zoom, index number, serif title with italic accent, tag chips, arrow.
 */
import Link from "./Link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Project } from "@/lib/projects";

export function ProjectCard({
  project,
  ratio = "aspect-[4/3]",
  priority = false,
}: {
  project: Project;
  ratio?: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <Link
      ref={ref}
      href={`/work/${project.slug}`}
      className="group block"
      data-cursor-label="VIEW"
      aria-label={`${project.title} — ${project.subtitle}`}
    >
      <div className={`relative overflow-hidden rounded-2xl bg-sand ${ratio}`}>
        <motion.img
          src={project.cover}
          alt={`${project.title} — ${project.subtitle}`}
          style={{ y, scale: 1.18 }}
          loading={priority ? "eager" : "lazy"}
          className="absolute inset-0 h-full w-full object-cover transition-[filter] duration-700 group-hover:brightness-[1.04]"
        />
        {/* hover veil + arrow */}
        <div className="absolute inset-0 bg-gradient-to-t from-umber/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute right-5 top-5 flex size-11 translate-y-2 items-center justify-center rounded-full bg-bone/90 text-ink opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="absolute bottom-5 left-5 rounded-full border border-bone/40 bg-umber/30 px-3 py-1 font-label text-[9px] uppercase tracking-[0.25em] text-bone backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-3xl leading-tight text-ink transition-colors duration-300 group-hover:text-copper md:text-4xl">
            {project.title}
            <span className="ml-2 align-super font-label text-[9px] tracking-[0.2em] text-taupe">
              ({project.year})
            </span>
          </h3>
          <p className="mt-1 max-w-lg text-sm leading-relaxed text-taupe">{project.subtitle}</p>
        </div>
        <span className="hidden shrink-0 font-label text-[10px] tracking-[0.2em] text-taupe md:block">
          {project.index}
        </span>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-ink/12 px-3 py-1 font-label text-[9px] uppercase tracking-[0.18em] text-ink/60 transition-colors group-hover:border-copper/40 group-hover:text-copper"
          >
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}

export default ProjectCard;
