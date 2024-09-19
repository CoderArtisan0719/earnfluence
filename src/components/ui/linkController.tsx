import Link from "next/link";
import { LinkType } from "@/app/shoenice/page"
import { FaAngleLeft } from "react-icons/fa6";
import React from "react";


interface LinkControllerProps {
    links: LinkType[]
}

const LinkController = ({links}: LinkControllerProps) => {
    return (
        <div className="flex items-center justify-start text-[#817A8A] text-[18px] mb-[20px]">
            <Link href={"#"}><FaAngleLeft /></Link>
            {
                links.map((link, index) => (
                    <React.Fragment>
                        <Link key={index} href={link.url} className={`mx-2 ${index !== links.length - 1 ? "underline" : "text-white" }`}>{link.name}</Link>
                        {
                            index !== links.length - 1 && <span>/</span>
                        }
                    </React.Fragment>
                ))
            }
        </div>
    )
}

export default LinkController