import React from "react";
import Image from "next/image";
import GooglePay from "@/icons/google-pay";
import ContactInfoData from "@/data/contact-info";
import Link from "next/link";
import { IconBrandInstagram, IconBrandTiktok, IconBrandTwitter, IconBrandFacebook, IconMail } from "@tabler/icons-react"

const ContactInfo = () => {
  return (
    <div className="flex-1" >
      <div className="flex w-full">
        {
          ContactInfoData.map((c, index) => 
            <div className="w-1/5" key={index}>
              <h2 className="text-md font-bold mb-4">{ c.title }</h2>
              <ul className="flex flex-col gap-2 text-violet-100 font-medium">
                {
                  c.data.map((item, _i) => 
                    <Link
                      href={item.url}
                      className="cursor-pointer"
                      key={`${index}_${_i}`}
                    >
                      {item.content}
                    </Link>
                  )
                }
              </ul>
            </div>
          )
        }
      </div>
      <div className="w-full pt-4 flex justify-between">
        <Image
          src="https://apple-resources.s3.amazonaws.com/media-badges/download-on-the-app-store/black/en-us.svg"
          alt="Macbook mockup from Aceternity UI"
          width={180}  
          height={180}
          className="transform transition-transform duration-300 group-hover:scale-110"
        />
        <div className="border border-white flex items-center justify-center rounded-lg px-2 py-0">
          <GooglePay />
        </div>
        <IconBrandInstagram
          width={60}
          height={60}
          color="white"
          className="p-3 rounded-full border border-gray-100" />
        <IconBrandTiktok
          width={60}
          height={60}
          color="white"
          className="p-3 rounded-full border border-gray-100" />
        <IconBrandTwitter
          width={60}
          height={60}
          color="white"
          className="p-3 rounded-full border border-gray-100" />
        <IconBrandFacebook
          width={60}
          height={60}
          color="white"
          className="p-3 rounded-full border border-gray-100" />
        <IconMail
          width={60}
          height={60}
          color="white"
          className="p-3 rounded-full border border-gray-100" />
      </div>
    </div>
  )
};

export default ContactInfo;
