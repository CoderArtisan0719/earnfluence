import React from 'react';
import FormField from './form-field';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Option {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  options: Option[];
  onValueChange: (value: string | number) => void;
  placeholder: string;
  error?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, options, onValueChange, placeholder, error }) => (
  <FormField label={label} error={error}>
    <Select onValueChange={onValueChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option, index) => (
            <SelectItem key={index} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  </FormField>
);

export default SelectField;
