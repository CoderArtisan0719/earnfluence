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
import { motion } from "framer-motion";
import Image from "next/image";

type Card = {
	src: string;
	title: string;
	category: string;
	name: string;
	rate: number;
	score: number;
	follow: number;
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
		<div className="w-full h-full py-16 group">
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
						<h2 className="text-xl font-bold">Today's top 10</h2>
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
								"flex flex-row justify-start gap-8 pl-4",
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
		src: "https://cdn.cameo.com/resizer/FqldwtFW2_avatar-1684593716730.jpg",
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
		src: "https://cdn.cameo.com/resizer/FqldwtFW2_avatar-1684593716730.jpg",
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
		src: "https://cdn.cameo.com/resizer/FqldwtFW2_avatar-1684593716730.jpg",
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
	const [isLoading, setLoading] = useState(true);
	return (
		<div className="w-[210px] h-[370px] rounded-[20px] border relative overflow-hidden">
			<div className="relative gradient-div-after">
				<motion.button
					layoutId={layout ? `card-${card.title}` : undefined}
					className="relative rounded-xl bg-gray-100 dark:bg-neutral-900 w-52 overflow-hidden flex flex-col items-start justify-start z-10 h-[185px]"
				>
					<Image
						className={cn(
							"transition duration-300",
							isLoading ? "blur-sm" : "blur-0",
							"object-cover absolute z-10 inset-0"
						)}
						onLoad={() => setLoading(false)}
						src={card.src}
						fill
						loading="lazy"
						decoding="async"
						blurDataURL={typeof card.src === "string" ? card.src : undefined}
						alt={"Background of a beautiful view"}
					/>
				</motion.button>

				<div className="absolute top-0 left-0 flex items-center justify-center gap-[10px] bg-white bg-opacity-[0.8] rounded-br-[1.6rem] z-10 text-black px-[10px] py-[5px] font-bold">
					<svg width="12" height="29" viewBox="0 0 12 29" fill="none"><g clipPath="url(#clip0_3407_52760)"><path d="M2.35039 6.37703C2.42694 7.69305 3.1498 8.334 3.98018 8.38008C4.01943 8.38251 4.06332 8.34984 4.09208 8.29767C4.70182 7.17791 5.16724 5.91503 5.29645 4.69555C5.42103 3.4868 5.11287 2.57426 4.2898 2.2856C4.25007 2.27195 4.1879 2.29755 4.13207 2.35143C2.97086 3.45267 2.26896 5.07222 2.35039 6.37678V6.37703Z" fill="#4D4953"></path><path d="M6.68601 5.71277C5.62403 6.08968 4.70539 7.20409 4.40918 8.42503C4.39504 8.48159 4.40601 8.53474 4.43649 8.55912C5.10084 9.08475 6.02069 9.03355 6.91957 8.57887C7.82406 8.11589 8.53986 7.37791 9.06914 6.50999C9.09474 6.46757 9.09669 6.41906 9.07353 6.3859C8.60836 5.71131 7.75312 5.32635 6.68601 5.71277Z" fill="#4D4953"></path><path d="M7.66623 1.74255C6.42188 2.75968 5.88894 4.12276 6.01449 5.1038C6.01985 5.14988 6.0535 5.1745 6.09885 5.16646C7.08257 4.9858 8.14261 4.41142 9.18192 3.56227C10.2134 2.70848 11.0699 1.725 11.5287 0.759072C11.5504 0.712263 11.5326 0.673499 11.4822 0.660577C10.4577 0.386548 8.90106 0.720552 7.66598 1.74255H7.66623Z" fill="#4D4953"></path><path d="M0.756129 12.3437C1.2937 13.5317 2.19186 13.8723 2.98493 13.6207C3.02248 13.6092 3.05222 13.5631 3.06076 13.5049C3.23824 12.2517 3.21825 10.9289 2.88668 9.77207C2.55439 8.6267 1.92344 7.90579 1.0599 7.92481C1.01821 7.92602 0.970916 7.9704 0.939709 8.03866C0.287793 9.4366 0.217822 11.1681 0.755885 12.3437H0.756129Z" fill="#4D4953"></path><path d="M4.54338 10.2199C3.70252 10.9303 3.2476 12.2744 3.39851 13.5109C3.40509 13.5682 3.4341 13.6136 3.47116 13.6255C4.27642 13.8781 5.11972 13.5039 5.79748 12.7678C6.47744 12.0223 6.87727 11.0954 7.0372 10.1253C7.04475 10.078 7.02842 10.0332 6.99453 10.0112C6.31214 9.55849 5.38571 9.49949 4.54314 10.2199H4.54338Z" fill="#4D4953"></path><path d="M1.3426 18.4711C2.26124 19.3971 3.22375 19.399 3.87664 18.878C3.90761 18.8536 3.91931 18.7998 3.90663 18.7417C3.63089 17.4964 3.15549 16.2638 2.44286 15.3034C1.7339 14.3541 0.890601 13.9101 0.0899666 14.2332C0.0514464 14.249 0.0226782 14.307 0.0173146 14.3814C-0.104828 15.9105 0.427871 17.5571 1.34285 18.4709L1.3426 18.4711Z" fill="#4D4953"></path><path d="M4.15098 15.1313C3.61097 16.0919 3.64949 17.5137 4.2268 18.6262C4.25313 18.6778 4.29629 18.7103 4.33529 18.7083C5.17811 18.6593 5.83392 18.0045 6.21084 17.07C6.58628 16.126 6.6409 15.1155 6.45195 14.1581C6.44269 14.1113 6.41124 14.0757 6.37223 14.0671C5.57525 13.8889 4.68905 14.1608 4.15098 15.1316V15.1313Z" fill="#4D4953"></path><path d="M4.11694 24.0622C5.33666 24.6171 6.25213 24.2777 6.66171 23.5487C6.68121 23.5146 6.67121 23.459 6.63635 23.4081C5.88643 22.3183 4.9851 21.316 3.97115 20.6612C2.96499 20.0154 2.021 19.8981 1.38591 20.4888C1.35543 20.5176 1.3491 20.5827 1.37055 20.6549C1.79915 22.143 2.90477 23.5173 4.11669 24.0622H4.11694Z" fill="#4D4953"></path><path d="M5.50769 19.8885C5.34873 20.9907 5.90995 22.3279 6.8927 23.1839C6.93781 23.2239 6.99144 23.2395 7.02728 23.2236C7.80475 22.8777 8.16168 22.0193 8.15802 20.9951C8.14924 19.9626 7.82889 18.9832 7.31179 18.146C7.28644 18.1053 7.24451 18.0827 7.20477 18.0888C6.39658 18.2053 5.66128 18.7775 5.50769 19.8885Z" fill="#4D4953"></path><path d="M9.07967 28.4212C10.5208 28.5219 11.278 27.8742 11.3411 27.0309C11.3446 26.9911 11.309 26.9416 11.2512 26.9051C10.0066 26.1251 8.70837 25.4844 7.47329 25.218C6.25015 24.9573 5.31616 25.1814 4.94949 25.9708C4.93218 26.0091 4.95217 26.0735 5.00166 26.1347C6.00147 27.4031 7.65053 28.3274 9.07992 28.4212H9.07967Z" fill="#4D4953"></path><path d="M8.6163 23.9344C8.91788 25.0442 10.0318 26.1257 11.399 26.5994C11.4622 26.6218 11.5221 26.6179 11.5502 26.5901C12.1592 25.9843 12.1063 25.0354 11.6416 24.0556C11.1686 23.0696 10.4441 22.2456 9.61953 21.63C9.57906 21.6 9.53055 21.5934 9.4952 21.6132C8.77867 22.0116 8.30546 22.8183 8.61606 23.9344H8.6163Z" fill="#4D4953"></path></g><defs><clipPath id="clip0_3407_52760"><rect width="12" height="27.863" fill="white" transform="translate(0 0.568481)"></rect></clipPath></defs></svg>
					<p color="#000" font-weight="bold">1</p>
					<div className="-scale-x-[1]"><svg width="12" height="29" viewBox="0 0 12 29" fill="none"><g clipPath="url(#clip0_3407_52760)"><path d="M2.35039 6.37703C2.42694 7.69305 3.1498 8.334 3.98018 8.38008C4.01943 8.38251 4.06332 8.34984 4.09208 8.29767C4.70182 7.17791 5.16724 5.91503 5.29645 4.69555C5.42103 3.4868 5.11287 2.57426 4.2898 2.2856C4.25007 2.27195 4.1879 2.29755 4.13207 2.35143C2.97086 3.45267 2.26896 5.07222 2.35039 6.37678V6.37703Z" fill="#4D4953"></path><path d="M6.68601 5.71277C5.62403 6.08968 4.70539 7.20409 4.40918 8.42503C4.39504 8.48159 4.40601 8.53474 4.43649 8.55912C5.10084 9.08475 6.02069 9.03355 6.91957 8.57887C7.82406 8.11589 8.53986 7.37791 9.06914 6.50999C9.09474 6.46757 9.09669 6.41906 9.07353 6.3859C8.60836 5.71131 7.75312 5.32635 6.68601 5.71277Z" fill="#4D4953"></path><path d="M7.66623 1.74255C6.42188 2.75968 5.88894 4.12276 6.01449 5.1038C6.01985 5.14988 6.0535 5.1745 6.09885 5.16646C7.08257 4.9858 8.14261 4.41142 9.18192 3.56227C10.2134 2.70848 11.0699 1.725 11.5287 0.759072C11.5504 0.712263 11.5326 0.673499 11.4822 0.660577C10.4577 0.386548 8.90106 0.720552 7.66598 1.74255H7.66623Z" fill="#4D4953"></path><path d="M0.756129 12.3437C1.2937 13.5317 2.19186 13.8723 2.98493 13.6207C3.02248 13.6092 3.05222 13.5631 3.06076 13.5049C3.23824 12.2517 3.21825 10.9289 2.88668 9.77207C2.55439 8.6267 1.92344 7.90579 1.0599 7.92481C1.01821 7.92602 0.970916 7.9704 0.939709 8.03866C0.287793 9.4366 0.217822 11.1681 0.755885 12.3437H0.756129Z" fill="#4D4953"></path><path d="M4.54338 10.2199C3.70252 10.9303 3.2476 12.2744 3.39851 13.5109C3.40509 13.5682 3.4341 13.6136 3.47116 13.6255C4.27642 13.8781 5.11972 13.5039 5.79748 12.7678C6.47744 12.0223 6.87727 11.0954 7.0372 10.1253C7.04475 10.078 7.02842 10.0332 6.99453 10.0112C6.31214 9.55849 5.38571 9.49949 4.54314 10.2199H4.54338Z" fill="#4D4953"></path><path d="M1.3426 18.4711C2.26124 19.3971 3.22375 19.399 3.87664 18.878C3.90761 18.8536 3.91931 18.7998 3.90663 18.7417C3.63089 17.4964 3.15549 16.2638 2.44286 15.3034C1.7339 14.3541 0.890601 13.9101 0.0899666 14.2332C0.0514464 14.249 0.0226782 14.307 0.0173146 14.3814C-0.104828 15.9105 0.427871 17.5571 1.34285 18.4709L1.3426 18.4711Z" fill="#4D4953"></path><path d="M4.15098 15.1313C3.61097 16.0919 3.64949 17.5137 4.2268 18.6262C4.25313 18.6778 4.29629 18.7103 4.33529 18.7083C5.17811 18.6593 5.83392 18.0045 6.21084 17.07C6.58628 16.126 6.6409 15.1155 6.45195 14.1581C6.44269 14.1113 6.41124 14.0757 6.37223 14.0671C5.57525 13.8889 4.68905 14.1608 4.15098 15.1316V15.1313Z" fill="#4D4953"></path><path d="M4.11694 24.0622C5.33666 24.6171 6.25213 24.2777 6.66171 23.5487C6.68121 23.5146 6.67121 23.459 6.63635 23.4081C5.88643 22.3183 4.9851 21.316 3.97115 20.6612C2.96499 20.0154 2.021 19.8981 1.38591 20.4888C1.35543 20.5176 1.3491 20.5827 1.37055 20.6549C1.79915 22.143 2.90477 23.5173 4.11669 24.0622H4.11694Z" fill="#4D4953"></path><path d="M5.50769 19.8885C5.34873 20.9907 5.90995 22.3279 6.8927 23.1839C6.93781 23.2239 6.99144 23.2395 7.02728 23.2236C7.80475 22.8777 8.16168 22.0193 8.15802 20.9951C8.14924 19.9626 7.82889 18.9832 7.31179 18.146C7.28644 18.1053 7.24451 18.0827 7.20477 18.0888C6.39658 18.2053 5.66128 18.7775 5.50769 19.8885Z" fill="#4D4953"></path><path d="M9.07967 28.4212C10.5208 28.5219 11.278 27.8742 11.3411 27.0309C11.3446 26.9911 11.309 26.9416 11.2512 26.9051C10.0066 26.1251 8.70837 25.4844 7.47329 25.218C6.25015 24.9573 5.31616 25.1814 4.94949 25.9708C4.93218 26.0091 4.95217 26.0735 5.00166 26.1347C6.00147 27.4031 7.65053 28.3274 9.07992 28.4212H9.07967Z" fill="#4D4953"></path><path d="M8.6163 23.9344C8.91788 25.0442 10.0318 26.1257 11.399 26.5994C11.4622 26.6218 11.5221 26.6179 11.5502 26.5901C12.1592 25.9843 12.1063 25.0354 11.6416 24.0556C11.1686 23.0696 10.4441 22.2456 9.61953 21.63C9.57906 21.6 9.53055 21.5934 9.4952 21.6132C8.77867 22.0116 8.30546 22.8183 8.61606 23.9344H8.6163Z" fill="#4D4953"></path></g><defs><clipPath id="clip0_3407_52760"><rect width="12" height="27.863" fill="white" transform="translate(0 0.568481)"></rect></clipPath></defs></svg></div>
				</div>

				<div className="absolute z-[10] top-[5px] right-[5px] flex justify-center items-center w-[24px] h-[24px] rounded-full	bg-black bg-opacity-[0.72]">
					<BsFillLightningChargeFill className="fill-yellow-400"/>
				</div>
			</div>
			
			<div className="gradient-div-before appearance-none bg-black absolute h-[50%] bottom-0 left-0 w-full overflow-hidden">
				<Image
					className={cn(
						"transition duration-300",
						isLoading ? "blur-sm" : "blur-0",
						"object-cover absolute z-10 inset-0",
						"rotate-[180deg]",
						"blur-[70px]"
					)}
					onLoad={() => setLoading(false)}
					src={card.src}
					fill
					loading="lazy"
					decoding="async"
					blurDataURL={typeof card.src === "string" ? card.src : undefined}
					alt={"Background of a beautiful view"}
				/>
			</div>
			<div className="z-[20] absolute h-[50%] bottom-0 left-0 w-full overflow-hidden flex flex-col justify-between">
				<div className="flex-1 flex flex-col justify-center items-center text-center gap-[10px]">
					<h1 className="text-2xl font-[800]">{card.name}</h1>
					<p className="leading-[15px]">{card.title}</p>
				</div>
				<div className="flex items-center justify-between px-[20px] py-[16px] bg-black bg-opacity-[0.4] font-bold text-[14px]">
					<span className="">${card.rate}+</span>
					<div className="flex items-center justify-between gap-[6px]">
						<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path></svg>
						<span>${card.score.toFixed(2)} ({card.follow})</span>
					</div>
				</div>
			</div>
		</div>
	);
};