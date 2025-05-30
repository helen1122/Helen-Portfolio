"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";

// Project data
const projects = [
  {
    id: 1,
    title: "E-commerce Redesign",
    description:
      "A complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Next.js", "Tailwind CSS"],
    link: "#",
    height: 500,
  },
  {
    id: 2,
    title: "Finance Dashboard",
    description:
      "An interactive dashboard for financial data visualization with real-time updates.",
    image: "/placeholder.svg?height=800&width=600",
    tags: ["TypeScript", "D3.js", "Firebase"],
    link: "#",
    height: 650,
  },
  {
    id: 3,
    title: "Travel App",
    description:
      "A mobile-first travel application with itinerary planning and location-based recommendations.",
    image: "/placeholder.svg?height=500&width=800",
    tags: ["React Native", "GraphQL", "Node.js"],
    link: "#",
    height: 400,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A minimalist portfolio website for a photographer showcasing their work in an elegant grid layout.",
    image: "/placeholder.svg?height=700&width=500",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
    height: 580,
  },
  {
    id: 5,
    title: "Health & Fitness Tracker",
    description:
      "A comprehensive health and fitness tracking application with data visualization and goal setting.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Vue.js", "Chart.js", "Express"],
    link: "#",
    height: 500,
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description:
      "An all-in-one dashboard for managing multiple social media accounts and analyzing performance.",
    image: "/placeholder.svg?height=800&width=600",
    tags: ["React", "Redux", "Node.js"],
    link: "#",
    height: 620,
  },
];

export default function MasonryGrid() {
  const [columns, setColumns] = useState(3);
  const isMobile = useMobile();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Distribute projects into columns
  const getProjectsInColumns = () => {
    const projectsInColumns = Array.from({ length: columns }, () => []);

    projects.forEach((project, index) => {
      projectsInColumns[index % columns].push(project);
    });

    return projectsInColumns;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {getProjectsInColumns().map((column, columnIndex) => (
        <div key={columnIndex} className="flex flex-col gap-6">
          {column.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 transition-all hover:shadow-lg"
            >
              <div
                className="relative"
                style={{ height: isMobile ? "auto" : `${project.height}px` }}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill={!isMobile}
                  width={isMobile ? 800 : undefined}
                  height={isMobile ? 500 : undefined}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-white/80 mt-2 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-white/20 text-white px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="mt-4 bg-white/10 text-white border-white/20 hover:bg-white/20 w-fit"
                  >
                    View Project
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="p-4 sm:p-6 bg-white">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-600 mt-2 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
