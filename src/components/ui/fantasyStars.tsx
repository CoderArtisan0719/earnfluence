"use client";

import React, {
    useEffect,
    useState,
    createContext,
} from "react";
import {
    IconArrowNarrowLeft,
    IconArrowNarrowRight,
    IconStarFilled,
    IconBolt,
    IconChevronLeft,
    IconChevronRight,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";

interface CarouselProps {
    items: JSX.Element[];
    initialScroll?: number;
}

type Card = {
    src: string;
    title: string;
    category: string;
};

export const CarouselContext = createContext<{
    onCardClose: (index: number) => void;
    currentIndex: number;
}>({
    onCardClose: () => { },
    currentIndex: 0,
});

const fantasyStars = () => {
    const initialScroll = 0
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} layout={true} />
    ));

    const carouselRef = React.useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = initialScroll;
            checkScrollability();
        }
    }, [initialScroll]);

    const checkScrollability = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollLeft = () => {
        if (carouselRef.current) {
            const clientWidth = carouselRef.current.clientWidth;
            carouselRef.current.scrollBy({ left: -clientWidth, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            const clientWidth = carouselRef.current.clientWidth;
            carouselRef.current.scrollBy({ left: clientWidth, behavior: "smooth" });
        }
    };

    const handleCardClose = (index: number) => {
        if (carouselRef.current) {
            const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
            const gap = isMobile() ? 4 : 8;
            const scrollPosition = (cardWidth + gap) * (index + 1);
            carouselRef.current.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            });
            setCurrentIndex(index);
        }
    };

    const isMobile = () => {
        return window && window.innerWidth < 768;
    };

    return (
        <div className="w-full h-full py-16">
            <CarouselContext.Provider
                value={{ onCardClose: handleCardClose, currentIndex }}
            >
                <div className="relative w-full">
                    <div className="flex justify-between items-center gap-2 mr-10">
                        <h2 className="text-xl font-bold">Today's top 10</h2>
                        <div className="flex gap-2">
                            <button
                                className="relative z-40 h-10 w-10 rounded-full bg-black flex items-center justify-center border border-white hover:bg-gray-700"
                                onClick={scrollLeft}
                                disabled={!canScrollLeft}
                            >
                                <IconChevronLeft className={`h-6 w-6 ${!canScrollLeft ? 'text-gray-500' : 'text-gray-50'}`} />
                            </button>
                            <button
                                className="relative z-40 h-10 w-10 rounded-full bg-black flex items-center justify-center border border-white hover:bg-gray-700"
                                onClick={scrollRight}
                                disabled={!canScrollRight}
                            >
                                <IconChevronRight className={`h-6 w-6 ${!canScrollRight ? 'text-gray-500' : 'text-gray-50'}`} />
                            </button>
                        </div>
                    </div>

                    <div
                        className="flex w-full overflow-x-scroll overscroll-x-auto py-5 scroll-smooth [scrollbar-width:none]"
                        ref={carouselRef}
                        onScroll={checkScrollability}
                    >
                        <div
                            className={cn(
                                "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
                            )}
                        ></div>

                        <div
                            className={cn(
                                "flex flex-row justify-start gap-8 pl-4",
                                "mx-auto" // remove max-w-4xl if you want the carousel to span the full width of its container
                            )}
                        >
                            {cards.map((item, index) => (
                                <div className="flex flex-col">
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            y: 20,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                duration: 0.5,
                                                delay: 0.2 * index,
                                                ease: "easeOut",
                                                once: true,
                                            },
                                        }}
                                        key={"card" + index}
                                        className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl"
                                    >
                                        {item}
                                    </motion.div>
                                    <div className="flex flex-col gap-1 mt-2">
                                        <p className="text-sm font-medium">James Buckley</p>
                                        <p className="text-sm text-gray-400">Actor - The Inbetweeners</p>
                                        <div className="flex items-center">
                                            <IconStarFilled size={12} color="yellow" />
                                            <span className="font-medium text-sm px-1">5.00</span>
                                            <span className="text-sm text-gray-400 mr-2">(10233)</span>
                                            <IconBolt size={12} color="yellow" />
                                            <span className="font-medium text-sm px-1">24hr</span>
                                        </div>
                                        <p className="font-medium text-sm px-1">$50</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </CarouselContext.Provider>
        </div>
    );
};

export default fantasyStars;

const data = [
    {
        category: "Artificial Intelligence",
        title: "Former NFL Head Coash - Commentator.",
        src: "https://cdn.cameo.com/resizer/5669047e-fef4-4461-a10f-a09781679faf.png",
        name: "Jon Gruden",
        rate: 150,
        score: 5,
        follow: 674
    },
    {
        category: "Artificial Intelligence",
        title: "Former NFL Head Coash - Commentator.",
        src: "https://cdn.cameo.com/resizer/5669047e-fef4-4461-a10f-a09781679faf.png",
        name: "Jon Gruden",
        rate: 150,
        score: 5,
        follow: 674
    },
    {
        category: "Artificial Intelligence",
        title: "Former NFL Head Coash - Commentator.",
        src: "https://cdn.cameo.com/resizer/5669047e-fef4-4461-a10f-a09781679faf.png",
        name: "Jon Gruden",
        rate: 150,
        score: 5,
        follow: 674
    },
    {
        category: "Artificial Intelligence",
        title: "Former NFL Head Coash - Commentator.",
        src: "https://cdn.cameo.com/resizer/5669047e-fef4-4461-a10f-a09781679faf.png",
        name: "Jon Gruden",
        rate: 150,
        score: 5,
        follow: 674
    },
    {
        category: "Artificial Intelligence",
        title: "Former NFL Head Coash - Commentator.",
        src: "https://cdn.cameo.com/resizer/5669047e-fef4-4461-a10f-a09781679faf.png",
        name: "Jon Gruden",
        rate: 150,
        score: 5,
        follow: 674
    },
    {
        category: "Artificial Intelligence",
        title: "Former NFL Head Coash - Commentator.",
        src: "https://cdn.cameo.com/resizer/5669047e-fef4-4461-a10f-a09781679faf.png",
        name: "Jon Gruden",
        rate: 150,
        score: 5,
        follow: 674
    },
    {
        category: "Artificial Intelligence",
        title: "Former NFL Head Coash - Commentator.",
        src: "https://cdn.cameo.com/resizer/5669047e-fef4-4461-a10f-a09781679faf.png",
        name: "Jon Gruden",
        rate: 150,
        score: 5,
        follow: 674
    },
];


export const Card = ({
    card,
    layout = false,
}: {
    card: Card;
    index: number;
    layout?: boolean;
}) => {
    return (
        <>
            <motion.button
                layoutId={layout ? `card-${card.title}` : undefined}
                className="rounded-xl bg-gray-100 dark:bg-neutral-900 h-64 w-52 overflow-hidden flex flex-col items-start justify-start relative z-10"
            >
                <BlurImage
                    src={card.src}
                    alt={card.title}
                    fill
                    className="object-cover absolute z-10 inset-0"
                />
            </motion.button>
        </>
    );
};

export const BlurImage = ({
    height,
    width,
    src,
    className,
    alt,
    ...rest
}: ImageProps) => {
    const [isLoading, setLoading] = useState(true);
    return (
        <Image
            className={cn(
                "transition duration-300",
                isLoading ? "blur-sm" : "blur-0",
                className
            )}
            onLoad={() => setLoading(false)}
            src={src}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            blurDataURL={typeof src === "string" ? src : undefined}
            alt={alt ? alt : "Background of a beautiful view"}
            {...rest}
        />
    );
};
