"use client";

import React, { useState } from "react";
import { Input } from "./input";
import SocialButton from "./social-button";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { api } from "../../../convex/_generated/api";
import { fetchMutation } from "convex/nextjs";
import { useAuth } from "@/app/provider/AuthContext";

const SignInForm: React.FC = () => {
  const [email, setEmail] = useState('');
  
  const router = useRouter();
  const { login } = useAuth();

  const handleSocialLogin = (platform: string) => {
  };

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await fetchMutation(api.user.signIn, { email });

    if (result) {
      const userData = {
        dob: result.dob,
        email: result.email,
        id: result._id,
        phone: result.phone,
      }

      login(userData);

      router.push('/')

    } else {
      router.push('/sign-up')

    }
  };

  return (
    <div className="flex justify-center">
      <form className="max-w-[450px] mb-16" onSubmit={handleSignin}>
        <h1 className="text-3xl font-medium text-white mb-8">Log in or sign up</h1>
        <div className="border border-transparent border-b-gray-600 pb-6">
          <label htmlFor="email" className="text-white text-md font-medium">
            Your email
          </label>
          <Input
            type="email"
            placeholder="you@example.com"
            className="py-5 mt-2"
            id="email"
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-gray-300 text-center pt-2 pb-4 text-sm">
            By continuing you agree to Cameo's{" "}
            <Link
              href="/terms"
              passHref
              className="text-white font-medium underline hover:text-gray-300 cursor-pointer"
            >
              Terms of Service
            </Link>
            , including{" "}
            <Link
              href="/additional-terms"
              passHref
              className="text-white font-medium underline hover:text-gray-300 cursor-pointer"
            >
              Additional Terms
            </Link>
            , and{" "}
            <Link
              href="/privacy-policy"
              passHref
              className="text-white font-medium underline hover:text-gray-300 cursor-pointer"
            >
              Privacy Policy
            </Link>
            .
          </p>
          <button
            type="submit"
            className="px-12 py-4 rounded-full w-full bg-violet-800 font-medium text-white tracking-widest uppercase transform hover:bg-violet-400 transition-colors duration-200"
          >
            Continue
          </button>
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <SocialButton
            text="Login with Facebook"
            variant="facebook"
            onClick={() => handleSocialLogin("facebook")}
          />
          <SocialButton
            text="Continue with Apple"
            variant="apple"
            onClick={() => handleSocialLogin("apple")}
          />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

