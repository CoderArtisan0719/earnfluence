"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/round-cards-carousel";

const RoundCardCarousel = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-16">
      <Carousel items={cards} />
    </div>
  );
};

export default RoundCardCarousel;

const data = [
  {
    category: "TV",
    title: "You can do more with AI.",
    src: "https://cdn.cameo.com/resizer/UBhJuUnXc_P7x2KzmoD.jpg",
  },
  {
    category: "Comic-Con",
    title: "You can do more with AI.",
    src: "https://cdn.cameo.com/resizer/r6Jb0T6dy_Headshot.jpg",
  },
  {
    category: "Movies",
    title: "You can do more with AI.",
    src: "https://cdn.cameo.com/resizer/4nEUBFeVG_avatar--HPX4iUtK.jpg",
  },
  {
    category: "Voice Actors",
    title: "You can do more with AI.",
    src: "https://cdn.cameo.com/resizer/2qIMf-0ER_avatar-ku1TybSW3.jpg",
  },
  {
    category: "TV",
    title: "You can do more with AI.",
    src: "https://cdn.cameo.com/resizer/UBhJuUnXc_P7x2KzmoD.jpg",
  },
  {
    category: "Comic-Con",
    title: "You can do more with AI.",
    src: "https://cdn.cameo.com/resizer/r6Jb0T6dy_Headshot.jpg",
  },
  {
    category: "Movies",
    title: "You can do more with AI.",
    src: "https://cdn.cameo.com/resizer/4nEUBFeVG_avatar--HPX4iUtK.jpg",
  },
  {
    category: "Voice Actors",
    title: "You can do more with AI.",
    src: "https://cdn.cameo.com/resizer/2qIMf-0ER_avatar-ku1TybSW3.jpg",
  },
  {
    category: "TV",
    title: "You can do more with AI.",
    src: "https://cdn.cameo.com/resizer/UBhJuUnXc_P7x2KzmoD.jpg",
  },
  {
    category: "Comic-Con",
    title: "You can do more with AI.",
    src: "https://cdn.cameo.com/resizer/r6Jb0T6dy_Headshot.jpg",
  },
  {
    category: "Movies",
    title: "You can do more with AI.",
    src: "https://cdn.cameo.com/resizer/4nEUBFeVG_avatar--HPX4iUtK.jpg",
  },
  {
    category: "Voice Actors",
    title: "You can do more with AI.",
    src: "https://cdn.cameo.com/resizer/2qIMf-0ER_avatar-ku1TybSW3.jpg",
  },
  {
    category: "TV",
    title: "You can do more with AI.",
    src: "https://cdn.cameo.com/resizer/UBhJuUnXc_P7x2KzmoD.jpg",
  },
  {
    category: "Comic-Con",
    title: "You can do more with AI.",
    src: "https://cdn.cameo.com/resizer/r6Jb0T6dy_Headshot.jpg",
  },
  {
    category: "Movies",
    title: "You can do more with AI.",
    src: "https://cdn.cameo.com/resizer/4nEUBFeVG_avatar--HPX4iUtK.jpg",
  },
  {
    category: "Voice Actors",
    title: "You can do more with AI.",
    src: "https://cdn.cameo.com/resizer/2qIMf-0ER_avatar-ku1TybSW3.jpg",
  },
  {
    category: "TV",
    title: "You can do more with AI.",
    src: "https://cdn.cameo.com/resizer/UBhJuUnXc_P7x2KzmoD.jpg",
  },
  {
    category: "Comic-Con",
    title: "You can do more with AI.",
    src: "https://cdn.cameo.com/resizer/r6Jb0T6dy_Headshot.jpg",
  },
  {
    category: "Movies",
    title: "You can do more with AI.",
    src: "https://cdn.cameo.com/resizer/4nEUBFeVG_avatar--HPX4iUtK.jpg",
  },
  {
    category: "Voice Actors",
    title: "You can do more with AI.",
    src: "https://cdn.cameo.com/resizer/2qIMf-0ER_avatar-ku1TybSW3.jpg",
  },
  {
    category: "TV",
    title: "You can do more with AI.",
    src: "https://cdn.cameo.com/resizer/UBhJuUnXc_P7x2KzmoD.jpg",
  },
  {
    category: "Comic-Con",
    title: "You can do more with AI.",
    src: "https://cdn.cameo.com/resizer/r6Jb0T6dy_Headshot.jpg",
  },
  {
    category: "Movies",
    title: "You can do more with AI.",
    src: "https://cdn.cameo.com/resizer/4nEUBFeVG_avatar--HPX4iUtK.jpg",
  },
  {
    category: "Voice Actors",
    title: "You can do more with AI.",
    src: "https://cdn.cameo.com/resizer/2qIMf-0ER_avatar-ku1TybSW3.jpg",
  },
  {
    category: "Movies",
    title: "You can do more with AI.",
    src: "https://cdn.cameo.com/resizer/4nEUBFeVG_avatar--HPX4iUtK.jpg",
  },
  {
    category: "Voice Actors",
    title: "You can do more with AI.",
    src: "https://cdn.cameo.com/resizer/2qIMf-0ER_avatar-ku1TybSW3.jpg",
  },
];
