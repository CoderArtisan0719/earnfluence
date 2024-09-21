'use client'
import { useEffect, useState } from "react";
import RequiredInput from "../input/requiredInput";
import { Damion } from 'next/font/google'
import PhoneInputComponent from "../input/phoneInput";
import DateInputFull from "../input/dateInputFull";
import Link from "next/link";


const damion = Damion({ subsets: ['latin'], weight: "400" })
const BookPayment = () => {

    const [useremail, setUsermail] = useState<string>("");
    const [isNext, setIsNext] = useState<boolean>(false);
    const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
    const [isSubmited, setIsSubmited] = useState<boolean>(false);
    const [birth, setBirth] = useState<string>("");

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    useEffect(() => {
        setIsValidEmail(validateEmail(useremail));
    }, [useremail])

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmited(true);
        if (validateEmail(useremail)) {
            setIsNext(true);
        }
    }

    return (
        <div>
            <form className="rounded-[20px] bg-[#201E23] overflow-y-auto mt-[20px] p-[24px] text-[#f8fafc]">
                <h1 className="text-[25px] font-bold">Review and pay</h1>

                <div className="">
                    <p className="font-bold">Email address</p>
                    <p className="">Your order confirmation will be sent to this email</p>
                </div>
                <div className="w-full relative">
                    <RequiredInput
                        value={useremail}
                        setValue={setUsermail}
                        placeholder="you@example.com"
                        required={false}
                    />
                    <button className={`absolute text-[#F2F1F3] bg-[#8036E0] rounded-full py-[6px] px-[12px] top-[20px] right-[15px] cursor-pointer ${!useremail && "opacity-40"}`} onClick={handleSubmit}>Submit</button>
                    {
                        (isSubmited && !isValidEmail) && <p className="text-red-400 mt-[10px]">Invalid</p>
                    }
                </div>
                {
                    isNext &&
                    <div className="mt-[20px]">
                        <div className="flex items-center justify-start gap-[15px]">
                            <input type="checkbox" className="w-[20px] h-[20px] accent-[#8036E0]" id="input_1" />
                            <label className="font-bold" htmlFor="input_1">Send me the latest Cameo news and special offers</label>
                        </div>

                        <div className="mt-[20px]">
                            <h2 className="font-bold">What's the name of your fantasy league? (optional)</h2>
                            <p className="mt-[2px]">Your completed video will be sent to this number</p>
                            <PhoneInputComponent />
                        </div>
                        <p className="text-[#bfbabc] mt-[20px]">
                            By submitting this form, you agree to receive recurring automated promotional and personalized marketing text messages (e.g. cart reminders) from Cameo at the cell number used when signing up. Consent is not a condition of any purchase. Reply HELP for help and STOP to cancel. Msg frequency varies. Msg & data rates may apply. View Terms and Privacy.
                        </p>

                        <div className="mt-[20px]">
                            <h2 className="font-bold">Date of birth</h2>
                            <DateInputFull
                                value={birth}
                                setValue={setBirth}
                            />

                            <p className="text-[#bfbabc] mt-[20px]">
                                By entering your email and birthday, you are creating a Cameo account with the information above and agree to Cameo's Terms of Service, including Additional Terms, and Privacy Policy
                            </p>
                        </div>
                    </div>
                }
            </form>

            <Link className="mt-[10px] flex justify-center items-center w-full py-[16px] px-[32px] rounded-full bg-[#9659E5] gap-[10px] opacity-40" onClick={handleSubmit} href={"#"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <p className="font-bold">Book now</p>
            </Link>
        </div>
    )
}
export default BookPayment;