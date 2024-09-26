'use client'

import { navBarContents } from "@/data/navbar-contents"
import { recentViewd, popularCategories } from "./searchCont"
import { useEffect, useState } from "react"
import Link from "next/link"
import { CiCircleQuestion } from "react-icons/ci";
import Image from "next/image"

interface SearchContainer {
	searchValue: string
}
interface queryDataProps {
	img?: string,
	txt: string,
	url: string
}

const SearchContainer = ({searchValue}: SearchContainer) => {

	const [queryData, setQueryData] = useState<queryDataProps[]>([]);

	useEffect(() => {
		const tmp: queryDataProps[] = [];
		recentViewd.forEach(item => {
			tmp.push({
				img: item.img,
				txt: item.title,
				url: item.url
			})
		})

		popularCategories.forEach(item => {
			tmp.push({
				img: item.img[0],
				txt: item.title,
				url: item.url
			})
		});
		navBarContents.forEach(types => {
			types.suburls.forEach(suburl => {
				suburl.title.indexOf("View all") === -1 &&
				tmp.push({
					txt: suburl.title,
					url: suburl.url
				})
			})
		});
		setQueryData([...tmp]);
	}, []);


	useEffect(() => {
		console.log(queryData)
	}, [queryData])

	return (
		<div className="z-auto bg-[#020617] border border-slate-800 py-[24px] rounded-[24px]">
			<p className="text-2xl px-[24px]">
				Search results for "{searchValue}"
			</p>

			<div className="max-h-[300px] overflow-auto scrollbar-hide mt-[10px] text-[24px] text-gray-300">
				{
					queryData.filter(item => item.txt.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
						<Link href={item.url} key={index} className="flex items-center px-[24px] gap-4 justify-start cursor-pointer py-[5px] hover:bg-slate-700">
							{item.img ? 
								<Image
									src={item.img}
									alt={item.txt}
									objectFit="cover"
									width={24}
									height={24}
									className="rounded-full w-[40px] h-[40px]"
								/>
							:(
								<CiCircleQuestion className="w-[40px] h-[40px]" />
							)}
							<span className="text-[20px]">{item.txt}</span>
						</Link>
					))
				}
			</div>
		</div>
	)
}

export default SearchContainer