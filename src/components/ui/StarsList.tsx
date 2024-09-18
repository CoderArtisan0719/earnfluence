'use client'

import { useEffect } from "react"

import { StarProps } from "./ExploreContainer"
import StarCard from "../cards/StarCard"

interface StarsListProps {
    stars: StarProps[],
    className: string,
    setPaginate: (num: {num: number}) => void,
}

const StarsList = (props: StarsListProps) => {

    useEffect(() => {
        console.log("props.stars: ", props.stars.length)
    })

    return (
        <div className="">
            <div className="w-full grid justify-start items-start flex-wrap gap-[10px]" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"}}>
                {
                    props.stars.map((star, index) => (
                        <StarCard key={index} star={star} className="w-full" />
                    ))
                }
            </div>

            
        </div>
    )
}

export default StarsList