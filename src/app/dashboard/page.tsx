'use client';
import * as React from "react"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import crypto from 'crypto';
import Header from "@/components/ui/header"
import AvatarEditor from "@/components/ui/avatarEditor";
import PhoneInput from 'react-phone-input-2';

import 'react-phone-input-2/lib/style.css';
import Link from "next/link";
import { useMutation } from 'convex/react';

import { api } from '../../../convex/_generated/api';
import type { Id } from '../../../convex/_generated/dataModel';
import { fetchMutation } from "convex/nextjs";
import { toast } from "react-toastify";

export const getGravatarUrl = (email: string) => {
  const trimmedEmail = email.trim().toLowerCase();
  const hash = crypto.createHash('md5').update(trimmedEmail).digest('hex');
  return `https://www.gravatar.com/avatar/${hash}`;
};

const Page = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    name: "",
    username: "",
    phone: "",
    bio: "",
    twitter: "",
  });
  useEffect(() => {
    const userInfo = localStorage.getItem('user');
    if (!userInfo) router.push('/');
    else {
      const parsedUserInfo = JSON.parse(userInfo);
      console.log(parsedUserInfo);
      setUser({...user, ...parsedUserInfo});
    }
  }, []);

  useEffect(() => {
    console.log("user: ", user)
  }, [user])

  const handleChange = (value: string, country: any) => {
    setUser({ ...user, phone: value })
  };

  const handleSubmit = async () => {
    const data = await fetchMutation(api.user.updateInfo, {
      userId: user._id as Id<"users">,
      email: user.email,
      name: user.name,
      username: user.username,
      phone: user.phone,
      bio: user.bio,
      twitter: user.twitter,
		});
    localStorage.setItem('user', JSON.stringify(data));
    toast("Updated sucessfully!")
  }


  return (
    <React.Fragment>
      <div className="relative z-50 bg-black max-w-[1680px] m-auto">
        <div className="px-12">
          <Header className="bg-black" />
          <AvatarEditor />

          <div className="w-[600px] m-auto mt-[20px] text-[18px]">
            <h1 className="text-xl font-bold">Your name</h1>
            <input
              className="rounded-[10px] p-[15px] w-full border border-gray-600 mt-[10px]"
              value={user.name ? user.name : ""}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>

          <div className="w-[600px] m-auto mt-[20px] text-[18px]">
            <h1 className="text-xl font-bold">Your email</h1>
            <input
              className="rounded-[10px] p-[15px] w-full border border-gray-600 mt-[10px]"
              value={user.email ? user.email : ""}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>

          <div className="w-[600px] m-auto mt-[20px] text-[18px]">
            <h1 className="text-xl font-bold">Your bio</h1>
            <textarea
              className="rounded-[10px] h-[200px] p-[15px] w-full border border-gray-600 mt-[10px]"
              value={user.bio ? user.bio : ""}
              onChange={(e) => setUser({ ...user, bio: e.target.value })}
            />
          </div>

          <div className="w-[600px] m-auto mt-[20px] text-[18px]">
            <h1 className="text-xl font-bold">Your username</h1>
            <input
              className="rounded-[10px] p-[15px] w-full border border-gray-600 mt-[10px]"
              value={user.username ? user.username : ""}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>

          <div className="w-[600px] m-auto mt-[20px] text-[18px]">
            <h1 className="text-xl font-bold">Your twitter</h1>
            <input
              className="rounded-[10px] p-[15px] w-full border border-gray-600 mt-[10px]"
              value={user.twitter ? user.twitter : ""}
              onChange={(e) => setUser({ ...user, twitter: e.target.value })}
            />
          </div>

          <div className="w-[600px] m-auto mt-[20px] text-[18px] flex items-start justify-start gap-[5px]">
            <input type="checkbox" id="keep_mp" className="w-[24px] h-[24px] rounded-[3px]" />
            <label htmlFor="keep_mp" className="text-2xl">Keep me up-to-date on exclusive Cameo offers, updates and more!</label>
          </div>

          <div className="w-[600px] m-auto mt-[20px] text-[18px]">
            <PhoneInput
              country={'us'}
              value={user.phone ? user.phone : ""}
              onChange={handleChange}
              inputStyle={{
                width: '100%',
                height: '50px',
                fontSize: '16px',
                padding: "20px",
                paddingLeft: '48px',
                backgroundColor: '#121212',
                borderColor: "#4B5563",
              }}
              buttonStyle={{
                backgroundColor: 'transparent',
                border: 'none',
                position: 'absolute',
                left: '0',
                top: '0',
                bottom: '0',
              }}
              dropdownStyle={{
                width: '300px',
              }}
            />
          </div>

          <div className="w-[600px] m-auto mt-[20px] text-[18px] text-gray-300">
            By submitting this form, you agree to receive recurring automated promotional and personalized marketing text messages from Cameo at the cell number used when signing up. Consent is not a condition of any purchase. Reply HELP for help and STOP to cancel. Msg frequency varies. Msg & data rates may apply. View 
              <Link href={"#"} className="underline">Terms</Link> and <Link href={"#"} className="underline">Privacy</Link>.
          </div>

          <button className="block mt-[20px] w-[600px] m-auto rounded-full p-[15px] bg-[#9659E5] text-xl font-bold" onClick={handleSubmit}>Save changes</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Page;