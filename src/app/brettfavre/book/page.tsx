'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import { Damion } from 'next/font/google'
import RequiredInput from "@/components/input/requiredInput";
import BookPayment from "@/components/ui/bookPayment";
import DateInput from "@/components/input/dateInput";

const damion = Damion({ subsets: ['latin'], weight: "400" })

export const video_types = [
	"🎂 Birthday",
	"🏈 Fantasy football",
	"🤗 Pep Talk",
	"🔥 Roast",
	"💜 Advice",
	"🙋‍♀️ Question",
	"💭 Other"
]
export const random_intros = [
	"My buddy is your biggest fan. Wish him a happy bday and give him tips to meet a nice lady this year.",
	"My bestie needs an inspiring, self-love focused happy bday mantra. Focus on inner beauty, confidence, and shining bright!",
	"It's my nephew's 8th birthday soon. He'll go nuts for a silly, high-energy bday wish. Show your dog if you can!",
	"I'd love a sweet bday message for my wife. She's been through a lot this year, and your words would mean so much.",
	"It's my brother's bday! A hilarious take on his addiction to video games and lack of real-world skills would be perfect.",
	"It's my girlfriend's 'golden birthday' next week and I'm proposing. Send her a heartfelt bday and congrats message!",
	"It's my roomie's bday. Wish for her to get better at cooking in the year ahead, so maybe her delivery savings can go towards rent.",
	"It's my best friend's birthday! A hilarious take on her obsession with fashion and her endless shopping sprees would be the perfect gift.",
	"Looking for a wild, unhinged bday wish for our strangest buddy. Don't hold back!"
]

export const pronouns = [
	"He/Him",
	"She/Her",
	"They/Them"
]


const BrettfavreBook = () => {

	const [isPaymentHash, setIsPaymentHash] = useState(false);

	useEffect(() => {
		if (window.location.hash === '#payment') {
			setIsPaymentHash(true);
		}
	}, []);

	const [intro, setIntro] = useState("");
	const [introError, setIntroError] = useState(false);
	const [flgPronoun, selFlgPronoun] = useState<number>(-1);
	const [username, setUserName] = useState<string>("")
	const [videoFrom, setVideoFrom] = useState<string>("");
	const [fantasyname, setFantasyName] = useState<string>("")
	const [occasion, setOccasion] = useState<string>("");
	const [turning, setTurning] = useState<number>(25);
	
	const [flgVideoTypes, setFlgVideoTypes] = useState<number>(0);
	const [placeholderRandomIndex, setPlaceholderRandomIndex] = useState(0);
	useEffect(() => {
		setPlaceholderRandomIndex(
			Math.floor(Math.random() * 100 % random_intros.length)
		)
	}, [flgVideoTypes]);

	const handleSubmit = (e:any) => {
		e.preventDefault();
	}


	return (
		<React.Fragment>
			<div className="relative z-50 bg-black">
				<div className="px-12">
					<div className="w-[680px] m-auto p-[24px] mb-[50px]">
						{/* Header part Start */}
						<div className="sticky top-0 bg-black z-[100]">
							<div className="flex items-center justify-between py-[12px] px-[20px]">
								<Link href="#" className="w-[44px] h-[44px] rounded-full flex items-center justify-center hover:bg-[#FEFEFE] hover:bg-opacity-[0.08] duration-300">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" color="#F2F1F3" width="24px"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
								</Link>
								<p>Write request</p>
								<Image
									src={"https://cdn.cameo.com/resizer/jb0uPSgZa_PBxLAovjs.png"}
									alt="avatar"
									width={36}
									height={36}
									className="rounded-full w-[36px] h-[36px]"
								/>
							</div>

							<div className="flex items-start justify-between gap-[3px]">
								<div className="flex-1 h-[1.5px] gradient_bg"></div>
								{
									isPaymentHash ? (
										<div className="flex-1 h-[1.5px] gradient_bg"></div>
									) : (
										<div className="flex-1 h-[1.5px] bg-[#3f3b45]"></div>
									)
								}
							</div>
						</div>
						{/* Header part End */}

						{
							isPaymentHash ? (
								<BookPayment />
							) : (
								<React.Fragment>
									<form className="rounded-[20px] bg-[#201E23] overflow-hidden mt-[20px] p-[24px]">
										<h1 style={{ ...damion.style }} className="text-[30px]">Dear Brett Favre,</h1>
										<div className="text-[#f2f1f3] mt-[30px]">
											<h2 className="font-bold">This video is for:</h2>
											<div className="flex items-center justify-start mt-[20px]">
												<div className="flex items-center justify-start gap-[20px]">
													<div className="flex justify-start items-center gap-[10px]">
														<input className="bg-[white] w-[24px] h-[24px]" type="radio" id="input_1" name="video" value="huey" />
														<label htmlFor="input_1">Someone else</label>
													</div>
													<div className="flex justify-start items-center gap-[10px]">
														<input className="bg-[white] w-[24px] h-[24px]" type="radio" id="input_1" name="video" value="huey" />
														<label htmlFor="input_1">Someone else</label>
													</div>
												</div>
											</div>
											<RequiredInput
												value={username}
												setValue={setUserName}
												placeholder="name"
											/>
											<div className="flex items-center justify-start gap-[10px] mt-[20px]">
												{
													pronouns.map((item, index) => (
														<div className={`py-[6px] px-[12px] border border-[#f2f1f3] rounded-full flex items-center justify-center gap-[10px] ${index == flgPronoun && "bg-[#74746f] bg-opacity-[0.16]"} cursor-pointer`} onClick={() => index === flgPronoun ? selFlgPronoun(-1) : selFlgPronoun(index)} key={index}>
															{item}
															{
																index === flgPronoun && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#BFBAC4" viewBox="0 0 256 256"><path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path></svg>
															}
														</div>
													))
												}
											</div>
											<div className="mt-[30px]">
												<h2 className="font-bold">Select a video type:</h2>
												<div className="flex items-center justify-start gap-[10px] flex-wrap mt-[15px]">
													{
														video_types.map((item, index) => (
															<div className={`${index === flgVideoTypes && "gradient_bg_1"} py-[2px] px-[6px] border border-[#3f3b45] rounded-full flex items-center justify-center gap-[10px] cursor-pointer`} key={index} onClick={() => setFlgVideoTypes(index)}>
																{item}
															</div>
														))
													}
												</div>
											</div>
											{
												flgVideoTypes == 1 && (
													<div className="mt-[30px]">
														<h2 className="font-bold">What's the name of your fantasy league? (optional)</h2>
														<RequiredInput
															value={fantasyname}
															setValue={setFantasyName}
															placeholder="League of Ordinary Gentlemen"
															required={false}
														/>
													</div>
												)
											}
											{
												flgVideoTypes == video_types.length - 1 && (
													<div className="mt-[30px]">
														<h2 className="font-bold">What's the occasion?</h2>
														<RequiredInput
															value={occasion}
															setValue={setOccasion}
															placeholder="League of Ordinary Gentlemen"
														/>
													</div>
												)
											}
											<div className="text-[#f2f1f3] mt-[20px]">
												<h2 className="font-bold">This video is for:</h2>
												<div>
													<div className={`mt-[20px] border border-[#3f3b45] rounded-[10px] overflow-hidden ${intro && "border-white"} ${(introError && !intro) && "border-red-400"}`} onBlur={() => setIntroError(true)}>
														<textarea className="h-[200px] p-[16px] bg-transparent w-full border-none outline-none resize-none" value={intro} onChange={(e) => setIntro(e.target.value)} placeholder={random_intros[placeholderRandomIndex]} />
														<div className={`p-[16px] border-t border-t-[#3f3b45] ${intro && "border-t-white"} ${(introError && !intro) && "border-t-red-400"}`}>
															<button className={`gradient_btn flex justify-center items-center gap-[10px] py-[8px] px-[16px] rounded-full hover:bg-[#FEFEFE] hover:bg-opacity-[0.08] duration-300`} onClick={(e) => {
																e.preventDefault()
																setIntro(random_intros[Math.floor(Math.random() * 100 % random_intros.length)])
															}}>
																<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#c7bdff" viewBox="0 0 256 256"><path d="M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L182.06,73.37a79.56,79.56,0,0,0-56.13-23.43h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27a96,96,0,0,1,135,.79L208,76.69V48a8,8,0,0,1,16,0ZM186.41,183.29a80,80,0,0,1-112.47-.66L59.31,168H88a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V179.31l14.63,14.63A95.43,95.43,0,0,0,130,222.06h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z"></path></svg>
																<span>Get sample instructions</span>
															</button>
															<p className="text-[#bebfc4] mt-[5px]">Need inspiration? Start with a new example.</p>
														</div>
													</div>
													{
														(!intro && introError) &&
														<div className="text-red-400 mt-[10px]">
															<p>0/250 characters</p>
															<div className="flex items-center justify-start gap-[5px]">
																<svg className="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"></path></svg>
																<p>Required</p>
															</div>
														</div>
													}
												</div>
											</div>
											{
												flgVideoTypes === 0 && (
													<React.Fragment>
														<div className="text-[#f2f1f3] mt-[20px]">
															<h2 className="font-bold">Their birthday is on (optional):</h2>
															<DateInput isHeader={false} />
														</div>

														<div className="text-[#f2f1f3] mt-[20px]">
															<h2 className="font-bold">They're turning (optional):</h2>
															<RequiredInput
																value={turning}
																setValue={setTurning}
																placeholder="name"
																type="number"
															/>
														</div>
													</React.Fragment>
												)
											}


											<h1 style={{ ...damion.style }} className="text-[30px] mt-[30px]">Sincerely,</h1>

											<div className="">
												<h2 className="font-bold">This video is from: </h2>
												<RequiredInput
													value={videoFrom}
													setValue={setVideoFrom}
													placeholder="name"
												/>

												<div className="flex items-center justify-start gap-[10px] mt-[20px]">
													{
														pronouns.map((item, index) => (
															<div className={`py-[6px] px-[12px] border border-[#f2f1f3] rounded-full flex items-center justify-center gap-[10px] ${index == flgPronoun && "bg-[#74746f] bg-opacity-[0.16]"} cursor-pointer`} onClick={() => index === flgPronoun ? selFlgPronoun(-1) : selFlgPronoun(index)} key={index}>
																{item}
																{
																	index === flgPronoun && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#BFBAC4" viewBox="0 0 256 256"><path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path></svg>
																}
															</div>
														))
													}
												</div>
											</div>
										</div>
									</form>

									<div className="px-[15px] flex flex-col justify-center items-center mt-[20px] gap-[15px]">
										<div className="flex justify-start items-center gap-[10px] mt-[30px] w-full">
											<input type="checkbox" className="w-[24px] h-[24px] border border-[#3f3b45]" id="video_from" />
											<label htmlFor="video_from">Hide this video from Brett Favre's profile</label>
										</div>
										{
											(intro == "" || username == "") &&
											<div className="flex justify-start items-center gap-[10px] w-full text-red-400">
												<svg className="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"></path></svg>
												<p className="text-[16px] text-red-400">Place scroll up and fix any errors</p>
											</div>
										}

										<Link className="flex justify-center items-center w-full py-[16px] px-[32px] rounded-full bg-[#9659E5] gap-[10px]" onClick={handleSubmit} href={"#"}>
											<svg className="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" data-slot="icon" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"></path></svg>
											<p className="font-bold">Continue to payment</p>
										</Link>
									</div>
								</React.Fragment>
							)
						}
					</div>
				</div>
			</div>
		</React.Fragment >
	)
}

export default BrettfavreBook;