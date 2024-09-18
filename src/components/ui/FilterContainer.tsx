import React, { useState, useRef } from "react"

interface FilterContainerProps {
    types: string[],
    filterPrice: {
        min: number
        max: number
    },
    setFilterPrice: React.Dispatch<React.SetStateAction<{ min: number; max: number; }>>
}

const FilterContainer = ({types, filterPrice, setFilterPrice}: FilterContainerProps) => {

    const [flgCategory, setFlgCategory] = useState<boolean>(false)
    const [priceCategory, setPriceCategory] = useState<boolean>(false)
    const [selectedPrice, setSelectedPrice] = useState<number>(-1);

    const minRef = useRef<HTMLInputElement>(null);
    const maxRef = useRef<HTMLInputElement>(null);

    const priceList = [
        {
            max: 0,
            max: 25,
        },
        {
            min: 25,
            max: 50,
        },
        {
            min: 50,
            max: 75,
        },
        {
            min: 75,
            max: 100,
        },
        {
            min: 100,
            max: Infinity,
        },
    ]


    return (
        <div className="w-[350px]">
            <h1 className="text-3xl font-bold">Filters</h1>
            <div className="p-[5px] mt-[10px] border-b-2 border-b-[#302D34]">
                <div className="flex items-center justify-between" onClick={() => setFlgCategory(!flgCategory)}>
                    <div>
                        <p className="font-bold text-xl">Category</p>
                        <p>Actors</p>
                    </div>
                    <svg className={`transition-all duration-400 ${flgCategory && "rotate-[180deg]"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" width="20" height="20"><path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd"></path></svg>
                </div>

                <div className={`mt-[20px] ${flgCategory && 'hidden'}`}>
                    <div className="relative">
                        <svg className="absolute z-10 fill-white scale-[1.5] top-[17px] left-[20px]" width="10" height="10" viewBox="0 0 40 40" aria-hidden="true"><path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"></path></svg>
                        <input type="text" className="bg-[rgb(48, 45, 52)] border-none outline-none h-[44px] border-[1.5px] border-[3F3B45] w-full rounded-full text-[16px] pl-[40px]" />
                    </div>

                    <div className="scrollable-div px-[10px] overflow-auto max-h-[250px] my-[20px]">
                        {
                            types.map((type, index) => (
                                <label key={index} className="flex justify-between items-center" id={`card-${type}`}>
                                    <label className="text-[16px] my-[10px]" htmlFor={`card-${type}`}>{type}</label>
                                    <input type="checkbox" className="accent-[#8036e0] w-[18px] h-[18px]"/>
                                </label>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="p-[5px] mt-[10px]">
                <div className="flex items-center justify-between" onClick={() => setPriceCategory(!priceCategory)}>
                    <div>
                        <p className="font-bold text-xl">Category</p>
                    </div>
                    <svg className={`transition-all duration-400 ${priceCategory && "rotate-[180deg]"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" width="20" height="20"><path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd"></path></svg>
                </div>

                <div className={`mt-[20px] ${priceCategory && 'hidden'}`}>

                    <div className="px-[10px] overflow-auto max-h-[250px] my-[20px]">
                        {
                            priceList.map((price, index) => (
                                <label key={index} className="flex justify-between items-center" id={`card-${index}`}
                                    onClick={() => {
                                        setSelectedPrice(index);
                                        setFilterPrice({
                                            min: price.min,
                                            max: price.max,
                                        });
                                    }}
                                >
                                    <label className="text-[16px] my-[10px]" htmlFor={`card-${index}`}>
                                        {`$${price.min}-$${price.max}`}
                                    </label>
                                    <input type="radio" name="price_list" checked={index === selectedPrice} className="accent-[#8036e0] w-[25px] h-[25px]"/>
                                </label>
                            ))
                        }
                    </div>

                    <div className="">
                        <h1 className="text-xl">
                            Custom
                        </h1>

                        <div className="flex justify-between items-center mt-[10px]">
                            <div className="relative">
                                <input type="number" ref={minRef} className="pl-[22px] bg-[#323035] border-[#635969] outline-none h-[44px] border-[1.5px] w-full rounded-md text-[16px]" placeholder="Min" min={1}/>
                                <p className="absolute top-[9px] left-[10px] text-[#817a8a]">$</p>
                            </div>
                            <span className="mx-[10px]"> to </span>
                            <div className="relative">
                                <input type="number" ref={maxRef} className="pl-[22px] bg-[#323035] border-[#635969] outline-none h-[44px] border-[1.5px] w-full rounded-md text-[16px]" placeholder="Max" />
                                <p className="absolute top-[9px] left-[10px] text-[#817a8a]">$</p>
                            </div>
                            <button className="mx-[10px] border-none outline-none bg-[#484552] p-[10px] rounded-full" onClick={() => {
                                setFilterPrice({
                                    min: Number(minRef.current.value),
                                    max: Number(maxRef.current.value),
                                });
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" width="20" height="20"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FilterContainer