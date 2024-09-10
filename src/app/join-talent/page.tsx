"use client";

import React from "react";
import Header from "@/components/ui/header";
import { Separator } from "@/components/ui/separator";
import FooterSection from "@/components/ui/footer-section";
import Image from "next/image";
import TalentForm from "@/components/ui/talent-form";
import { IconUpload, IconUser, IconVideo, IconSparkles } from "@tabler/icons-react";

interface EasyStepProp {
  icon: any;
  title: string;
  description: string;
}

const HeaderSection = () => (
  <div>
    <Header className='bg-black text-center'/>
    <div className="flex flex-col items-center justify-center mt-12">
      <div className="max-w-[620px] text-center">
        <h1 className="text-6xl font-medium">Get paid to connect with <span className="text-purple-400">fans</span></h1>
        <p className="mt-6 mb-8 text-gray-300 text-2xl">Record personalized videos from your phone and start earning.</p>
      </div>
    </div>
  </div>
);

const TalentImage = () => (
  <div className="relative w-full flex justify-center pt-[33%] mx-auto">
    <Image
      src="https://www.cameo.com/cdn-cgi/image/fit=cover,format=auto,width=1200,height=390/https://cdn.cameo.com/resizer/92552ae9-4564-415b-93b5-42d7c3b4e454.png"
      alt="talent"
      layout="fill"
      objectFit="cover"
    />
  </div>
);

const JoinAsTalent = () => (
  <div className="max-w-[512px] w-full">
    <h2 className="text-4xl font-medium text-center">Join as talent</h2>
    <TalentForm />
  </div>
);

const JoinAsTalentBody = () => (
  <div className="flex flex-col items-center">
    <TalentImage />
    <JoinAsTalent />
    <StartEasySection />
  </div>
)

const EasyStep:React.FC<EasyStepProp> = ({ icon, title, description }) => (
  <div className="px-4 py-6 flex flex-col gap-4 rounded-lg bg-zinc-800">
    {icon}
    <h3 className="text-4xl">{title}</h3>
    <p className="text-gray-300 text-lg">{description}</p>
  </div>
);

const StartEasySection = () => (
  <div className="px-28 mt-8 mb-32">
    <h2 className="text-center text-4xl">Getting started is easy</h2>
    <p className="mt-2 mb-8 text-xl font-medium text-center">Set up your Cameo account and start connecting with fans in minutes.</p>
    <div className="grid grid-cols-2 gap-8">
      <EasyStep icon={<IconUser width={36} height={36} />} title="Get verified" description="Download the Cameo app to complete account set up. We’ll verify your identity and then you’ll be ready to shine." />
      <EasyStep icon={<IconUpload width={36} height={36} />} title="Share your profile" description="Add your Cameo profile link to your social media bio and let fans know you’re ready for requests." />
      <EasyStep icon={<IconVideo width={36} height={36} />} title="Record and earn" description="Fulfill fan requests on your schedule and cash out daily." />
      <EasyStep icon={<IconSparkles width={36} height={36} />} title="Feel the magic" description="Deepen connections with fans, grow your brand, and watch the magic unfold." />
    </div>
  </div>
);

const JoinTalent = () => (
  <React.Fragment>
    <HeaderSection />
    <JoinAsTalentBody />
    <Separator className="bg-gray-500 bg-opacity-70" />
    <FooterSection />
  </React.Fragment>
);

export default JoinTalent;
