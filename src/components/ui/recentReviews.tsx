import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import ReviewCarousel from "../carousel/reviewCarousel"
import { Cross2Icon } from '@radix-ui/react-icons';

export interface RecentReviewsProps {
    rate: number,
    amount: number,
    desc: string,
    examples: {
        name: string,
        date: string,
        feed: string,
        url: string
    }[]
}

const RecentReviews = (props: RecentReviewsProps) => {

    const [flgProg, setFlgProg] = useState<number>(-1);

    const progress_data = [
        {
            percent: 100,
            value: 5,
            reviews: [
                {
                    name: "Anonymuse",
                    star: 5,
                    date: "September 20, 2024",
                },
                {
                    name: "Anonymuse",
                    star: 5,
                    date: "September 20, 2024",
                },
                {
                    name: "Anonymuse",
                    star: 5,
                    date: "September 20, 2024",
                },
                {
                    name: "Anonymuse",
                    star: 5,
                    date: "September 20, 2024",
                },
                {
                    name: "Anonymuse",
                    star: 5,
                    date: "September 20, 2024",
                },
            ]
        },
        {
            percent: 100,
            value: 4,
            reviews: [
                {
                    name: "Anonymuse",
                    star: 5,
                    date: "September 20, 2024",
                },
                {
                    name: "Anonymuse",
                    star: 5,
                    date: "September 20, 2024",
                },
                {
                    name: "Anonymuse",
                    star: 5,
                    date: "September 20, 2024",
                },
                {
                    name: "Anonymuse",
                    star: 5,
                    date: "September 20, 2024",
                },
                {
                    name: "Anonymuse",
                    star: 5,
                    date: "September 20, 2024",
                },
            ]
        },
        {
            percent: 100,
            value: 3,
            reviews: [
                {
                    name: "Anonymuse",
                    star: 5,
                    date: "September 20, 2024",
                },
                {
                    name: "Anonymuse",
                    star: 5,
                    date: "September 20, 2024",
                },
                {
                    name: "Anonymuse",
                    star: 5,
                    date: "September 20, 2024",
                },
                {
                    name: "Anonymuse",
                    star: 5,
                    date: "September 20, 2024",
                },
                {
                    name: "Anonymuse",
                    star: 5,
                    date: "September 20, 2024",
                },
            ]
        },
        {
            percent: 100,
            value: 2,
            reviews: [
                {
                    name: "Anonymuse",
                    star: 5,
                    date: "September 20, 2024",
                },
                {
                    name: "Anonymuse",
                    star: 5,
                    date: "September 20, 2024",
                },
                {
                    name: "Anonymuse",
                    star: 5,
                    date: "September 20, 2024",
                },
                {
                    name: "Anonymuse",
                    star: 5,
                    date: "September 20, 2024",
                },
                {
                    name: "Anonymuse",
                    star: 5,
                    date: "September 20, 2024",
                },
            ]
        },
        {
            percent: 100,
            value: 1,
            reviews: [
                {
                    name: "Anonymuse",
                    star: 5,
                    date: "September 20, 2024",
                },
                {
                    name: "Anonymuse",
                    star: 5,
                    date: "September 20, 2024",
                },
                {
                    name: "Anonymuse",
                    star: 5,
                    date: "September 20, 2024",
                },
                {
                    name: "Anonymuse",
                    star: 5,
                    date: "September 20, 2024",
                },
                {
                    name: "Anonymuse",
                    star: 5,
                    date: "September 20, 2024",
                },
            ]
        },
    ]

    return (
        <div className="rounded-[20px] bg-[#201E23] overflow-hidden mt-[5px] p-[24px]">
            <h1 className="text-[20px] font-bold">Recent reviews</h1>
            <div className="flex items-center justify-start gap-[5px] text-[rgb(191, 186, 196)] mt-[5px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path></svg>
                <span className="underline">{props.rate}({props.amount})</span>
            </div>
            <p className="mt-[20px] font-[500] text-[17px]">{props.desc}</p>

            <div className="flex items-center justify-start gap-[5px] text-[#817a8a] mt-[20px]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#C7BDFF" aria-hidden="true" data-slot="icon" fontWeight="solid" stroke="#C7BDFF" width="16" height="16"><path fill-rule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clip-rule="evenodd"></path></svg>
                <p className="#817a8a text-[14px]">
                    Review summary generated by Cameo AI
                </p>
            </div>
            <ReviewCarousel data={props.examples} />

            <Dialog.Trigger asChild>
                <span className="w-full block rounded-full p-[12px] border border-[#F2F1F399] text-center font-bold mt-[20px] hover:bg-[#F2F1F314]" onClick={() => setFlgProg(-1)}>Show all {props.amount} reviews</span>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContent rounded-[40px] bg-[#201E23] overflow-hidden mt-[5px] p-[24px]">
                    <div className='relative'>
                        <Dialog.Close asChild>
                            <button className="IconButton" aria-label="Close">
                                <Cross2Icon className='text-white'/>
                            </button>
                        </Dialog.Close>
                        <h1 className="text-[20px] font-bold">Recent reviews</h1>
                        <div className="flex items-center justify-start gap-[5px] text-[rgb(191, 186, 196)] mt-[5px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path></svg>
                            <span className="underline">{props.rate}({props.amount})</span>
                        </div>
                        <p className="mt-[20px] font-[500] text-[17px]">{props.desc}</p>

                        <div className="flex items-center justify-start gap-[5px] text-[#817a8a] mt-[20px]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#C7BDFF" aria-hidden="true" data-slot="icon" fontWeight="solid" stroke="#C7BDFF" width="16" height="16"><path fill-rule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clip-rule="evenodd"></path></svg>
                            <p className="#817a8a text-[14px]">
                                Review summary generated by Cameo AI
                            </p>
                        </div>
                    </div>

                    <div className="mt-[40px]">
                        <h1 className="text-[18px] font-bold">Most popular for</h1>
                        <p className="text-[#817a8a]">Other, Roast, Birthday</p>

                        <div className="">
                            {
                                progress_data.map((item, index) => (
                                    <div className={`flex items-center justify-start gap-[10px] ${index === flgProg ? "text-[#f2f1f3]" : "text-[#817a8a]"} mt-[5px] cursor-pointer`} key={index} onClick={() => setFlgProg(index)}>
                                        <div className="flex justify-center items-center gap-[5px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" viewBox="0 0 256 256"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path></svg>
                                            {item.value}
                                        </div>
                                        <div className="flex-1 h-[4px] rounded-full bg-[#817a8a] overflow-hidden" key={index}>
                                            <div className={`bg-[#f2f1f3] w-[${item.percent}%] h-full`}>
                                            </div>
                                        </div>
                                        <p> {item.percent} %</p>
                                    </div>
                                ))
                            }
                        </div>

                    </div>

                    <div className="mt-[50px]">
                        {
                            flgProg === -1 ? progress_data.map((progess, professIndex) => (
                                progess.reviews.map((item, index) => (
                                    <div className='border-t border-t-[#817a8a] py-[20px] min-h-[160px]' key={professIndex.toString() + "_" + index.toString()}>
                                        <p>{item.name}</p>
                                        <div className='flex items-center justify-start gap-[5px]'>
                                            {
                                                new Array(item.star).fill(0).map((_, starIndex) => (
                                                    <svg key={starIndex} className='fill-yellow-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" fontWeight="solid" stroke="currentColor" width="16" height="16"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.759 1.365L12 18.678l-5.39 2.92c-.795.668-1.958-.22-1.76-1.365l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg>
                                                ))
                                            }
                                        </div>

                                        <p className='mt-[20px] text-[#817a8a]'>{item.date}</p>
                                    </div>
                                ))
                            )) : progress_data[flgProg].reviews.map((item, index) => (
                                <div className='border-t border-t-[#817a8a] py-[20px] min-h-[160px]' key={index.toString()}>
                                    <p>{item.name}</p>
                                    <div className='flex items-center justify-start gap-[5px]'>
                                        {
                                            new Array(item.star).fill(0).map((_, starIndex) => (
                                                <svg key={starIndex} className='fill-yellow-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" fontWeight="solid" stroke="currentColor" width="16" height="16"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.759 1.365L12 18.678l-5.39 2.92c-.795.668-1.958-.22-1.76-1.365l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg>
                                            ))
                                        }
                                    </div>
                                    <p className='mt-[20px] text-[#817a8a]'>{item.date}</p>
                                </div>
                            ))
                        }
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </div>
    )
}

export default RecentReviews