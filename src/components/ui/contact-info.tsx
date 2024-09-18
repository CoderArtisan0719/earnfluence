import React from "react";
import Image from "next/image";
import GooglePay from "@/icons/google-pay";
import ContactInfoData from "@/data/contact-info";
import Link from "next/link";
import { IconBrandInstagram, IconBrandTiktok, IconBrandTwitter, IconBrandFacebook, IconMail } from "@tabler/icons-react"

const ContactInfo = () => {
  return (
    <div className="flex-1 max-w-[640px]" >
      <div className="flex w-full">
        {
          ContactInfoData.map((c, index) => 
            <div className="w-1/5" key={index}>
              <h2 className="text-md font-bold mb-4">{ c.title }</h2>
              <ul className="flex flex-col gap-2 text-[#f1f2f3] font-medium">
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
      <div className="w-full pt-4 flex justify-between flex-wrap gap-[10px] items-center">
        <Image
          src="https://apple-resources.s3.amazonaws.com/media-badges/download-on-the-app-store/black/en-us.svg"
          alt="Macbook mockup from Aceternity UI"
          width={150}  
          height={150}
          className="transform transition-transform duration-300 group-hover:scale-110"
        />
        <div className="border border-white flex items-center justify-center rounded-lg px-2 w-[150px] h-[50px] overflow-hidden">
          <a href="#" className="h-full">
            <GooglePay />
          </a>
        </div>
        <IconBrandInstagram
          width={50}
          height={50}
          color="white"
          className="p-3 rounded-full border border-gray-100" />
        <IconBrandTiktok
          width={50}
          height={50}
          color="white"
          className="p-3 rounded-full border border-gray-100" />
        <IconBrandTwitter
          width={50}
          height={50}
          color="white"
          className="p-3 rounded-full border border-gray-100" />
        <IconBrandFacebook
          width={50}
          height={50}
          color="white"
          className="p-3 rounded-full border border-gray-100" />
        <IconMail
          width={50}
          height={50}
          color="white"
          className="p-3 rounded-full border border-gray-100" />
      </div>
    </div>
  )
};

export default ContactInfo;
