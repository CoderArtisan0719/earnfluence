'use client'

import { useState, useEffect } from "react"
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

import { StarProps } from "./ExploreContainer"
import StarCard from "../cards/StarCard"

interface StarsListProps {
    stars: StarProps[],
    className: string,
    paginate: number,
    length: number
    setPaginate: (num: {num: number}) => void,
}

const StarsList = (props: StarsListProps) => {

    useEffect(() => {
        console.log("props.stars: ", props.stars.length)
    })

    return (
        <div className="">
            <div className="w-full grid justify-start items-start flex-wrap gap-[1%]" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, auto))"}}>
                {
                    props.stars.map((star, index) => (
                        <StarCard key={index} star={star} className="" />
                    ))
                }
            </div>

            <div className="flex justify-center items-center gap-[10px] text-[20px] mt-[30px]">
                <BsArrowLeftCircle  className="cursor-pointer" onClick={() => props.setPaginate(props.paginate - 1)} />
                <p>
                    {`Page ${props.paginate} of ${props.length}`}
                </p>
                <BsArrowRightCircle className="cursor-pointer" onClick={() => props.setPaginate(props.paginate + 1)} />
            </div>
        </div>
    )
}

export default StarsList