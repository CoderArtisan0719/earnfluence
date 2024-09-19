import Link from "next/link";
import Profile from "./profile";
import VideoCarousel from "../carousel/videoCarousel";

const CameoPick = () => {

    const reasons = [
        {
            txt: "🎂 Say happy birthday",
            url: "#",
        },
        {
            txt: "🏈 Fantasy football",
            url: "#",
        },
        {
            txt: "🤗 Send a pep talk",
            url: "#",
        },
        {
            txt: "🔥 Roast someone",
            url: "#",
        },
        {
            txt: "💜 Get advice",
            url: "#",
        },
        {
            txt: "🙋‍♀️ Ask a question",
            url: "#",
        },
        {
            txt: "💼 Promote a business",
            url: "#",
        },
        {
            txt: "💭 Other",
            url: "#",
        },
    ]

    const expect_things = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#817A8A" viewBox="0 0 256 256"><path d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM136,75.31,152.69,92,68,176.69,51.31,160ZM48,208V179.31L76.69,208Zm48-3.31L79.32,188,164,103.31,180.69,120Zm96-96L147.32,64l24-24L216,84.69Z"></path></svg>,
            text: "Write a short set of instructions",
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#817A8A" viewBox="0 0 256 256"><path d="M251.77,73a8,8,0,0,0-8.21.39L208,97.05V72a16,16,0,0,0-16-16H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V159l35.56,23.71A8,8,0,0,0,248,184a8,8,0,0,0,8-8V80A8,8,0,0,0,251.77,73ZM192,184H32V72H192V184Zm48-22.95-32-21.33V116.28L240,95Z"></path></svg>,
            text: "Get your video",
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#817A8A" viewBox="0 0 256 256"><path d="M111.49,52.63a15.8,15.8,0,0,0-26,5.77L33,202.78A15.83,15.83,0,0,0,47.76,224a16,16,0,0,0,5.46-1l144.37-52.5a15.8,15.8,0,0,0,5.78-26Zm-8.33,135.21-35-35,13.16-36.21,58.05,58.05Zm-55,20,14-38.41,24.45,24.45ZM156,168.64,87.36,100l13-35.87,91.43,91.43ZM160,72a37.8,37.8,0,0,1,3.84-15.58C169.14,45.83,179.14,40,192,40c6.7,0,11-2.29,13.65-7.21A22,22,0,0,0,208,23.94,8,8,0,0,1,224,24c0,12.86-8.52,32-32,32-6.7,0-11,2.29-13.65,7.21A22,22,0,0,0,176,72.06,8,8,0,0,1,160,72ZM136,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm101.66,82.34a8,8,0,1,1-11.32,11.31l-16-16a8,8,0,0,1,11.32-11.32Zm4.87-42.75-24,8a8,8,0,0,1-5.06-15.18l24-8a8,8,0,0,1,5.06,15.18Z"></path></svg>,
            text: "Share the magic",
        },
    ]

    return (
        <div className="rounded-[20px] bg-[#201E23] overflow-hidden">
            <div className="bg-[#302d34] py-[12px] text-center">
                <Link href="#">
                    <span className="underline text-[#ffc294] mr-[5px]">Cameo's Pick</span>
                    🏈
                </Link>
            </div>

            <div className="p-[24px]">
                <Profile img="https://cdn.cameo.com/resizer/en1OxW1_5_avatar-laC4vTwWs.jpg" name="Shoenice" role="YouTube Comedian" />
                <VideoCarousel />

                <h1 className="text-[24px]">Get a custom video </h1>
                <div className="flex justify-start items-center text-[14px] mt-[10px]">
                    <div className="pr-[10px] text-[14px]">
                        <p className="text-[#bfbac4]">Price</p>
                        <p className="font-bold">$22+</p>
                    </div>
                    <div className="px-[10px] border-x border-x-gray-600 text-[14px]">
                        <p className="text-[#bfbac4] text-[14px]">Avaliable for</p>
                        <div className="flex items-center justify-start gap-[5px] font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F5F384" viewBox="0 0 256 256"><path d="M213.85,125.46l-112,120a8,8,0,0,1-13.69-7l14.66-73.33L45.19,143.49a8,8,0,0,1-3-13l112-120a8,8,0,0,1,13.69,7L153.18,90.9l57.63,21.61a8,8,0,0,1,3,12.95Z"></path></svg>
                            <span> 24hr delivery </span>
                        </div>
                    </div>
                    <div className="pl-[10px] text-[14px]">
                        <p className="text-[#bfbac4] text-[14px]">Reviews</p>
                        <div className="flex items-center justify-start gap-[5px] font-bold">
                            <svg className="fill-yellow-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path></svg>
                            <span>4.97(7190)</span>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <Link href={"#"} className="flex items-center justify-center gap-[10px] rounded-full p-[12px] bg-[#8036E0] mt-[20px] font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"></path></svg>
                        Book a person video $22 +
                    </Link>

                    <Link href={"#"} className="text-center underline text-[#bfbac4] mt-[10px] block">
                        Secure payments & money back gurantee
                    </Link>
                </div>
                <div className="flex items-center justify-start p-[12px] gap-[10px] bg-[#302d33] rounded-[15px] my-[30px]">
                    <div className="flex items-center justify-center w-[40px] h-[40px] bg-black rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z"></path></svg>
                    </div>
                    <div>
                        <p className="font-bold">BUY 1, GET 1 FOR 20% OFF</p>
                        <p className="text-[#bfbac4]">Buy a Fantasy Football video and get one 20$ off thru Jan 5. <Link href={"#"} className="underline">Terms apply.</Link></p>
                    </div>
                </div>

                <div className="">
                    <h1 className="text-[#bfbac4] text-[17px]">REASONS TO GET A VIDEO</h1>
                    <div className="flex justify-start items-center flex-wrap gap-[10px] mt-[15px]">
                        {
                            reasons.map((reason, index) => (
                                <Link href={reason.url} key={index} className="flex items-center justify-center gap-[5px] rounded-full p-[12px] border border-[#F2F1F399] font-bold">
                                    {reason.txt}
                                </Link>
                            ))
                        }
                    </div>
                </div>

                <div className="mt-[30px]">
                    <p className="text-[#bfbac4]">
                        Shoenice's personalized videos are the stuff of legend! Their fans can expect nothing short of pure chaos and hilarity when ordering a Cameo. Whether it's... <Link href={"#"} className="color-[#f2f1f3] font-bold">Read more</Link>
                    </p>
                    <div className="flex items-center justify-start gap-[5px] text-[13px] mt-[15px]">
                        <svg className="text-[#C7BDFF]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" weight="solid" stroke="currentColor" width="16" height="16"><path fill-rule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clip-rule="evenodd"></path></svg>
                        <p className="text-[#817A8A]">
                            Written by Cameo Ai using customer examples
                        </p>
                    </div>

                    <div className="mt-[20px]">
                        <p className="text-[#817a8a] text-[14px]">
                            ✷ Average video length: <span className="text-[#f2f1f3] text-[15px] font-bold">30:43</span>
                        </p>
                        <p className="text-[#817a8a] text-[14px]">
                            ✷ Last complted video: <span className="text-[#f2f1f3] text-[15px] font-bold">today at 2:00 AM</span>
                        </p>
                    </div>

                    <div className="mt-[20px]">
                        <h1 className="mb-[20px] text-[#BFBAC4] text-[16px] font-bold">WHAT TO EXPECT</h1>
                        <div>
                            {
                                expect_things.map((item, index) => (
                                    <div className="flex justify-start items-center gap-[10px] mb-[5px]" key={index}>
                                        {item.icon}
                                        <p className="font-bold">{item.text}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CameoPick;