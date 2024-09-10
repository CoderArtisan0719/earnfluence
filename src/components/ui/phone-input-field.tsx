// components/PhoneInputField.tsx
import React from 'react';
import PhoneInput from "react-phone-input-2";
import FormField from './form-field';

interface PhoneInputFieldProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const PhoneInputField: React.FC<PhoneInputFieldProps> = ({
  value,
  onChange,
  error
}) => (
  <FormField label="Phone number" error={error}>
    <PhoneInput
      country={'us'}
      value={value}
      onChange={onChange}
      inputClass="!w-full !pl-16 py-5 !bg-transparent !border !border-blue-300 !border-opacity-20 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
      containerClass="!w-full bg-transparent "
      buttonClass="!px-1 !bg-transparent !border-r !border-blue-300 !border-opacity-20 !focus:bg-black"
      dropdownClass="text-white !bg-black"
    />
  </FormField>
);

export default PhoneInputField;
