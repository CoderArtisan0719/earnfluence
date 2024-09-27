'use client'
import React, { useEffect, useState } from "react"
import Header from "@/components/ui/header"
import Purchased from "@/components/ui/purchased";
import Saved from "@/components/ui/saved";

const Page = () => {

	const [flg1, setFlg1] = useState(false);

	return (
		<React.Fragment>
			<div className="relative z-50 bg-black max-w-[1680px] m-auto">
				<div className="px-12">
					<Header className="bg-black" />

					<div className="">
						<h1 className="text-3xl font-bold">Your Orders</h1>
						<div className="flex items-center justify-start gap-[10px] mt-[20px]">
							<button onClick={() => setFlg1(false)} className={`border border-gray-200 rounded-full py-[10px] px-[20px] ${!flg1 && 'bg-gray-600'}`}>Purchased</button>
							<button onClick={() => setFlg1(true)} className={`border border-gray-200 rounded-full py-[10px] px-[20px] ${flg1 && "bg-gray-600"}`}>Saved</button>
						</div>
					</div>
					{
						flg1 ? (
							<Saved />
						) : (
							<Purchased />
						)
					}
				</div>
			</div>
		</React.Fragment>
	)
}

export default Page;