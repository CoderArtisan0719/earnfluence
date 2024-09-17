'use client'
import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

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

const ExploreContainer = () => {

    const [stars, setStars] = useState<StarProps[]>([])
    const [paginate, setPaginate] = useState<number>(1)

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

    return (
        <div className="flex justify-between items-start gap-[10px]">
            <div className="flex-1">

                <div className="flex justify-between items-center mb-[20px]">
                    <h1 className="text-xl">
                        {stars.length} results
                    </h1>


                    {/* <div className="">
                        <button className="border border-white rounded-full px-[15px] py-[10px] flex justify-center items-center gap-[10px]">
                            Featured
                            <FaAngleDown />
                        </button>
                    </div> */}
                </div>
                <StarsList 
                    className=""
                    stars={stars.slice(amountOfDefaultCards * (paginate - 1), amountOfDefaultCards * paginate)} 
                    paginate={paginate}
                    length={Math.ceil(stars.length / amountOfDefaultCards)}
                    setPaginate={middleware_setPaginate}
                />
            </div>
            <FilterContainer types={default_types} filterPrice={filterPrice} setFilterPrice={setFilterPice} />
        </div>
    )
}

export default ExploreContainer