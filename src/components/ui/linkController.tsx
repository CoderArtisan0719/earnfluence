'use client'
import Link from "next/link";
import { LinkType } from "@/app/shoenice/page"
import { FaAngleLeft } from "react-icons/fa6";
import React from "react";
import { useParams } from "next/navigation";


interface LinkControllerProps {
    links: LinkType[]
}

const LinkController = ({ links }: LinkControllerProps) => {

    const params = useParams();

    return (
        <div className="flex items-center justify-start text-[#817A8A] text-[18px] mb-[20px]">
            <Link href={"#"}><FaAngleLeft /></Link>
            {
                links.map((link, index) => (
                    <React.Fragment>
                        <Link key={index} href={link.url} className={`mx-2 underline`}>{link.name}</Link>
                        <span>/</span>
                    </React.Fragment>
                ))
            }
            <React.Fragment>
                <Link key={links.length} href={'#'} className={`mx-2 ${"text-white"} capitalize`}>{params.id}</Link>
            </React.Fragment>
        </div>
    )
}

export default LinkController