"use client";

import { useState, useEffect } from "react";
import { Expand } from "../icons"; // Keep Expand from your icons module
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import from lucide-react
import { Button } from "./ui/Button";
import { useMobile } from "@/hooks/useMobile";

// Gallery data with more images for a model portfolio
const galleryItems = [
  {
    id: 1,
    category: "Editorial",
    image: "/images/second.jpg", // Updated path
    height: 600,
  },
  {
    id: 2,
    category: "Editorial",
    image: "/images/third.jpg", // Updated path
    height: 700,
  },
  {
    id: 3,
    category: "Runway",
    image: "/images/fourth.jpg", // Updated path,
    height: 800,
  },
  {
    id: 4,
    category: "Editorial",
    image: "/images/fifth.jpg",
    height: 650,
  },
  {
    id: 5,
    category: "Fashion",
    image: "/images/fiftha.jpg",
    height: 750,
  },
  {
    id: 6,
    category: "Editorial",
    image: "/images/sixth.jpg",
    height: 800,
  },
  {
    id: 7,
    category: "Commercial",
    image: "/images/seventh.jpg",
    height: 650,
  },
  {
    id: 8,
    category: "Editorial",
    image: "/images/seventha.jpg",
    height: 700,
  },
  {
    id: 9,
    category: "Fashion",
    image: "/images/ninth.jpg",
    height: 800,
  },
  {
    id: 10,
    category: "Runway",
    image: "/images/nintha.jpg",
    height: 650,
  },
  {
    id: 11,
    category: "Editorial",
    image: "/images/tenth.jpg",
    height: 750,
  },
  {
    id: 12,
    category: "Editorial",
    image: "/images/tentha.jpg",
    height: 600,
  },
  {
    id: 13,
    category: "Portrait",
    image: "/images/eleven.jpg",
    height: 650,
  },
  {
    id: 14,
    category: "Fashion",
    image: "/images/twelve.jpg",
    height: 700,
  },
  {
    id: 15,
    category: "Fashion",
    image: "/images/twelvea.jpg",
    height: 700,
  },
  {
    id: 16,
    category: "Fashion",
    image: "/images/thirteen.jpg",
    height: 600,
  },
  {
    id: 17,
    category: "Fashion",
    image: "/images/fourteen.jpg",
    height: 600,
  },
  {
    id: 18,
    category: "Fashion",
    image: "/images/eighth.jpg",
    height: 600,
  },
  {
    id: 19,
    category: "Fashion",
    image: "/images/last.jpg",
    height: 600,
  },

  {
    id: 20,
    category: "Polaroid",
    image: "/images/pa.jpg",
    height: 600,
  },
  {
    id: 21,
    category: "Polaroid",
    image: "/images/pb.jpg",
    height: 600,
  },

  {
    id: 22,
    category: "Polaroid",
    image: "/images/po1.jpg",
    height: 600,
  },
  {
    id: 23,
    category: "Polaroid",
    image: "/images/po2.jpg",
    height: 600,
  },
  {
    id: 24,
    category: "Polaroid",
    image: "/images/po3.jpg",
    height: 600,
  },
  {
    id: 25,
    category: "Polaroid",
    image: "/images/po4.jpg",
    height: 600,
  },
  {
    id: 26,
    category: "Polaroid",
    image: "/images/po5.jpg",
    height: 600,
  },
  {
    id: 27,
    category: "Polaroid",
    image: "/images/po6.jpg",
    height: 600,
  },
  {
    id: 28,
    category: "Polaroid",
    image: "/images/po9.jpg",
    height: 600,
  },
  {
    id: 29,
    category: "Polaroid",
    image: "/images/po8.jpg",
    height: 600,
  },
  {
    id: 30,
    category: "Polaroid",
    image: "/images/p10.jpg",
    height: 600,
  },
  {
    id: 31,
    category: "Polaroid",
    image: "/images/p11.jpg",
    height: 600,
  },
  {
    id: 32,
    category: "Polaroid",
    image: "/images/p12.jpg",
    height: 600,
  },
  {
    id: 33,
    category: "Polaroid",
    image: "/images/p13.jpg",
    height: 600,
  },
  {
    id: 34,
    category: "Polaroid",
    image: "/images/p14.jpg",
    height: 600,
  },
  {
    id: 35,
    category: "Polaroid",
    image: "/images/p15.jpg",
    height: 600,
  },
  {
    id: 36,
    category: "Polaroid",
    image: "/images/p16.jpg",
    height: 600,
  },
  {
    id: 37,
    category: "Polaroid",
    image: "/images/p17.jpg",
    height: 600,
  },
  {
    id: 38,
    category: "Polaroid",
    image: "/images/p18.jpg",
    height: 600,
  },
  {
    id: 39,
    category: "Polaroid",
    image: "/images/p19.jpg",
    height: 600,
  },
  {
    id: 40,
    category: "Polaroid",
    image: "/images/p-20.jpg",
    height: 600,
  },
  {
    id: 41,
    category: "Polaroid",
    image: "/images/p21.jpg",
    height: 600,
  },
  {
    id: 42,
    category: "Polaroid",
    image: "/images/p22.jpg",
    height: 600,
  },
  {
    id: 43,
    category: "Polaroid",
    image: "/images/p23.jpg",
    height: 600,
  },
  // {
  //   id: 44,
  //   category: "Polaroid",
  //   image: "/images/p24.jpg",
  //   height: 600,
  // },
];

export default function ModelGallery() {
  const [columns, setColumns] = useState(3);
  const [selectedCategory, setSelectedCategory] = useState("Work");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isMobile = useMobile();

  const categories = ["Work", "Polaroids"];

  const filteredItems =
    selectedCategory === "Work"
      ? galleryItems.filter((item) => item.category !== "Polaroid")
      : galleryItems.filter((item) => item.category === "Polaroid");

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

  const getItemsInColumns = () => {
    const itemsInColumns = Array.from({ length: columns }, () => []);
    filteredItems.forEach((item, index) => {
      itemsInColumns[index % columns].push(item);
    });
    return itemsInColumns;
  };

  const openLightbox = (image) => {
    const index = filteredItems.findIndex((item) => item.image === image);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? filteredItems.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === filteredItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className="text-sm"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {getItemsInColumns().map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-8">
            {column.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-md cursor-pointer"
                onClick={() => openLightbox(item.image)}
              >
                <div
                  className="relative"
                  style={{ height: isMobile ? "auto" : `${item.height}px` }}
                >
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={`Model portfolio - ${item.category}`}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="outline"
                      className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                    >
                      <Expand className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-8"
          onClick={closeLightbox}
        >
          {/* Close Button at Top-Right Corner of Page */}
          <Button
            variant="outline"
            className="fixed top-4 right-4 bg-black/50 text-white border-white/20 hover:bg-black/70 z-50"
            onClick={closeLightbox}
          >
            Close
          </Button>

          {/* Previous Button at Extreme Left */}
          <Button
            variant="outline"
            className="fixed left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white border-white/20 hover:bg-black/70 z-50"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {/* Image */}
          <div className="relative max-w-5xl max-h-[90vh]">
            <img
              src={filteredItems[currentImageIndex].image || "/placeholder.svg"}
              alt="Enlarged portfolio image"
              className="object-contain max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Next Button at Extreme Right */}
          <Button
            variant="outline"
            className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white border-white/20 hover:bg-black/70 z-50"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      )}
    </>
  );
}
