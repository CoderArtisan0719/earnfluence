'use client'
import * as React from "react"
import Header from "@/components/ui/header"
import FooterSection from "@/components/ui/footer-section"
import BottomSticky from "@/components/bottom-sticky"
import LinkController from "@/components/ui/linkController"
import CameoPick from "@/components/ui/cameoPick"
import WhatTOChat from "@/components/ui/whatToChat"
import AboutOne from "@/components/ui/aboutOne"
import RecentReviews, { RecentReviewsProps } from "@/components/ui/recentReviews"
import Promote from "@/components/ui/promote"

export type LinkType = {
    name: string,
    url: string
}

const Page = () => {

    const links:LinkType[] = [
        {
            name: "Creators",
            url: "#"
        },
        {
            name: "Influencers",
            url: "#"
        },
        {
            name: "Youbute",
            url: "#"
        },
        {
            name: "Shoenice",
            url: "#"
        }
    ]

    const person = {
        name: "Shoenice",
        desc: "I am a famous tiktok and YouTube entertainer. My cameos are life-chaning !!",
        date: "Nav 18, 2020",
        links: [
            {
                name: "YouBute",
                url: "#"
            },
            {
                name: "Tiktok",
                url: "#"
            },
        ]
    }

    const recent_reviews: RecentReviewsProps = {
        rate: 4.97,
        amount: 7190,
        desc: "Shoenice's Cameo videos provide over-the-top comedic performances where he engages in wild stunts like eating spicy foods or strange objects while wishing the recipient a creative happy birthday or other message. While extreme, many reviews note Shoenice's charisma and comedic timing shine through in his absurdist approach. Prospective buyers need to be aware of the outrageous nature of his videos and humor.",
        examples: [
            {
                name: "Jummy Rankin",
                date: "Wed May 31, 2023",
                feed: "Delivered in less that 20 min and atuck to the script",
                url: "#"
            },
            {
                name: "Jummy Rankin",
                date: "Wed May 31, 2023",
                feed: "Delivered in less that 20 min and atuck to the script",
                url: "#"
            },
            {
                name: "Jummy Rankin",
                date: "Wed May 31, 2023",
                feed: "Delivered in less that 20 min and atuck to the script",
                url: "#"
            },
            {
                name: "Jummy Rankin",
                date: "Wed May 31, 2023",
                feed: "Delivered in less that 20 min and atuck to the script",
                url: "#"
            }
        ]
    }

    return (
        <React.Fragment>
            <div className="relative z-50 bg-black">
                <div className="px-12">
                    <Header className="bg-black" />
                    <div className="w-[640px] m-auto mt-[40px]">
                        <LinkController links={links} />
                        <CameoPick />
                        <WhatTOChat />
                        <AboutOne {...person} />
                        <RecentReviews {...recent_reviews} />
                        <Promote />
                    </div>
                </div>
                <FooterSection />
            </div>
            <BottomSticky />
        </React.Fragment>
    )
}

export default Page;