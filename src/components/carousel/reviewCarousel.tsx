"use client";

import React, {
	useEffect,
	useState,
	createContext,
} from "react";

import { BsFillLightningChargeFill } from "react-icons/bs";

import {
	IconChevronLeft,
	IconChevronRight,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Card = {
    name: string,
    date: string,
    feed: string,
    url: string
};

export const CarouselContext = createContext<{
	onCardClose: (index: number) => void;
	currentIndex: number;
}>({
	onCardClose: () => { },
	currentIndex: 0,
});

interface ReviewCarouselProps {
    data: Card[];
}

const ReviewCarousel = ({data}: ReviewCarouselProps) => {
	const initialScroll = 0
	const cards = data.map((card, index) => (
		<Card index={index} card={card} />
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
					<div className="absolute top-[40%] w-full flex items-center justify-between px-[0px] opacity-0 transition-all group-hover:opacity-100">
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
								"flex flex-row justify-start gap-2",
								"mx-auto"
							)}
						>
							{cards.map((item, index) => (
								<div className="flex flex-col" key={index}>
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

export default ReviewCarousel;


export const Card = ({
	card
}: {
	card: Card;
}) => {
	
	return (
		<div className="w-[265px] h-[164px] rounded-[20px] p-[16px] bg-[#302d34]">
            <div className="border h-full relative">
                <div className="flex justify-start items-center gap-[10px]">
                    <p className="text-[16px] font-bold tracking-[-1px]">{card.name}</p>
                    <div className="flex justify-center items-center gap-[7px] ">
                        <svg className="fill-yellow-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path></svg>
                        <svg className="fill-yellow-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path></svg>
                        <svg className="fill-yellow-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path></svg>
                        <svg className="fill-yellow-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path></svg>
                        <svg className="fill-yellow-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path></svg>
                    </div>
                </div>
                <p className="text-[#bfbac4] text-[14px] mt-[10px]">{card.date}</p>
                <p className="text-[15px] leading-[15px] mt-[10px]">{card.feed}</p>

                <Link href={card.url} className="underline absolute left-0 bottom-0">Read more</Link>
            </div>
		</div>
	);
};