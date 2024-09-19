import Link from "next/link"
const WhatTOChat = () => {
    return (
        <div className="rounded-[20px] bg-[#201E23] overflow-hidden mt-[5px] p-[24px]">
            <div className="flex justify-center items-center gap-[10px]">
                <h1 className="text-2xl font-bold">What to chat?</h1>
                <span role="img" aria-label="dialog">💬</span>
            </div>
            <Link className="block w-full rounded-full p-[12px] border border-[#F2F1F399] text-center font-bold mt-[20px]" href={"#"}>Send a message $2.99</Link>
        </div>
    )
}

export default WhatTOChat