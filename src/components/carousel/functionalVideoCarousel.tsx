'use client'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/navigation';
import { TiVendorApple } from "react-icons/ti";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

const share_info = [
	{
		icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" width="20" height="20"><path fill-rule="evenodd" d="M2.106 6.447A2 2 0 0 0 1 8.237V16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.236a2 2 0 0 0-1.106-1.789l-7-3.5a2 2 0 0 0-1.788 0l-7 3.5Zm1.48 4.007a.75.75 0 0 0-.671 1.342l5.855 2.928a2.75 2.75 0 0 0 2.46 0l5.852-2.927a.75.75 0 1 0-.67-1.341l-5.853 2.926a1.25 1.25 0 0 1-1.118 0l-5.856-2.928Z" clip-rule="evenodd"></path></svg>,
		title: "Email"
	},
	{
		icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" width="20" height="20"><path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z"></path><path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z"></path></svg>,
		title: "Copy link"
	},
	{
		icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" width="20" height="20"><path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z"></path><path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z"></path></svg>,
		title: "Download"
	},
	{
		icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" width="20" height="20"><path fill-rule="evenodd" d="M10.75 6h-2v4.25a.75.75 0 0 1-1.5 0V6h1.5V3.704l.943 1.048a.75.75 0 0 0 1.114-1.004l-2.25-2.5a.75.75 0 0 0-1.114 0l-2.25 2.5a.75.75 0 0 0 1.114 1.004l.943-1.048V6h-2A2.25 2.25 0 0 0 3 8.25v4.5A2.25 2.25 0 0 0 5.25 15h5.5A2.25 2.25 0 0 0 13 12.75v-4.5A2.25 2.25 0 0 0 10.75 6ZM7 16.75v-.25h3.75a3.75 3.75 0 0 0 3.75-3.75V10h.25A2.25 2.25 0 0 1 17 12.25v4.5A2.25 2.25 0 0 1 14.75 19h-5.5A2.25 2.25 0 0 1 7 16.75Z" clip-rule="evenodd"></path></svg>,
		title: "Share via"
	},
]

const FunctionalVideoCarousel = () => {

	const router = useRouter()
	const [email, setEmail] = useState<string>("");

	const [flgLike, setFlgLike] = useState<boolean>(false);
	const [flgShare, setFlgShare] = useState<boolean>(false);
	const funcLike = () => {
		setFlgLike(true)
	}

	const funcThank = () => {
		setFlgLike(true)
	}

	const funcReact = () => {
		setFlgLike(true)
	}

	const funcShare = () => {
		setFlgShare(true)
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
				flgShare &&
				<div className='fixed top-0 left-0 w-full h-full z-[100] bg-black bg-opacity-30'>
					<div className='flex items-center justify-center h-full border border-rose-200'>
						<div className='w-[480px] p-[24px] rounded-[20px] shadow-div relative'>
							<div className='mt-[10px]'>
								<h1 className='text-3xl'>Share video</h1>
								<div className='flex items-center justify-between mt-[50px] mx-[20px]'>
									{
										share_info.map((item, index) => (
											<div className='index flex flex-col items-center gap-[10px]'>
												<span className='flex w-[52px] h-[52px] justify-center items-center rounded-full border border-gray-500 cursor-pointer'>
													{
														item.icon
													}
												</span>
												<span>{item.title}</span>
											</div>
										))
									}
								</div>
							</div>
							<button className='outline-none border-none bg-transparent absolute top-[20px] right-[20px]' onClick={() => setFlgShare(false)}>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
							</button>
						</div>
					</div>
				</div>
			}

			{
				flgLike &&
				<div className='fixed top-0 left-0 w-full h-full z-[100] bg-black bg-opacity-30'>
					<div className='flex items-center justify-center h-full'>
						<div className='w-[480px] p-[24px] rounded-[20px] shadow-div relative'>
							<div className=''>
								<h1 className='text-3xl'>Login or sign up</h1>
								<div className='mt-[20px]'>
									<p className='text-xl'>Your email</p>
									<input className={`mt-[10px] outline-none border border-[#817A8A] py-[12px] px-[12px] rounded-[10px] w-full hover:border-white`} placeholder='you@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
								</div>
								<button className={`border-none outline-none mt-[20px] p-[12px] rounded-full w-full bg-[#9036E0] ${!email && "opacity-40"}`}>Continue</button>
							</div>

							<div className='pt-[10px] border border-t-gray-400 mt-[20px]'>
								<button className='mt-[10px] outline-none w-full border border-gray-300 flex justify-center items-center gap-[10px] rounded-full bg-black p-[12px]'>
									<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
									<span>Log in with Facebook</span>
								</button>

								<button className='mt-[10px] outline-none w-full border border-gray-300 flex justify-center items-center gap-[10px] rounded-full bg-black p-[12px]'>
									<TiVendorApple />
									<span>Log in with Facebook</span>
								</button>
							</div>

							<button className='outline-none border-none bg-transparent absolute top-[20px] right-[20px]' onClick={() => setFlgLike(false)}>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
							</button>
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