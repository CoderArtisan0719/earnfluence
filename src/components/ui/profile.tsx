import Image from "next/image"

interface ProfieInterface {
    img: string,
    name: string,
    role: string 
}

const Profile = ({
    img, name, role
} : ProfieInterface) => {
    return (
        <div className="flex justify-start items-center gap-[10px]">
            <Image 
                src={img}
                alt={name}
                width={56}
                height={56}
                className="rounded-full"
            />

            <div>
                <p className="font-bold">{name}</p>
                <p className="">{role}</p>
            </div>
        </div>
    )
}

export default Profile