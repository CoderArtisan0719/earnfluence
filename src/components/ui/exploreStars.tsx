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
import { motion } from "framer-motion";
import Image from "next/image";

type Card = {
    img: string,
    title: string,
    desc: string,
    rate: number,
    fan: boolean
};

interface ExploreStarsProps {
    title: string,
    stars: Card[]
}

export const CarouselContext = createContext<{
	onCardClose: (index: number) => void;
	currentIndex: number;
}>({
	onCardClose: () => { },
	currentIndex: 0,
});


const ExploreStars = ({title, stars}: ExploreStarsProps) => {
    const initialScroll = 0;
	const cards = stars.map((card, index) => (
		<Card key={card.img} card={card} index={index} layout={true} />
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
		<div className="w-full h-full py-3 group">
			<CarouselContext.Provider
				value={{ onCardClose: handleCardClose, currentIndex }}
			>
				<div className="relative w-full">
					<div className="absolute top-[50%] z-[30] w-full flex items-center justify-between px-[30px] opacity-0 transition-all duration-700 group-hover:opacity-100">
						<button
							className="relative z-40 h-10 w-10 rounded-full bg-black flex items-center justify-center border scale-[0.7]"
							onClick={scrollLeft}
							disabled={!canScrollLeft}
						>
							<IconChevronLeft className={`h-6 w-6 ${!canScrollLeft ? 'text-gray-500' : 'text-gray-50'}`} />
						</button>
						<button
							className="relative z-40 h-10 w-10 rounded-full bg-black flex items-center justify-center border scale-[0.7]"
							onClick={scrollRight}
							disabled={!canScrollRight}
						>
							<IconChevronRight className={`h-6 w-6 ${!canScrollRight ? 'text-gray-500' : 'text-gray-50'}`} />
						</button>
					</div>
					<div className="flex justify-between items-center gap-2 mr-10">
						<h2 className="text-xl font-bold">{title}</h2>
						<div className="flex gap-2">
						</div>
					</div>

					<div
						className="flex w-full overflow-x-scroll overscroll-x-auto py-5 scroll-smooth [scrollbar-width:none] relative"
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
								"flex flex-row justify-start gap-4 pl-4",
								"mx-auto"
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
								</div>
							))}
						</div>
					</div>
				</div>
			</CarouselContext.Provider>
		</div>
	);
}

export const Card = ({
	card,
	layout = false,
}: {
	card: Card;
	index: number;
	layout?: boolean;
}) => {
	const [isLoading, setLoading] = useState(true);
	return (
		<div className="w-[200px] rounded-[20px] relative overflow-hidden">
			<div className="relative">
				<motion.button
					layoutId={layout ? `card-${card.title}` : undefined}
					className="relative rounded-xl bg-gray-100 dark:bg-neutral-900 w-52 overflow-hidden flex flex-col items-start justify-start z-10 h-[200px]"
				>
					<Image
						className={cn(
							"transition duration-300",
							isLoading ? "blur-sm" : "blur-0",
							"object-cover absolute z-10 inset-0"
						)}
						onLoad={() => setLoading(false)}
						src={card.img}
						fill
						loading="lazy"
						decoding="async"
						blurDataURL={typeof card.img === "string" ? card.img : undefined}
						alt={"Background of a beautiful view"}
					/>
				</motion.button>
				<div className="absolute z-[10] top-[5px] left-[5px] flex justify-center items-center w-[24px] h-[24px] rounded-full	bg-black bg-opacity-[0.72]">
					<BsFillLightningChargeFill className="fill-yellow-400"/>
				</div>

                {
                    card.fan && (
                        <div className="absolute z-[10] bottom-0 right-0 rounded-tl-[10px] bg-black bg-opacity-[0.8] px-[12px] py-[4px] text-[15px] font-bold text-[#BE8DFC]">
                            <p>FAN FSVORITE</p>
                        </div>
                    )
                }
			</div>

            <div className="mt-[10px] p-[5px]">
                <p className="font-bold text-[18px]">
                    {card.title}
                </p>
                <p className="text-[16px] text-[#BFBAC4]">
                    {
                        card.desc
                    }
                </p>
                <p className="mt-[5px] font-bold text-[18px]">
                    ${card.rate}+
                </p>
            </div>
		</div>
	);
};

export default ExploreStars