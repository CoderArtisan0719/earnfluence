"use client";

import React, {
	useEffect,
	useState,
	createContext,
	useRef,
} from "react";
import { useParams } from "next/navigation";

import {
	IconChevronLeft,
	IconChevronRight,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Card = {
	src: string;
	title: string;
};

export const CarouselContext = createContext<{
	onCardClose: (index: number) => void;
	currentIndex: number;
}>({
	onCardClose: () => { },
	currentIndex: 0,
});

const VideoCarousel = () => {
	const initialScroll = 0
	const cards = data.map((card, index) => (
		<Card index={index} key={card.src} card={card} />
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
		<div className="w-full h-full py-2 group">
			<CarouselContext.Provider
				value={{ onCardClose: handleCardClose, currentIndex }}
			>
				<div className="relative w-full">
					<div className="absolute top-[40%] w-full flex items-center justify-between px-[0px] opacity-0 transition-all duration-700 group-hover:opacity-100">
						<button
							className="relative z-[200] h-10 w-10 rounded-full bg-black flex items-center justify-center border scale-[0.7]"
							onClick={scrollLeft}
							disabled={!canScrollLeft}
						>
							<IconChevronLeft className={`h-6 w-6 ${!canScrollLeft ? 'text-gray-500' : 'text-gray-50'}`} />
						</button>
						<button
							className="relative z-[200] h-10 w-10 rounded-full bg-black flex items-center justify-center border scale-[0.7]"
							onClick={scrollRight}
							disabled={!canScrollRight}
						>
							<IconChevronRight className={`h-6 w-6 ${!canScrollRight ? 'text-gray-500' : 'text-gray-50'}`} />
						</button>
					</div>
					<div
						className="flex w-full overflow-x-scroll overscroll-x-auto py-5 scroll-smooth [scrollbar-width:none] relative"
						ref={carouselRef}
						onScroll={checkScrollability}
					>
						<div
							className={cn(
								"flex flex-row justify-start gap-8",
								"mx-auto"
							)}
						>
							{cards.map((item, index) => (
								<div className="flex flex-col">
									{item}
								</div>
							))}
						</div>
					</div>
				</div>
			</CarouselContext.Provider>
		</div>
	);
};

export default VideoCarousel;

const data = [
	{
		title: "Intro video",
		src: "https://cdn.cameo.com/video/6182afd45ca4760b1b4568e8-processed-wm.mp4",
	},
	{
		title: "Intro video",
		src: "https://cdn.cameo.com/video/6182afd45ca4760b1b4568e8-processed-wm.mp4",
	},
	{
		title: "Intro video",
		src: "https://cdn.cameo.com/video/6182afd45ca4760b1b4568e8-processed-wm.mp4",
	},
	{
		title: "Intro video",
		src: "https://cdn.cameo.com/video/6182afd45ca4760b1b4568e8-processed-wm.mp4",
	},
	{
		title: "Intro video",
		src: "https://cdn.cameo.com/video/6182afd45ca4760b1b4568e8-processed-wm.mp4",
	},
	{
		title: "Intro video",
		src: "https://cdn.cameo.com/video/6182afd45ca4760b1b4568e8-processed-wm.mp4",
	},
	{
		title: "Intro video",
		src: "https://cdn.cameo.com/video/6182afd45ca4760b1b4568e8-processed-wm.mp4",
	},
];


export const Card = ({
	card
}: {
	card: Card;
}) => {
	const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const videoRef = useRef<HTMLVideoElement>(null);

	const handlePlay = (): void => {
		if (!isVideoLoaded) {
			// setIsVideoLoaded(true);
		} else if (videoRef.current) {
			if (isPlaying) {
				handlePause()
			} else {
				videoRef.current.play();
				setIsPlaying(true);
			}
		}
	};

	const handlePause = (): void => {
		if (videoRef.current) {
			videoRef.current.pause();
			setIsPlaying(false);
		}
	};

	const params = useParams();

	return (
		<div className="w-[135px] h-[180px] rounded-[20px] border relative overflow-hidden flex items-center" onClick={handlePlay}>
			<div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-20" />
			<p className="absolute bottom-[5px] z-40 left-[10px] text-[14px]">{card.title}</p>
			<div className="z-[20] flex items-center justify-center w-[20px] h-[20px] absolute top-[calc(50%-10px)] left-[calc(50%-10px)]">
				{
					isPlaying ?
						<svg className="fill-[#F2F1F3]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z"></path></svg>
						:
						<svg className="fill-[#F2F1F3]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path></svg>
				}
			</div>
			{
				isPlaying &&
				<Link href={`${params.id}/feed/V54ozp33k`} className="absolute top-[10px] right-[10px] z-[100]">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M220,48V96a12,12,0,0,1-24,0V77l-39.51,39.52a12,12,0,0,1-17-17L179,60H160a12,12,0,0,1,0-24h48A12,12,0,0,1,220,48ZM99.51,139.51,60,179V160a12,12,0,0,0-24,0v48a12,12,0,0,0,12,12H96a12,12,0,0,0,0-24H77l39.52-39.51a12,12,0,0,0-17-17Z"></path></svg>
				</Link>
			}
			<div className="relative">
				<video width="135" height="180" className="object-cover" ref={videoRef} onLoadedData={() => setIsVideoLoaded(true)}>
					<source src={card.src} type="video/mp4" />
				</video>
			</div>
		</div>
	);
};