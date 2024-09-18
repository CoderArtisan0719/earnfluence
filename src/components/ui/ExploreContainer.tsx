'use client'
import React, { useEffect, useState } from "react";

// Icons
import { FaAngleDown } from "react-icons/fa6";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";


import StarsList from "./StarsList"
import FilterContainer from "./FilterContainer";

export interface StarProps {
    img: string,
    name: string,
    role: string,
    mark: number,
    follow: number,
    hr: number,
    price: number,
    zt: number,
    type: string
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick
}) => {
    return (
        <button className="whitespace-nowrap border border-white rounded-full px-[15px] py-[10px] flex justify-center items-center gap-[10px] hover:bg-[#111]"
            onClick={onClick}
        >
            {children}
        </button>
    )
}

const ExploreContainer = () => {

    const [stars, setStars] = useState<StarProps[]>([])
    const [paginate, setPaginate] = useState<number>(1)
    const [flgFilter, setFlgFilter] = useState<boolean>(true)

    const amountOfDefaultCards = 50;

    const default_types = [
        "TV",
        "Movie",
        "Professionals",
        "Featured",
        "Reality TV",
        "Musicians",
        "Film",
        "Comedy",
        "International",
        "Comedians"
    ]


    const imgList = [
        "https://cdn.cameo.com/resizer/avatar-g-Jxp3ANe.jpg",
        "https://cdn.cameo.com/resizer/avatar-g-Jxp3ANe.jpg",
        "https://cdn.cameo.com/resizer/w_zj-a9dm_Y2xW0hyav-D768D4E3-3A25-4AF4-848E-89CA0E62BFEC.jpg",
        "https://cdn.cameo.com/resizer/2sqT23WAB_avatar-1670025985974.jpg"
    ]

    const [filterPrice, setFilterPice] = useState<{min: number, max: number}>({
        min: 0,
        max: Infinity
    })
    useEffect(() => {
        const tmp = new Array(1000).fill("").map((_, index) => {
            return {
                img: imgList[Math.floor(Math.random() * imgList.length)],
                name: 'Jon Lovitz',
                role: "Comedian - Saturday Night Live",
                mark: 4.96,
                follow: 1335,
                hr: 24,
                zt: 577,
                price: Math.floor(Math.random() * 120),
                type: default_types[Math.floor(Math.random() * default_types.length)],
            }
        }
        )

        setStars(tmp)
    }, [])

    useEffect(() => {
        console.log("filterPrice: ", filterPrice)
    }, [filterPrice]);

    function middleware_setPaginate(num: {num: number}) {
        if (Number(num) == 0 || Number(num) > Math.ceil(stars.length / amountOfDefaultCards)) return
        setPaginate(Number(num))
    }

    useEffect(() => {
        console.log("flgFilter: ", flgFilter)
    }, [flgFilter]);

    return (
        <div>
            <div className="flex justify-between items-start gap-[30px]">
                <div className="flex-1">
                    <div className="flex justify-between items-center mb-[20px] flex-wrap gap-[20px]">
                        <h1 className="text-xl whitespace-nowrap">
                            {stars.length} results
                        </h1>
                        <div className="flex justify-center items-center gap-[10px]">
                            <Button>
                                Featured
                                <FaAngleDown />
                            </Button>
                            <Button
                                onClick={() => setFlgFilter(!flgFilter)}
                            >
                                <HiAdjustmentsHorizontal />
                                {`${flgFilter ? "Hide" : "Show"}`} Filters
                            </Button>
                            <Button>
                                <BsFillLightningChargeFill className="fill-yellow-400" />
                                24 Hour Delivery
                            </Button>
                        </div>
                    </div>
                    <StarsList 
                        className=""
                        stars={stars.slice(amountOfDefaultCards * (paginate - 1), amountOfDefaultCards * paginate)} 
                        setPaginate={middleware_setPaginate}
                    />
                </div>
                {
                    flgFilter && <FilterContainer types={default_types} filterPrice={filterPrice} setFilterPrice={setFilterPice} />
                }
            </div>

            <div className="">
                <div className="flex justify-center items-center gap-[10px] text-[20px] mt-[30px]">
                    <BsArrowLeftCircle  className="cursor-pointer" onClick={() => setPaginate(paginate - 1)} />
                    <p>
                        {`Page ${paginate} of ${Math.ceil(stars.length / amountOfDefaultCards)}`}
                    </p>
                    <BsArrowRightCircle className="cursor-pointer" onClick={() => setPaginate(paginate + 1)} />
                </div>
            </div>
        </div>
    )
}

export default ExploreContainer