import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import Header from "@/components/ui/header"

const Page = () => {

    return (
        <React.Fragment>
            <div className="relative z-50 bg-black max-w-[1680px] m-auto">
                <div className="px-12">
                    <Header className="bg-black" />

                    <div className='flex flex-col items-center justify-center mt-[50px]'>
                        <div className='blur-[20px]'>
                            <Image
                                src={'https://cdn.cameo.com/static/assets/DMs_emptystate.svg'}
                                alt="inbox"
                                width={100}
                                height={100}
                                className="w-[288px] h-[244px]"
                            />
                        </div>
                        <h1 className='font-bold text-xl'>You don't have any messages.</h1>
                        <p className='mt-[10px] text-gray-400'>Get started by sending a DM or booking a personalized video</p>
                        <Link href={'/'} className='border border-gray-300 rounded-full py-[12px] px-[24px] mt-[20px]'>Browse celebrities</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Page;