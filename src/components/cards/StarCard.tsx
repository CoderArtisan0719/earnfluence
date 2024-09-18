
import Image from "next/image"
import { StarProps } from "../ui/ExploreContainer"
import {
    IconStarFilled,
    IconBolt,
  } from "@tabler/icons-react";

interface StarCardProps {
    star: StarProps
    className: string
}

const StarCard = ({ star }: StarCardProps) => {
    return (
        <div className="rounded-[15px] overflow-hidden mb-[10px]">

            <div className="relative w-full pb-[120%] border rounded-3xl overflow-hidden">
                <Image
                    src={star.img}
                    alt={star.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    className="hover:scale-105 transition-all duration-300"
                />
            </div>

            <div className="flex flex-col gap-1 mt-2">
                <p className="text-sm font-medium">James Buckley</p>
                <p className="text-sm text-gray-400">Actor - The Inbetweeners</p>
                <div className="flex items-center">
                    <IconStarFilled size={12} color="yellow" />
                    <span className="font-medium text-sm px-1">5.00</span>
                    <span className="text-sm text-gray-400 mr-2">(10233)</span>
                    <IconBolt size={12} color="yellow" />
                    <span className="font-medium text-sm px-1">24hr</span>
                </div>
                <p className="font-medium text-sm px-1">$50</p>
            </div>
        </div>
    )
}

export default StarCard