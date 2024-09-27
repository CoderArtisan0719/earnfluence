'use client'
import * as React from "react"
import Header from "@/components/ui/header"
import FooterSection from "@/components/ui/footer-section"
import BottomSticky from "@/components/bottom-sticky"
import KindFirst from "@/components/carousel/kindFirst"
import RoundCardCarousel from "@/components/ui/RoundCardsCarousel"

type startype = {
    img: string,
    title: string,
    desc: string,
    rate: number,
    fan: boolean
}

export const stars: startype[] = [
    {
        img: "https://cdn.cameo.com/resizer/jb0uPSgZa_PBxLAovjs.png",
        title: "Coach Jim E Mora",
        desc: "NFL Coach",
        rate: 50,
        fan: true
    },
    {
        img: "https://cdn.cameo.com/resizer/jb0uPSgZa_PBxLAovjs.png",
        title: "Coach Jim E Mora",
        desc: "NFL Coach",
        rate: 50,
        fan: true
    },
    {
        img: "https://cdn.cameo.com/resizer/jb0uPSgZa_PBxLAovjs.png",
        title: "Coach Jim E Mora",
        desc: "NFL Coach",
        rate: 50,
        fan: true
    },
    {
        img: "https://cdn.cameo.com/resizer/jb0uPSgZa_PBxLAovjs.png",
        title: "Coach Jim E Mora",
        desc: "NFL Coach",
        rate: 50,
        fan: true
    },
    {
        img: "https://cdn.cameo.com/resizer/jb0uPSgZa_PBxLAovjs.png",
        title: "Coach Jim E Mora",
        desc: "NFL Coach",
        rate: 50,
        fan: true
    },
    {
        img: "https://cdn.cameo.com/resizer/jb0uPSgZa_PBxLAovjs.png",
        title: "Coach Jim E Mora",
        desc: "NFL Coach",
        rate: 50,
        fan: true
    },
    {
        img: "https://cdn.cameo.com/resizer/jb0uPSgZa_PBxLAovjs.png",
        title: "Coach Jim E Mora",
        desc: "NFL Coach",
        rate: 50,
        fan: true
    },
    {
        img: "https://cdn.cameo.com/resizer/jb0uPSgZa_PBxLAovjs.png",
        title: "Coach Jim E Mora",
        desc: "NFL Coach",
        rate: 50,
        fan: true
    },
]
const Page = () => {
    return (
        <React.Fragment>
            <div className="relative z-50 bg-black max-w-[1680px] m-auto">
                <div className="px-12">
                    <Header className="bg-black" />

                    <h1 className="text-4xl font-bold mt-[40px]">Following</h1>

                    <div className="flex flex-col items-center mt-[20px]">
                        <p className="text-xl font-bold mb-[20px]">You aren't following anyone</p>

                        <p className="flex items-center gap-[5px] text-gray-300">
                            Follow talent by pressing
                            <svg className="text-[#45FFFF] bg-[#3e3e3e] p-[3px] " xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="Styled__UserPlusIcon-sc-1ekz418-7 XOIta"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                            while browsing or add
                        </p>

                        <p className="text-gray-300">them right from their profile page.</p>
                    </div>

                    <RoundCardCarousel />

                    <KindFirst stars={stars} title="Recently viewed" />

                    <KindFirst stars={stars} title="Featured" />
                </div>
                <FooterSection />
            </div>
            <BottomSticky />
        </React.Fragment>
    )
}

export default Page;