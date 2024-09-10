import React from 'react';
import { Label } from "@/components/ui/label";

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  infoText?: string;
  error?: any
}

const FormField: React.FC<FormFieldProps> = ({ label, children, infoText, error }) => (
  <div className="my-4 relative">
    <Label className="text-white text-md font-medium flex flex-col mb-2">
      {label}
      {infoText && <span className="text-sm text-gray-400">{infoText}</span>}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </Label>
    {children}
  </div>
);

export default FormField;
