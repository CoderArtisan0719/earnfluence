import React from "react";
import Header from "@/components/ui/header";
import FooterSection from "@/components/ui/footer-section";
import { Separator } from "@/components/ui/separator";
import SignInForm from "@/components/ui/sign-in";

const SignIn = () => {
  return (
    <div>
      <Header className='bg-black' />
      <SignInForm />
      <Separator className="bg-gray-500 bg-opacity-70" />
      <FooterSection />
    </div>
  )
};

export default SignIn;
