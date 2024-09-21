'use client'

import { useState } from "react";

interface RequiredInputProps {
    placeholder?: string;
    value: string | number;
    setValue: (value: string | number) => void,
    required?: boolean;
    type?: string;
}
const RequiredInput = ({
    placeholder,
    value,
    setValue,
    required = true,
    type="text"
}:RequiredInputProps) => {

    const [firstChanged, setFirstChanged] = useState<boolean>(false);

    return (
        <div>
            <input className={`w-full bg-transparent border border-[#3f3b45] rounded-[8px] p-[16px] mt-[10px] ${(required && firstChanged && !value) && "border-red-400"}`} value={value} onChange={(e) => {
                setValue(e.target.value);
                setFirstChanged(true);
            }} placeholder={placeholder} type={type} />
            {
                required && <p className="text-red-400">{(firstChanged && !value) && "Required" }</p>
            }
        </div>
    )
}

export default RequiredInput