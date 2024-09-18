'use client'
import * as React from "react"
import Link from "next/link"
import Header from "@/components/ui/header"
import FooterSection from "@/components/ui/footer-section"
import FantasyFootballBrand from "@/components/ui/fantasyFootballBrand"
import FantasyStars from "@/components/ui/fantasyStars"
import ExploreStars from "@/components/ui/exploreStars";
import HowCameoWorks from "@/components/ui/howCameoWorks"
import Faq from "@/components/ui/faq"
import BottomSticky from "@/components/bottom-sticky"

type startype = {
    img: string,
    title: string,
    desc: string,
    rate: number,
    fan: boolean
}

const Page = () => {
    const stars:startype[] = [
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
    return (
        <React.Fragment>
            <div className="relative z-50 bg-black">
                <div className="px-12">
                    <Header className="bg-black" />
                    <FantasyFootballBrand />
                    <FantasyStars />

                    <h1 className="text-4xl font-[800]">See our picks</h1>
                    <ExploreStars title="Get a weekly league recap" stars={stars} />
                    <ExploreStars title="Type up the league group chat" stars={stars} />
                    <ExploreStars title="Trash talk your matchup" stars={stars} />
                    <ExploreStars title="Get advice on your roster" stars={stars} />

                    <Link href={"/browse/actors"} className="block w-full px-[32px] py-[16px] border border-white rounded-full text-center font-bold hover:bg-gray-800">
                        View all talent picks
                    </Link>
                    <HowCameoWorks />

                    <Faq />
                </div>
                <FooterSection />
            </div>
            <BottomSticky />
        </React.Fragment>
    )
}

export default Page;