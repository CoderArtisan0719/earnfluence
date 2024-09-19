interface AboutOneProps {
    name: string,
    desc: string,
    date: string,
    links: {
        name: string,
        url: string
    }[]
}

const AboutOne = (person: AboutOneProps) => {
    return (
        <div className="rounded-[20px] bg-[#201E23] overflow-hidden mt-[5px] p-[24px]">
            <h1 className="text-xl font-bold">More About {person.name}</h1>
            <p className="text-[1.9xl] mt-[20px] font-[600]">{person.desc}</p>

            <p className="mt-[20px]"><span className="text-[#817A8A]">Joined Cameo: </span>{person.date}</p>

            <div className="flex justify-start items-center gap-[20px] mt-[20px]">
                {
                    person.links.map((item, index) => (
                        <a href={item.url} key={index} className="rounded-full px-[15px] py-[8px] border border-opacity-[0.16]">{item.name}</a>
                    ))
                }
            </div>
        </div>
    )
}

export default AboutOne