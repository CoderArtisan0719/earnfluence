"use client";

import React, { useState } from "react";
import { Input } from "./input";
import { useRouter } from 'next/navigation'
import { Label } from "./label";
import { Checkbox } from "./checkbox";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import { fetchMutation, fetchQuery } from "convex/nextjs";
import { api } from "../../../convex/_generated/api";
import { useAuth } from "@/app/provider/AuthContext";

const SignUpForm: React.FC = () => {
  const router = useRouter();
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dobError, setDobError] = useState("");
  const [emailError, setEmailError] = useState("");

  const { login } = useAuth();

  const handleDobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); 
    if (value.length > 2 && value.length <= 4) {
        value = value.replace(/(\d{2})(\d+)/, '$1/$2');
    } else if (value.length > 4) {
        value = value.replace(/(\d{2})(\d{2})(\d+)/, '$1/$2/$3');
    }
    setDob(value);

    if (!/^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(19|20)\d{2}$/.test(value) && value.length === 10) {
        setDobError("Please enter a valid date in MM/DD/YYYY format.");
    } else {
        setDobError("");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
        setEmailError("Please enter a valid email address.");
    } else {
        setEmailError("");
    }
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || emailError) {
      setEmailError(email ? emailError : "Email is required.");
      return;
    }
  
    if (!dob || dobError) {
      setDobError(dob ? dobError : "Date of birth is required.");
      return;
    }
  
    try {
      const emailExists = await fetchQuery(api.user.checkEmailExists, { email });
      if (emailExists) {
        setEmailError("Email already registered.");
        return;
      }
  
      const result = await fetchMutation(api.user.signUp, { email, dob, phone });
      if (result) {
        const userData = {
          id: result,
          email: email,
          phone: phone,
          dob: dob
        };

        login(userData);
      };;

      router.push('/');
    } catch (err) {
      console.error('Error during user creation:', err);
    }
  };

  return (
    <div className="flex justify-center">
      <form className="max-w-[450px] my-12" onSubmit={handleSignup}>
        <h1 className="text-3xl font-medium text-white">Finish signing up</h1>
        <p className="text-gray-300 mt-2 mb-6">
          You'll need a free Cameo account in order to follow your favorite celebrities and get other Cameo news & special offers
        </p>
        <div className="pb-6">
          <label htmlFor="email" className="text-white text-md font-medium">
            Your email
          </label>
          <Input
            type="email"
            placeholder="you@example.com"
            className={`py-5 mt-2 ${emailError ? "border-red-500" : ""}`}
            id="email"
            aria-label="Email address"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <div className="text-red-500 text-sm mt-2">{emailError}</div>}
          <div className="mt-4 mb-6">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-md cursor-pointer">Email me the latest Cameo news and special offers</Label>
            </div>
          </div>
          <div className="mt-4 mb-6">
            <div className="flex flex-col space-y-4">
              <Label htmlFor="email" className="text-md">Phone number to sign up for texts (optional)</Label>
              <PhoneInput
                country={'us'}
                value={phone}
                onChange={(event) => setPhone(event)}
                inputClass="!w-full !pl-16 py-5 !bg-transparent !border !border-blue-300 !border-opacity-20 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                containerClass="!w-full bg-transparent "
                buttonClass="!px-1 !bg-transparent !border-r !border-blue-300 !border-opacity-20 !focus:bg-black"
                dropdownClass="text-white !bg-black"
              />
            </div>
          </div>
          <div className="mt-4 mb-6">
            <div className="flex items-start space-x-2">
              <Checkbox id="policy" className="mt-1" />
              <Label htmlFor="policy" className="text-sm text-gray-300 cursor-pointer">
                *By checking this box, you agree to recerve recurnng automated promouonal and personalized marketing text messages (mcludlng cart reminders) from Cameo at the cell number used when stgrung up. Consent is not a condition of any purchase. Reply HELP for help and STOP to cancel. Msg frequency varles. Msg & data rates may apply. View <Link href="/terms" className="underline">Terms</Link> and <Link href="/privacy-policy" className="underline">Privacy Policy</Link>.
              </Label>
              
            </div>
          </div>
          <div className="mt-4 mb-6">
            <div className="flex flex-col space-y-4">
                <Label htmlFor="email" className="text-md">Date of birth</Label>
                <Input
                    type="text"
                    placeholder="MM/DD/YYYY"
                    className={`py-5 mt-2 ${dobError ? "border-red-500" : ""}`}
                    id="dob"
                    aria-label="Date of birth"
                    value={dob}
                    onChange={handleDobChange}
                    maxLength={10}
                />
                {dobError && <div className="text-red-500 text-sm mt-2">{dobError}</div>}
            </div>
          </div>
          <p className="my-8 text-sm text-gray-300 font-light">
            By creating an account you agree to Cameo's <Link href="/terms" className="underline">Terms of service</Link>, including <Link href="/additional-terms" className="underline">Additional terms</Link>, and <Link href="/privacy-policy" className="underline">Privacy Policy</Link>.
          </p>
          <button
            type="submit"
            className="px-12 py-4 rounded-full w-full bg-violet-800 font-medium text-white tracking-widest uppercase transform hover:bg-violet-400 transition-colors duration-200"
          >
            Sign up
          </button>
        </div>
        <p className="text-gray-300 text-center">Already have an account?{ ' ' }<Link href="/sign-in" className="font-md underline text-white">Log in</Link></p>
      </form>
    </div>
  );
};

export default SignUpForm;
