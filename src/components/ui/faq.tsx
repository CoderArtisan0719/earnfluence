import { useState } from "react";

const Faq = () => {

    const [selFlg, setSelFlg] = useState(-1);

    const faqs = [
        {
            q: "How can I check the status of my personalized Cameo Video?",
            a: "You can check the status of your Cameo request through the link provided in your confirmation email."
        },
        {
            q: "How can I check the status of my personalized Cameo Video?",
            a: "You can check the status of your Cameo request through the link provided in your confirmation email."
        },
        {
            q: "How can I check the status of my personalized Cameo Video?",
            a: "You can check the status of your Cameo request through the link provided in your confirmation email."
        },

        {
            q: "How can I check the status of my personalized Cameo Video?",
            a: "You can check the status of your Cameo request through the link provided in your confirmation email."
        },
        {
            q: "How can I check the status of my personalized Cameo Video?",
            a: "You can check the status of your Cameo request through the link provided in your confirmation email."
        },
        {
            q: "How can I check the status of my personalized Cameo Video?",
            a: "You can check the status of your Cameo request through the link provided in your confirmation email."
        },
        {
            q: "How can I check the status of my personalized Cameo Video?",
            a: "You can check the status of your Cameo request through the link provided in your confirmation email."
        },
        {
            q: "How can I check the status of my personalized Cameo Video?",
            a: "You can check the status of your Cameo request through the link provided in your confirmation email."
        },
    ]

    return (
        <div className="flex justify-center mt-[100px]">
            <div className="">
                <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
                <div className="w-[800px] mt-[20px]">
                    {
                        faqs.map((item, index) => (
                            <div key={index} className="rounded-[20px] p-[32px] bg-[#323035] mb-[30px] cursor-pointer" onClick={() => {
                                if (index === selFlg) setSelFlg(-1)
                                else setSelFlg(index)
                            }}>
                                <div className="flex items-between justify-between">
                                    <p className="font-bold text-[20px]">{item.q}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" width="20" color="#F2F1F3"><path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd"></path></svg>
                                </div>

                                {
                                    index === selFlg && (
                                        <p className="mt-[20px] opacity-80">
                                            {item.a}
                                        </p>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Faq;