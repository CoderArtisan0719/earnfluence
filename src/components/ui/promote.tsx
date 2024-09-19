import Link from "next/link"

const Promote = () => {
    return (
        <Link href="#" className="block rounded-[20px] bg-[#201E23] overflow-hidden mt-[5px] p-[24px] mb-[30px]"
            style={{backgroundImage: "url('https://shareable-assets.cameo.com/21ca4963-4edc-40a6-ab65-f337b6a910dc.png')", backgroundSize: "cover"}}
        >
            <div>
                <span className="bg-[#cda589] px-[16px] py-[8px] rounded-[12px] text-[30px]">
                    💼
                </span>
            </div>
            <div className="flex items-center justify-between mt-[30px]">
                <p className="text-[25px] font-[500]">Promote your business with Shoenice</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" width="24" height="24"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path></svg>
            </div>
        </Link>
    )
}

export default Promote