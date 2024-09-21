'use client'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/navigation';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

const FunctionalVideoCarousel = () => {

	const router = useRouter()

	const [flgLike, setFlgLike] = useState<boolean>(false);
	const funcLike = () => {
		setFlgLike(true)
	}	

	const funcThank = () => {
		
	}

	const funcReact = () => {
		
	}

	const funcShare = () => {
		
	}

	const funcAvatar = () => {
		router.push("/shoenice");
	}


	const functions = [
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path></svg>,
			title: "Like",
			func: funcLike
		},
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path></svg>,
			title: "Say thanks",
			func: funcThank
		},
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"><path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"></path></svg>,
			title: "React",
			func: funcReact
		},
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"><path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"></path></svg>,
			title: "Share",
			func: funcShare
		},
		{
			icon: <img className='' src="https://cdn.cameo.com/resizer/en1OxW1_5_avatar-laC4vTwWs.jpg" alt="shoenice" loading="lazy" height="36" width="36" />,
			func: funcAvatar
		}
	]
	return (
		<div className='overflow-hidden w-[100vw]'>

			{
				flgLike && 
					<div className='fixed top-0 left-0 w-full h-full z-[100] bg-black bg-opacity-30'>
						<div className='flex items-center justify-center h-full border border-rose-200'>
							<div className='w-[480px] h-[256px] p-[24px] rounded-[20px] shadow-div relative'>
								<div className=''>
									<p>Share video</p>

									<div className='flex items-center justify-between'>

									</div>
								</div>
							</div>
						</div>
					</div>
			}

			<Swiper
				effect="coverflow"
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={3}
				coverflowEffect={{
					prev: {
						opacity: 0.5,
						translate: ["-210%", 0, -200],
						scale: 0.75,
					},
					next: {
						opacity: 0.5,
						translate: ["210%", 0, -200],
						scale: 0.75,
					},
					limitProgress: 4,
					progressMultiplier: 0.5,
				}}

				initialSlide={0}
				spaceBetween={60}
				mousewheel={{
					thresholdDelta: 70
				}}
			>
				{
					new Array(3).fill(null).map((item, index) => (
						<SwiperSlide key={index} className='flex items-center justify-center bg-transparent' style={{ width: "min-content !important", overflow: "hidden" }}>
							<div className='flex items-center justify-center h-full overflow-hidden rounded-[20px]'>
								<div className='relative'>
									<video width="135" height="180" className="object-cover w-[350px] rounded-[20px]" controls>
										<source src={"https://cdn.cameo.com/video/6182afd45ca4760b1b4568e8-processed.mp4"} type="video/mp4" />
									</video>

									<div className='absolute bottom-[80px] right-0'>
											{
												functions.map((item, index) => (
													<div className='flex flex-col items-center w-[60px] gap-[5px] text-center mb-[20px]' key={index} onClick={item.func}>
														<div className='w-[36px] h-[36px] rounded-full flex justify-center items-center border border-white cursor-pointer overflow-hidden'>
															{item.icon}
														</div>
														{
															item.title && <p className='text-[12px]'>{item.title}</p>
														}
													</div>
												))
											}
									</div>
								</div>
							</div>
						</SwiperSlide>
					))
				}

			</Swiper>
		</div >
	)
}

export default FunctionalVideoCarousel