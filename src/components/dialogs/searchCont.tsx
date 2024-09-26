import { navBarContents } from "@/data/navbar-contents";
import Image from "next/image";
import Link from "next/link";

export const recentViewd = [
	{
		img: "https://cdn.cameo.com/resizer/92VHnXPl6_avatar-1691981166629.jpg",
		title: "Jesse Palmer",
		url: "jesse-palmer"
	},
	{
		img: "https://cdn.cameo.com/resizer/en1OxW1_5_avatar-laC4vTwWs.jpg",
		title: "Shoenice",
		url: 'shoenice'
	},
	{
		img: "https://cdn.cameo.com/resizer/zg0zZo9ok1_avatar-6Q7B8u3sb.jpg",
		title: "SoYTiet",
		url: 'soytiet'
	},
	{
		img: "https://cdn.cameo.com/resizer/jb0uPSgZa_PBxLAovjs.png",
		title: "Brett Favre",
		url: 'brett-favre'
	},
	{
		img: "https://cdn.cameo.com/resizer/HvjKGeZZR_avatar-1690931054617.jpg",
		title: "Ed Marinaro",
		url: 'ed-marinaro'
	},
]

export const popularCategories = [
	{
		img: ["https://cdn.cameo.com/resizer/92VHnXPl6_avatar-1691981166629.jpg", "https://cdn.cameo.com/resizer/92VHnXPl6_avatar-1691981166629.jpg", "https://cdn.cameo.com/resizer/92VHnXPl6_avatar-1691981166629.jpg"],
		title: "The Office",
		url: "comedians"
	},
	{
		img: ["https://cdn.cameo.com/resizer/en1OxW1_5_avatar-laC4vTwWs.jpg", "https://cdn.cameo.com/resizer/en1OxW1_5_avatar-laC4vTwWs.jpg", "https://cdn.cameo.com/resizer/en1OxW1_5_avatar-laC4vTwWs.jpg"],
		title: "Harry Potter",
		url: "musicians"
	},
	{
		img: ["https://cdn.cameo.com/resizer/HvjKGeZZR_avatar-1690931054617.jpg", "https://cdn.cameo.com/resizer/HvjKGeZZR_avatar-1690931054617.jpg", "https://cdn.cameo.com/resizer/HvjKGeZZR_avatar-1690931054617.jpg"],
		title: "Survivor",
		url: "realitytv"
	},
]

const SearchCont = () => {
	return (
		<div className="z-auto bg-[#020617] border border-slate-800 p-[24px] rounded-[24px]">
			<div>
				<h1 className="text-xl font-bold">Recently viewed</h1>
				<div className="flex items-center justify-between mt-[20px]">
					{
						recentViewd.map((item, index) => (
							<Link href={`/${item.url}`} key={index} className="flex flex-col items-center gap-[10px] mt-[10px]">
								<Image
									src={item.img}
									alt={item.title}
									width={72}
									height={72}
									className="w-[72px] h-[72px] rounded-full"
									objectFit="cover"
								/>
								<p className="text-[12px] font-bold">{item.title}</p>
							</Link>
						))
					}
				</div>
			</div>

			<div className="mt-[20px]">
				<h1 className="text-xl font-bold">Popular categories</h1>

				<div className="flex items-center justify-between gap-[10px] mt-[10px]">
					{
						popularCategories.map((item, index) => (
							<Link key={index} className="block flex-1 p-[8px] bg-slate-900 rounded-[10px] text-center" href={item.url}>
								<div className="flex justify-center items-center">
									<Image
										src={item.img[0]}
										alt={item.title}
										width={72}
										height={72}
										className="w-[40px] h-[40px] rounded-full"
										objectFit="cover"
									/>
									<Image
										src={item.img[1]}
										alt={item.title}
										width={72}
										height={72}
										className="w-[60px] h-[60px] rounded-full ml-[-10px] z-[100]"
										objectFit="cover"
									/>
									<Image
										src={item.img[2]}
										alt={item.title}
										width={72}
										height={72}
										className="w-[40px] h-[40px] rounded-full ml-[-10px]"
										objectFit="cover"
									/>
								</div>
								<p className="mt-[5px]">
									{item.title}
								</p>
							</Link>
						))
					}
				</div>

			</div>

			<div className="mt-[20px]">
				<h1 className="text-xl font-bold">Browse all</h1>

				<div className="grid grid-cols-3 gap-[10px] mt-[10px]">
					{
						navBarContents.map((item, index) => (
							<Link key={index} className="block flex-1 p-[8px] bg-slate-900 rounded-[10px] text-center" href={item.href}>
								<div className="flex justify-center items-center">
									<Image
										src={popularCategories[2].img[0]}
										alt={item.title}
										width={72}
										height={72}
										className="w-[40px] h-[40px] rounded-full"
										objectFit="cover"
									/>
									<Image
										src={popularCategories[2].img[1]}
										alt={item.title}
										width={72}
										height={72}
										className="w-[60px] h-[60px] rounded-full ml-[-10px] z-[100]"
										objectFit="cover"
									/>
									<Image
										src={popularCategories[2].img[2]}
										alt={item.title}
										width={72}
										height={72}
										className="w-[40px] h-[40px] rounded-full ml-[-10px]"
										objectFit="cover"
									/>
								</div>
								<p className="mt-[5px]">
									{item.title}
								</p>
							</Link>
						))
					}
				</div>

			</div>

		</div>
	)
}

export default SearchCont;